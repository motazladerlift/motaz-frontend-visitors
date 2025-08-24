import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import '../../assets/styles/InfoBanner.css';

const InfoBanner = () => {
  return (
    <section className="pricing-info-banner">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="info-banner-content"
            >
              <FaInfoCircle className="info-icon" />
              <p>
                Onze tarieven zijn geldig in Antwerpen (10km): Antwerpen, Berchem, Borgerhout, Borsbeek, 
                Deurne, Ekeren, Hoboken, Linkeroever, Merksem, Mortsel, Schoten, Wijnegem, Wilrijk, Wommelgem.
                Voor langere afstanden, contacteer ons.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoBanner;
