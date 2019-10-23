import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Post from './Posts.jsx';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => (
  <Container>
    <Row>
      <Col md={4}>
        <h2>Articles</h2>
        <List />
      </Col>
      <Col md={4} >
        <h2>Add a new article</h2>
        <Form />
      </Col>
      <Col md={4}>
        <h2>API Posts</h2>
        <Post />
      </Col>
    </Row>
  </Container>
)

export default App;