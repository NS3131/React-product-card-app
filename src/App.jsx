import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Name from './components/name.jsx';
import Price from './components/price.jsx';
import Description from './components/description.jsx';
import Image from './components/image.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const firstName = "There"; // Change to "" to test fallback

const App = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow p-3 mb-4 bg-light rounded">
            <Image />
            <Card.Body>
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
          <div className="text-center mt-4">
            <h3>Hello, {firstName ? firstName : "there"}!</h3>
            {firstName && (
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                alt="Greeting"
                className="rounded mt-3"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

