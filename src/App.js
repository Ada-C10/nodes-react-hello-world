import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  isAgeFive(num) {
    if (num === 5) {
      return (
        <div>
          You are exactly the right age for Kindergarten!
        </div>
      )
    } else {
      return (
        <div>
          You are not the right age for Kindergarten!
        </div>
      )
    }
  }

  render() {
    const names = ['Dee', 'Dan', 'Devin'];
    const num = 5;

    // if (num === 6) {
    //   return (
    //     <div>
    //       Wonderful JSX
    //     </div>
    //   )
    // }
    // else {
    //   return (
    //     <div>
    //       Not so wonderful JSX
    //     </div>
    //   )
    // }
    // this is a comment
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <img 
            src="https://www.fast-growing-trees.com/images/P/Sawtooth-Oak_450_a.jpg" 
          />

          <br />
          {num}
          {names.map((name) => <li>{name}</li>)}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { this.isAgeFive(num)  }
          </a>
        </header>
      </div>
    );
  }
}

export default App;
