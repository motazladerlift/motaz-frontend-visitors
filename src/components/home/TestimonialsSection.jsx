import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Matías Vergara',
      rating: 5,
      text: 'Zeer tevreden van de dienst van Motaz ladderlift. Heel vriendelijk en proffesionele personeel, zeer behulpzaam. Ten eerste waren zij stipt op tijd, zij hebben onze spullen behandeld met veel zorg en de verhuis liep heel vlot.',
      date: '2 months ago'
    },
    {
      id: 2,
      name: 'Lara Maes',
      rating: 5,
      text: 'Erg tevreden over deze verhuis service. Vriendelijk personeel dat flexibel en professioneel werkt. Een aanrader! Zeker een professioneel team. Hebben me goed geholpen.',
      date: '3 months ago'
    },
    {
      id: 3,
      name: 'Danny Erreygers',
      rating: 5,
      text: 'Zeer tevreden op tijd, vriendelijk en heel behulpzaam. Zeker een aanrader!',
      date: '3 months ago'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="testimonials-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Wat onze klanten zeggen</h2>
              <div className="section-divider"></div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row>
            {testimonials.map((testimonial) => (
              <Col lg={4} md={6} key={testimonial.id} className="mb-4">
                <motion.div 
                  className="h-100"
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="testimonial-card h-100">
                    <Card.Body>
                      <div className="testimonial-rating mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </div>
                      <Card.Text className="testimonial-text">
                        "{testimonial.text}"
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="testimonial-footer">
                      <div className="d-flex align-items-center">
                        <div className="testimonial-avatar">
                          <img 
                            src="/images/avatar-default.svg" 
                            alt={testimonial.name}
                            className="avatar-image"
                          />
                        </div>
                        <div className="ms-3">
                          <h5 className="testimonial-name mb-0">{testimonial.name}</h5>
                          <small className="testimonial-date">{testimonial.date}</small>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <Row className="mt-4">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="review-text">
                <i className="bi bi-star-fill me-2"></i>
                Bedankt voor al uw positieve recensies!
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
