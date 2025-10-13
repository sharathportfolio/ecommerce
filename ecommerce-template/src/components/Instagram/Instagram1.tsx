'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { FaInstagram } from 'react-icons/fa';

const Instagram = () => {
  const instagramImages = [
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-1.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-2.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-3.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-4.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-5.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-1.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-2.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-3.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-4.png',
    'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-5.png',
  ];

  return (
    <section className="md:pt-20 pt-10  flex items-center justify-center">
      <div className="container ">
        <div className="heading">
          <h2 className="heading3 text-center text-3xl font-bold text-black">Anvogue On Instagram</h2>
          <p className="text-center mt-3 text-black">#Anvougetheme</p>
        </div>

        <div className="list-instagram md:mt-10 mt-6">
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            breakpoints={{
              500: { slidesPerView: 2, spaceBetween: 16 },
              680: { slidesPerView: 3, spaceBetween: 16 },
              992: { slidesPerView: 4, spaceBetween: 16 },
              1200: { slidesPerView: 5, spaceBetween: 16 },
            }}
          >
            {/* ✅ Map over the image list */}
            {instagramImages.map((img, index) => (
              <SwiperSlide key={index}>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="group relative block rounded-[32px] overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={img}
                    width={300}
                    height={300}
                    alt={`Instagram ${index + 1}`}
                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Hover Icon */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 
                     transition-all duration-500 ease-in-out
                     w-12 h-12 flex items-center justify-center rounded-2xl 
                     bg-white text-black hover:bg-black hover:text-white"
                  >
                    <FaInstagram className="text-2xl" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
