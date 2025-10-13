'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { FaInstagram } from 'react-icons/fa';

const Instagram2 = () => {
  const images = [
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
    <div className="instagram-block md:pt-20 pt-10 ">
      <div className="flex items-center justify-center w-full">
        <div className="heading flex items-center justify-center flex-col">
          <h2 className="heading3 text-center text-3xl font-bold">Anvogue On Instagram</h2>
          <p className="text-center mt-3">#Anvougetheme</p>
        </div>
      </div>

      <div className="list-instagram md:mt-7 mt-4">
        <Swiper
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            500: { slidesPerView: 2 },
            680: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="group relative block overflow-hidden "
              >
                {/* Image */}
                <Image
                  src={img}
                  width={500}
                  height={500}
                  alt={`Instagram ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon (hidden by default, shows on hover) */}
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
  );
};

export default Instagram2;
