import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const LoadingMessage = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
      <h3 className="mt-3">Loading...</h3>
    </Container>
  );
};

export default LoadingMessage;
