import React, { Component } from 'react';

class NameDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      displayName: true,
    };
  }

  render() {
    if (this.state.displayName) {
      return (
        <div>
          <h3>{this.state.name}</h3>
        </div>
      );
    } else {
      return <div />;
    }
  } 
}