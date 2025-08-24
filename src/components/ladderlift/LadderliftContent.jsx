import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../assets/styles/LadderliftContent.css';

const LadderliftContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  );
  
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    
    // Initial check
    checkTheme();
    
    // Add observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Cleanup
    return () => observer.disconnect();
  }, []);
  
  // Text color based on theme
  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#333333'
  };
  
  return (
    <section className="ladderlift-content">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>EEN VERHUISLIFT HUREN? SNEL & MAKKELIJK</h2>
              <p style={textStyle}>
                Goedkoop een betrouwbare verhuisliftenservice nodig? Dan bent u hier aan het juiste adres. 
                Bij ons kunt u vakkundig service verwachten en uw objecten omhoog laten liften. 
                Wij hebben al vele verhuizingen mogen ondersteunen, en doen dit dan ook graag.
              </p>
              <p style={textStyle}>
                Bekijk onze voordelige tarieven en vraag snel een persoonlijke offerte aan voor nog meer voordeel. 
                Profiteer van onze vroegboekkorting!
              </p>
              <div className="text-center mt-4 mb-5">
                <Link to="/contact">
                  <Button className="btn-primary-custom">RESERVEER NU</Button>
                </Link>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LadderliftContent;
