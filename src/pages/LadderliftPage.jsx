import React from 'react';
import CTASection from '../components/common/CTASection';
import LadderliftHero from '../components/ladderlift/LadderliftHero';
import LadderliftContent from '../components/ladderlift/LadderliftContent';
import BenefitsSection from '../components/ladderlift/BenefitsSection';
import SpecificationsSection from '../components/ladderlift/SpecificationsSection';
import '../assets/styles/LadderliftPage.css';

const LadderliftPage = () => {
  return (
    <div className="ladderlift-page">
      <LadderliftHero />
      <LadderliftContent />
      <BenefitsSection />
      <SpecificationsSection />

      {/* Call to Action */}
      <CTASection 
        title="KLAAR OM UW VERHUISLIFT TE RESERVEREN?"
        subtitle="Neem vandaag nog contact met ons op voor een vrijblijvende offerte."
        buttonText="OFFERTE AANVRAGEN"
        buttonLink="/contact"
      />
    </div>
  );
};

export default LadderliftPage;
