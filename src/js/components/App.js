import React from 'react';
import List from './List';
import Form from './Form';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => (
  <Container>
    <Row>
      <Col md={6}>
        <h2>Articles</h2>
        <List />
      </Col>
      <Col md={6} >
        <h2>Add a new article</h2>
        <Form />
      </Col>
    </Row>
  </Container>
)

export default App;