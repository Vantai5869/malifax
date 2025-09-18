import React from 'react';
import Image from 'next/image';
import Navigation from './Navigation';

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroBackground({ children, className = '' }: HeroBackgroundProps) {
  return (
    <div> 
      <Navigation />

    <div className={`relative min-h-screen xl:min-h-[1024px] overflow-visible ${className}`}>
      {/* Background Image */}
      <div className="absolute mx-2 my-2 lg:mx-[22.5px] lg:my-6 inset-0 rounded-2xl overflow-hidden z-0">
        <Image
          src="/imgs/main-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen xl:min-h-[1024px] flex flex-col">
        {children}
      </div>
    </div>
    </div>
  );
} 