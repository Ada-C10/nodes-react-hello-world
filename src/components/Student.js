import React from 'react';
import './Student.css'


const Student = (props) => {

    console.log(props);
    // props.name='Jonnie 5'; not allowed
    return (
        <section className={ props.present? "present": "absent"}>
            <h2>{props.name}  {props.lastName} </h2>
            <p>{props.email}</p>
            <p>{props.present.toString()}</p>
            <p> {props.present ? "Here today!": "Absent!" }</p>
        </section>
    )
};

export default Student;