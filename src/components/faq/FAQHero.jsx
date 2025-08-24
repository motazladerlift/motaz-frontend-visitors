import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/styles/FAQHero.css';

const FAQHero = () => {
  return (
    <section className="faq-hero">
      <div className="overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Veelgestelde Vragen</h1>
              <p className="hero-subtitle">Vind hier antwoorden op de meest gestelde vragen.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQHero;
