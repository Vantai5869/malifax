import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className = '' }: TitleProps) {
  return (
    <h1 className={`text-white font-['Plus_Jakarta_Sans'] text-4xl font-semibold leading-[44px] tracking-[-0.72px] xl:text-7xl xl:leading-[90px] xl:tracking-[-1.44px] ${className}`}>
      {children}
    </h1>
  );
}
