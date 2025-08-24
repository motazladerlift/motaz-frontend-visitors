import React from 'react';
import FAQHero from '../components/faq/FAQHero';
import FAQContent from '../components/faq/FAQContent';
import StillQuestionsSection from '../components/faq/StillQuestionsSection';

const FAQPage = () => {
  return (
    <div className="faq-page">
      <FAQHero />
      <FAQContent />
      <StillQuestionsSection />
    </div>
  );
};

export default FAQPage;
