"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ContentHeaderSectionProps {
  title: string;
  title2?: string;
  description: string;
  titleColor?: string;
  descriptionColor?: string;
}

export default function ContentHeaderSection({ 
  title, 
  title2,
  description, 
  titleColor = "text-[#0452D8]",
}: ContentHeaderSectionProps) {
  return (
    <section className="pt-[72px] xl:pb-2 xl:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center w-full max-w-[1194px] mx-auto`}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-[30px] lg:text-[60px] font-semibold text-center mb-9 font-plus-jakarta ${titleColor} leading-[38px] lg:leading-[72px] xl:tracking-[-1.2px]`}
          >
            {title}
            {title2 && <p className='text-[#181D27]'> {title2}</p>}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-[14px] lg:text-[18px] text-center font-plus-jakarta text-[#181D27] font-normal leading-[20px] lg:leading-[28px] w-full max-w-[1194px] mx-auto`}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
