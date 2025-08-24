import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../assets/styles/CostInfoSection.css';

const CostInfoSection = () => {
  const costSavingTips = [
    'Plan uw verhuizing ruim van tevoren - Last-minute verhuizingen zijn vaak duurder.',
    'Verhuizen in het laagseizoen - Vermijd de drukke zomermaanden en einde van de maand.',
    'Doe zelf wat u kunt - Inpakken van kleine items en kleding kunt u zelf doen.',
    'Vraag meerdere offertes aan - Vergelijk prijzen en diensten van verschillende verhuisbedrijven.',
    'Combineer diensten - Vraag naar pakketdeals voor verhuizing en ladderlift.'
  ];

  return (
    <section className="cost-info-section">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <SectionTitle 
              title="Verhuisfirma Kostprijs: Wat Kost een Verhuisfirma in Antwerpen?" 
              centered={true}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              className="cost-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Gemiddelde Kosten van een Verhuisfirma in Antwerpen</h3>
              <p>
                De kosten van een verhuizing in Antwerpen kunnen variëren afhankelijk van verschillende factoren zoals de afstand, 
                de hoeveelheid spullen, de toegankelijkheid van beide locaties en de extra diensten die u nodig heeft.
              </p>
              <p>
                Voor een gemiddelde verhuizing binnen Antwerpen kunt u rekenen op een basisprijs die begint vanaf €80 per uur voor 
                twee verhuizers en een verhuiswagen. Voor grotere verhuizingen of verhuizingen met speciale items zoals piano's of 
                antieke meubels kunnen de kosten hoger uitvallen.
              </p>
              
              <h3 className="mt-4">Hoe Bespaart u op Verhuisfirma Kosten?</h3>
              <ul className="cost-saving-tips">
                {costSavingTips.map((tip, index) => {
                  const [boldPart, normalPart] = tip.split(' - ');
                  return (
                    <li key={index}>
                      <strong>{boldPart}</strong> - {normalPart}
                    </li>
                  );
                })}
              </ul>
              
              <div className="text-center mt-4">
                <Link to="/prijzen">
                  <Button className="btn-primary-custom">BEKIJK ONZE PRIJZEN</Button>
                </Link>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CostInfoSection;
