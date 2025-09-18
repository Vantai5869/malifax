import React from 'react';
import HeroBackground from '../HeroBackground';
import Tag from '../Tag';
import Title from '../Title';

interface SolutionHeroProps {
  imageSrc: string;
  title: string;
  rightMaxWidth?: string;
  rightMinWidth?: string;
}

export default function SolutionHero({ imageSrc, title, rightMaxWidth = "max-w-[618px]", rightMinWidth = "min-w-[239px]" }: SolutionHeroProps) {
  return (
    <HeroBackground>
      <div className="flex justify-center flex-1 min-h-0 relative z-10">
        <div className="flex flex-col items-center justify-center xl:flex-row xl:items-center justify-center gap-8 xl:gap-16 max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-center order-1 lg:order-1">
            <img
              src={imageSrc}
              alt={title}
              className="w-full max-w-[239px] xl:w-auto xl:h-auto xl:max-w-[500px] object-contain"
            />

          </div>

          <div className={`flex  flex-col items-start gap-4 order-2 lg:order-2 ${rightMinWidth} xl:min-w-[426px] ${rightMaxWidth}`}>
            <Tag text="Solutions" />
            <Title className="text-4xl lg:text-5xl xl:text-7xl">
              {title}
            </Title>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 mx-2 my-2 lg:mx-[22.5px] lg:my-6 z-0">
        <img
          src="/imgs/overlay1.png"
          alt="overlay-top-right"
          className="absolute top-0 right-0 object-contain max-w-[230px] xl:max-w-[500px]"
        />
        <img
          src="/imgs/overlay2.png"
          alt="overlay-mid-right"
          className="absolute left-[50%] bottom-[8%] object-contain"
        />
        <img
          src="/imgs/overlay3.png"
          alt="overlay-bottom-left"
          className="absolute bottom-0 left-0 object-contain"
        />
      </div>
    </HeroBackground>
  );
}
