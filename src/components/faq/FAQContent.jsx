import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Button, Form, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/styles/FAQContent.css';

const FAQContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqItems = [
    {
      question: "Waarom is het plaatsen van een verhuislift bij verhuizen aan te raden?",
      answer: "Bij gebruik van een verhuislift kan er bij een woning met meerdere woonlagen of op een hoger gelegen verdieping efficiënter gewerkt worden. Ook is de kans op schades op meubels en interieur kleiner bij gebruik van een verhuislift. Vaak wordt een verhuislift ook ingeschakeld voor grote objecten die niet door het trappenhuis passen, de muren net gewit of gestuukt zijn, of als er bijvoorbeeld een lange galerij doorlopen moet worden."
    },
    {
      question: "Wat kan ik verwachten op de dag dat de verhuislift is ingehuurd?",
      answer: "Een ervaren verhuisliftspecialist rijdt de verhuislift voor en zet hem op, daarna zal hij de verhuislift bedienen en uiteraard word er een handje geholpen met het tilwerk. Nadat alle spullen naar boven of beneden zijn gebracht, zal de lift worden afgebouwd. Let op voor grote en zware objecten is minimaal 1 extra sjouwhulp nodig, u munt t hier zelf voor zorgen, of u kunt een extra sjouwkracht bij ons inhuren."
    },
    {
      question: "Tot welke etage rijkt de verhuislift?",
      answer: "U kunt een verhuislift huren en inzetten tot maximaal de 10 etage, afhankelijk hoe de lift geplaatst moet worden. U dient er rekening mee te houden dat bij etages hoger dan 8 de laadcapaciteit maximaal 150 kg bedraagt."
    },
    {
      question: "Tot hoeveel kilogram kan er maximaal gelift worden?",
      answer: "Het laadvermogen van een \"grote\" verhuislift op een wagen heeft een laadvermogen van max 300kg. Het laadvermogen van een lift op aanhanger is max 200kg."
    },
    {
      question: "Hoe kan ik eenvoudig foto's sturen van de situatie?",
      answer: "U kunt eenvoudig foto's sturen van uw woon situatie of de te liften objecten via whatsapp (0465105935) of via de email (info@MotazLadderlift.be)."
    },
    {
      question: "Wanneer heb ik een vergunning nodig voor het plaatsen van een verhuislift?",
      answer: "Vaak heeft u een vergunning nodig voor het plaatsen van een verhuislift bij eenrichtingswegen zodat hulpdiensten makkelijk kunnen passeren of tijdig op de hoogte zijn van de blokkade en deze ongehinderd hun bestemming kunnen bereiken. Ook als u bijvoorbeeld niet zelf voor een vrije parkeerplek kunt zorgen (doordat het een betaald parkeren zone betreft) is het aan te raden om een vergunning aan te vragen. Let op een vergunning aanvragen duurt minimaal 5 werkdagen."
    },
    {
      question: "Hoeveel parkeerplaatsen moet ik vrijhouden voor de verhuislift?",
      answer: "U dient er rekening mee te houden dat de verhuislift niet over auto's heen geplaatst mag worden. U dient er dus zelf voor te zorgen dat er voldoende parkeerplek beschikbaar is. Het beste is om minimaal 2 parkeerplaatsen vrij te houden. Informeer bij onze verhuislift specialist hoe u dit het beste kunt doen."
    },
    {
      question: "Kan ik een losse verhuislift huren zonder verhuisliftspecialist?",
      answer: "Nee u kunt alleen een verhuislift inschakelen inclusief bediening. Het is niet mogelijk om enkel een verhuislift te huren zonder bediening."
    },
    {
      question: "Hoeveel ruimte moet ik vrijhouden voor het plaatsen van een verhuislift?",
      answer: "Hoe hoger de verdieping waarvan of waarnaar gelift moet worden des te verder dient de lift van het pand af te staan. Dit heeft te maken met de stabiliteit van de lift. Zodat er geen gevaar ontstaat dat de lift kan omvallen."
    },
    {
      question: "Wat als blijkt dat de verhuislift op niet geplaatst kan worden?",
      answer: "Als op de huurdag blijkt dat de verhuislift niet geplaatst kan worden dan zijn wij genoodzaakt om annuleringskosten in rekening te brengen. U kunt tot max 24 uur van te voren een verhuislift kostenloos annuleren."
    },
    {
      question: "Hoe wordt de totaalprijs berekend en hoe kan ik afrekenen?",
      answer: "De totaalprijs wordt berekend op basis van de duur van de huur, de afstand, en eventuele extra diensten. We accepteren contante betaling, pinbetaling en bankoverschrijving. Meer details over onze prijzen vindt u op onze prijzenpagina."
    },
    {
      question: "Moet ik een aanbetaling doen bij het reserveren van een verhuislift?",
      answer: "Nee, bij Motaz Ladderlift hoeft u geen aanbetaling te doen. U betaalt pas na de geleverde dienst."
    },
    {
      question: "Kan ik een verhuislift huren in het weekend of op feestdagen?",
      answer: "Ja, onze diensten zijn 7 dagen per week beschikbaar, inclusief weekenden en feestdagen. Voor feestdagen kan er een toeslag gelden."
    },
    {
      question: "Hoe ver van tevoren moet ik een verhuislift reserveren?",
      answer: "We raden aan om minimaal een week van tevoren te reserveren, vooral tijdens drukke periodes zoals het einde van de maand. Voor spoedgevallen hebben we een 24/7 spoedservice beschikbaar."
    },
    {
      question: "Wat gebeurt er bij slecht weer?",
      answer: "Bij extreme weersomstandigheden zoals harde wind of onweer kunnen we de verhuislift mogelijk niet veilig gebruiken. In dat geval zullen we in overleg met u de afspraak verzetten zonder extra kosten."
    }
  ];
  
  const filteredFAQs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faq-content">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="search-container">
                <Form>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Zoek in veelgestelde vragen..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="outline-secondary" onClick={() => setSearchTerm('')}>
                      {searchTerm ? <i className="bi bi-x-lg"></i> : <i className="bi bi-search"></i>}
                    </Button>
                  </InputGroup>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {filteredFAQs.length > 0 ? (
                <Accordion defaultActiveKey="0" className="faq-accordion">
                  {filteredFAQs.map((faq, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>
                        <span className="faq-question">{faq.question}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>{faq.answer}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              ) : (
                <div className="no-results">
                  <i className="bi bi-search"></i>
                  <h3>Geen resultaten gevonden</h3>
                  <p>Probeer een andere zoekopdracht of bekijk alle veelgestelde vragen.</p>
                  <Button variant="outline-primary" onClick={() => setSearchTerm('')}>
                    Alle vragen weergeven
                  </Button>
                </div>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQContent;
