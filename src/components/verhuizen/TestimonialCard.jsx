import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../../assets/styles/TestimonialCard.css';

const TestimonialCard = ({ quote, author, rating, delay = 0 }) => {
  // Generate star rating
  const stars = Array(rating).fill(0).map((_, i) => (
    <i key={i} className="bi bi-star-fill"></i>
  ));

  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="testimonial-content">
        <i className="bi bi-quote quote-icon"></i>
        <p>{quote}</p>
        <div className="testimonial-author">
          <h4>{author}</h4>
          <div className="rating">
            {stars}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  delay: PropTypes.number
};

export default TestimonialCard;
