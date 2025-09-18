import React from 'react';
import Image from 'next/image';
import SolutionHero from '../../components/solutions/SolutionHero';
import ContentHeaderSection from '../../components/solutions/ContentHeaderSection';
import WhyChoose from '../../components/solutions/WhyChoose';
import CTABanner from '../../components/CTABanner';
import Footer from '../../components/Footer';
import LogoGrid from '@/app/components/solutions/LogoGrid';

export default function NetworkingWifiPage() {
  return (
    <div className="min-h-screen bg-white">
      <SolutionHero
        imageSrc="/imgs/solution/networking-wifi.png"
        title="Networking & Enterprise Wi-Fi"
      />

      <ContentHeaderSection
        title="Networking & Enterprise Wi-Fi"
        description="At Malifax Technologies, we provide cutting-edge networking and enterprise Wi-Fi solutions designed to keep your business connected and productive. Our solutions ensure seamless, secure, and high-performance connectivity across your organization."
      />

       <section className="bg-white">
        <div className="mt-9 xl:mt-18 px-4 xl:px-0 max-w-[900px] mx-auto"> 
          <WhyChoose title="Our Networking & Enterprise Wi-Fi Solutions?" />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-[url('/imgs/solution/networking-wifi-services-bg.png')] bg-cover bg-center bg-no-repeat pt-4 xl:pt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-[47px] lg:gap-12 place-items-center lg:place-items-stretch">
            {/* Service Card 1 */}
            <div className="flex w-full h-fit lg:w-[388px] p-3 flex-col justify-center items-center gap-3 rounded-[22px] outline outline-1 outline-[#E9EAEB] bg-[#FDFDFD] shadow-[0_32px_64px_-12px_rgba(10,69,158,0.14)] lg:mt-[108px]">
              <div className="flex p-6 flex-col items-center gap-4 self-stretch rounded-2xl outline outline-1 outline-[#E9EAEB] bg-gradient-to-br from-white to-[#ECF9FF]">
                <div className="max-w-[280px] flex justify-start">
                  <Image
                    src="/svgs/solution/gateway-installation.svg"
                    alt="Gateway Installation Icon"
                    width={280}
                    height={280}
                    className="w-full max-w-[160px] xl:max-w-[280px]"
                  />
                </div>
                <h3 className="self-stretch text-[#181D27] font-['Plus_Jakarta_Sans'] text-xl font-semibold leading-[30px] text-center xl:text-left">
                  Gateway installation
                </h3>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="flex w-full h-fit lg:w-[388px] p-3 flex-col justify-center items-center gap-3 rounded-[22px] outline outline-1 outline-[#E9EAEB] bg-[#FDFDFD] shadow-[0_32px_64px_-12px_rgba(10,69,158,0.14)]">
              <div className="flex p-6 flex-col items-center gap-4 self-stretch rounded-2xl outline outline-1 outline-[#E9EAEB] bg-gradient-to-br from-white to-[#ECF9FF]">
                <div className="max-w-[280px] flex justify-start">
                  <Image
                    src="/svgs/solution/wifi-survey.svg"
                    alt="Wi-Fi Survey Icon"
                    width={280}
                    height={280}
                    className="w-full max-w-[160px] xl:max-w-[280px]"
                  />
                </div>
                <h3 className="self-stretch text-[#181D27] font-['Plus_Jakarta_Sans'] text-xl font-semibold leading-[30px] text-center xl:text-left">
                  Pre and post Wi-Fi installation survey
                </h3>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="flex w-full h-fit lg:w-[388px] p-3 flex-col justify-center items-center gap-3 rounded-[22px] outline outline-1 outline-[#E9EAEB] bg-[#FDFDFD] shadow-[0_32px_64px_-12px_rgba(10,69,158,0.14)] lg:mt-[108px]">
              <div className="flex p-6 flex-col items-center gap-4 self-stretch rounded-2xl outline outline-1 outline-[#E9EAEB] bg-gradient-to-br from-white to-[#ECF9FF]">
                <div className="max-w-[280px] flex justify-start">
                  <Image
                    src="/svgs/solution/lan-solutions.svg"
                    alt="LAN Solutions Icon"
                    width={280}
                    height={280}
                    className="w-full  xl:max-w-[280px]"
                  />
                </div>
                <h3 className="self-stretch text-[#181D27] font-['Plus_Jakarta_Sans'] text-xl font-semibold leading-[30px] text-center xl:text-left">
                  Wired and wireless local area network (LAN) solutions
                </h3>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section className="bg-white">
        <LogoGrid
          positions={[4, 9, 10, 15, 20, 21, 25, 28]}
          wideLogoNumbers={[2, 4, 6, 8]}
          srcPrefix="/svgs/solution/business-i"
          ext=".svg"
          containerClassName="mt-[48px] mb-14 xl:mt-[200px]"
        />
      </section>

      <CTABanner
        description="Transform your business with our state-of-the-art networking and enterprise Wi-Fi solutions. Contact us today to learn more about how we can help you build a reliable, secure, and high-performance network."
        buttonText="Contact us now!"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  );
}
