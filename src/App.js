import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AlertDismissibleExample, Navibar, Jumbotroncomp, Cardcomp, Footer} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

function App() {
  return (
    <Container  fluid="xl" className = "pl-5 pr-5 mt-3">
      <Container className = "pl-5 pr-5">
        <AlertDismissibleExample loading="lazy" />
        <Jumbotroncomp loading="lazy" />
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Some Projects</li>
          </ol>
        </nav>
        <Row>
          <Col><Cardcomp /> </Col>
          <Col><Cardcomp /> </Col>
          <Col><Cardcomp /> </Col>
        </Row>

        <nav aria-label="breadcrumb" class="mt-4">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Some Stuffs (Maybe) </li>
          </ol>
        </nav>
        <Row>
          <Col><Cardcomp /> </Col>
          <Col><Cardcomp /> </Col>
          <Col><Cardcomp /> </Col>
        </Row>
        <Footer />
      </Container>
    </Container>
  );
}
export default App;
