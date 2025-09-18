import React from 'react';

interface ServiceCardProps {
  title: string;
  iconSrc: string;
}

export default function ServiceCard({ title, iconSrc }: ServiceCardProps) {
  return (
    <div className="w-full flex p-3 flex-col items-end gap-3 self-stretch rounded-[22px] outline outline-1 outline-[#E9EAEB] bg-[#FDFDFD]">
      <div className="flex h-full p-4 pr-[10px] items-center xl:flex-col xl:items-start gap-4 self-stretch rounded-2xl outline outline-1 outline-[#E9EAEB] bg-[linear-gradient(247deg,#FFF_0%,#ECF9FF_100%)]">
        <img src={iconSrc} alt="Icon" className="w-9 h-9" />
        <span className="text-[#181D27] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] xl:text-[20px] xl:leading-[30px]">
          {title}
        </span>
      </div>
    </div>
  );
}
