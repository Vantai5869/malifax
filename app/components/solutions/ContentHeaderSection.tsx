import React from 'react';

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
          {/* Main Title */}
          <h1 className={`text-[30px] lg:text-[60px] font-semibold text-center mb-9 font-plus-jakarta ${titleColor} leading-[38px] lg:leading-[72px] xl:tracking-[-1.2px]`}>
            {title}
          {title2 && <p className='text-[#181D27]'> {title2}</p>}
          </h1>
          
          {/* Description */}
          <p className={`text-[14px] lg:text-[18px] text-center font-plus-jakarta text-[#181D27] font-normal leading-[20px] lg:leading-[28px] w-full max-w-[1194px] mx-auto`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
