'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';

type PartnerLogo = string | { src: string; href?: string; alt?: string };

interface PartnersSwiperProps {
  logos: PartnerLogo[];
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
        {logos.map((logo, index) => {
          const src = typeof logo === 'string' ? logo : logo.src;
          const href = typeof logo === 'string' ? undefined : logo.href;
          const alt = typeof logo === 'string' ? `Partner Company ${index + 1}` : (logo.alt || `Partner Company ${index + 1}`);
          return (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex-shrink-0 flex w-[200px] h-[55px] px-6 flex-col justify-center items-center gap-[10px] rounded-[100px] border-2 border-[#D5D7DA]">
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex">
                    <Image src={src} alt={alt} width={200} height={31} className="w-[200px] h-[31px] object-contain" />
                  </a>
                ) : (
                  <Image src={src} alt={alt} width={200} height={31} className="w-[200px] h-[31px] object-contain" />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
