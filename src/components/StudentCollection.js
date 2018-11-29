import React from 'react';
import './StudentCollection.css';
import Student from './Student';

// Check the syntax! It's a class, and it inherits from Component (make sure I'm importing the right things so that Component is being accessed correctly)

// Make sure that props are passed in the right way now. They are passed in NOT as a parameter in a function now, but instead they ARE passed into the constructor. We'll want to call super(props) by default inside of the constructor

// Make sure that I have a function called render(). It takes in no parameters. It returns one JSX element. The responsibility of this is to return how this component should render.

// Make sure I am accessing props in the correct way. I access props with this.props.

class StudentCollection extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  setupRendering() {
    return [
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
  }

  render() {
    const students = this.setupRendering();

    const studentCollection = students.map((student, i) => {
      return <Student
              key={i}
              name={student.name}
              email={student.email}
              present={student.present}
              lastName={student.lastName}
              />
    });

    const header = "header";

    const headerColor = students.length > 1 ? "red-header" : "blue-header";

    return (
      <section>
        <h2 className={header + " " + headerColor}>Students</h2>
        <ul>
          {studentCollection}
        </ul>
      </section>
    );
  }

}

export default StudentCollection;
