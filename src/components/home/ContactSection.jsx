import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiUpload, FiFile } from 'react-icons/fi';
import '../../assets/styles/ContactSection.css';

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const onSubmit = (data) => {
    // إرسال البيانات إلى خدمة الإيميل على Vercel
    fetch('https://email-form-service.vercel.app/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        subject: data.subject,
        message: data.message,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          reset();
          setFileName('');
          alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
        } else {
          const res = await response.json();
          alert('Er is een fout opgetreden bij het verzenden van uw bericht: ' + (res.message || 'Onbekende fout.'));
        }
      })
      .catch((error) => {
        alert('Er is een fout opgetreden bij het verzenden van uw bericht: ' + error.message);
      });
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

  return (
    <section className="contact-section py-5" id="contact">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Contacteer Ons</h2>
              <div className="section-divider mb-4"></div>
              <p className="contact-intro">
                Heeft u vragen over het huren van een verhuislift van Motaz Ladderlift? 
                Neem contact op. Uw gegevens zijn 100% veilig en worden enkel gebruikt 
                om uw aanvraag te beantwoorden.
              </p>
            </motion.div>
          </Col>
        </Row>

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
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  Frans Adriaenssensstraat 25<br />
                  2170 Antwerpen
                </div>
              </div>
              
              <div className="contact-info-item">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <a href="tel:+32469119119">
                  +32 469 11 91 19
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <a href="mailto:info@MotazLadderlift.be">
                    info@MotazLadderlift.be
                  </a>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="contact-info-subtitle">Openingsuren</h4>
                <ul className="contact-hours-list">
                  <li>
                    <span>Maandag - Vrijdag:</span>
                    <span>8:00 - 18:00</span>
                  </li>
                  <li>
                    <span>Zaterdag:</span>
                    <span>9:00 - 17:00</span>
                  </li>
                  <li>
                    <span>Zondag:</span>
                    <span>Gesloten</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 location-highlight">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-pin-map-fill me-2" style={{ fontSize: '1.5rem' }}></i>
                  <h5 className="mb-0">Onze Locatie</h5>
                </div>
                <p className="mb-0 ps-4">Frans Adriaenssensstraat 25, 2170 Antwerpen</p>
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
                      <Form.Label>Datum</Form.Label>
                      <Form.Control 
                        type="date" 
                        {...register('date')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Onderwerp *</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Onderwerp van uw bericht" 
                    {...register('subject', { required: true })}
                    isInvalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <Form.Control.Feedback type="invalid">
                      Onderwerp is verplicht
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Bericht *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Uw bericht" 
                    {...register('message', { required: true })}
                    isInvalid={!!errors.message}
                  />
                  {errors.message && (
                    <Form.Control.Feedback type="invalid">
                      Bericht is verplicht
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Bestand toevoegen</Form.Label>
                  <div>
                    <label className="custom-file-upload" onClick={handleFileButtonClick}>
                      <FiUpload className="me-2" /> Kies bestand
                    </label>
                    {fileName && (
                      <div className="selected-file">
                        <FiFile className="me-2" />
                        <span>{fileName}</span>
                      </div>
                    )}
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      {...register('file')}
                    />
                  </div>
                </Form.Group>
                
                <div className="text-end mt-4">
                  <Button 
                    type="submit" 
                    className="contact-submit-btn"
                  >
                    Versturen
                  </Button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
