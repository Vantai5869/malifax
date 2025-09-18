'use client'
import HeroBackground from "./components/HeroBackground";
import Tag from "./components/Tag";
import IconText from "./components/IconText";
import Image from "next/image";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import SolutionList from "./components/home/SolutionList";
import SolutionCarousel from "./components/home/SolutionCarousel";
import ServiceCard from "./components/home/ServiceCard";
import PartnersSwiper from "./components/home/PartnersSwiper";
import ShopSwiper from "./components/home/ShopSwiper";
import { useRef } from "react";
import { Swiper as SwiperType } from 'swiper';

const services = [
  {
    icon: 'tag36_36',
    title: 'Datacentre Setup / Relocation',
    description: 'We specialize in providing comprehensive data centre setup and relocation services. Our expert team ensures a seamless and efficient transition with minimal disruption to your business operations.'
  },
  {
    icon: 'tag36_36',
    title: 'Hardware Maintenance',
    description: 'Our comprehensive hardware maintenance services are designed to keep your systems running efficiently and minimize downtime.'
  },
  {
    icon: 'tag36_36',
    title: 'Laptop Repairs',
    description: 'At Malifax Technologies, we understand how essential your laptop is to your daily operations. Our professional laptop repair services are designed to get you back up and running quickly, with minimal disruption to your workflow.'
  },
  {
    icon: 'tag36_36',
    title: 'Equipment Rental',
    description: 'At Malifax Technologies, we offer a wide range of equipment rental services to meet the diverse needs of your business. Our flexible rental options ensure you have the right equipment when you need it.'
  },
  {
    icon: 'tag36_36',
    title: 'Structured Cablings',
    description: 'At Malifax Technologies, we provide top-notch structured cabling solutions designed to support your business\'s communication and data needs.'
  },
  {
    icon: 'tag36_36',
    title: 'IT Outsource',
    description: 'Malifax\'s skilled team ensures efficient maintenance and support of enterprise IT systems for optimal resource use.'
  }
];

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      <HeroBackground>
        <section className="flex flex-1 relative justify-center items-center">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[51px] left-[19px] md:top-[51px] md:left-[200px] xl:top-[52px] xl:left-[750px] opacity-100">
              <Image
                src="/imgs/home-img0.png"
                alt="Home Image 0"
                width={113}
                height={107}
                className="w-[113px] h-[107px] md:w-[140px] md:h-[132px] lg:w-auto lg:h-auto lg:max-w-[180px] object-contain"
              />
            </div>
            <div className="absolute top-8 lg:top-16 right-0 lg:right-[60px] transform -rotate-[-0deg] opacity-100 overflow-hidden">
              <Image
                src="/imgs/home-img1.png"
                alt="Home Image 1"
                width={761}
                height={674}
                className="w-[304.77px] h-[309.89px] md:w-[320px] md:h-[325px] lg:h-auto  xl:w-[761px]  object-contain"
              />
            </div>
            <div className="absolute bottom-[54px] left-[80px] md:bottom-[80px] md:left-[200px] xl:bottom-[90px] xl:left-[511px] opacity-100">
              <Image
                src="/imgs/home-img2.png"
                alt="Home Image 2"
                width={185}
                height={176}
                className="w-auto h-auto max-w-[120px] lg:max-w-[185px]"
              />
            </div>
            <div className="absolute bottom-[17px] right-[20px] md:bottom-[22px] md:right-[50px] xl:bottom-[28px] xl:right-[80px] opacity-100">
              <Image
                src="/imgs/home-img3.png"
                alt="Home Image 3"
                width={210}
                height={224}
                className="w-auto h-auto max-w-[140px] lg:max-w-[210px]"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="mx-6 max-w-[789px] py-8 md:ml-[11.25%] md:mr-auto xl:ml-[11.25%] flex flex-col items-center md:items-start xl:mr-auto relative z-20">
              <Tag text="TECHNOLOGY AND SOFTWARE" />
              <h1 
                className="text-white font-['Plus_Jakarta_Sans'] font-semibold text-[36px] leading-[44px] tracking-[-0.02em] text-center md:text-left xl:text-left flex flex-col items-center md:items-start xl:items-start gap-2 xl:gap-4 md:text-[48px] md:leading-[60px] xl:text-[72px] xl:leading-[90px] mt-2 md:mt-4"
              >
                <span className="md:hidden">We Provide IT</span>
                <span className="md:hidden">& Mobile Solutions,</span>
                <span className="md:hidden">with</span>
                <span className="md:hidden flex justify-center items-center gap-4">
                  <Image
                    src="/svgs/tag50_50.svg"
                    alt="Tag Icon"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  /> 
                  Malifax 
                </span>
                <span className="md:hidden">Technologies</span>
                
                {/* <span className="hidden md:block xl:hidden">We Provide IT & Mobile</span>
                <span className="hidden md:block xl:hidden">Solutions, with</span>
                <div className="hidden md:flex xl:hidden justify-center items-center gap-3">
                  <Image
                    src="/svgs/tag50_50.svg"
                    alt="Tag Icon"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  /> 
                  <span>Malifax Technologies</span>
                </div> */}
                
                <span className="hidden md:block">We Provide IT & Mobile</span>
                <span className="hidden md:block">Solutions,with</span>
                <div className="hidden md:flex justify-center items-center gap-4">
                  <Image
                    src="/svgs/tag76_76.svg"
                    alt="Tag Icon"
                    width={76}
                    height={76}
                    className="w-[76px] h-[76px]"
                  /> 
                  <span>Malifax Technologies</span>
                </div>
              </h1>
          </div>
        </section>
      </HeroBackground>

      {/* Our Partners Section */}
      <section className="bg-white text-[#181D27] pt-[100px]  md:pt-[77]">
        <div className=" mx-auto">
          {/* Title */}
          <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] leading-[38px] tracking-[0%] text-center lg:text-[36px] lg:leading-[44px] lg:tracking-[-0.02em] mb-6 px-4">
            Our partners have <span className="text-blue-500">trusted us</span>
          </h2>
          
          {/* Logo List - Swiper */}
          <PartnersSwiper 
            logos={Array.from({ length: 20 }, () => "/imgs/company-logo.png")} 
          />
        </div>
      </section>

      {/* Products & Solutions Section */}
      <section className="bg-white text-[#181D27] pt-[80px] px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] leading-[38px] tracking-[0%] text-blue-500 self-stretch text-center lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
              Products and Solutions
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] leading-[38px] tracking-[0%] text-[#181D27] self-stretch text-center lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
              for your business
            </p>
          </div>
          
          {/* Solution List */}
          <SolutionList />
          <SolutionCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white text-[#181D27] px-4 pt-20">
        <div className="max-w-[1194px] w-full mx-auto">
          {/* Title */}
          <div className="text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] leading-[38px] tracking-[0%] xl:text-[60px] xl:leading-[72px] xl:tracking-[-0.02em] text-center">
              <span className="text-blue-500">Services</span> we provide
            </h2>
          </div>
          
          {/* Services Grid */}
          <div className="relative mt-[24px] flex flex-col items-center ">
            {/* Services Content */}
            <div className="relative z-10">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-8 w-full">
                  {services.map((service, index) => (
                    <ServiceCard 
                      key={index} 
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="pt-20">
        <div className="container mx-auto">
          
          <div className="flex flex-col xl:max-w-[1258px] w-full mx-auto xl:mb-15 xl:flex-row items-center justify-between gap-6 xl:gap-0  mb-6 xl:mb-12">
            {/* Title */}
            <div className="text-center xl:text-left">
              <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] leading-[38px] tracking-[0%] xl:text-[60px] xl:leading-[72px] xl:tracking-[-0.02em] text-center xl:text-left">
              Shop with<span className="text-blue-500"> Malifax Technologies</span>
              </h2>
            </div>
            

            <div className="flex items-center gap-6">
              <button 
                onClick={() => {
                  console.log('Previous clicked, swiperRef:', swiperRef.current);
                  swiperRef.current?.slidePrev();
                }}
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/svgs/arrow-left-btn.svg" alt="Previous" />
              </button>
              <button 
                onClick={() => {
                  console.log('Next clicked, swiperRef:', swiperRef.current);
                  swiperRef.current?.slideNext();
                }}
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/svgs/arrow-right-btn.svg" alt="Next" />
              </button>
            </div>
          </div>
          
    
        </div>      {/* Shop Swiper */}
          <div
          style={{
            backgroundImage: 'url(/imgs/home-shop-bg.png)',
            left: '0px',
            right: '0px',
            width: '100%'
          }}
          className="overflow-hidden"
          >
            <div className="container mx-auto mb-15 xl:mb-12">
              <ShopSwiper swiperRef={swiperRef} />
            </div>
          </div>
      </section>

      {/* Overview Section */}
      <CTABanner 
        title="Overview"
        description={[
          "Established in 1985 as a System Integrator, Malifax Technologies (S) Pte Ltd has evolved into a leading technology company with its core business strongly focused on providing mobility, data communication and networking solutions.",
          "Since our founding, we have been supplying business solutions that ensure the highest level of reliability, compatibility and performance.",
          "Today's integrated wireless technology has further enabled the convergence of data, voice and video. We are always at the forefront of technology by providing data migration to virtualized systems and 'cloud' platforms."
        ]}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
