import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/Header.css';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  );
  const location = useLocation();
  const { config, loading } = useSiteConfiguration();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to check if dark mode is active
    const checkTheme = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    };

    // Initial check
    checkTheme();

    // Create a MutationObserver to watch for changes to the data-theme attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          checkTheme();
        }
      });
    });

    // Start observing the document element for data-theme attribute changes
    observer.observe(document.documentElement, { attributes: true });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  // Default values in case config is not loaded yet
  const siteName = config?.company?.name || "Motaz Ladderlift";
  const phoneDisplay = config?.contact?.phone_display || "0469 119 119";
  const phone = config?.contact?.phone || "+32 469 11 91 19";
  const logoPath = "/images/FurnitureTransport.png";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Overlay for when mobile menu is open */}
      <div 
        className={`navbar-overlay ${expanded ? 'show' : ''}`} 
        onClick={() => setExpanded(false)}
      ></div>
      
      <Navbar 
        expand="lg" 
        className={`navbar ${scrolled ? 'scrolled' : ''}`} 
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        variant={isDarkMode ? "dark" : "light"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex flex-column align-items-center brand-container">
            <div className="logo-wrapper">
              <img 
                src={logoPath} 
                alt={siteName} 
                className="logo"
                height="60"
              />
            </div>
            <span className="site-name" style={{
              fontSize: '14px',
              fontWeight: '600',
              marginTop: '2px',
              color: isDarkMode ? '#fff' : '#333',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease'
            }}>
              {siteName}
            </span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-fixed" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} 
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/ladder-lift" 
                className={`nav-link ${location.pathname === "/ladder-lift" ? 'active' : ''}`} 
                onClick={() => setExpanded(false)}
              >
                Ladderlift
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/verhuizen" 
                className={`nav-link ${location.pathname === "/verhuizen" ? 'active' : ''}`} 
                onClick={() => setExpanded(false)}
              >
                Verhuizen
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/prijzen" 
                className={`nav-link ${location.pathname === "/prijzen" ? 'active' : ''}`} 
                onClick={() => setExpanded(false)}
              >
                Prijzen
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={`nav-link ${location.pathname === "/contact" ? 'active' : ''}`} 
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/faq" 
                className={`nav-link ${location.pathname === "/faq" ? 'active' : ''}`} 
                onClick={() => setExpanded(false)}
              >
                FAQ
              </Nav.Link>
            </Nav>
            
            <div className="phone-number">
              <a href={`tel:${phone}`} className="phone-link">
                <i className="bi bi-telephone-fill me-2"></i>
                {phoneDisplay}
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.header>
  );
};

export default Header;
