import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '../../assets/styles/SectionTitle.css';

const SectionTitle = ({ title, subtitle, centered = true, darkMode = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`section-title-wrapper ${centered ? 'text-center' : ''} ${darkMode ? 'dark-mode' : ''}`}
    >
      <h2 className="section-title">{title}</h2>
      <div className={`section-divider ${centered ? 'mx-auto' : ''} mb-4`}></div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  darkMode: PropTypes.bool
};

export default SectionTitle;
