"use client";
import React, { useState, useRef, useEffect } from 'react';
import SolutionCard from './SolutionCard';
import LearnMore from '../LearnMore';

const services = [
  // 1
  {
    icon: 'business-continuity',
    title: 'Business Continuity & Disaster Recovery',
    description:
      'Robust BCDR solutions to safeguard operations and ensure rapid recovery from incidents.',
  },
  // 2
  {
    icon: 'cctv-door-access',
    title: 'CCTV & Door Access',
    description:
      'Comprehensive surveillance and access control to protect your people and assets.',
  },
  // 3
  {
    icon: 'cyber-security',
    title: 'Cyber Security',
    description:
      'End-to-end protection, monitoring, and response to keep your business secure.',
  },
  // 4
  {
    icon: 'enterprise-cloud',
    title: 'Enterprise Cloud',
    description:
      'Flexible, scalable, and secure cloud platforms tailored for your workloads.',
  },
  // 5
  {
    icon: 'it-infrastructure',
    title: 'IT Infrastructure Services',
    description:
      'Design, deploy, and optimize resilient on-prem and hybrid infrastructure.',
  },
  // 6
  {
    icon: 'managed-services',
    title: 'Managed Services',
    description:
      'Proactive monitoring and support to maximize uptime and performance.',
  },
  // 7
  {
    icon: 'network-wifi',
    title: 'Network infrastructure & Enterprise WiFi',
    description:
      'High‑performance wired and wireless networking for modern enterprises.',
  },
  // 8
  {
    icon: 'voice-solutions',
    title: 'Voice Solutions (CLOUD / ON-PREM)',
    description:
      'Reliable cloud and on‑prem telephony with advanced collaboration features.',
  },
];

export default function SolutionCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  // Autoplay control using inactivity timeout
  const nextAdvanceAtRef = useRef<number>(Date.now() + 3000); // when to move next
  const AUTOPLAY_INTERVAL_MS = 3000; // between slides while idle
  const IDLE_DELAY_AFTER_INTERACTION_MS = 4000; // wait after interaction

  const cardWidthFixed = 400;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    // pause autoplay after interaction
    nextAdvanceAtRef.current = Date.now() + IDLE_DELAY_AFTER_INTERACTION_MS;
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
    nextAdvanceAtRef.current = Date.now() + IDLE_DELAY_AFTER_INTERACTION_MS;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    nextAdvanceAtRef.current = Date.now() + IDLE_DELAY_AFTER_INTERACTION_MS;
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
    nextAdvanceAtRef.current = Date.now() + IDLE_DELAY_AFTER_INTERACTION_MS;
  };

  const setActiveCard = (index: number) => {
    setActiveIndex(index);
    // Scroll to center the active card
    if (carouselRef.current) {
      const cardWidth = cardWidthFixed; // Width of each card
      const containerWidth = 1258; // Width of container
      const scrollPosition = index * cardWidth - containerWidth / 2 + cardWidth / 2;
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
    // Any programmatic selection is also an interaction
    nextAdvanceAtRef.current = Date.now() + IDLE_DELAY_AFTER_INTERACTION_MS;
  };

  // Auto-advance carousel respecting inactivity pause
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      if (now >= nextAdvanceAtRef.current) {
        const next = (activeIndex + 1) % services.length;
        setActiveIndex(next);
        // scroll sync
        if (carouselRef.current) {
          const cardWidth = cardWidthFixed;
          const containerWidth = 1258;
          const scrollPosition = next * cardWidth - containerWidth / 2 + cardWidth / 2;
          carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
        // schedule next advance
        nextAdvanceAtRef.current = now + AUTOPLAY_INTERVAL_MS;
      }
    };
    const intervalId = setInterval(tick, 400);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

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
                  className={`flex-shrink-0 ${getCardZIndex(index)} cursor-default pb-[50px]`}
                  style={{ 
                    width: `${cardWidthFixed}px`,
                  }}
                  onClick={() => setActiveCard(index)}
                >
                  <SolutionCard 
                    {...service}
                    isActive={isActive}
                    href={
                      service.icon === 'business-continuity' ? '/solutions/business-continuity' :
                      service.icon === 'cctv-door-access' ? '/solutions/cctv-door-access' :
                      service.icon === 'cyber-security' ? '/solutions/cyber-security' :
                      service.icon === 'enterprise-cloud' ? '/solutions/enterprise-cloud' :
                      service.icon === 'it-infrastructure' ? '/solutions/it-infrastructure' :
                      service.icon === 'managed-services' ? '/solutions/managed-services' :
                      service.icon === 'network-wifi' ? '/solutions/networking-wifi' :
                      service.icon === 'voice-solutions' ? '/solutions/voice-solutions' :
                      '#'
                    }
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
                  className="w-full cursor-default flex"
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
