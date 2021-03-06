import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';
import { Form as FormContainer, Button } from 'react-bootstrap';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Methods
  handleChange(event) {
    // Updates the local state on every input change
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;

    // Checks
    // As we wanted, we cannot put out business logic inside the Components
    // So, it's put inside the redux middleware
    // const forbiddenWords = ['spam', 'money'];
    // const foundWords = forbiddenWords.filter(word => title.includes(word));
    // if (foundWords) {
    //   return this.props.titleForbidden(foundWords);
    // }

    this.props.addArticle({ title });   // Triggers/Dispatches an action to the store
    this.setState({ title: "" });
  }

  // Render
  render() {
    // Deconstructing the state for title attribute
    const { title } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit} >
        <FormContainer.Group>
          <FormContainer.Label htmlFor="title">Title</FormContainer.Label>
          <FormContainer.Control
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </FormContainer.Group>
        <Button type="submit">SAVE</Button>
      </FormContainer >
    );
  }

}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;

// First argument to connect:
// 1. mapStateToProps
// 2. mapDispatchToProps
// If mapStateToProps is not available, then put null in the 
// first parameter for connect
