import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  // Dynamically assign className
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.button + " " + classes.Red;
  } else {
    btnClass = classes.button;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  //   console.log(assignedClasses, classes); // Classes doesn't have any properties with plain .css for some reason

  return (
    <div>
      <h1>Hi I'm a {props.title}</h1>
      <p className={assignedClasses.join(" ")}>Lorem ipsum dolor sit amet</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
