import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/styles/LadderliftHero.css';

const LadderliftHero = () => {
  const features = [
    { text: 'Voordelige tarieven' },
    { text: 'Geen borg' },
    { text: 'Geen verborgen kosten' },
    { text: 'Inclusief liften bediener' },
    { text: 'Binnen 24 uur beschikbaar' },
    { text: '24/7 Spoedservice' }
  ];

  return (
    <section className="ladderlift-hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <div className="hero-content">
              <h1 className="hero-title">VERHUISLIFT HUREN?</h1>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="hero-image-container">
              <img 
                src="/images/NewImges/imag1.jpeg" 
                alt="Ladderlift huren - Motaz Ladderlift" 
                className="img-fluid hero-image" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LadderliftHero; 