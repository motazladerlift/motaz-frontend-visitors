import React from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/WhatsAppButton.css';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';

const WhatsAppButton = () => {
  const { config } = useSiteConfiguration();
  const whatsapp = config?.contact?.whatsapp || "https://wa.me/message/27GB2V4YVAZ4E1";

  return (
    <motion.div 
      className="whatsapp-button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a 
        href={whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div className="whatsapp-icon">
          <i className="bi bi-whatsapp"></i>
        </div>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
