import React from 'react';
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { AlertDismissibleExample, Navibar, Jumbotroncomp, Cardcomp, Footer} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './components/cardalignment.module.css';

function App() {
  return (
    <Container className="p-3">
    <Container className = "m-auto p-auto">
    <Container fluid="lg">
        <AlertDismissibleExample loading="lazy" />
        <Jumbotroncomp loading="lazy"/>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-light">
            <li class="breadcrumb-item active text-dark" aria-current="page">Some Projects</li>
          </ol>
        </nav>
        <Row xs={1} md={3}>
        <Col xs><Cardcomp  /></Col>
        <Col xs><Cardcomp /></Col>
        <Col xs><Cardcomp /></Col>
        </Row>
        <nav aria-label="breadcrumb" class="mt-4">
        <ol class="breadcrumb bg-light">
        <li class="breadcrumb-item active text-dark" aria-current="page">Some Stuffs </li>
          </ol>
        </nav>
        <Row xs={1} md={4}>
        <Col xs><Cardcomp /></Col>
        <Col xs><Cardcomp /></Col>
        <Col xs><Cardcomp /></Col>
        <Col xs><Cardcomp /></Col>
        </Row>
        <Footer />
      </Container>
      </Container>
      </Container>
  );
}
export default App;
