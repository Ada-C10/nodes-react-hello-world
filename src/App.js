// Import Library Stuff
import React, { Component } from 'react';
// My Components
import StudentCollection from './components/StudentCollection';
// Non Component Stuff
import './App.css';

class App extends Component {

  render() {

    // const studentComponents = adaStudents.map((student, index) => {
    //   return <Student
    //     name={student.name}
    //     email={student.email}
    //     present={student.present}
    //     lastName={student.lastName}
    //     key={index}
    //     />
    // });

    return (
      <main className="app">
        <h1>My Great React App</h1>
        <StudentCollection />
      </main>
    )
  }
}

export default App;
