import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../assets/styles/WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: 'trophy',
      title: 'Ervaring',
      description: 'Wij hebben al vele verhuizingen succesvol afgerond, en wij weten hoe we uw verhuizing ook tot een succes kunnen maken.',
    },
    {
      icon: 'lightning',
      title: 'Snelle reactie',
      description: 'Na uw aanvraag nemen wij binnen 24 uur contact met u op om uw verhuizing te bespreken.',
    },
    {
      icon: 'emoji-smile',
      title: 'Service met een lach',
      description: 'Humor is de beste remedie tegen stress, en dat weten wij als geen ander. Daarom zorgen wij ervoor dat er op uw verhuisdag zeker een glimlach vanaf mag.',
    },
    {
      icon: 'file-earmark-text',
      title: 'Kosteloze offerte',
      description: 'Wij nemen uw wensen en behoeften zorgvuldig in overweging. Op basis daarvan maken wij een offerte op maat.',
    }
  ];

  return (
    <section className="why-choose-us-section">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <SectionTitle 
              title="Voel je snel thuis in je eigen huis" 
              subtitle="Waarom kiest u voor ons."
              centered={true}
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="features-list-container"
            >
              <ul className="features-list">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="feature-list-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
          <Col md={5}>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="/images/NewImges/imag3.jpeg" 
                alt="Waarom kiezen voor ons" 
                className="img-fluid rounded features-image" 
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
