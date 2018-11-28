// Import Library Stuff
import React, { Component } from 'react';
// My Components
import Student from './components/Student';
// Non Component Stuff
import './App.css';

const adaStudents = [
  {
    name: 'Amanda',
    lastName: 'Ada Student',
    email: 'amanda@google.com',
    present: true,
  },
  {
    name: 'Cassie',
    lastName: 'Ada Student',
    email: 'Casse@yahoo.com',
    present: true,
  },
  {
    name: 'Kylo',
    lastName: 'Ren',
    email: 'kylo@theEmpire.gov',
    present: false,
  }
];

class App extends Component {
  
  render() {

    const studentComponents = adaStudents.map((student, index) => {
      return <Student 
        name={student.name} 
        email={student.email} 
        present={student.present} 
        lastName={student.lastName}
        key={index}
        />
    });
    
    return (
      <main className="app">
        <h1>My Great React App</h1>
        {studentComponents}
      </main>
    )
  }
}

export default App;
