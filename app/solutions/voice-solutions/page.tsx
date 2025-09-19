import React from 'react';
import Image from 'next/image';
import SolutionHero from '../../components/solutions/SolutionHero';
import ContentHeaderSection from '../../components/solutions/ContentHeaderSection';
import WhyChoose from '../../components/solutions/WhyChoose';
import GridSection from '../../components/solutions/GridSection';
import CTABanner from '../../components/CTABanner';
import Footer from '../../components/Footer';
import AccessSystemItem from '../../components/AccessSystemItem';
import LogoGrid from '@/app/components/solutions/LogoGrid';

export default function VoiceSolutionsPage() {
  const gridItems = [
    { title: "Flexibility", description: "Choose between cloud-based and on-premise solutions to best fit your business requirements." },
    { title: "Scalability", description: "Easily scale your voice services as your business grows, without the need for significant infrastructure changes." },
    { title: "Advanced Features", description: "Benefit from features like call routing, voicemail, conferencing, and integration with other business applications." },
    { title: "Cost-Efficiency", description: "Reduce costs with our competitive pricing models and eliminate the need for expensive hardware with cloud solutions." },
    { title: "Reliability", description: "Enjoy high-quality, reliable voice services with minimal downtime and robust support." },
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        imageSrc="/imgs/solution/voice-solutions.png"
        title="Voice Solutions"
      />

      <ContentHeaderSection
        title="Voice Solutions (Cloud & On-Premise)"
        description="At Malifax Technologies, we offer versatile voice solutions that cater to the unique needs of your business. Whether you prefer a cloud-based system or an on-premise setup, our solutions ensure seamless communication, enhanced collaboration, and robust security."
      />
       <section className="bg-white">
        <div className="mt-9 xl:mt-18 px-4 xl:px-0 max-w-[900px] mx-auto">   
          <WhyChoose title="Our Managed Services?" />
        </div>
      </section>

      <GridSection items={gridItems} />


      {/* Our Managed Services Section */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[60px] font-semibold text-center font-plus-jakarta text-[#0452D8] leading-[38px] lg:leading-[72px] tracking-[-1.2px]">
              Our Managed Services
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 place-items-center xl:place-items-stretch">
            <AccessSystemItem
              title="Network Management"
              description="Ensure your network is always up and running with our comprehensive network management services."
            />
            <AccessSystemItem
              title="Cloud Management"
              description="Manage and optimize your cloud environments for enhanced performance and cost-efficiency."
            />
            <AccessSystemItem
              title="Backup and Disaster Recovery"
              description="Protect your data and ensure quick recovery with our reliable backup and disaster recovery solutions."
            />
            <AccessSystemItem
              title="Server Management"
              description="Maintain optimal performance and availability of your servers with our proactive server management solutions."
            />
            <AccessSystemItem
              title="Endpoint Management"
              description="Secure and manage all endpoint devices, including desktops, laptops, and mobile devices."
            />
            <AccessSystemItem
              title="Help Desk Support"
              description="Provide your employees with 24/7 access to our help desk for prompt resolution of IT issues."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white">
        <div className="flex flex-col xl:flex-row w-full max-w-[1194px] mx-auto pt-20 xl:pt-[80px] items-start gap-9 xl:gap-[135px] px-4 xl:px-0">
          {/* Left Side - Title */}
          <div className="w-full xl:w-auto xl:max-w-[355px] mb-8 xl:mb-0">
            <h2 className="text-[30px] xl:text-[60px] font-semibold text-center xl:text-left font-plus-jakarta leading-[38px] xl:leading-[72px] tracking-[-1.2px]">
              <span className="text-[#0452D8]">Benefits of</span>{" "}
              <span className="text-[#181D27]">Our Managed Services</span>
            </h2>
          </div>
          
          {/* Right Side - Benefits Cards Grid */}
          <div className="w-full xl:w-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 place-items-center xl:place-items-stretch">
              <AccessSystemItem
                title="Improved Performance"
                description="Enhance the performance and reliability of your IT systems."
              />
              <AccessSystemItem
                title="Reduced Downtime"
                description="Minimize downtime with proactive monitoring and quick issue resolution."
              />
              <AccessSystemItem
                title="Increased Productivity"
                description="Allow your team to focus on strategic initiatives rather than day-to-day IT management."
              />
              <AccessSystemItem
                title="Future-Proofing"
                description="Stay ahead of technological advancements with our up-to-date IT solutions and expertise."
              />
              <AccessSystemItem
                title="Peace of Mind"
                description="Enjoy peace of mind knowing that your IT infrastructure is in capable hands."
              />
            </div>
          </div>
        </div>
      </section>

      {(() => {
        const iconsDesktop = [
          { position: 3, src: '/svgs/solution/voice-i1.svg', alt: 'Logo 1', size: 1 },
          { position: 9, src: '/svgs/solution/voice-i2.svg', alt: 'Logo 2', size: 2 },
          { position: 13, src: '/svgs/solution/voice-i3.svg', alt: 'Logo 3', size: 2 },
          { position: 17, src: '/svgs/solution/voice-i4.svg', alt: 'Logo 4', size: 2 },
          { position: 22, src: '/svgs/solution/voice-i5.svg', alt: 'Logo 5', size: 1 },
          { position: 27, src: '/svgs/solution/voice-i6.svg', alt: 'Logo 6', size: 2 },
          { position: 32, src: '/svgs/solution/voice-i7.svg', alt: 'Logo 7', size: 2 },
        ];
        const iconsMobile = [
          { position: 5, src: '/svgs/solution/voice-i1.svg', alt: 'Logo 1', size: 1 },
          { position: 0, src: '/svgs/solution/voice-i2.svg', alt: 'Logo 2', size: 2 },
          { position: 13, src: '/svgs/solution/voice-i3.svg', alt: 'Logo 3', size: 2 },
          { position: 18, src: '/svgs/solution/voice-i4.svg', alt: 'Logo 4', size: 2 },
          { position: 9, src: '/svgs/solution/voice-i5.svg', alt: 'Logo 5', size: 1 },
          // { position: 25, src: '/svgs/solution/voice-i6.svg', alt: 'Logo 6', size: 2 },
          { position: 25, src: '/svgs/solution/voice-i7.svg', alt: 'Logo 7', size: 2 },
        ];
        return (
          <>
            <div className="hidden xl:block">
              <LogoGrid
                icons={iconsDesktop}
                containerClassName="mt-[48px] mb-14 xl:mt-[81px] mb-[29px] xl:mb-[72px]"
              />
            </div>
            <div className="block xl:hidden">
              <LogoGrid
                icons={iconsMobile}
                totalSlots={27}
                containerClassName="mt-[48px] mb-14 xl:mt-[81px] mb-[29px] xl:mb-[72px]"
              />
            </div>
          </>
        );
      })()}


      <CTABanner
        title="Get Started with Malifax Technologies Managed Services"
        description="Transform your business with our comprehensive managed services. Contact us today to learn more about how we can help you optimize your IT infrastructure and focus on your core business activities."
        buttonText="Contact us now!"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  );
}
