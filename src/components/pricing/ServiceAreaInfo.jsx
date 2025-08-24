import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useSiteConfiguration from '../../hooks/useSiteConfiguration';
import '../../assets/styles/ServiceAreaInfo.css';

const ServiceAreaInfo = () => {
  const { config } = useSiteConfiguration();

  // Default values in case config is not loaded yet
  const city = config?.address?.city || "Antwerpen";
  const serviceRadius = "10km"; // يمكن إضافته إلى API في المستقبل

  return (
    <section className="service-area-section py-4">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="area-info-container">
                {/* Header - Orange background */}
                <div className="area-header">
                  Onze tarieven geldig in {city} ({serviceRadius})
                </div>
                
                {/* Locations - Dark background */}
                <div className="area-locations">
                  <p><strong>Groot-{city}:</strong> {city}, Berchem, Borgerhout, Borsbeek, Deurne, Ekeren, Hoboken, 
                    Linkeroever, Merksem, Mortsel, Schoten, Wijnegem, Wilrijk, Wommelgem.</p>
                  <p>Voor langere afstanden, contacteer ons.</p>
                </div>
                
                {/* Timing - Yellow background */}
                <div className="area-timing">
                  Het uur begint bij aankomst en eindigt bij vertrek.
                </div>
                
                {/* Lift details - White background with red text */}
                <div className="area-lift">
                  <p>1 uur met de ladderlift naar beneden.</p>
                  <p>1 uur met de ladderlift naar boven.</p>
                </div>
                
                {/* Map - Dark background */}
                <div className="area-map">
                  <img 
                    src="/images/mapforprizinpage.png" 
                    alt={`${city} service gebied kaart`} 
                    className="img-fluid" 
                  />
                </div>
                
                {/* Parking - Yellow background */}
                <div className="area-parking">
                  We vragen om voldoende parkeerruimte en/of een <strong>parkeerverbod</strong> aan te vragen voor de adress/en.
                </div>
                
                {/* Payment - Dark background */}
                <div className="area-payment">
                  Betaling ter plaatse met cash of payconiq.
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceAreaInfo; 