'use client';
import HeroBackground from "../components/HeroBackground";
import Tag from "../components/Tag";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
import FloatingElement from "../components/FloatingElement";
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <HeroBackground>
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen xl:min-h-[1024px] px-6 pb-11 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Images - Floating Spheres */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Sphere 0 */}
          <FloatingElement 
            className="absolute top-[51px] left-[19px] md:top-[51px] md:left-[200px] xl:top-[52px] xl:left-[750px] opacity-100"
            delay={0.2}
            intensity={8}
          >
            <Image
              src="/imgs/home-img0.png"
              alt="Home Image 0"
              width={113}
              height={107}
              className="w-[113px] h-[107px] md:w-[140px] md:h-[132px] lg:w-auto lg:h-auto lg:max-w-[180px] object-contain"
            />
          </FloatingElement>
          
          {/* Sphere 1 - Hidden on desktop */}
          <motion.div 
            className="absolute top-8 lg:top-16 right-0 lg:right-[60px] transform -rotate-[-9.24deg] opacity-100 overflow-hidden lg:hidden"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/imgs/home-img1.png"
              alt="Home Image 1"
              width={661}
              height={674}
              className="w-[264.77px] h-[269.89px] md:w-[320px] md:h-[325px] object-contain"
            />
          </motion.div>
          
          {/* Sphere 2 */}
          <FloatingElement 
            className="absolute bottom-[54px] left-[80px] md:bottom-[80px] md:left-[200px] xl:bottom-[90px] xl:left-[511px] opacity-100"
            delay={0.8}
            intensity={6}
          >
            <Image
              src="/imgs/home-img2.png"
              alt="Home Image 2"
              width={185}
              height={176}
              className="w-auto h-auto max-w-[120px] lg:max-w-[185px]"
            />
          </FloatingElement>
          
          {/* Sphere 3 */}
          <FloatingElement 
            className="absolute bottom-[17px] right-[20px] md:bottom-[22px] md:right-[50px] xl:bottom-[28px] xl:right-[80px] opacity-100"
            delay={1.1}
            intensity={10}
          >
            <Image
              src="/imgs/home-img3.png"
              alt="Home Image 3"
              width={210}
              height={224}
              className="w-auto h-auto max-w-[140px] lg:max-w-[210px]"
            />
          </FloatingElement>
        </div>

        {/* Unified responsive layout */}
        <div className="mt-20 max-w-[1155px] flex w-full relative z-10 flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="max-w-[340px] flex flex-col justify-center items-start gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Tag text="CONTACT US" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-white font-['Plus_Jakarta_Sans'] text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-left lg:text-[72px] lg:leading-[90px] lg:tracking-[-1.44px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our office
            </motion.h1>

            {/* Contact Details */}
            <motion.div 
              className="self-stretch text-white font-['Plus_Jakarta_Sans'] text-sm font-normal leading-5 lg:text-lg lg:font-medium lg:leading-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>76 Playfair Road, #06-03 LHK2 Building, Singapore 367996</p>
              <p>enquiry@malifax.com.sg</p>
              <p>(65) 6383 3833</p>
              <p>(65) 6383 2022</p>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div 
              className="flex gap-4 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/svgs/fb-icon.svg" alt="Facebook" width={48} height={48} className="w-12 h-12" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/svgs/linkin-icon.svg" alt="LinkedIn" width={48} height={48} className="w-12 h-12" />
              </motion.a>
              <motion.a 
                href="https://skype.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/svgs/s-social-icon.svg" alt="Skype" width={48} height={48} className="w-12 h-12" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="flex w-full lg:w-[581px] p-3 flex-col items-end gap-3 rounded-[22px] outline outline-1 outline-[#E9EAEB] bg-[#FDFDFD]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <div className="flex p-4 lg:p-6 flex-col items-start gap-4 self-stretch rounded-4xl outline outline-1 outline-[#E9EAEB] bg-gradient-to-br from-white to-[#ECF9FF]">
              <form className="w-full space-y-4">
                {/* Full Name Input */}
                <motion.div 
                  className="flex flex-col items-start gap-[6px] self-stretch"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="text-[#414651] font-['Plus_Jakarta_Sans'] text-sm font-medium leading-5">Full name</label>
                  <motion.input
                    type="text"
                    placeholder="Your full name"
                    className="flex px-[14px] py-[10px] items-center gap-2 self-stretch rounded-lg border border-[#D5D7DA] bg-white shadow-[0_1px_2px_0_rgba(10,69,158,0.05)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div 
                  className="flex flex-col items-start gap-[6px] self-stretch"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <label className="text-[#414651] font-['Plus_Jakarta_Sans'] text-sm font-medium leading-5">Email address</label>
                  <motion.input
                    type="email"
                    placeholder="Your email address"
                    className="flex px-[14px] py-[10px] items-center gap-2 self-stretch rounded-lg border border-[#D5D7DA] bg-white shadow-[0_1px_2px_0_rgba(10,69,158,0.05)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div 
                  className="flex flex-col items-start gap-[6px] self-stretch"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label className="text-[#414651] font-['Plus_Jakarta_Sans'] text-sm font-medium leading-5">Your message</label>
                  <motion.textarea
                    placeholder="Enter your message..."
                    rows={6}
                    className="flex px-[14px] py-[10px] items-center gap-2 self-stretch rounded-lg border border-[#D5D7DA] bg-white shadow-[0_1px_2px_0_rgba(10,69,158,0.05)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  ></motion.textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="flex px-[18px] py-[10px] justify-center items-center gap-2 rounded-lg border border-[#005FFA] bg-[#005FFA] text-white font-semibold shadow-[0_1px_2px_0_rgba(10,69,158,0.05)] hover:bg-[#0052E6] hover:border-[#0052E6] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(0, 95, 250, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </HeroBackground>
  );
} 