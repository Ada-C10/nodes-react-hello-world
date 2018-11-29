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

  onButtonClick = () => {
    this.setState({displayName: !this.state.displayName});
  }

  onNameInputChange = (event) => {
    this.setState({tempName: event.target.value});
  }

  onNameSubmit = (event) => {
    event.preventDefault();
    this.setState({name: this.state.tempName, tempName: ''})
  }

  renderDisplayName = () =>{
    if(this.state.displayName){
      return (
        <div>
          <h3>Hello, {this.state.name}</h3>
          <form onSubmit={this.onNameSubmit}>
             <label>
               Name:
               <input type="text" value={this.state.value} onChange={this.onNameInputChange} />
             </label>
             <input type="submit" value="Submit" />
           </form>
        </div>
      )
    }
    else{
      return <h3>I don't know how to display your name</h3>
    }
  }

  render() {
    console.log(this);

    return (
      <div>
        {this.renderDisplayName()}
        <button onClick={this.onButtonClick}>Toggle Name</button>
      </div>
    );
  }

}

export default NameDisplay;
