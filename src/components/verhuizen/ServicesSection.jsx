import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../assets/styles/ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: 'box-seam',
      title: 'In- en uitpakken',
      description: 'Wil je dat het verhuisbedrijf alles voor je inpakt en uitpakt. Of ga je hierin een gedeelte zelf doen.',
    },
    {
      icon: 'tools',
      title: 'Demontage / montage',
      description: 'Heb je grote kasten, bedden of andere meubels dan kun je er voor kiezen om deze te laten demonteren en in het nieuwe huis weer te laten monteren. Dit zijn allemaal opties. En het is maar net hoeveel je wilt doen of laten doen.',
    },
    {
      icon: 'droplet',
      title: 'Schoonmaakservice',
      description: 'Als alles in het nieuwe huis staat wil je eigenlijk gelijk daar aan de slag en heb je geen zin meer om in het oude huis schoon te maken. Dit is helemaal aan jezelf.',
    },
    {
      icon: 'trash',
      title: 'Afvoeren van goederen',
      description: 'Overbodige spullen, ook dit kunnen wij na de verhuizing voor u weg brengen.',
    }
  ];

  return (
    <section className="services-section">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <SectionTitle 
              title="De verhuisservice" 
              subtitle="Kies je er voor om alles uit handen te geven of ga je een gedeelte zelf doen. Dit bepaald voor een gedeelte te prijs."
              centered={true}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="services-list-container"
            >
              <ul className="services-list">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    className="service-list-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="service-content">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <Link to="/contact">
              <Button className="btn-primary-custom">RESERVEER NU</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
