import React from 'react';

interface GridItem {
  title: string;
  description: string;
}

interface GridSectionProps {
  items: GridItem[];
  className?: string;
}

export default function GridSection({ items, className = '' }: GridSectionProps) {
  return (
    <section className={`mt-20 w-full ${className}`}>
      <div className="w-full my-auto max-w-[1440px] mx-auto px-4">
        {/* Desktop Layout - Full Grid Pattern */}
        <div className="lg:flex flex-col items-center overflow-hidden">
          {/* Top half squares - dynamic based on items count (only show on xl and up) */}
          <div className="hidden xl:flex justify-center gap-[6px] mb-[6px]">
            {/* Left half square */}
            <div className={`h-[117px] border-r border-l border-b border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-br-[22px] rounded-bl-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}></div>
            
            {/* Main top squares */}
            {Array.from({ length: items.length }, (_, index) => (
              <div 
                key={`top-${index}`} 
                className={`h-[117px] border-l border-r border-b border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-bl-[22px] rounded-br-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}
              ></div>
            ))}
            
            {/* Right half square */}
            <div className={`h-[117px] border-l border-r border-b border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-bl-[22px] rounded-br-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}></div>
          </div>

          {/* Middle row - 2 half squares + main content squares + 2 half squares */}
          <div className="flex justify-center gap-[6px]">
            {/* Left half square */}
            <div className={`hidden xl:block  border-t border-r border-b border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-tr-[22px] rounded-br-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}></div>
            
            {/* Main content squares */}
            <div className="grid grid-cols-2 gap-[6px] justify-center xl:flex xl:flex-nowrap xl:gap-[6px] xl:items-stretch">
              {items.map((item, index) => (
                <div key={index} className={`flex flex-col w-full xl:flex-1 p-6 gap-3 rounded-[22px] border border-[#E9EAEB] bg-[#FDFDFD] shadow-[0_4px_8px_-2px_rgba(10,69,158,0.10),0_2px_4px_-2px_rgba(10,69,158,0.06)] ${items.length === 2 ? 'xl:w-[449px]' : 'xl:w-[234px]'}`}>
                  <h3 className="text-[#181D27] font-['Plus_Jakarta_Sans'] text-xl font-semibold leading-[30px]">
                    {item.title}
                  </h3>
                  <p className="text-[#717680] font-['Plus_Jakarta_Sans'] text-sm font-normal leading-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Right half square */}
            <div className={`hidden xl:block  border-t border-l border-b border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-tl-[22px] rounded-bl-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}></div>
          </div>

          {/* Bottom half squares - dynamic based on items count (only show on xl and up) */}
          <div className="hidden xl:flex justify-center gap-[6px] mt-[6px]">
            {/* Left half square */}
            <div className={`h-[117px] border-t border-r border-l border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-tr-[22px] rounded-tl-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}></div>
            
            {/* Main bottom squares */}
            {Array.from({ length: items.length }, (_, index) => (
              <div 
                key={`bottom-${index}`} 
                className={`h-[117px] border-l border-r border-t border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-tl-[22px] rounded-tr-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}
              ></div>
            ))}
            
            {/* Right half square */}
            <div className={`h-[117px] border-t border-l border-r border-[#E9EAEB] bg-[#FDFDFD] opacity-80 rounded-tl-[22px] rounded-tr-[22px] ${items.length === 2 ? 'w-[449px]' : 'w-[234px]'}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
