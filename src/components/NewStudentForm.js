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
    };
  }

  onNameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  onEmailChangeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  onPresentChangeHandler = (event) => {
    console.log(`present: ${event.target.checked}`);
    this.setState({
      present: event.target.checked,
    });
  }

  onSubmitHandler = (event)=> {
    event.preventDefault();
    this.props.addNewStudentCallback(this.state);
    this.setState({
      name: '',
      email: '',
      present: false,
    });
  }

  render() {

    return (
      <form 
        name="new-student" 
        id="new-student"
        onSubmit={this.onSubmitHandler}
      >
        <label htmlFor="name">Name</label>
        <input 
          name="name" 
          id="name" 
          value={this.state.name} 
          onChange={this.onNameChangeHandler} />
        <label htmlFor="email">Email</label>
        <input 
          name="email" 
          id="email" 
          value={this.state.email} 
          onChange={this.onEmailChangeHandler} />
          <label htmlFor="present">Present</label>
        <input 
          name="present" 
          id="present" 
          type="checkbox"
          checked={this.state.present} 
          onChange={this.onPresentChangeHandler} />
        <input type="submit" value="submit" />
          
          
      </form>
    );
  }
}

NewStudentForm.propTypes = {
  addNewStudentCallback: PropTypes.func.isRequired,
};

export default NewStudentForm;