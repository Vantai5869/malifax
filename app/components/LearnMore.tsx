"use client";
import React from 'react';

interface LearnMoreProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

export default function LearnMore({ onClick, className = "", text = "Learn more" }: LearnMoreProps) {
  return (
    <button 
      className={`flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-2xl bg-white hover:bg-gray-50 transition-colors box-border outline outline-1 outline-[#E9EAEB] ${className}`}
      onClick={onClick}
    >
      <img src="/svgs/arrow-right.svg" alt="Arrow right" className="w-9 h-9" />
      <span className="text-[#181D27] text-center font-['Plus_Jakarta_Sans'] text-sm font-normal leading-5">
        {text}
      </span>
    </button>
  );
}
