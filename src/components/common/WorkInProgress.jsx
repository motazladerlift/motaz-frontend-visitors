import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const WorkInProgress = () => {
  return (
    <div className="work-in-progress-overlay">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="work-in-progress-content"
            >
              <div className="text-center mb-4">
                <img 
                  src="/images/logo.svg" 
                  alt="Motaz Ladderlift" 
                  className="img-fluid" 
                  style={{ maxWidth: '200px' }}
                />
              </div>
              
              <h1 className="mb-3">موقع قيد التطوير</h1>
              <h2 className="mb-4">Website Under Construction</h2>
              
              <Row className="mb-4">
                <Col md={6} className="mb-4 mb-md-0">
                  <Image 
                    src="/images/furniture-hoist.jpg" 
                    alt="Furniture Hoist" 
                    fluid 
                    rounded 
                    className="shadow-sm"
                  />
                </Col>
                <Col md={6}>
                  <Image 
                    src="/images/ladderlift/WhatsApp Image 2025-05-20 at 3.48.40 PM.jpeg" 
                    alt="Ladderlift Huren" 
                    fluid 
                    rounded 
                    className="shadow-sm"
                  />
                </Col>
              </Row>
              
              <p className="mb-3">
                نحن نعمل على إعادة تصميم موقع Motaz Ladderlift باستخدام React وVite وBootstrap 5.
                سيكون الموقع الجديد متاحًا قريبًا بتصميم عصري وتجربة مستخدم محسنة.
              </p>
              <p className="mb-4">
                We are working on redesigning the Motaz Ladderlift website using React, Vite, and Bootstrap 5.
                The new website will be available soon with a modern design and improved user experience.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center">
                <Button 
                  href="https://Motazladderlift.be/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="me-3 mb-3"
                >
                  <i className="bi bi-globe me-2"></i>
                  زيارة الموقع الحالي
                </Button>
                <Button 
                  href="tel:+32469119119" 
                  variant="outline-primary"
                  size="lg"
                  className="mb-3"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  +32 469 11 91 19
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorkInProgress;
