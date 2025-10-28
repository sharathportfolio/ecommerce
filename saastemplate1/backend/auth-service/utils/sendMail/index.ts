import nodemailer from "nodemailer";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Render an EJS email template

const renderEmailTemplate = async (
  templateName: string,
  data: Record<string, any>
) => {
  const templatePath = path.join(
    process.cwd(),
    "utils",
    "email-templates",
    `${templateName}.ejs`
  );
  return ejs.renderFile(templatePath, data);
};

// send an email using nodemailer

export const sendEmail = async (
  to: string,
  subject: string,
  templateNmae: string,
  data: Record<string, any>
) => {
  try {
    const html = await renderEmailTemplate(templateNmae, data);
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}`,
      to,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.log("error sending email", error);
    return false;
  }
};
