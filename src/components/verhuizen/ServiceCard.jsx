import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../../assets/styles/ServiceCard.css';

const ServiceCard = ({ icon, title, description, delay = 0, fromLeft = true }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="service-icon">
        <i className={`bi bi-${icon}`}></i>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
  fromLeft: PropTypes.bool
};

export default ServiceCard;
