import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../assets/styles/BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'clock',
      title: 'Tijdbesparend',
      description: 'Geen gesjouw via smalle trappen of liften.',
    },
    {
      icon: 'shield-check',
      title: 'Veilig',
      description: 'Vermijd rugklachten en schade aan muren of deuren.',
    },
    {
      icon: 'gear',
      title: 'Efficiënt',
      description: 'Tot wel 400 kg draagvermogen – ideaal voor meubels, keukens of bouwmateriaal.',
    },
    {
      icon: 'people',
      title: 'Professionele bediening inbegrepen',
      description: 'Onze ervaren operator zorgt voor een vlotte en veilige opstelling en bediening.',
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <SectionTitle 
              title="WAAROM EEN LADDERLIFT HUREN?" 
              centered={true}
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={5}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="/images/NewImges/imag1.jpeg" 
                alt="Ladderlift voordelen" 
                className="img-fluid rounded benefits-image" 
              />
            </motion.div>
          </Col>
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="benefits-list-container"
            >
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="benefit-list-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="benefit-content">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BenefitsSection;
