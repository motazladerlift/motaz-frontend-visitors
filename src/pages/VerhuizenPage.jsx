import React from 'react';
import CTASection from '../components/common/CTASection';
import VerhuizenHero from '../components/verhuizen/VerhuizenHero';
import WhyChooseUsSection from '../components/verhuizen/WhyChooseUsSection';
import ServicesSection from '../components/verhuizen/ServicesSection';
import CostInfoSection from '../components/verhuizen/CostInfoSection';
import '../assets/styles/VerhuizenPage.css';

const VerhuizenPage = () => {
  return (
    <div className="verhuizen-page">
      <VerhuizenHero />

      <WhyChooseUsSection />

      <ServicesSection />

      <CostInfoSection />

      {/* Call to Action */}
      <CTASection 
        title="Klaar om uw verhuizing te plannen?"
        subtitle="Neem vandaag nog contact met ons op voor een vrijblijvende offerte of om direct een reservering te maken."
        buttonText="OFFERTE AANVRAGEN"
        buttonLink="/contact"
      />
    </div>
  );
};

export default VerhuizenPage;
