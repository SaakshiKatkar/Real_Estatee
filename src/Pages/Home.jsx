import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container fluid className="Home-container justify-content-center  d-flex">
        <Row>
          <Col className="text-center  mt-5">
          <h1>Hello narendra</h1>
            <h1 className="text-light">Find the Perfect Place</h1>
            <h1 className="text-light">to Call Home</h1>
            <p className="text-light custom-line-height mt-4">
              Explore a wide range of properties in the most desirable locations. 
            </p>
            <p className="text-light  custom-line-height">
              Whether you’re looking for a cozy apartment,
            </p>
            <p className="text-light  custom-line-height">
              a spacious family home, or a luxurious estate, we have listings to suit every lifestyle and budget.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
