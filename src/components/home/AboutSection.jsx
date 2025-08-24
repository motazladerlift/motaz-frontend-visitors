import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/AboutSection.css';

const AboutSection = () => {
  const { config } = useSiteConfiguration();

  // Default values in case config is not loaded yet
  const phone = config?.contact?.phone || "+32469119119";

  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="about-image"
            >
              <img 
                src="/images/ladderlift/WhatsApp Image 2025-05-20 at 3.48.40 PM.jpeg" 
                alt="Motaz Ladderlift in actie" 
                className="img-fluid rounded shadow"
              />
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="about-content"
            >
              <h2 className="section-title">Ladderlift huren</h2>
              <div className="section-divider mb-4"></div>
              
              <p className="about-text">
                Professionele ladderlift verhuur in Antwerpen en omgeving. 
                Wij bieden betrouwbare en veilige ladderlift services voor al uw verhuisbehoeften.
              </p>
              
              <div className="mt-4">
                <Button 
                  href={`tel:${phone}`} 
                  variant="outline-primary" 
                  className="about-button me-3"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Bel direct
                </Button>
                
                <Button 
                  href="/contact" 
                  variant="primary" 
                  className="about-button"
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  Offerte aanvragen
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
