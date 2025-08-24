import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Helper function to determine if dark mode is active
const isDarkMode = () => {
  return document.documentElement.getAttribute('data-theme') === 'dark';
};

// Icon that changes based on dark/light mode
export const DynamicIcon = ({ 
  darkSrc, 
  lightSrc, 
  alt = "Icon", 
  width = 80, 
  height = 80,
  className = ""
}) => {
  const [isDark, setIsDark] = useState(isDarkMode());
  
  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(isDarkMode());
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <motion.img
      src={isDark ? darkSrc : lightSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

// Person with Helmet Icon
export const PersonHelmetIcon = ({ width = 80, height = 80, className = "" }) => {
  return (
    <DynamicIcon
      darkSrc="/images/PersonHelmetMoveboxOrang.png"
      lightSrc="/images/PersonHelmetMoveboxB.png"
      alt="Person with Helmet"
      width={width}
      height={height}
      className={className}
    />
  );
};

// Furniture Transport Icon
export const FurnitureTransportIcon = ({ width = 130, height = 130, className = "" }) => {
  const [isDark, setIsDark] = useState(isDarkMode());

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(isDarkMode());
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <motion.img
      src="/images/FurnitureTransport.png"
      alt="Furniture Transport"
      style={{ 
        maxWidth: width, 
        height: 'auto', 
        objectFit: 'contain',
        filter: isDark 
          ? 'drop-shadow(0 0 0 2px #fff)' 
          : 'drop-shadow(0 0 0 1px #000)',
        transform: 'scale(1.4)',
        margin: '8px'
      }}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

// Delivery Truck Icon
export const DeliveryTruckIcon = ({ width = 80, height = 80, className = "" }) => {
  return (
    <DynamicIcon
      darkSrc="/images/Delivery_TruckW.png"
      lightSrc="/images/Delivery_TruckB.png"
      alt="Delivery Truck"
      width={width}
      height={height}
      className={className}
    />
  );
};

// People Icon (Two people)
export const PeopleIcon = ({ width = 60, height = 60, className = "" }) => {
  return (
    <DynamicIcon
      darkSrc="/images/PersonHelmetMoveboxOrang.png"
      lightSrc="/images/PersonHelmetMoveboxB.png"
      alt="People"
      width={width}
      height={height}
      className={className}
    />
  );
};

// Package Icons
export const PackageIcons = ({ packageNumber = 1, width = 80, height = 80, className = "" }) => {
  // We'll use different combinations of icons based on the package number
  let icons = [];
  
  if (packageNumber === 1) {
    // Package 1: Truck + DeliveryTruck + People
    icons = [FurnitureTransportIcon, DeliveryTruckIcon, PeopleIcon];
  } else if (packageNumber === 2) {
    // Package 2: Truck + DeliveryTruck + People
    icons = [FurnitureTransportIcon, DeliveryTruckIcon, PeopleIcon];
  } else {
    // Default: DeliveryTruck + Person
    icons = [DeliveryTruckIcon, PersonHelmetIcon];
  }
  
  return <CombinedIcons icons={icons} width={width} height={height} className={className} />;
};

// Combined icons with plus sign
export const CombinedIcons = ({ icons = [], width = 80, height = 80, className = "" }) => {
  const [isDark, setIsDark] = useState(isDarkMode());
  
  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(isDarkMode());
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className={`d-flex align-items-center justify-content-center ${className}`} style={{ gap: '10px' }}>
      {icons.map((Icon, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 * index }}
              style={{ fontWeight: 'bold', fontSize: '24px', margin: '0 5px' }}
            >
              <span style={{ color: isDark ? '#fff' : '#000' }}>+</span>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}
          >
            <Icon 
              width={index === 1 && Icon === FurnitureTransportIcon ? width * 1.3 : width} 
              height={index === 1 && Icon === FurnitureTransportIcon ? height * 1.3 : height} 
            />
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};

// Two Users Icon (for showing 2 people)
export const TwoUsersIcon = ({ width = 60, height = 60, className = "" }) => {
  const [isDark, setIsDark] = useState(isDarkMode());
  
  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(isDarkMode());
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        width, 
        height, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className={className}
    >
      <svg 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        fill={isDark ? "#fff" : "#000"} 
        viewBox="0 0 24 24"
      >
        <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clipRule="evenodd"/>
      </svg>
    </motion.div>
  );
};

// Ladderlift Icon for pricing cards
export const LadderliftWithOperatorIcon = ({ width = 60, height = 60, className = "" }) => {
  const [isDark, setIsDark] = useState(isDarkMode());
  
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(isDarkMode());
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className={`d-flex align-items-center justify-content-center ${className}`} style={{ gap: '10px' }}>
      <div style={{ flex: '0 0 auto' }}>
        <FurnitureTransportIcon width={width * 1.2} height={height * 1.2} />
      </div>
      <div style={{ fontSize: '20px', margin: '0 5px', color: isDark ? '#fff' : '#000' }}>+</div>
      <div style={{ flex: '0 0 auto' }}>
        <PersonHelmetIcon width={width} height={height} />
      </div>
    </div>
  );
};

// Package 1 and 2 Icon (Ladderlift + Truck + 2 Users)
export const PackageIcon = ({ packageNumber = 1, width = 60, height = 60, className = "" }) => {
  const [isDark, setIsDark] = useState(isDarkMode());
  
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(isDarkMode());
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className={`d-flex align-items-center justify-content-center flex-wrap ${className}`} style={{ gap: '5px' }}>
      <div style={{ flex: '0 0 auto' }}>
        <FurnitureTransportIcon width={width} height={height} />
      </div>
      <div style={{ fontSize: '20px', margin: '0 2px', color: isDark ? '#fff' : '#000' }}>+</div>
      <div style={{ flex: '0 0 auto' }}>
        <DeliveryTruckIcon width={width} height={height} />
      </div>
      <div style={{ fontSize: '20px', margin: '0 2px', color: isDark ? '#fff' : '#000' }}>+</div>
      <div style={{ flex: '0 0 auto' }}>
        <TwoUsersIcon width={width * 0.9} height={height * 0.9} />
      </div>
    </div>
  );
};

// Truck with driver Icon
export const TruckWithDriverIcon = ({ width = 60, height = 60, className = "" }) => {
  const [isDark, setIsDark] = useState(isDarkMode());
  
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(isDarkMode());
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className={`d-flex align-items-center justify-content-center ${className}`} style={{ gap: '10px' }}>
      <div style={{ flex: '0 0 auto' }}>
        <DeliveryTruckIcon width={width} height={height} />
      </div>
      <div style={{ fontSize: '20px', margin: '0 5px', color: isDark ? '#fff' : '#000' }}>+</div>
      <div style={{ flex: '0 0 auto' }}>
        <PersonHelmetIcon width={width * 0.8} height={height * 0.8} />
      </div>
    </div>
  );
};

export default {
  PersonHelmetIcon,
  FurnitureTransportIcon,
  DeliveryTruckIcon,
  PeopleIcon,
  PackageIcons,
  CombinedIcons,
  TwoUsersIcon,
  LadderliftWithOperatorIcon,
  PackageIcon,
  TruckWithDriverIcon
};
