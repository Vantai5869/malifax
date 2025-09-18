import React from 'react';
import Image from 'next/image';

interface LogoGridProps {
  positions: number[]; // 0-based slot positions where logos appear
  totalSlots?: number; // default 36
  wideLogoNumbers?: number[]; // logo order numbers (1-based) that should be wide (e.g., [2,4,6,8])
  srcPrefix?: string; // path/prefix before number
  ext?: string; // file extension including dot, default '.svg'
  containerClassName?: string;
}

// Renders a flex-wrap grid with 100px cells (gap-3). Wide items occupy 2 cells + 1 gap using calc.
const LogoGrid: React.FC<LogoGridProps> = ({
  positions,
  totalSlots = 36,
  wideLogoNumbers = [],
  srcPrefix = '/svgs/solution/business-i',
  ext = '.svg',
  containerClassName = '',
}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-3 w-full max-w-[1440px] mx-auto ${containerClassName}`}>
      <div className="flex flex-wrap justify-center items-center gap-3 w-full">
        {Array.from({ length: totalSlots }, (_, index) => {
          const logoIndex = positions.indexOf(index);
          const hasLogo = logoIndex !== -1;
          const logoNumber = logoIndex + 1;
          const isWide = wideLogoNumbers.includes(logoNumber);

          if (hasLogo && isWide && positions.includes(index + 1)) {
            return null;
          }

          return (
            <div
              key={index}
              className={`${isWide ? 'w-[calc(200px+0.75rem)] flex-none' : 'w-[100px] flex-none'} h-[100px] aspect-square rounded-lg flex items-center justify-center ${hasLogo ? 'bg-[rgb(4,82,216)]' : 'bg-[#F5F5F5]'} `}
            >
              {hasLogo && (
                <Image
                  src={`${srcPrefix}${logoNumber}${ext}`}
                  alt={`Logo ${logoNumber}`}
                  width={isWide ? 120 : 60}
                  height={60}
                  className={`${isWide ? 'w-[120px]' : 'w-[60px]'} h-[60px]`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoGrid;


