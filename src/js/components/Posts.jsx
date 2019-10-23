import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import { ListGroup } from 'react-bootstrap';

class ConnectedPost extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // calling the new action creator
    this.props.getData()
  }

  render() {
    return (
      <ListGroup>
        {this.props.posts.map(el => (
          <ListGroup.Item key={el.id}>
            {el.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.remotePosts.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(ConnectedPost);
