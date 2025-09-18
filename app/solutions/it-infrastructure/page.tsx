import React from 'react';
import Image from 'next/image';
import SolutionHero from '../../components/solutions/SolutionHero';
import ContentHeaderSection from '../../components/solutions/ContentHeaderSection';
import WhyChoose from '../../components/solutions/WhyChoose';
import CTABanner from '../../components/CTABanner';
import Footer from '../../components/Footer';

export default function ITInfrastructurePage() {
  return (
    <div className="min-h-screen">
      <SolutionHero 
        imageSrc="/imgs/solution/it-infrastructure.png"
        title="IT Infrastructure Services"
      />

      <ContentHeaderSection
        title="IT Infrastructure Services"
        description="At Malifax Technologies, we provide comprehensive IT infrastructure services designed to support and enhance your business operations. Our solutions ensure that your IT environment is robust, scalable, and secure, enabling you to focus on your core business activities."
      />

      {/* Why Choose Section */}
      <section className="bg-white mb-[134px]">
        <div className="mt-9 xl:mt-20 px-4 xl:px-0 max-w-[1194px] mx-auto">
          <WhyChoose title="Our IT Infrastructure Services?" />

          {/* 8 Items Container - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full place-items-center md:place-items-stretch mt-4 xl:mt-8">
            {(() => {
              const services = [
                { title: "Physical server installation", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Server rack", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Server virtualisation", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Uninterruptible power supply (UPS)", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Gateway configuration", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Server virtualisation", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Server virtualisation", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Wired and wireless local area network (LAN) solutions", iconSrc: "/svgs/tag36_36.svg" }
              ];

              return services.map((service, index) => (
                <div key={index} className="flex w-full flex-col items-end gap-3 p-3 rounded-[22px] outline outline-1 outline-[#E9EAEB] bg-[#FDFDFD] self-stretch">
                  <div className="flex p-4 items-center gap-4 self-stretch rounded-2xl outline outline-1 outline-[#E9EAEB] bg-[linear-gradient(247deg,#FFF_0%,#ECF9FF_100%)]">
                    <Image
                      src={service.iconSrc}
                      alt={`${service.title} Icon`}
                      width={36}
                      height={36}
                    />
                    <span className="text-[#181D27] font-['Plus_Jakarta_Sans'] text-base font-semibold leading-6">
                      {service.title}
                    </span>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      <CTABanner 
        description="Transform your business with our comprehensive IT Infrastructure services. Contact us today to learn more about how we can help you build a robust and scalable IT foundation."
        buttonText="Contact us now!"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
