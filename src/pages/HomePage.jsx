import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AdvantagesSection from '../components/home/AdvantagesSection';
import AboutSection from '../components/home/AboutSection';
import LastMinuteSection from '../components/home/LastMinuteSection';
import ImageSliderSection from '../components/home/ImageSliderSection';
import LocationSection from '../components/common/LocationSection';
import ContactSectionComponent from '../components/common/ContactSectionComponent';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <AboutSection />
      <LastMinuteSection />
      <ImageSliderSection />
      {/* <LocationSection /> */}
      <ContactSectionComponent />
    </>
  );
};

export default HomePage;
