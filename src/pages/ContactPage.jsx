import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../assets/styles/ContactPage.css';
import useSiteConfiguration from '../hooks/useSiteConfiguration';

const ContactPage = () => {
  const { config } = useSiteConfiguration();

  // Default values in case config is not loaded yet
  const phone = config?.contact?.phone || "+32 469 11 91 19";
  const email = config?.contact?.email || "motazladerlift@gmail.com";
  const emailDisplay = config?.contact?.email_display || "motazladerlift@gmail.com";
  const street = config?.address?.street || "Frans Adriaenssensstraat 25";
  const postalCode = config?.address?.postal_code || "2170";
  const city = config?.address?.city || "Antwerpen";
  const country = config?.address?.country || "België";

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="overlay"></div>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1>Contacteer Ons</h1>
                <p className="hero-subtitle">Heeft u vragen of wilt u een offerte aanvragen? Neem contact met ons op.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location Section */}
      <section className="location-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="section-title">Onze Locatie</h2>
                <div className="section-divider mb-4 mx-auto"></div>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="address-display p-4 rounded shadow"
              >
                <i className="bi bi-geo-alt-fill mb-3" style={{ fontSize: '3rem' }}></i>
                <h3>{street}</h3>
                <p className="mb-0">{postalCode} {city}, {country}</p>
                <div className="contact-info mt-4">
                  <p><i className="bi bi-telephone-fill me-2"></i> {phone}</p>
                  <p><i className="bi bi-envelope-fill me-2"></i> {emailDisplay}</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
