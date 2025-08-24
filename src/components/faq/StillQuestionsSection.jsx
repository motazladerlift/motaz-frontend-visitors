import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../assets/styles/StillQuestionsSection.css';

const StillQuestionsSection = () => {
  const contactOptions = [
    {
      icon: 'telephone',
      title: 'Bel Ons',
      description: 'Direct antwoord op uw vragen',
      action: 'tel:+32465105935',
      buttonText: '+32 469 11 91 19',
      buttonVariant: 'outline-light',
      delay: 0
    },
    {
      icon: 'envelope',
      title: 'Email Ons',
      description: 'We reageren binnen 24 uur',
      action: 'mailto:info@MotazLadderlift.be',
      buttonText: 'info@MotazLadderlift.be',
      buttonVariant: 'outline-light',
      delay: 0.1
    },
    {
      icon: 'chat-dots',
      title: 'Contactformulier',
      description: 'Stel uw vraag via ons formulier',
      action: '/contact',
      buttonText: 'CONTACT',
      buttonVariant: 'primary-custom',
      delay: 0.2
    }
  ];

  return (
    <section className="still-questions-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Nog steeds vragen?</h2>
              <p>Staat uw vraag er niet tussen of wilt u meer informatie? Neem gerust contact met ons op.</p>
              <div className="contact-options">
                {contactOptions.map((option, index) => (
                  <motion.div 
                    className="contact-option"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: option.delay }}
                    viewport={{ once: true }}
                  >
                    <i className={`bi bi-${option.icon}`}></i>
                    <h4>{option.title}</h4>
                    <p>{option.description}</p>
                    {option.buttonVariant === 'primary-custom' ? (
                      <Link to={option.action} className={`btn btn-${option.buttonVariant}`}>
                        {option.buttonText}
                      </Link>
                    ) : (
                      <a href={option.action} className={`btn btn-${option.buttonVariant}`}>
                        {option.buttonText}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StillQuestionsSection;
