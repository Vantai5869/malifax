import React from 'react';
import Image from 'next/image';
import SolutionHero from '../../components/solutions/SolutionHero';
import ContentHeaderSection from '../../components/solutions/ContentHeaderSection';
import WhyChoose from '../../components/solutions/WhyChoose';
import CTABanner from '../../components/CTABanner';
import Footer from '../../components/Footer';
import LogoGrid from '@/app/components/solutions/LogoGrid';

export default function EnterpriseCloudPage() {
  return (
    <div className="min-h-screen">
      <SolutionHero 
        imageSrc="/imgs/solution/enterprise-cloud.png"
        title="Enterprise Cloud"
      />

      <ContentHeaderSection
        title="Cloud Solutions"
        description="At Malifax Technologies, we partner with major cloud service providers to provide a comprehensive cloud solutions designed to meet the diverse needs of modern businesses. Our cloud solutions provide flexibility, scalability, and security, ensuring your business can adapt and thrive in today's fast-paced digital landscape."
      />

      {/* Why Choose Section */}
      <section className="bg-white">
        <div className="mt-9 xl:mt-20 px-4 xl:px-0 max-w-[1194px] mx-auto">
          <WhyChoose title="Our Cloud Solutions?" />

          {/* 2 Items Container */}
          <div className="flex flex-col items-start gap-4 md:flex-row md:gap-8 w-full mt-4 xl:mt-8">
            {/* Item 1 - Access Control System */}
            <div className="flex flex-col w-full items-end gap-3 p-3 flex-1 rounded-[22px] outline outline-1 outline-[#E9EAEB] bg-[#FDFDFD]">
              <div className="flex p-4 items-center gap-4 w-full rounded-2xl outline outline-1 outline-[#E9EAEB] bg-gradient-to-br from-white to-[#ECF9FF]">
                <Image
                  src="/svgs/tag36_36.svg"
                  alt="Cloud Security Icon"
                  width={36}
                  height={36}
                />
                <span className="text-[16px] lg:text-[20px] font-semibold font-plus-jakarta text-[#181D27] leading-[24px] lg:leading-[30px]">
                  Cloud Security
                </span>
              </div>
            </div>

            {/* Item 2 - CCTV */}
            <div className="flex flex-col w-full items-end gap-3 p-3 flex-1 rounded-[22px] border border-[#E9EAEB] bg-[#FDFDFD]">
              <div className="flex p-4 items-center gap-4 w-full rounded-2xl border border-[#E9EAEB] bg-gradient-to-br from-white to-[#ECF9FF]">
                <Image
                  src="/svgs/tag36_36.svg"
                  alt="Scalability Icon"
                  width={36}
                  height={36}
                />
                <span className="text-[16px] lg:text-[20px] font-semibold font-plus-jakarta text-[#181D27] leading-[24px] lg:leading-[30px]">
                  Scalability
                </span>
              </div>
            </div>
          </div>
        </div>
        <LogoGrid
          positions={[4, 9, 10, 15, 20, 21, 25, 28]}
          wideLogoNumbers={[2, 4, 6, 8]}
          srcPrefix="/svgs/solution/business-i"
          ext=".svg"
          containerClassName="mt-[47px] mb-14"
        />
      </section>

      <CTABanner 
        description="Transform your business with our cutting-edge cloud solutions. Contact us today to learn more about how we can help you leverage the power of the cloud to achieve your business goals."
        buttonText="Contact us now!"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
