'use client';
import HeroBackground from "../components/HeroBackground";
import Tag from "../components/Tag";
import Title from "../components/Title";
import Image from "next/image";
import AccessSystemItem from "../components/AccessSystemItem";
import ServicesList from "../components/about/ServicesList";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import FloatingElement from "../components/FloatingElement";
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <>
      <HeroBackground>
        {/* Hero Section */}
        <section className="relative min-h-screen xl:min-h-[1024px]">
          {/* Tag and Title - Responsive positioning and sizing */}
          <div className="flex flex-col absolute w-full top-[223px] xl:top-[274px]">
            <motion.div 
              className="inline-flex flex-col justify-center items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Tag text="TECHNOLOGY AND SOFTWARE" />
              <Title>About Us</Title>
            </motion.div>
          </div>
          
          {/* About Center Image */}
          <FloatingElement 
            className="absolute w-[287.66px] bottom-[-13px] lg:w-[691.266px] lg:bottom-[-29px] left-1/2 transform -translate-x-1/2 z-50"
            delay={0.5}
            intensity={8}
          >
            <Image
              src="/imgs/about-center-img.png"
              alt="About Center Image"
              width={691.266}
              height={471}
              className="w-full h-auto object-contain"
            />
          </FloatingElement>
        </section>
      </HeroBackground>

      {/* Welcome Section */}
      <section className="bg-white pt-20 mt-[14px] xl:mt-7 ">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col items-center gap-9 w-full max-w-[1439px] mx-auto px-6">
          {/* Text Block 1 - Two lines of text */}
          <div className="flex flex-col items-start self-stretch">
            <div 
              className="self-stretch text-center text-[#181D27] font-['Plus_Jakarta_Sans'] text-[60px] font-semibold leading-[72px] tracking-[-1.2px]"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Welcom to
            </div>
            <div 
              className="self-stretch text-center text-[#0452D8] font-['Plus_Jakarta_Sans'] text-[60px] font-semibold leading-[72px] tracking-[-1.2px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Maxlifax Technologies!
            </div>
          </div>
          
          {/* Description Block */}
          <div 
            className="w-full max-w-[1194px] text-center text-[#181D27] font-['Plus_Jakarta_Sans'] text-lg font-normal leading-7"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            Since 1985, we've been at the forefront of innovation, transforming from a system integrator into a leader in mobility, data communication, and networking solutions. Our mission is to empower businesses with cutting-edge technology that drives efficiency, enhances security, fosters growth, and promotes sustainability.
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-9 w-full max-w-[375px] mx-auto px-4">
          {/* Text Block 1 - Two lines of text */}
          <div className="flex flex-col items-center self-stretch w-full">
            <div 
              className="self-stretch text-center text-[#181D27] font-['Plus_Jakarta_Sans'] text-[30px] font-semibold leading-[38px]"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Welcom to
            </div>
            <div 
              className="self-stretch text-center text-[#0452D8] font-['Plus_Jakarta_Sans'] text-[30px] font-semibold leading-[38px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Maxlifax Technologies!
            </div>
          </div>
          
          {/* Description Block */}
          <div 
            className="self-stretch text-center text-[#181D27] font-['Plus_Jakarta_Sans'] text-sm font-normal leading-5"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            Since 1985, we've been at the forefront of innovation, transforming from a system integrator into a leader in mobility, data communication, and networking solutions. Our mission is to empower businesses with cutting-edge technology that drives efficiency, enhances security, fosters growth, and promotes sustainability.
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white pt-20">
        <div className="flex flex-col justify-center items-center w-full max-w-[1440px] mx-auto px-4 xl:px-6">
          {/* Section Heading */}
          <div 
            className="text-center font-['Plus_Jakarta_Sans'] text-[30px] font-semibold leading-[38px] xl:text-[60px] xl:leading-[72px] xl:tracking-[-2%]"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our <span className="text-[#0452D8]">Core Values</span>
          </div>
          
          {/* Core Values Cards */}
          <div className="mt-10 grid grid-cols-1 xl:grid-cols-2  gap-4 xl:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "Always ahead of the curve, embracing the latest technological advancements."
              },
              {
                title: "Reliability", 
                description: "Dependable solutions that ensure your business runs smoothly."
              },
              {
                title: "Customer Focus",
                description: "Tailored solutions that exceed expectations."
              },
              {
                title: "Integrity",
                description: "Transparent and honest in all our dealings."
              },
              {
                title: "Excellence",
                description: "Committed to delivering top-notch products and services."
              },
              {
                title: "Sustainability",
                description: "Dedicated to implementing eco-friendly practices and solutions that reduce environmental impact."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <AccessSystemItem
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-white pt-20">
        <div className="flex flex-col justify-center items-center w-full max-w-[1440px] mx-auto px-4 xl:px-6">
          {/* Section Heading */}
          <div 
            className="text-center font-['Plus_Jakarta_Sans'] text-[30px] font-semibold leading-[38px] text-[#181D27] xl:text-[60px] xl:leading-[72px] xl:tracking-[-2%]"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            What We Offer
          </div>
          
          {/* Services List */}
          <div 
            className=" mt-6 xl:mt-[54px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <ServicesList items={[
              {
                image: "/imgs/about/cloud-solutions.png",
                title: "Cloud Solutions",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/business-continuity.png",
                title: "IT Business Continuity & Disaster Recovery",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/cctv-security.png",
                title: "CCTV & Door Access Systems",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/it-infrastructure.png",
                title: "IT Infrastructure Services",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/networking-wifi.png",
                title: "Networking & Enterprise Wi-Fi",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/voice-solutions.png",
                title: "Voice Solutions (Cloud & On-Premise)",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/data-center.png",
                title: "Data Centre Setup & Relocation",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/hardware-maintenance.png",
                title: "Hardware Maintenance",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/laptop-repair.png",
                title: "Laptop Repair",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/equipment-rental.png",
                title: "Equipment Rental",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                image: "/imgs/about/structured-cabling.png",
                title: "Structured Cabling",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ]              } />
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="bg-white mt-20 relative">
          {/* Mobile Layout */}
          <div className="xl:hidden">
            {/* Top Image */}
            <div className="flex justify-start -mb-[22px]">
              <Image
                src="/imgs/about/left-commitment.png"
                alt="Top Commitment"
                width={196}
                height={356}
                className="w-[196px] h-[356px] object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col w-full max-w-[861px] mx-auto items-center gap-9 px-4">
              {/* Title */}
              <div 
                className="text-center font-['Plus_Jakarta_Sans'] text-[30px] font-semibold leading-[38px] text-[#181D27]"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Our <span className="text-[#0452D8]">Commitment</span>
              </div>
              
              {/* Description */}
              <div 
                className="self-stretch text-center text-[#181D27] font-['Plus_Jakarta_Sans'] text-sm font-normal leading-5"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                We are dedicated to providing business solutions that ensure the highest level of reliability, compatibility, and performance. Always at the forefront of technology, we enable the convergence of data, voice, and video through integrated wireless technology and cloud platforms. We are also committed to sustainability, implementing eco-friendly practices and solutions to reduce our environmental footprint.
              </div>
            </div>
            
            {/* Bottom Image */}
            <div className="flex justify-end mt-8">
              <Image
                src="/imgs/about/right-commitment.png"
                alt="Bottom Commitment"
                width={196}
                height={356}
                className="w-[196px] h-[356px] object-contain"
              />
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden xl:block">
            {/* Left Image */}
            <div className="absolute left-0 top-0">
              <Image
                src="/imgs/about/left-commitment.png"
                alt="Left Commitment"
                width={392}
                height={712}
                className="w-[392px] h-[712px] object-contain"
              />
            </div>
            
            {/* Right Image */}
            <div className="absolute right-0 top-0">
              <Image
                src="/imgs/about/right-commitment.png"
                alt="Right Commitment"
                width={392}
                height={712}
                className="w-[392px] h-[712px] object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col w-full max-w-[861px] pt-[196px] mx-auto items-center gap-9 relative z-10">
              {/* Title */}
              <div 
                className="text-center font-['Plus_Jakarta_Sans'] text-[60px] font-semibold leading-[72px] tracking-[-2%] text-[#181D27]"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Our <span className="text-[#0452D8]">Commitment</span>
              </div>
              
              {/* Description */}
              <div 
                className="self-stretch text-center text-[#181D27] font-['Plus_Jakarta_Sans'] text-lg font-normal leading-7"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                We are dedicated to providing business solutions that ensure the highest level of reliability, compatibility, and performance. Always at the forefront of technology, we enable the convergence of data, voice, and video through integrated wireless technology and cloud platforms. We are also committed to sustainability, implementing eco-friendly practices and solutions to reduce our environmental footprint.
              </div>
            </div>
          </div>
        </section>

        {/* Regional Presence Section */}
        <section className="pt-20 xl:mt-[192px]">
          <div className="flex flex-col w-full max-w-[1440px] mx-auto px-6 items-center gap-9">
            {/* Section Heading */}
            <div 
              className="text-center font-['Plus_Jakarta_Sans'] text-[30px] font-semibold leading-[38px] text-[#181D27] xl:text-[60px] xl:leading-[72px] xl:tracking-[-2%]"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Regional Presence
            </div>
            
            {/* Description */}
            <div 
              className="self-stretch text-center text-[#181D27] font-['Plus_Jakarta_Sans'] text-sm font-normal leading-5 xl:text-lg xl:leading-7"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              With operations in Singapore, Malaysia, and Indonesia, we support regional data communication needs, backed by strong partnerships with leading telecommunication service providers.
            </div>
          </div>
        </section>

        {/* Regional Image Section */}
        <section>
          <div 
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <Image
              src="/imgs/about/regional.png"
              alt="Regional Presence"
              width={1200}
              height={600}
              className="w-full max-w-[1200px] h-auto object-contain"
            />
          </div>
        </section>

        {/* CTA Banner */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <CTABanner
            title="Connect with Us"
            description={[
              "Explore our website to learn more about our services. Contact us today to discuss your technology needs and discover how Malifax Technologies can be your trusted technology partner."
            ]}
            buttonText="Contact us now!"
            buttonLink="/contact"
          />
        </div>

        {/* Footer */}
        <Footer />
      </>
    );
  } 