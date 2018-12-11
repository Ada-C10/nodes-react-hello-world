import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      present: false,
      errorMessages: [],
    };
  }

  onFieldChangeHandler = (event, fieldToGetValueFrom = 'value') => {
    const updateState = {};

    const fieldName = event.target.name;
    const value = event.target[fieldToGetValueFrom];

    updateState[fieldName] = value;

    this.setState(updateState);
  }

  // onNameChangeHandler = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // }
  // onEmailChangeHandler = (event) => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // }

  // onPresentChangeHandler = (event) => {
  //   console.log(`present: ${event.target.checked}`);
  //   this.setState({
  //     present: event.target.checked,
  //   });
  // }

  emailValid = () => {
    return this.state.email.match(/\S+@\S+/);
  }

  nameValid = () => {
    return this.state.name.match(/\S\S+/);
  }

  validate = () => {
    const validations = [
      {method: this.nameValid, message: 'Your name must be 2 or more letters long'},
      {method: this.emailValid, message: 'Your email address must include an "@"'}
    ];
    const messages = [];

    validations.forEach((validation) => {
      if (!validation.method()) {
        messages.push(validation.message);
      }
    });
    return messages;
  }

  onSubmitHandler = (event)=> {
    event.preventDefault();

    const validationErrors = this.validate();


    if (validationErrors.length === 0) {
      this.props.addNewStudentCallback(this.state);
      this.setState({
        name: '',
        email: '',
        present: false,
        errorMessages: []
      });
    } else {
      this.setState({
        errorMessages: validationErrors,
      });
    }
  }

  render() {
    console.log(this.state.present);

    return (
      <form 
        name="new-student" 
        id="new-student"
        onSubmit={this.onSubmitHandler}
      >
      <ul>
        {this.state.errorMessages.map((message) => <li>{message}</li>)}
      </ul>
        <label htmlFor="name">Name</label>
        <input 
          name="name" 
          id="name" 
          value={this.state.name} 
          onChange={this.onFieldChangeHandler} />
        <label htmlFor="email">Email</label>
        <input 
          name="email" 
          id="email" 
          className={ this.emailValid() || this.state.email === '' ? 'valid': 'invalid' }
          value={this.state.email} 
          onChange={this.onFieldChangeHandler} />
          <label htmlFor="present">Present</label>
        <input 
          name="present" 
          id="present" 
          type="checkbox"
          checked={this.state.present} 
          onChange={ (event) => { this.onFieldChangeHandler(event, 'checked') } } />
        <input type="submit" value="submit" />
          
          
      </form>
    );
  }
}

NewStudentForm.propTypes = {
  addNewStudentCallback: PropTypes.func.isRequired,
};

export default NewStudentForm;