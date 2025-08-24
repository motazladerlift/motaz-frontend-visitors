import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../assets/styles/SpecificationsSection.css';

const SpecificationsSection = () => {
  const specifications = [
    {
      title: 'Maximale hoogte',
      description: 'Tot de 10e etage (afhankelijk van plaatsing)'
    },
    {
      title: 'Laadvermogen',
      description: 'Tot 300kg voor grote verhuislift op wagen'
    },
    {
      title: 'Bereik',
      description: 'Tot 30 meter horizontaal'
    },
    {
      title: 'Afmetingen plateau',
      description: '1.8m x 0.9m x 0.5m (lengte x breedte x hoogte)'
    },
    {
      title: 'Doorgang nodig',
      description: 'Minimaal 80cm breed'
    },
    {
      title: 'Stroomvoorziening',
      description: 'Eigen aggregaat, geen externe stroom nodig'
    }
  ];

  return (
    <section className="specifications-section" id="specifications">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <SectionTitle 
              title="TECHNISCHE SPECIFICATIES" 
              centered={true}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              className="specs-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {specifications.map((spec, index) => (
                <div className="spec-item" key={index}>
                  <h4>{spec.title}</h4>
                  <p>{spec.description}</p>
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SpecificationsSection;
