import React from 'react';

interface WhyChooseProps {
  title: string;
  className?: string;
}

export default function WhyChoose({ title, className = '' }: WhyChooseProps) {
  return (
    <div className={`flex flex-col justify-center items-center self-stretch ${className}`}>
      <h2
        className="text-[#181D27] text-center font-['Plus_Jakarta_Sans'] text-[30px] leading-[38px] font-semibold xl:text-[60px] xl:leading-[72px] xl:tracking-[-1.2px]"
      >
        Why Choose
        <p className='text-[#0452D8]'>{title}</p>
      </h2>
    </div>
  );
}


