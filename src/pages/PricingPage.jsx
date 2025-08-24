import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingSection from '../components/pricing/PricingSection';
import ServiceAreaInfo from '../components/pricing/ServiceAreaInfo';
import AdditionalServices from '../components/pricing/AdditionalServices';
import ContactOptions from '../components/pricing/ContactOptions';

const PricingPage = () => {
  return (
    <>
      <PricingHero />
      <ServiceAreaInfo />
      <PricingSection 
        title="Ladderlift Tarieven" 
        subtitle="Alle prijzen zijn inclusief BTW en een professionele bediener" 
      />
      <AdditionalServices />
      <ContactOptions />
    </>
  );
};

export default PricingPage;