import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameDisplay from './NameDisplay';
import './Student.css'


class Student extends Component {

  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    // props.name='Jonnie 5'; not allowed
    return (
      <section className={ this.props.present? "present": "absent"}>
        <NameDisplay name={this.props.name} />
        <p>{this.props.present.toString()}</p>
        <p> {this.props.present ? "Here today!": "Absent!" }</p>
      </section>
    )
  }
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Student;