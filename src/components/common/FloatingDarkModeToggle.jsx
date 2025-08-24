import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../assets/styles/FloatingDarkModeToggle.css';

const FloatingDarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a preference saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Also check system preference if no saved theme
    if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Apply theme to document when component mounts or theme changes
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    
    // Add a small delay to ensure the transition effect works properly
    const timer = setTimeout(() => {
      document.body.classList.add('theme-transition-complete');
    }, 300);
    
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  const toggleTheme = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.button 
      className={`floating-dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchEnd={(e) => {
        e.preventDefault();
        toggleTheme(e);
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }}
    >
      <div className="floating-toggle-icon-wrapper">
        <motion.div 
          className="floating-toggle-icon"
          initial={false}
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isDarkMode ? 
            <FaSun className="floating-sun-icon" /> : 
            <FaMoon className="floating-moon-icon" />
          }
        </motion.div>
      </div>
    </motion.button>
  );
};

export default FloatingDarkModeToggle;
