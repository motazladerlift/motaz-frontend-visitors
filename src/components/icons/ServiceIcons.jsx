import React from 'react';
import { motion } from 'framer-motion';

// Ladderlift with Operator Icon
export const LadderliftWithOperatorIcon = ({ className = "", size = 100 }) => {
  return (
    <div className={`service-icon-container ${className}`} style={{ width: size, height: size }}>
      <motion.svg 
        width={size} 
        height={size} 
        viewBox="0 0 120 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Truck */}
        <motion.g
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <rect x="5" y="30" width="40" height="15" rx="2" fill="#E0E0E0" stroke="#333" strokeWidth="1.5" />
          <rect x="10" y="45" width="30" height="5" rx="1" fill="#CCCCCC" stroke="#333" strokeWidth="1.5" />
          <circle cx="15" cy="50" r="4" fill="#666" stroke="#333" strokeWidth="1.5" />
          <circle cx="35" cy="50" r="4" fill="#666" stroke="#333" strokeWidth="1.5" />
          <rect x="45" y="35" width="10" height="10" rx="1" fill="#E0E0E0" stroke="#333" strokeWidth="1.5" />
          <rect x="2" y="32" width="8" height="10" rx="1" fill="#E0E0E0" stroke="#333" strokeWidth="1.5" />
        </motion.g>

        {/* Ladderlift */}
        <motion.g
          initial={{ rotate: -20, originX: 30, originY: 30 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <rect x="30" y="10" width="4" height="40" rx="1" fill="#CCCCCC" stroke="#333" strokeWidth="1.5" />
          <rect x="30" y="10" width="30" height="4" rx="1" fill="#CCCCCC" stroke="#333" strokeWidth="1.5" />
          <rect x="56" y="10" width="4" height="15" rx="1" fill="#CCCCCC" stroke="#333" strokeWidth="1.5" />
          <rect x="50" y="10" width="10" height="6" rx="1" fill="#E0E0E0" stroke="#333" strokeWidth="1.5" />
        </motion.g>

        {/* Plus Sign */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <circle cx="75" cy="30" r="8" fill="#FF8C00" />
          <path d="M75 25V35" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M70 30H80" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Operator */}
        <motion.g
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <circle cx="95" cy="20" r="6" fill="#333" />
          <circle cx="95" cy="20" r="7" fill="#FF8C00" stroke="#333" strokeWidth="1.5" />
          <rect x="92" y="26" width="6" height="15" rx="2" fill="#333" />
          <path d="M92 30L88 40" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          <path d="M98 30L102 40" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          <rect x="90" y="35" width="10" height="6" rx="1" fill="#FF8C00" />
        </motion.g>
      </motion.svg>
    </div>
  );
};

// Moving Truck Icon
export const MovingTruckIcon = ({ className = "", size = 60 }) => {
  return (
    <div className={`service-icon-container ${className}`} style={{ width: size, height: size }}>
      <motion.svg 
        width={size} 
        height={size} 
        viewBox="0 0 60 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.g
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <rect x="5" y="15" width="35" height="15" rx="2" fill="#E0E0E0" stroke="#333" strokeWidth="1.5" />
          <rect x="40" y="18" width="15" height="12" rx="1" fill="#E0E0E0" stroke="#333" strokeWidth="1.5" />
          <rect x="10" y="30" width="40" height="5" rx="1" fill="#CCCCCC" stroke="#333" strokeWidth="1.5" />
          <circle cx="20" cy="35" r="4" fill="#666" stroke="#333" strokeWidth="1.5" />
          <circle cx="45" cy="35" r="4" fill="#666" stroke="#333" strokeWidth="1.5" />
          <rect x="5" y="18" width="8" height="5" rx="1" fill="#E0E0E0" stroke="#333" strokeWidth="1.5" />
          <path d="M15 20L35 20" stroke="#333" strokeDasharray="2 2" />
          <path d="M45 15L55 5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      </motion.svg>
    </div>
  );
};

// Movers Icon (People)
export const MoversIcon = ({ className = "", size = 60, count = 2 }) => {
  return (
    <div className={`service-icon-container ${className}`} style={{ width: size, height: size }}>
      <motion.svg 
        width={size} 
        height={size} 
        viewBox="0 0 60 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* First Person */}
        <motion.g
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <circle cx="20" cy="10" r="5" fill="#333" />
          <rect x="17" y="15" width="6" height="15" rx="2" fill="#333" />
          <path d="M17 19L13 28" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 19L27 28" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Second Person (only if count > 1) */}
        {count > 1 && (
          <motion.g
            initial={{ x: 5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <circle cx="40" cy="10" r="5" fill="#333" />
            <rect x="37" y="15" width="6" height="15" rx="2" fill="#333" />
            <path d="M37 19L33 28" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            <path d="M43 19L47 28" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        )}
      </motion.svg>
    </div>
  );
};

// Package Icon with number
export const PackageIcon = ({ className = "", size = 60, number = 1 }) => {
  return (
    <div className={`service-icon-container ${className}`} style={{ width: size, height: size }}>
      <motion.svg 
        width={size} 
        height={size} 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <rect x="10" y="10" width="40" height="40" rx="2" fill="#FF8C00" fillOpacity="0.2" stroke="#FF8C00" strokeWidth="2" />
          <path d="M10 20L50 20" stroke="#FF8C00" strokeWidth="2" />
          <path d="M30 20L30 50" stroke="#FF8C00" strokeWidth="2" strokeDasharray="3 3" />
          <text x="30" y="35" fontFamily="Arial" fontSize="20" fill="#333" textAnchor="middle" dominantBaseline="middle">{number}</text>
        </motion.g>
      </motion.svg>
    </div>
  );
};

// Combined Moving Package Icon
export const MovingPackageIcon = ({ className = "", size = 120, packageNumber = 1 }) => {
  return (
    <div className={`service-icon-container ${className}`} style={{ width: size, height: size/2 }}>
      <motion.div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%',
          gap: '10px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <LadderliftWithOperatorIcon size={size/3} />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 10px' }}>+</div>
        </motion.div>
        
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <MovingTruckIcon size={size/3} />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 10px' }}>+</div>
        </motion.div>
        
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <MoversIcon size={size/3} count={2} />
        </motion.div>
      </motion.div>
    </div>
  );
};
