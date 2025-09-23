'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import { Navigation, EffectCreative } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';
import { Swiper as SwiperType } from 'swiper';
import LearnMore from '../LearnMore';

interface ShopProduct {
  id: number;
  title: string;
  description: string;
  logo: string;
  logoAlt: string;
}

interface ShopSwiperProps {
  swiperRef: React.RefObject<SwiperType | null>;
}

function ShopProductItem({ product, index }: { product: ShopProduct; index: number }) {
  return (
    <div
      className={`flex  flex-col items-end gap-3 p-3 rounded-[22px] bg-gray-50 shadow-none xl:shadow-[0_32px_64px_-12px_rgba(10,69,158,0.14)] xl:w-full w-[330px] xl:max-w-[388.333px] box-border border border-gray-200 h-[300px] xl:h-auto ${
        index % 2 === 0 ? 'xl:translate-y-22' : ''
      }`}
    >
      <div className="flex flex-col h-full justify-center items-start gap-4 p-6 rounded-2xl bg-gradient-to-tr from-blue-50 to-white self-stretch box-border outline outline-1 outline-gray-200">
        <h3 className="self-stretch font-['Plus_Jakarta_Sans'] font-semibold text-xl text-gray-900 leading-[30px]">
          {product.title}
        </h3>
        
        <p className="self-stretch text-gray-500 text-sm font-normal leading-5">
          {product.description}
        </p>
      </div>
      
      <div className="flex p-1.5 justify-between items-center self-stretch rounded-2xl bg-white box-border border border-gray-200">
        <div className="flex-1">
          <div className="relative h-12 flex items-center justify-start">
            <Image
              src={product.logo}
              alt={product.logoAlt}
              width={48}
              height={48}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
        
        <LearnMore text="Shop Now" />
      </div>
    </div>
  );
}

const shopProducts: ShopProduct[] = [
  {
    id: 1,
    title: "Blackpanda",
    description: "Blackpanda is Asia's leading local cyber incident response firm, dedicated to delivering world-class digital emergency response services to businesses in the region.",
    logo: "/svgs/panda48_48.svg",
    logoAlt: "Blackpanda Logo"
  },
  {
    id: 2,
    title: "Lenovo",
    description: "Lenovo is a global technology company that designs, develops, manufactures and markets innovative consumer and enterprise technology products and services.",
    logo: "/svgs/lenovo.svg",
    logoAlt: "Lenovo Logo"
  },
  {
    id: 3,
    title: "Aruba instant on",
    description: "Aruba Instant On delivers enterprise-grade WiFi that's simple to set up and manage, perfect for small businesses and remote work environments.",
    logo: "/svgs/arubar48_48.svg",
    logoAlt: "Aruba Logo"
  }
  ,
  {
    id: 4,
    title: "Ubiquiti",
    description: "UniFi is rethinking IT with industry-leading products for enterprise networking, security, and more unified in an incredible software interface",
    logo: "/svgs/Ubiquiti.svg",
    logoAlt: "Ubiquiti Logo"
  },
];

export default function SwiperDemo({ swiperRef }: ShopSwiperProps) {
  return (
    <div className="shop-swiper-container w-full md:max-w-[700px] xl:max-w-[1270px] mx-auto">
      <Swiper
        freeMode={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          
        }}
        grabCursor={true}
        effect={'creative'}
        modules={[Navigation, EffectCreative]}
        loop={true}
        slidesPerView={3}
        creativeEffect={{
          prev: {
            translate: ["100%", 0, -400],
            scale: 0.8,
            opacity: 0,
          },
          next: {
            translate: ['100%', 0, 0],
          },
          limitProgress: 3,
          progressMultiplier: 1.095,

        }}
        breakpoints={{
          320: { 
            slidesPerView: 2, 
          },
          768: { 
            slidesPerView: 2, 
            spaceBetween: 25
          },
          1280: { 
            slidesPerView: 3, 
            spaceBetween: 30
          } 
         
        }}
      >
        {shopProducts.map((product, index) => (
          <SwiperSlide key={product.id} className='h-full min-h-[290px] xl:min-h-[420px]'>
            <ShopProductItem product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
