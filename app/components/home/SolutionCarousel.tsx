"use client";
import React, { useState, useRef } from 'react';
import SolutionCard from './SolutionCard';

const services = [
  
  {
    icon: 'cctv-door-access',
    title: 'CCTV & Door Access',
    description: 'Our advanced CCTV and Door Access Systems provide comprehensive security solutions to protect your business, employees, and assets.'
  },
  {
    icon: 'business-continuity',
    title: 'Business Continuity & Disaster Recovery',
    description: 'At Malifax Technologies, we provide robust IT Business Continuity and Disaster Recovery (BCDR) solutions to safeguard your business against unforeseen events.'
  },
  {
    icon: 'enterprise-cloud',
    title: 'Enterprise Cloud',
    description: 'Our cloud solutions provide flexibility, scalability, and security, ensuring your business can adapt and thrive in today’s fast-paced digital landscape.'
  },
  
];

export default function SolutionCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cardWidthFixed = 400;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const endX = e.pageX;
    const diffX = startX - endX;
    const threshold = 50; // Threshold to change card
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swipe left -> next card
        setActiveCard(Math.min(activeIndex + 1, services.length - 1));
      } else {
        // Swipe right -> previous card
        setActiveCard(Math.max(activeIndex - 1, 0));
      }
    }
    
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    const threshold = 30;
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        setActiveCard(Math.min(activeIndex + 1, services.length - 1));
      } else {
        setActiveCard(Math.max(activeIndex - 1, 0));
      }
    }
    
    setIsDragging(false);
  };

  const setActiveCard = (index: number) => {
    setActiveIndex(index);
    
    // Scroll to center the active card
    if (carouselRef.current) {
      const cardWidth = cardWidthFixed; // Width of each card
      const containerWidth = 1258; // Width of container
      
      // Calculate scroll position to center the active card
      const scrollPosition = (index * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Calculate z-index for each card
  const getCardZIndex = (index: number) => {
    if (index === activeIndex) {
      return 'z-30';
    }
    if (index === activeIndex + 1 || index === activeIndex - 1) {
      return 'z-20';
    }
    if (index === activeIndex + 2 || index === activeIndex - 2) {
      return 'z-15';
    }
    return 'z-10';
  };

  return (
    <div className="relative mt-[153px] xl:mt-[45px] xl:px-0">
      {/* Desktop XL Layout - Carousel with horizontal scroll */}
      <div className="hidden xl:block">
        <div className="w-[1258px] mx-auto overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-0 select-none relative overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{ width: '1258px' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div 
                  key={index}
                  className={`flex-shrink-0 ${getCardZIndex(index)} cursor-pointer pb-[50px]`}
                  style={{ 
                    width: `${cardWidthFixed}px`,
                  }}
                  onClick={() => setActiveCard(index)}
                >
                  <SolutionCard 
                    {...service}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout - Display as list without horizontal scroll */}
      <div className="xl:hidden">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div 
                  key={index}
                  className="w-full cursor-pointer flex"
                  onClick={() => setActiveIndex(index)}
                >
                  <SolutionCard 
                    {...service}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
