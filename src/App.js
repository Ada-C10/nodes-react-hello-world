// Import Library Stuff
import React, { Component } from 'react';
// My Components
import Student from './components/Student';
// Non Component Stuff
import './App.css';

class App extends Component {
  
  render() {
    return (
      <main className="app">
        <h1>My Great React App</h1>
        <Student />
        <Student />
        <Student />

      </main>
    )
  }
}

export default App;
