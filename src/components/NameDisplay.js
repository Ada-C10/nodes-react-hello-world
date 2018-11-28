import React, { Component } from 'react';

class NameDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      displayName: true,
    };
    /*
    setInterval(()  => {
      this.setState({
        displayName: !this.state.displayName,
      });
    }, 
    1000);
    */
  }

  render() {
    if (this.state.name) {
      return (
        <div>
          <h3>Hello, {this.state.name}</h3>
        </div>
      );
    } else {
      return <div>
        <h3>I don't know how to display your name</h3>
      </div>;
    }
  } 
}

export default NameDisplay;