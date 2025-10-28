import crypto from 'crypto';
import { ValidationError } from './error-handler/index.ts';
import redis from '../libs/redis/index.ts';
import { sendEmail } from './sendMail/index.ts';
import type { Request, Response, NextFunction } from 'express';
import prisma from '../libs/prisma/index.ts';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegistrationData = (
  data: any,
  userType: 'user' | 'seller'
) => {
  const { name, email, password, phone_number, country } = data;
  if (
    !name ||
    !email ||
    !password ||
    (userType === 'seller' && (!phone_number || !country))
  ) {
    throw new ValidationError('Missing required fields!');
  }
  if (!emailRegex.test(email)) {
    throw new ValidationError('Invalid email format');
  }
};

export const checkOtpRestrictions = async (
  email: string,
  next: NextFunction
) => {
  if (await redis.get(`otp_lock:${email}`)) {
    return next(
      new ValidationError(
        'Account locked due to multiple failed attemts ! Try after 30 minutes'
      )
    );
  }
  if (await redis.get(`otp_spam_lock:${email}`)) {
    return next(
      new ValidationError(
        'Too Many OTP requests! Please wait 1hour before requesting again'
      )
    );
  }
  if (await redis.get(`otp_cooldown:${email}`)) {
    return next(
      new ValidationError('Please wait 1minute before request a new OTP')
    );
  }
};

export const trackOtpRequest = async (email: string, next: NextFunction) => {
  const otpRequestKey = `otp_request_count:${email}`;
  let otpRequests = parseInt((await redis.get(otpRequestKey)) || '0');

  if (otpRequests >= 2) {
    await redis.set(`otp_spam_lock:${email}`, 'locked', 'EX', 3600); // lock for 1 hr
    return next(
      new ValidationError(
        'Too many OTP request. please wait for 1 hour before requesting again.'
      )
    );
  }
  await redis.set(otpRequestKey, otpRequests + 1, 'EX', 3600);
};

export const sendOtp = async (
  name: string,
  email: string,
  template: string
) => {
  const otp = crypto.randomInt(1000, 9999).toString();
  await sendEmail(email, 'verify your email', template, { name, otp });
  await redis.set(`otp:${email}`, otp, 'EX', 300);
  await redis.set(`otp_cooldown:${email}`, 'true', 'EX', 60);
};

export const verifyOtp = async (
  email: string,
  otp: string,
  next: NextFunction
) => {
  const storedOtp = await redis.get(`otp:${email}`);
  if (!storedOtp) {
    throw new ValidationError('Invalid or expired OTP');
  }
  const failedAttemptsKey = `otp_attempts:${email}`;
  const failedAttempts = parseInt((await redis.get(failedAttemptsKey)) || '0');
  if (storedOtp !== otp) {
    if (failedAttempts >= 2) {
      await redis.set(`otp_lock:${email}`, 'locked', 'EX', 1800); // lock for 30 min
      await redis.del(`otp:${email}`, failedAttemptsKey);
      throw new ValidationError(
        'Too many failed attempts. your account is locked for 30 minutes!'
      );
    }
    await redis.set(failedAttemptsKey, failedAttempts + 1, 'EX', 300);
    throw new ValidationError(
      `Incorrect OTP. ${2 - failedAttempts} attempts left`
    );
  }
  await redis.del(`otp:${email}`, failedAttemptsKey);
};

export const verifyForgotPasswordOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) throw new ValidationError('Email and OTP are required');
    await verifyOtp(email, otp, next);

    res
      .status(200)
      .json({ message: 'OTP verified. you can now reset your password' });
  } catch (error) {
    next(error);
  }
};

export const handleFogotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
  userType: 'user' | 'seller'
) => {
  try {
    const { email } = req.body;
    if (!email) throw new ValidationError('Email is required');

    // Find User/seller in db
    const user =
      userType === 'user' &&
      (await prisma.users.findUnique({ where: { email } }));
    if (!user) throw new ValidationError(`${userType} not found!`);

    // check otp restriction
    await checkOtpRestrictions(email, next);
    await trackOtpRequest(email, next);

    // generate otp and send email
    await sendOtp(email, user.name, 'forgot-password-user-mail');

    res
      .status(200)
      .json({ message: 'OTP sent to email. please verify your account' });
  } catch (error) {
    return next(error);
  }
};