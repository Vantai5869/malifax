import React from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import ContentHeaderSection from '../../components/solutions/ContentHeaderSection';
import WhyChoose from '../../components/solutions/WhyChoose';
import GridSection from '../../components/solutions/GridSection';
import CTABanner from '../../components/CTABanner';
import Footer from '../../components/Footer';
import AccessSystemItem from '../../components/AccessSystemItem';
import LogoGrid from '@/app/components/solutions/LogoGrid';

export default function EquipmentRentalPage() {
  const whyChooseItems = [
    { 
      title: "Wide Selection", 
      description: "Access a broad range of high-quality equipment to support your business operations." 
    },
    { 
      title: "Flexibility", 
      description: "Choose from short-term or long-term rental options to suit your project requirements." 
    },
    { 
      title: "Cost-Effective", 
      description: "Save on capital expenditure by renting equipment instead of purchasing it outright." 
    },
    { 
      title: "Expert Support", 
      description: "Benefit from our knowledgeable team who can help you select the right equipment and provide ongoing support." 
    },
    { 
      title: "Reliable Equipment", 
      description: "Our equipment is regularly maintained and inspected to ensure optimal performance and safety." 
    }
  ];

  const benefitsItems = [
    { 
      title: "Operational Efficiency", 
      description: "Ensure your projects run smoothly with access to the right equipment." 
    },
    { 
      title: "Scalability", 
      description: "Easily scale your equipment needs up or down based on project demands." 
    },
    { 
      title: "Maintenance-Free", 
      description: "Enjoy the convenience of equipment that is regularly maintained and serviced by our team." 
    },
    { 
      title: "Quick Availability", 
      description: "Get the equipment you need quickly, with fast delivery and setup options." 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SolutionHero
        imageSrc="/imgs/solution/equipment-rental.png"
        title="Equipment Rental"
      />

      <ContentHeaderSection
        title="Equipment Rental"
        description="At Malifax Technologies, we offer a wide range of equipment rental services to meet the diverse needs of your business. Whether you need short-term rentals for a specific project or long-term solutions, our flexible rental options ensure you have the right equipment when you need it."
      />

      <section className="bg-white">
        <div className="mt-9 xl:mt-20 px-4 xl:px-0 max-w-[900px] mx-auto">
          <WhyChoose title="Our Equipment Rental Services?" />
        </div>
      </section>

      <GridSection items={whyChooseItems} />

      {/* Our Equipment Rental Services Section */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[60px] font-semibold text-center font-plus-jakarta text-[#0452D8] leading-[38px] lg:leading-[72px] tracking-[-1.2px]">
              Our Equipment Rental Services
            </h2>
          </div>

          {/* Single Service Card */}
          <div className="flex justify-center">
            <AccessSystemItem
              title="IT Equipment"
              description="Rent laptops, desktops, servers, and networking equipment to support your IT needs."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white mb-[35px]">
        <div className="flex flex-col xl:flex-row w-full max-w-[1194px] mx-auto pt-20 xl:pt-[80px] items-start gap-4 xl:gap-8 px-4 xl:px-0">
          {/* Left Side - Title */}
          <div className="w-full xl:w-auto xl:max-w-[366px] mb-8 xl:mb-0">
            <h2 className="text-[30px] xl:text-[60px] font-semibold text-center xl:text-left font-plus-jakarta leading-[38px] xl:leading-[72px] tracking-[-1.2px]">
              <span className="text-[#181D27]">Benefits of</span>{" "}
              <span className="text-[#0452D8]">Our Equipment Rental Services</span>
            </h2>
          </div>
          
          {/* Right Side - Benefits Cards Grid */}
          <div className="w-full xl:w-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 place-items-center xl:place-items-stretch">
              {benefitsItems.map((item, index) => (
                <AccessSystemItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
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
        title="Get Started with Malifax Equipment Rental Services"
        description="Equip your business with our reliable and cost-effective rental solutions. Contact us today to learn more about how we can support your equipment rental needs and help you achieve your business goals."
        buttonText="Contact us now!"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  );
}
