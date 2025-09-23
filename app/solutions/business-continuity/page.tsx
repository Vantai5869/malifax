"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoGrid from '../../components/solutions/LogoGrid';
import SolutionHero from '../../components/solutions/SolutionHero';
import CTABanner from '../../components/CTABanner';
import ContentHeaderSection from '../../components/solutions/ContentHeaderSection';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/solutions/ServiceCard';

export default function BusinessContinuityPage() {
  return (
    <div className="min-h-screen">
      <SolutionHero
        imageSrc="/imgs/solution/business-conti.png"
        title="Business Continuity"
        rightMaxWidth="max-w-[351px]"
        rightMinWidth="min-w-[180px]"
      />

      <ContentHeaderSection
        title="IT Business Continuity and Disaster"
        title2="Recovery Solutions"
        description="In today’s digital age, ensuring the continuity of your business operations and the swift recovery from any disruptions is crucial. At Malifax Technologies, we provide robust IT Business Continuity and Disaster Recovery (BCDR) solutions to safeguard your business against unforeseen events."
      />

      <section className="mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-8  max-w-[1194px] mx-auto px-4 xl:px-0">
          <div className="w-full xl:w-[458px] flex flex-col items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-start">
              <div className="text-[#0452D8] font-['Plus_Jakarta_Sans'] max-w-[191px] xl:max-w-none text-3xl  xl:text-4xl lg:text-6xl xl:text-[60px] font-semibold leading-[38px] lg:leading-[60px] xl:leading-[72px] lg:tracking-[-1.08px] xl:tracking-[-1.2px]">
                Malifax Technologies
                <p className='text-[#181D27]'>Offerings</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="self-stretch text-[#181D27] font-['Plus_Jakarta_Sans'] text-[14px] lg:text-[18px] font-normal leading-[20px] lg:leading-[28px] mt-9">
              Malifax Technologies offers the following solutions and services in helping businesses protect against data loss.
            </motion.div>
          </div>

          <div className="w-full xl:w-[704px] flex flex-col gap-4">
            {(() => {
              const services = [
                { title: "Backup software", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Network access storage (NAS)", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Co-location services", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Storage area network (SAN)", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Cloud storage", iconSrc: "/svgs/tag36_36.svg" },
                { title: "Tape storage", iconSrc: "/svgs/tag36_36.svg" }
              ];

              const rows = [];
              for (let i = 0; i < services.length; i += 2) {
                const rowServices = services.slice(i, i + 2);
                rows.push(
                  <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 * i }} className="flex flex-col lg:flex-row gap-4">
                    {rowServices.map((service, index) => (
                      <ServiceCard
                        key={i + index}
                        title={service.title}
                        iconSrc={service.iconSrc}
                      />
                    ))}
                  </motion.div>
                );
              }

              return rows;
            })()}
          </div>
        </motion.div>

        {(() => {
          const iconsDesktop = [
            { position: 3, src: '/svgs/solution/business-i1.svg', alt: 'Logo 1', size: 1 },
            { position: 8, src: '/svgs/solution/business-i2.svg', alt: 'Logo 2', size: 2 },
            { position: 13, src: '/svgs/solution/business-i3.svg', alt: 'Logo 3', size: 1 },
            { position: 18, src: '/svgs/solution/business-i4.svg', alt: 'Logo 4', size: 2 },
            { position: 23, src: '/svgs/solution/business-i5.svg', alt: 'Logo 5', size: 1 },
            { position: 26, src: '/svgs/solution/business-i6.svg', alt: 'Logo 6', size: 2 },
            { position: 29, src: '/svgs/solution/business-i7.svg', alt: 'Logo 7', size: 1 },
            { position: 33, src: '/svgs/solution/business-i8.svg', alt: 'Logo 8', size: 2 },
          ];
          const iconsMobile = [
            { position: 9, src: '/svgs/solution/business-i1.svg', alt: 'Logo 1', size: 1 },
            { position: 25, src: '/svgs/solution/business-i2.svg', alt: 'Logo 2', size: 2 },
            { position: 5, src: '/svgs/solution/business-i3.svg', alt: 'Logo 3', size: 1 },
            { position: 18, src: '/svgs/solution/business-i4.svg', alt: 'Logo 4', size: 2 },
            { position: 32, src: '/svgs/solution/business-i5.svg', alt: 'Logo 5', size: 1 },
            { position: 13, src: '/svgs/solution/business-i6.svg', alt: 'Logo 6', size: 2 },
            { position: 33, src: '/svgs/solution/business-i7.svg', alt: 'Logo 7', size: 1 },
            { position: 0, src: '/svgs/solution/business-i8.svg', alt: 'Logo 8', size: 2 },
          ];
          return (
            <>
              <div className="hidden xl:block">
                <LogoGrid
                  icons={iconsDesktop}
                  totalSlots={36}
                  containerClassName="mt-[47px] mb-14"
                />
              </div>
              <div className="block xl:hidden">
                <LogoGrid
                  icons={iconsMobile}
                  totalSlots={36}
                  containerClassName="mt-[47px] mb-14"
                />
              </div>
            </>
          );
        })()}
      </section>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <CTABanner
          description="Protect your business with our comprehensive IT Business Continuity and Disaster Recovery solutions. Contact us today to learn more about how we can help you ensure the continuity and resilience of your business operations."
          buttonText="Contact us now!"
          buttonLink="/contact"
        />
      </motion.div>

      <Footer />
    </div>
  );
}
