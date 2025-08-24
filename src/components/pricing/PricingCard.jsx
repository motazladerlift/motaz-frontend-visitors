import React, { useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/PricingCard.css';

const PricingCard = ({ price, period, title, features, notes, iconComponent, delay = 0, includeBtw = false, serviceId, category }) => {
  const [showReserve, setShowReserve] = useState(false);
  const [reserveMode, setReserveMode] = useState(null); // 'whatsapp' | 'site'
  const [form, setForm] = useState({ 
    name: '', 
    phone: '', 
    address: '', 
    date: '', 
    timeSlot: '', 
    startTime: '', 
    endTime: '', 
    message: '' 
  });
  const [submitting, setSubmitting] = useState(false);
  const { config } = useSiteConfiguration();
  
  const apiBase = 'https://motaz-backend-api.onrender.com';

  const openReserve = () => setShowReserve(true);
  const closeReserve = () => { 
    setShowReserve(false); 
    setReserveMode(null); 
    setForm({ name: '', phone: '', address: '', date: '', timeSlot: '', startTime: '', endTime: '', message: '' });
  };

  const onSubmitOrder = async () => {
    try {
      setSubmitting(true);
      const computedSlot = form.timeSlot || (form.startTime && form.endTime ? `${form.startTime} - ${form.endTime}` : '');
      const payload = {
        name: form.name,
        phone: form.phone,
        address: form.address,
        date: form.date,
        timeSlot: computedSlot,
        message: form.message,
        serviceId: serviceId,
        serviceTitle: title,
        category,
        price,
      };
      
      const resp = await fetch(`${apiBase}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!resp.ok) throw new Error('Failed to create order');
      
      closeReserve();
      alert('Bestelling succesvol verzonden. We nemen zo snel mogelijk contact met u op.');
    } catch (e) {
      console.error('Error submitting order:', e);
      alert('Er is een fout opgetreden bij het verzenden van de bestelling.');
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const phone = (config?.contact?.whatsapp_number || '').replace(/\D/g, '') || '32469119119';
    const text = encodeURIComponent(`Hallo, ik wil reserveren:\nService: ${title}\nPrijs: ${price} ${period}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-100"
    >
      <Card className="pricing-card h-100">
        <Card.Body>
          <div className="price-badge">
            <span className="price">{price}</span>
            <span className="period">{period}</span>
            {includeBtw && <span className="btw-info">Inclusief BTW</span>}
          </div>
          <h3 className="pricing-card-title">{title}</h3>
          <div className="pricing-divider"></div>
          <ul className="pricing-features">
            {iconComponent && (
              <div className="d-flex justify-content-center mb-4">
                {iconComponent}
              </div>
            )}
            {features.map((feature, index) => (
              <li key={index}>
                <FaCheck className="feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {notes && (
            <div className="pricing-notes">
              {notes.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </div>
          )}
        </Card.Body>
        <Card.Footer className="pricing-card-footer">
          <Button className="pricing-btn" onClick={openReserve}>RESERVEER</Button>
        </Card.Footer>
      </Card>

      {/* Reservation Modal */}
      <Modal show={showReserve} onHide={closeReserve} centered>
        <Modal.Header closeButton>
          <Modal.Title>Kies een reserveringsmethode</Modal.Title>
        </Modal.Header>
        {!reserveMode && (
          <Modal.Body className="text-center">
            <p>Kies de gewenste methode</p>
            <div className="d-flex gap-2 justify-content-center">
              <Button variant="success" onClick={openWhatsApp}>WhatsApp Direct</Button>
              <Button variant="primary" onClick={() => setReserveMode('site')}>Boeken op de site</Button>
            </div>
          </Modal.Body>
        )}
        {reserveMode === 'site' && (
          <Modal.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Naam</Form.Label>
                    <Form.Control 
                      value={form.name} 
                      onChange={e => setForm({ ...form, name: e.target.value })} 
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Telefoon</Form.Label>
                    <Form.Control 
                      value={form.phone} 
                      onChange={e => setForm({ ...form, phone: e.target.value })} 
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Adres</Form.Label>
                <Form.Control 
                  value={form.address} 
                  onChange={e => setForm({ ...form, address: e.target.value })} 
                  required
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Datum</Form.Label>
                    <Form.Control 
                      type="date" 
                      value={form.date} 
                      onChange={e => setForm({ ...form, date: e.target.value })} 
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Starttijd</Form.Label>
                    <Form.Control 
                      type="time" 
                      step="900" 
                      value={form.startTime} 
                      onChange={e => setForm({ ...form, startTime: e.target.value })} 
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Eindtijd</Form.Label>
                    <Form.Control 
                      type="time" 
                      step="900" 
                      value={form.endTime} 
                      onChange={e => setForm({ ...form, endTime: e.target.value })} 
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Opmerkingen</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  value={form.message} 
                  onChange={e => setForm({ ...form, message: e.target.value })} 
                />
              </Form.Group>
            </Form>
          </Modal.Body>
        )}
        {reserveMode && (
          <Modal.Footer>
            <Button variant="secondary" onClick={closeReserve}>Annuleren</Button>
            {reserveMode === 'site' && (
              <Button 
                variant="primary" 
                onClick={onSubmitOrder} 
                disabled={submitting || !form.name || !form.phone || !form.address || !form.date}
              >
                {submitting ? 'Bezig met verzenden...' : 'Bestelling verzenden'}
              </Button>
            )}
          </Modal.Footer>
        )}
      </Modal>
    </motion.div>
  );
};

export default PricingCard;
