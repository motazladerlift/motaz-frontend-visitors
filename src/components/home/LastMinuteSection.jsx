import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/LastMinuteSection.css';

const LastMinuteSection = () => {
  const { config } = useSiteConfiguration();

  // Default values in case config is not loaded yet
  const phone = config?.contact?.phone || "+32469119119";
  const phoneDisplay = config?.contact?.phone_display || "0469 119 119";

  return (
    <section className="last-minute-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Last minute uw ladderlift huren?</h2>
              <div className="section-divider mb-4"></div>
              
              <p className="last-minute-text">
                Wij realiseren ons, dat vaak op het allerlaatste moment pas blijkt, dat de verhuizing 
                niet zonder verhuislift mogelijk is. Wij zijn het dan ook gewend om op het laatste 
                moment gebeld te worden. Deze zogenaamde Last Minute klussen doen wij graag en 
                rekenen hiervoor dan ook géén toeslag.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-4"
              >
                <a 
                  href={`tel:${phone}`} 
                  className="contact-link last-minute-contact-link"
                  onClick={(e) => {
                    // Ensure the link works on all devices
                    window.location.href = `tel:${phone}`;
                  }}
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Bel direct: {phoneDisplay}
                </a>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LastMinuteSection;
