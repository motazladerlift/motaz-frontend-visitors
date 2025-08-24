import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/Footer.css';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';

const FooterContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { config } = useSiteConfiguration();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      // إذا لم يكن هناك عنوان API محدد، اعرض رسالة نجاح وهمية
      if (!import.meta.env.VITE_API_URL) {
        console.log('No API URL configured, simulating success');
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setValidated(false);
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
        return;
      }

      const apiBase = (import.meta.env.VITE_API_URL || 'https://motaz-backend-api.onrender.com').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setValidated(false);
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setShowError(true);
      
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="footer-contact-form">
      <h5 className="text-uppercase mb-4">Contacteer Ons</h5>
      
      {showSuccess && (
        <Alert variant="success" className="mb-3" onClose={() => setShowSuccess(false)} dismissible>
          Uw bericht is succesvol verzonden! We nemen zo snel mogelijk contact met u op.
        </Alert>
      )}

      {showError && (
        <Alert variant="danger" className="mb-3" onClose={() => setShowError(false)} dismissible>
          Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.
        </Alert>
      )}
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Uw naam"
          />
          <Form.Control.Feedback type="invalid">
            Vul uw naam in.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Uw email"
          />
          <Form.Control.Feedback type="invalid">
            Vul een geldig email adres in.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Uw telefoonnummer"
          />
          <Form.Control.Feedback type="invalid">
            Vul uw telefoonnummer in.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Uw bericht"
          />
          <Form.Control.Feedback type="invalid">
            Vul uw bericht in.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button type="submit" className="btn-primary-custom w-100" disabled={isSubmitting}>
          {isSubmitting ? 'Versturen...' : 'VERZENDEN'}
        </Button>
      </Form>
    </div>
  );
};

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const currentYear = new Date().getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  );
  const { config, loading } = useSiteConfiguration();

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
  const siteDescription = config?.company?.description || "Professionele verhuis- en ladderlift services in Antwerpen en omgeving.";
  const phoneDisplay = config?.contact?.phone_display || "0469 119 119";
  const phone = config?.contact?.phone || "+32 469 11 91 19";
  const email = config?.contact?.email || "motazladerlift@gmail.com";
  const emailDisplay = config?.contact?.email_display || "motazladerlift@gmail.com";
  const whatsapp = config?.contact?.whatsapp || "https://wa.me/message/27GB2V4YVAZ4E1";
  const street = config?.address?.street || "Frans Adriaenssensstraat 25";
  const postalCode = config?.address?.postal_code || "2170";
  const city = config?.address?.city || "Antwerpen";
  const businessHours = config?.business_hours?.display || "24 uur / 7 dagen";
  const facebook = config?.social_media?.facebook || "https://www.facebook.com/motaz.ladderlift";
  const instagram = config?.social_media?.instagram || "https://www.instagram.com/motaz_ladderlift/";
  const youtube = config?.social_media?.youtube || "https://www.youtube.com/@motazladderlift";
  const tiktok = config?.social_media?.tiktok || "https://www.tiktok.com/@motazladderlift";
  const logoPath = "/images/FurnitureTransport.png";

  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col lg={isContactPage ? 3 : 6} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">{siteName}</h5>
            <p>
              {siteDescription}
              Wij staan klaar om uw verhuizing zo soepel mogelijk te laten verlopen.
            </p>
            <div className="footer-logo mt-3">
              <div className="logo-container">
                <div className="logo-circle-bg">
                  <div className="logo-with-name">
                    <img 
                      src={logoPath} 
                      alt={siteName} 
                      className="img-fluid" 
                      style={{ maxWidth: '120px' }}
                    />
                    <div className="footer-site-name">
                      <h4 className="mt-2 text-center">{siteName}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={isContactPage ? 2 : 3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/ladder-lift" className="footer-link">Ladderlift</Link>
              </li>
              <li className="mb-2">
                <Link to="/verhuizen" className="footer-link">Verhuizen</Link>
              </li>
              <li className="mb-2">
                <Link to="/prijzen" className="footer-link">Prijzen</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="footer-link">FAQ</Link>
              </li>
            </ul>
          </Col>

          {isContactPage && (
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Contact</h5>
              <ul className="list-unstyled contact-list">
                <li className="d-flex mb-2">
                  <i className="bi bi-clock-fill me-3"></i>
                  <p className="mb-0">
                    <span>{businessHours}</span>
                  </p>
                </li>
                <li className="d-flex mb-2">
                  <i className="bi bi-telephone-fill me-3"></i>
                  <p className="mb-0">
                    <a href={`tel:${phone}`} className="footer-link">
                      {phoneDisplay}
                    </a>
                  </p>
                </li>
                <li className="d-flex mb-2">
                  <i className="bi bi-geo-alt-fill me-3"></i>
                  <p className="mb-0">
                    {street}, {postalCode} {city}
                  </p>
                </li>
                <li className="d-flex mb-2">
                  <i className="bi bi-whatsapp me-3"></i>
                  <p className="mb-0">
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="footer-link">
                      WhatsApp
                    </a>
                  </p>
                </li>
                <li className="d-flex mb-2">
                  <i className="bi bi-envelope-fill me-3"></i>
                  <p className="mb-0">
                    <a href={`mailto:${email}`} className="footer-link">
                      {emailDisplay}
                    </a>
                  </p>
                </li>
              </ul>
            </Col>
          )}

          {/* Contact Form - Only show on contact page */}
          {isContactPage && (
            <Col lg={4} md={6} className="mb-4 mb-md-0">
              <FooterContactForm />
            </Col>
          )}
        </Row>

        <hr className="my-4" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              &copy; {currentYear} {siteName} | All Rights Reserved
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <div className="social-icons mb-2">
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-icon me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-icon me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={youtube} target="_blank" rel="noopener noreferrer" className="social-icon me-3">
                <i className="bi bi-youtube"></i>
              </a>
              <a href={tiktok} target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
            <p className="mb-0">
              Designed by <a href="https://mihwaralarab.com/" className="footer-link">Mihwar Al Arab</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
