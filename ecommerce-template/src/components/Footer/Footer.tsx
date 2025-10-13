import React from 'react';
import Link from 'next/link';
import { AiFillInstagram} from 'react-icons/ai';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
// import * as Icon from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
  return (
    <>
      <section id="footer" className="footer">
        <div className="bg-[#f7f7f7] px-8">
          <div
            id="footer-top"
            className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8"
          >
            <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
              <Link href={'/'} className="logo">
                <div className="heading4 text-black font-bold text-4xl">
                  S6K4
                </div>
              </Link>
              <div className="flex gap-3 mt-3">
                <div className="flex flex-col ">
                  <span className="text-button text-black font-bold">
                    Mail:
                  </span>
                  <span className="text-button mt-3 text-black font-bold">
                    Phone:
                  </span>
                  <span className="text-button mt-3 text-black font-bold">
                    Address:
                  </span>
                </div>
                <div className="flex flex-col ">
                  <span className="text-black">hi.avitex@gmail.com</span>
                  <span className="mt-3 text-black">1-333-345-6868</span>
                  <span className="mt-3 pt-px text-black">
                    549 Oak St.Crystal Lake, IL 60014
                  </span>
                </div>
              </div>
            </div>
            <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
              <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                <div className="item flex flex-col basis-1/3 ">
                  <div className="font-bold uppercase text-black pb-3">
                    Infomation
                  </div>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit text-black"
                    href={'/pages/contact'}
                  >
                    Contact us
                  </Link>

                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/my-account'}
                  >
                    My Account
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/order-tracking'}
                  >
                    Order & Returns
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/pages/faqs'}
                  >
                    FAQs
                  </Link>
                </div>
                <div className="item flex flex-col basis-1/3 ">
                  <div className="font-bold uppercase text-black pb-3">
                    Quick Shop
                  </div>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit text-black"
                    href={'/shop/breadcrumb1'}
                  >
                    Women
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/shop/breadcrumb1'}
                  >
                    Men
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/shop/breadcrumb1'}
                  >
                    Clothes
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/shop/breadcrumb1'}
                  >
                    Accessories
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/blog'}
                  >
                    Blog
                  </Link>
                </div>
                <div className="item flex flex-col basis-1/3 ">
                  <div className="font-bold uppercase text-black pb-3">
                    Customer Services
                  </div>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit text-black"
                    href={'/pages/faqs'}
                  >
                    Orders FAQs
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/pages/faqs'}
                  >
                    Shipping
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/pages/faqs'}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    className="caption1 has-line-before duration-300 w-fit pt-2 text-black"
                    href={'/order-tracking'}
                  >
                    Return & Refund
                  </Link>
                </div>
              </div>
              <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                <div className="font-bold uppercase text-black">Newletter</div>
                <div className="mt-3 text-black">
                  Sign up for our newsletter and get 10% off your first purchase
                </div>
                <div className="input-block w-full h-[52px] mt-4">
                  <form className="w-full h-full relative" action="post">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="bg-white w-full h-full pl-4 pr-14 rounded-xl border border-line placeholder:text-black/50"
                      required
                    />
                    <button className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                      <IoIosArrowRoundForward
                        size={26}
                        className="text-white"
                      />{' '}
                    </button>
                  </form>
                </div>
                <div className="list-social flex items-center gap-6 mt-4">
                  <Link href={'https://www.youtube.com/'} target="_blank">
                    <FaFacebook className="text-black" size={24} />
                  </Link>
                  <Link href={'https://www.facebook.com/'} target="_blank">
                    <AiFillInstagram className="text-black" size={26} />
                  </Link>
                  <Link href={'https://www.youtube.com/'} target="_blank">
                    <FaYoutube className="text-black" size={26} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            id="footer-bottom"
            className="text-black flex items-center justify-center py-3 border-t border-line border-black/10"
          >
            <p className="text-black text-md">
              ©2025 S6K4. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
