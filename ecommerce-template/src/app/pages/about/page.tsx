'use client';
import React from 'react';
import Image from 'next/image';
// import TopNavOne from '@/components/Header/TopNav/TopNavOne'
// import MenuOne from '@/components/Header/Menu/MenuOne'
// import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Instagram1 from '@/components/Instagram/Instagram1';
import Footer from '@/components/Footer/Footer';
import Newsletter1 from '@/components/Newsletter/Newsletter1';
import Benefit1 from '@/components/Benefit/Benefit1';

const AboutUs = () => {
  return (
    <>
      <section className="bg-white">
        {/* <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='About Us' subHeading='About Us' />
            </div> */}
        <div className="about md:pt-20 pt-10">
          <div className="about-us-block">
            <div className="flex items-center justify-center">
              <div className="md:w-10/12 w-11/12">
                {' '}
                <div className="text flex items-center justify-center">
                  <div className="content md:w-5/6 w-full">
                    <div className="heading3 text-center text-black font-bold text-3xl">
                      I{String.raw`'m`} obsessed with the dress Pippa Middleton
                      wore to her brother{String.raw`'s`} wedding.
                    </div>
                    <div className="body1 text-center md:mt-7 mt-5 text-black">
                      Kim Kardashian West needs no introduction. In the 14 years
                      since she first graced our screens in Keeping Up With The
                      Kardashians, she has built her KKW beauty empire, filmed
                      her show, wrapped her show, become a billionaire, studied
                      law, campaigned for the rights of death row inmates,
                      travelled the world to attend events such as Paris Fashion
                      Week, raised four children and launched her wildly
                      successful shapewear brand SKIMS.
                    </div>
                  </div>
                </div>
                <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                  <div className="bg-img">
                    <Image
                      src={'/images/other/about-us1.png'}
                      width={2000}
                      height={3000}
                      alt="bg-img"
                      className="w-full rounded-[30px]"
                    />
                  </div>
                  <div className="bg-img">
                    <Image
                      src={'/images/other/about-us2.png'}
                      width={2000}
                      height={3000}
                      alt="bg-img"
                      className="w-full rounded-[30px]"
                    />
                  </div>
                  <div className="bg-img">
                    <Image
                      src={'/images/other/about-us3.png'}
                      width={2000}
                      height={3000}
                      alt="bg-img"
                      className="w-full rounded-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Benefit1 props="md:pt-20 pt-10" />
        <Instagram1 />

        <Newsletter1 props="bg-[#d2ef9a] md:mt-20 mt-10" />
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
