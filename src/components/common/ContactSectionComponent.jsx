import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiUpload, FiFile } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/ContactSectionComponent.css';

const ContactSectionComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [fileName, setFileName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const { config } = useSiteConfiguration();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      // إذا لم يكن هناك عنوان API محدد، اعرض رسالة نجاح وهمية
      if (!import.meta.env.VITE_API_URL) {
        console.log('No API URL configured, simulating success');
        setShowSuccess(true);
        reset();
        setFileName('');
        
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
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccess(true);
        reset();
        setFileName('');
        
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
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };
  
  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  // Default values in case config is not loaded yet
  const phone = config?.contact?.phone || "+32 469 11 91 19";
  const email = config?.contact?.email || "motazladerlift@gmail.com";
  const emailDisplay = config?.contact?.email_display || "motazladerlift@gmail.com";
  const street = config?.address?.street || "Frans Adriaenssensstraat 25";
  const postalCode = config?.address?.postal_code || "2170";
  const city = config?.address?.city || "Antwerpen";

  return (
    <section className="contact-section py-5" id="contact">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <SectionTitle 
              title="Contacteer Ons" 
              centered={true}
            />
          </Col>
        </Row>

        {showSuccess && (
          <Row className="mb-4">
            <Col lg={8} className="mx-auto">
              <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.
              </Alert>
            </Col>
          </Row>
        )}

        {showError && (
          <Row className="mb-4">
            <Col lg={8} className="mx-auto">
              <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.
              </Alert>
            </Col>
          </Row>
        )}

        <Row className="justify-content-center">
          <Col lg={5} md={6} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="contact-info-card"
            >
              <h3 className="contact-info-title">Main Office</h3>
              
              <div className="contact-info-item">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <a href={`tel:${phone}`}>
                    {phone}
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <a href={`mailto:${email}`}>
                    {emailDisplay}
                  </a>
                </div>
              </div>
              
              <div className="mt-4 location-highlight">
                <div className="d-flex align-items-center">
                  <i className="bi bi-pin-map-fill me-2" style={{ fontSize: '1.5rem' }}></i>
                  <span>{street}, {postalCode} {city}</span>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={7} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="contact-form-card"
            >
              <h3 className="contact-form-title">Offerte Aanvragen</h3>
              
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Naam *</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Uw naam" 
                        {...register('name', { required: true })}
                        isInvalid={!!errors.name}
                      />
                      {errors.name && (
                        <Form.Control.Feedback type="invalid">
                          Naam is verplicht
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>E-mail *</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Uw e-mail" 
                        {...register('email', { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        isInvalid={!!errors.email}
                      />
                      {errors.email && (
                        <Form.Control.Feedback type="invalid">
                          Geldig e-mailadres is verplicht
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Telefoon *</Form.Label>
                      <Form.Control 
                        type="tel" 
                        placeholder="Uw telefoonnummer" 
                        {...register('phone', { required: true })}
                        isInvalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <Form.Control.Feedback type="invalid">
                          Telefoonnummer is verplicht
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Datum van verhuizing</Form.Label>
                      <Form.Control 
                        type="date" 
                        {...register('moveDate')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Bericht *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Beschrijf uw verhuizing en specifieke behoeften..." 
                    {...register('message', { required: true })}
                    isInvalid={!!errors.message}
                  />
                  {errors.message && (
                    <Form.Control.Feedback type="invalid">
                      Bericht is verplicht
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Upload foto's van uw locatie (optioneel)</Form.Label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      className="d-none"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      {...register('photos')}
                    />
                    <div className="custom-file-upload" onClick={handleFileButtonClick}>
                      <FiUpload className="me-2" />
                      Kies bestand
                    </div>
                    {fileName && (
                      <div className="selected-file">
                        <FiFile className="me-2" />
                        {fileName}
                      </div>
                    )}
                  </div>
                  <Form.Text className="text-muted">
                    Foto's helpen ons om een nauwkeurigere offerte te maken.
                  </Form.Text>
                </Form.Group>
                
                <Button 
                  type="submit" 
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Versturen...' : 'Verstuur Aanvraag'}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSectionComponent;
