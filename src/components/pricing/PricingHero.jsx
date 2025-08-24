import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/PricingHero.css';

const PricingHero = () => {
  const { config } = useSiteConfiguration();

  // Default values in case config is not loaded yet
  const companyName = config?.company?.name || "Motaz Ladderlift";
  const city = config?.address?.city || "Antwerpen";

  return (
    <section className="pricing-hero-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="pricing-hero-title">Onze Prijzen</h1>
              <p className="pricing-hero-subtitle">
                Transparante tarieven voor uw verhuizing in {city} en omgeving
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingHero;
