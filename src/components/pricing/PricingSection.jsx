import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import usePricing from '../../hooks/usePricing';
import { LadderliftWithOperatorIcon } from '../icons/ImageIcons';
import '../../assets/styles/PricingSection.css';

const PricingSection = ({ title, subtitle, alternateBackground = false }) => {
  const { config } = useSiteConfiguration();
  const { pricing, loading } = usePricing();

  // Default values in case config is not loaded yet
  const city = config?.address?.city || "Antwerpen";
  const serviceRadius = "10km";

  const pricingOptions = [
    {
      price: pricing?.ladderlift?.basic?.price || '€600',
      period: pricing?.ladderlift?.basic?.period || '/ AUR',
      title: pricing?.ladderlift?.basic?.title || 'Ladderlift met bediener',
      features: pricing?.ladderlift?.basic?.features || [
        '1ste – 4de verdieping',
        'Extra half uur €30',
        `Geldig in ${city} (${serviceRadius})`,
        'per adres'
      ],
      notes: pricing?.ladderlift?.basic?.notes || [
        'Het uur begint bij aankomst en eindigt bij vertrek.'
      ],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.1,
      serviceId: 'ladderlift_basic',
      category: 'ladderlift'
    },
    {
      price: pricing?.ladderlift?.medium?.price || '€75',
      period: pricing?.ladderlift?.medium?.period || '/ UUR',
      title: pricing?.ladderlift?.medium?.title || 'Ladderlift met bediener',
      features: pricing?.ladderlift?.medium?.features || [
        '5de – 7de verdieping',
        'Extra half uur €40',
        `Geldig in ${city} (${serviceRadius})`,
        'per adres'
      ],
      notes: pricing?.ladderlift?.medium?.notes || [
        'Het uur begint bij aankomst en eindigt bij vertrek.',
        'Betaling ter plaatse met cash of payconiq.'
      ],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.2,
      serviceId: 'ladderlift_medium',
      category: 'ladderlift'
    },
    {
      price: pricing?.ladderlift?.high?.price || '€80',
      period: pricing?.ladderlift?.high?.period || '/ UUR',
      title: pricing?.ladderlift?.high?.title || 'Ladderlift met bediener',
      features: pricing?.ladderlift?.high?.features || [
        '8 verdieping',
        'Extra half uur €40',
        `Geldig in ${city} (${serviceRadius})`,
        'per adres'
      ],
      notes: pricing?.ladderlift?.high?.notes || [
        'Het uur begint bij aankomst en eindigt bij vertrek.',
        'Betaling ter plaatse met cash of payconiq.'
      ],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.3,
      serviceId: 'ladderlift_high',
      category: 'ladderlift'
    }
  ];

  if (loading) {
    return (
      <section className={`pricing-section ${alternateBackground ? 'pricing-section-alt' : ''}`}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="loading-spinner">Loading...</div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className={`pricing-section ${alternateBackground ? 'pricing-section-alt' : ''}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">{title}</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">{subtitle}</p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {pricingOptions.map((option, index) => (
            <Col lg={4} md={6} className="mb-4 mx-auto" key={index}>
              <PricingCard 
                price={option.price}
                period={option.period}
                title={option.title}
                features={option.features}
                notes={option.notes}
                iconComponent={option.iconComponent}
                delay={option.delay}
                includeBtw={true}
                serviceId={option.serviceId}
                category={option.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
