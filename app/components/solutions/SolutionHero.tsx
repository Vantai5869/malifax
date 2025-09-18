'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroBackground from '../HeroBackground';
import Tag from '../Tag';
import Title from '../Title';

interface SolutionHeroProps {
  imageSrc: string;
  title: string;
  rightMaxWidth?: string;
  rightMinWidth?: string;
}

export default function SolutionHero({ imageSrc, title, rightMaxWidth = "max-w-[618px]", rightMinWidth = "min-w-[239px]" }: SolutionHeroProps) {
  return (
    <HeroBackground>
      <div className="flex justify-center flex-1 min-h-0 relative z-10">
        <div className="flex flex-col items-center justify-center xl:flex-row xl:items-center justify-center gap-8 xl:gap-16 max-w-7xl mx-auto px-6 py-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-1 lg:order-1 will-change-transform"
          >
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={500}
              priority
              sizes="(min-width: 1280px) 500px, 239px"
              className="w-full max-w-[239px] xl:w-auto xl:h-auto xl:max-w-[500px] object-contain"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`flex  flex-col items-start gap-4 order-2 lg:order-2 ${rightMinWidth} xl:min-w-[426px] ${rightMaxWidth} will-change-transform`}
          >
            <Tag text="Solutions" />
            <Title className="text-4xl lg:text-5xl xl:text-7xl">
              {title}
            </Title>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 mx-2 my-2 lg:mx-[22.5px] lg:my-6 z-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 will-change-transform"
        >
          <Image src="/imgs/overlay1.png" alt="overlay-top-right" width={400} height={300} loading="lazy" className="object-contain" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute right-[40%] bottom-[20%] will-change-transform"
        >
          <Image src="/imgs/overlay2.png" alt="overlay-mid-right" width={300} height={300} loading="lazy" className="object-contain" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 will-change-transform"
        >
          <Image src="/imgs/overlay3.png" alt="overlay-bottom-left" width={400} height={300} loading="lazy" className="object-contain" />
        </motion.div>
      </div>
    </HeroBackground>
  );
}
