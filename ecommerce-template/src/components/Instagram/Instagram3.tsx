'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

const images = [
  { src: 'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-1.png', large: true },
  { src: 'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-2.png' },
  { src: 'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-3.png' },
  { src: 'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-4.png' },
  { src: 'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-5.png' },
  { src: 'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-1.png' },
  { src: 'https://s6k4-mumbai.s3.ap-south-1.amazonaws.com/ecommerce/components/instagram/instagram-img-2.png' },
]

const InstagramItem = ({ src, large }: { src: string; large?: boolean }) => (
  <Link
    href="https://www.instagram.com/"
    target="_blank"
    className={`relative block overflow-hidden group rounded-2xl ${
      large ? 'col-span-2 row-span-2' : ''
    }`}
  >
    {/* Image */}
    <Image
      src={src}
      width={3000}
      height={3000}
      alt="Instagram post"
      priority
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div
      className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
      transition-all duration-500 ease-in-out"
    >
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center  text-black hover:bg-black hover:text-white transition-colors duration-500">
        <FaInstagram className="text-2xl transition-colors duration-500" />
      </div>
    </div>
  </Link>
)

const Instagram = () => {
  return (
    <section className="md:pt-20 pt-10 flex items-center justify-center">
      <div className="container">
      <div className="heading">
          <h2 className="heading3 text-center text-3xl font-bold">Anvogue On Instagram</h2>
          <p className="text-center mt-3">#Anvougetheme</p>
        </div>
        {/* Grid */}
        <div className="list-instagram md:mt-10 mt-6 grid md:grid-cols-5 md:grid-rows-2 grid-cols-2 gap-2">
          {images.map((img, index) => (
            <InstagramItem key={index} src={img.src} large={img.large} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instagram
