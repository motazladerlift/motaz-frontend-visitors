import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../../assets/styles/FeatureCard.css';

const FeatureCard = ({ icon, title, description, delay = 0.1 }) => {
  return (
    <motion.div 
      className="feature-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="icon-wrapper">
        <i className={`bi bi-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number
};

export default FeatureCard;
