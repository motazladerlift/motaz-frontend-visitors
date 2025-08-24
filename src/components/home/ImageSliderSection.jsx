import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/styles/ImageSliderSection.css';

const ImageSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of 6 images with captions for the slider using images from the ladderlift directory
  const slides = [
    {
      image: '/images/ladderlift/Generated Image May 21, 2025 - 1_53PM.jpeg',
      caption: 'Professionele ladderlift service',
      description: 'Veilig en efficiënt verhuizen van grote meubels'
    },
    {
      image: '/images/ladderlift/WhatsApp Image 2025-05-20 at 3.48.02 PM.jpeg',
      caption: 'Bereik tot 30 meter hoogte',
      description: 'Ideaal voor appartementen en hoogbouw'
    },
    {
      image: '/images/ladderlift/WhatsApp Image 2025-05-20 at 3.48.15 PM.jpeg',
      caption: 'Verhuizen zonder zorgen',
      description: 'Laat onze experts het zware werk doen'
    },
    {
      image: '/images/ladderlift/WhatsApp Image 2025-05-20 at 3.48.36 PM.jpeg',
      caption: 'Snelle en betrouwbare service',
      description: 'Altijd op tijd en volgens afspraak'
    },
    {
      image: '/images/ladderlift/WhatsApp Image 2025-05-20 at 3.56.35 PM.jpeg',
      caption: 'Veilig transport van waardevolle items',
      description: 'Gespecialiseerd in het verplaatsen van kwetsbare goederen'
    },
    {
      image: '/images/ladderlift/WhatsApp Image 2025-05-20 at 3.56.40 PM.jpeg',
      caption: 'Beschikbaar in heel België',
      description: 'Flexibele planning en concurrerende prijzen'
    },
  ];

  // Function to handle automatic sliding
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);
  
  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  // Pause auto-sliding when user interacts with the slider
  const pauseAutoSlide = () => {
    // This function could be expanded to pause the auto-sliding
    // Currently just a placeholder for future enhancement
  };

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAutoSlide();
  };

  const handleNextSlide = () => {
    nextSlide();
    pauseAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    pauseAutoSlide();
  };

  return (
    <section className="image-slider-section py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Onze Projecten</h2>
              <div className="section-divider"></div>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="slider-container"
            >
              <div className="slider">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
                  >
                    <img src={slide.image} alt={slide.caption} />
                    <div className="slide-content">
                      <h3 className="slide-caption">{slide.caption}</h3>
                      <p className="slide-description">{slide.description}</p>
                    </div>
                  </div>
                ))}
                
                <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous slide">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button className="slider-arrow next" onClick={handleNextSlide} aria-label="Next slide">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
              
              <div className="slider-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageSliderSection;
