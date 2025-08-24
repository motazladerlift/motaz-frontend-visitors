import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/styles/AdvantagesSection.css';

const AdvantagesSection = () => {
  const advantages = [
    // {
    //   id: 1,
    //   title: 'Verhuislift expert helpt met voorrijden, opzetten, bedienen én sjouwen'
    // },
    // {
    //   id: 2,
    //   title: '4 type verhuisliften: altijd een oplossing op maat'
    // },
    // {
    //   id: 3,
    //   title: 'Extra efficiënt liften door een uitklapbaar verhuisplateau'
    // },
    // {
    //   id: 4,
    //   title: 'Gratis gebruik van verhuisdekens en beschermmateriaal'
    // },
    // {
    //   id: 5,
    //   title: 'Vrijblijvend advies van een verhuislift specialist'
    // },
    // {
    //   id: 6,
    //   title: 'Optioneel: extra sjouwers en een verhuiswagen'
    // }
  ];

  // return (
  //   // <section className="advantages-section py-5">
  //   //   <Container>
  //   //     <Row className="mb-4">
  //   //       <Col lg={8} className="mx-auto text-center">
  //   //         <motion.div
  //   //           initial={{ opacity: 0, y: 20 }}
  //   //           whileInView={{ opacity: 1, y: 0 }}
  //   //           viewport={{ once: true }}
  //   //           transition={{ duration: 0.7 }}
  //   //         >
  //   //           {/* <h2 className="section-title">Voordelen verhuislift huren bij Motaz Ladderlift</h2> */}
  //   //           <div className="section-divider"></div>
  //   //         </motion.div>
  //   //       </Col>
  //   //     </Row>

  //   //     <Row className="justify-content-center">
  //   //       <Col lg={8} md={10}>
  //   //         <motion.ul 
  //   //           className="advantages-list"
  //   //           initial={{ opacity: 0 }}
  //   //           whileInView={{ opacity: 1 }}
  //   //           viewport={{ once: true }}
  //   //           transition={{ duration: 0.5 }}
  //   //         >
  //   //           {advantages.map((advantage) => (
  //   //             <motion.li 
  //   //               key={advantage.id} 
  //   //               className="advantage-list-item"
  //   //               initial={{ opacity: 0, y: 10 }}
  //   //               whileInView={{ opacity: 1, y: 0 }}
  //   //               viewport={{ once: true }}
  //   //               transition={{ duration: 0.5, delay: advantage.id * 0.1 }}
  //   //             >
  //   //               {advantage.title}
  //   //             </motion.li>
  //   //           ))}
  //   //         </motion.ul>
  //   //       </Col>
  //   //     </Row>
  //   //   </Container>
  //   // </section>
  // );
};

export default AdvantagesSection;
