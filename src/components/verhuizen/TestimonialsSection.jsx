import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from './TestimonialCard';
import '../../assets/styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Zeer professionele service. De verhuizers waren op tijd, vriendelijk en zorgvuldig met onze spullen. De ladderlift maakte het verhuizen van onze meubels naar de derde verdieping veel gemakkelijker.',
      author: 'Matías Vergara',
      rating: 5,
      delay: 0
    },
    {
      quote: 'Geweldige service! We hadden een last-minute verhuizing en Motaz Ladderlift kon ons binnen 24 uur helpen. De prijs was ook zeer redelijk voor de kwaliteit van de dienstverlening.',
      author: 'Lara Maes',
      rating: 5,
      delay: 0.1
    },
    {
      quote: 'Ik was bang dat mijn antieke piano beschadigd zou raken tijdens de verhuizing, maar het team van Motaz Ladderlift heeft hem perfect verplaatst met hun ladderlift. Zeer tevreden!',
      author: 'Danny Erreygers',
      rating: 5,
      delay: 0.2
    }
  ];

  return (
    <section className="testimonials-section">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <SectionTitle 
              title="Wat onze klanten zeggen" 
              centered={true}
            />
          </Col>
        </Row>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={4} className="mb-4" key={index}>
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                delay={testimonial.delay}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
