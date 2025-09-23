'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';

interface PartnersSwiperProps {
  logos: string[];
}

export default function PartnersSwiper({ logos }: PartnersSwiperProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        allowTouchMove={false}
        className="partners-swiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex-shrink-0 flex h-[55px] px-6 flex-col justify-center items-center gap-[10px] rounded-[100px] border-2 border-[#D5D7DA]">
              <Image
                src={logo}
                alt={`Partner Company ${index + 1}`}
                width={200}
                height={31}
                className="w-auto h-[31px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
