import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/ContactOptions.css';

const ContactOptions = () => {
  const { config } = useSiteConfiguration();

  // Default values in case config is not loaded yet
  const phone = config?.contact?.phone || "+32 469 11 91 19";
  const phoneDisplay = config?.contact?.phone_display || "0469 119 119";
  const email = config?.contact?.email || "motazladerlift@gmail.com";
  const emailDisplay = config?.contact?.email_display || "motazladerlift@gmail.com";
  const whatsapp = config?.contact?.whatsapp || "https://wa.me/message/27GB2V4YVAZ4E1";

  return (
    <section className="contact-options-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Neem Contact Op</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Heeft u vragen over onze prijzen of wilt u een reservering maken? Neem contact met ons op.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="contact-cards-container">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <FaPhone />
                </div>
                <div className="contact-card-content">
                  <h3>Bel Ons</h3>
                  <p>Direct antwoord op al uw vragen</p>
                  <a href={`tel:${phone}`} className="contact-card-link">
                    {phoneDisplay} <FaArrowRight className="arrow-icon" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-card-content">
                  <h3>Email Ons</h3>
                  <p>We reageren binnen 24 uur</p>
                  <a href={`mailto:${email}`} className="contact-card-link">
                    {emailDisplay} <FaArrowRight className="arrow-icon" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-card-content">
                  <h3>WhatsApp</h3>
                  <p>Stuur ons een bericht of foto's</p>
                  <a href={whatsapp} className="contact-card-link">
                    WhatsApp <FaArrowRight className="arrow-icon" />
                  </a>
                </div>
              </motion.div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="reservation-banner"
            >
              <div className="reservation-content">
                <h3>Klaar om te reserveren?</h3>
                <p>Vul ons contactformulier in en we nemen zo snel mogelijk contact met u op.</p>
              </div>
              <Link to="/contact" className="reservation-button">
                RESERVEER NU <FaArrowRight />
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactOptions;
