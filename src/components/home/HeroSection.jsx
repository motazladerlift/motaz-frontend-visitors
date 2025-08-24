import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/HeroSection.css';

const HeroSection = () => {
  const { config } = useSiteConfiguration();

  // Default values in case config is not loaded yet
  const companyName = config?.company?.name || "Motaz LADDERLIFT";
  const tagline = config?.company?.tagline || "Uw betrouwbare partner voor verhuis en ladderlift services";
  const phone = config?.contact?.phone || "+32469119119";

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} md={10} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {companyName}
              </motion.h1>
              
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {tagline}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button 
                  href={`tel:${phone}`} 
                  size="lg" 
                  className="hero-button mt-4"
                  aria-label="Reserveer nu"
                >
                  RESERVEER NU
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
