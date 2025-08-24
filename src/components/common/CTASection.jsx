import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../assets/styles/CTASection.css';

const CTASection = ({ 
  title = "Klaar om uw verhuizing te plannen?", 
  description = "Neem vandaag nog contact met ons op voor een vrijblijvende offerte of om direct een reservering te maken.",
  primaryButtonText = "OFFERTE AANVRAGEN",
  secondaryButtonText = "BEKIJK PRIJZEN",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/prijzen"
}) => {
  return (
    <section className="cta-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="cta-buttons">
                <Link to={primaryButtonLink}>
                  <Button className="btn-primary-custom me-3">{primaryButtonText}</Button>
                </Link>
                <Link to={secondaryButtonLink}>
                  <Button variant="outline-primary" className="btn-outline-custom">{secondaryButtonText}</Button>
                </Link>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;
