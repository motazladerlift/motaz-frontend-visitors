import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/styles/LocationMap.css';

const LocationMap = () => {
  return (
    <section className="location-map-section py-5" id="location">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Onze Locatie</h2>
              <div className="section-divider mb-4 mx-auto"></div>
              <p className="location-text mb-4">
                Bezoek ons op onderstaand adres of neem contact op voor meer informatie.
              </p>
            </motion.div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="address-display-container rounded shadow p-5 text-center"
            >
              <div className="location-icon mb-4">
                <i className="bi bi-geo-alt-fill" style={{ fontSize: '3rem' }}></i>
              </div>
              <h3 className="mb-3">Motaz Ladderlift</h3>
              <p className="mb-2">Antwerpen, België</p>
            </motion.div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col md={6} className="mb-3 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="address-card p-4 h-100"
            >
              <h4><i className="bi bi-geo-alt-fill me-2"></i>Adres</h4>
              <p className="mb-0">Motaz Ladderlift</p>
              <p>Antwerpen, België</p>
            </motion.div>
          </Col>
          
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="contact-card p-4 h-100"
            >
              <h4><i className="bi bi-telephone-fill me-2"></i>Contact</h4>
              <p className="mb-0">Telefoon: <a href="tel:+32469119119">+32 469 11 91 19</a></p>
              <p>Email: <a href="mailto:info@motazladderlift.be">info@motazladderlift.be</a></p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LocationMap;
