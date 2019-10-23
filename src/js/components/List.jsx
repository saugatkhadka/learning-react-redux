import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const mapStateToProps = state => {
  // We get a copy of the articles of the state
  // rather than a reference
  // It comes from the reducer
  return { articles: state.articles };
}

const ConnectedList = ({ articles }) => (
  <ListGroup>
    {articles.map(el => (
      <ListGroup.Item key={articles.indexOf(el)}>
        {el.title}
      </ListGroup.Item>
    ))}
  </ListGroup>
)

// connect returns the rendered ul elements after getting
// the articles from the state and sending them as an parameter
// to ConnectList
const List = connect(mapStateToProps)(ConnectedList);

export default List;