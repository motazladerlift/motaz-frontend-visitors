import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import usePricing from '../../hooks/usePricing';
import { 
  LadderliftWithOperatorIcon,
  PackageIcon,
  TruckWithDriverIcon
} from '../icons/ImageIcons';
import '../../assets/styles/AdditionalServices.css';

const AdditionalServices = () => {
  const { config } = useSiteConfiguration();
  const { pricing, loading } = usePricing();

  // Default values in case config is not loaded yet
  const city = config?.address?.city || "Antwerpen";
  const serviceRadius = "10km";

  // استخدام البيانات من API أو الإعدادات الافتراضية
  const additionalServices = [
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
      notes: pricing?.ladderlift?.basic?.notes || [],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.05
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
      notes: pricing?.ladderlift?.medium?.notes || [],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.1
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
      notes: pricing?.ladderlift?.high?.notes || [],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.15
    },
    {
      price: pricing?.ladderlift?.veryHigh?.price || '€120',
      period: pricing?.ladderlift?.veryHigh?.period || '/ UUR',
      title: pricing?.ladderlift?.veryHigh?.title || 'Ladderlift met bediener',
      features: pricing?.ladderlift?.veryHigh?.features || [
        '9de verdieping',
        'Extra half uur €60',
        `Geldig in ${city} (${serviceRadius})`,
        'per adres'
      ],
      notes: pricing?.ladderlift?.veryHigh?.notes || [],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.2
    },
    {
      price: pricing?.ladderlift?.extreme?.price || '€150',
      period: pricing?.ladderlift?.extreme?.period || '/ UUR',
      title: pricing?.ladderlift?.extreme?.title || 'Ladderlift met bediener',
      features: pricing?.ladderlift?.extreme?.features || [
        '10de verdieping',
        'Extra half uur €60',
        `Geldig in ${city} (${serviceRadius})`,
        'per adres'
      ],
      notes: pricing?.ladderlift?.extreme?.notes || [],
      iconComponent: <LadderliftWithOperatorIcon width={70} height={70} />,
      delay: 0.25
    },
    {
      price: pricing?.packages?.package1?.price || '€250',
      period: pricing?.packages?.package1?.period || '2 UUR',
      title: pricing?.packages?.package1?.title || 'VERHUISPAKKET 1',
      features: pricing?.packages?.package1?.features || [
        'Bijkomende halfuur €100',
        'LADDERLIFT TOT DE 5DE',
        'VERHUISWAGEN (22m3)',
        '2 ADRESSEN',
        '2 VERHUIZERS'
      ],
      notes: pricing?.packages?.package1?.notes || [],
      iconComponent: <PackageIcon packageNumber={1} width={70} height={70} />,
      delay: 0.3
    },
    {
      price: pricing?.packages?.package2?.price || '€350',
      period: pricing?.packages?.package2?.period || '3 UUR',
      title: pricing?.packages?.package2?.title || 'VERHUISPAKKET 2',
      features: pricing?.packages?.package2?.features || [
        'Bijkomende halfuur €100',
        'LADDERLIFT TOT DE 5DE',
        'VERHUISWAGEN (22m3)',
        '2 ADRESSEN',
        '2 VERHUIZERS'
      ],
      notes: pricing?.packages?.package2?.notes || [],
      iconComponent: <PackageIcon packageNumber={2} width={70} height={70} />,
      delay: 0.35
    },
    {
      price: pricing?.truck?.truck?.price || '€60',
      period: pricing?.truck?.truck?.period || '/ PER UUR',
      title: pricing?.truck?.truck?.title || 'VERHUISWAGEN MET CHAUFFEUR',
      features: pricing?.truck?.truck?.features || [
        'Minimum 2 Uur',
        'VERHUISWAGEN (22m3)',
        '1 VERHUIZER',
        `Geldig rond ${city} (${serviceRadius})`,
        'per adres'
      ],
      notes: pricing?.truck?.truck?.notes || [],
      iconComponent: <TruckWithDriverIcon width={70} height={70} />,
      delay: 0.4
    }
  ];

  if (loading) {
    return (
      <section className="additional-services-section">
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
    <section className="additional-services-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Aanvullende Diensten</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Extra services om uw verhuizing nog gemakkelijker te maken
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {additionalServices.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <PricingCard 
                price={service.price}
                period={service.period}
                title={service.title}
                features={service.features}
                notes={service.notes}
                iconComponent={service.iconComponent}
                delay={service.delay}
                includeBtw={true}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AdditionalServices;
