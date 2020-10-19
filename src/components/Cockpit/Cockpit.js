import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null); // accesses DOM elements

  // useEffect will run first arg after every render cycle - encompasses componentDidMount and componentDidUpdate
  // Second argument says when this useEffect will run on which data change
  // Can also have multiple useEffects that do different things
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // const timer = setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
      // clearTimeout(timer);
    };
  }, [props.persons]);

  // Can have multiple useEffect hooks
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      // This will run first before main body (above) apparently
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  // Dynamically assign className
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.button + " " + classes.Red;
  } else {
    btnClass = classes.button;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  //   console.log(assignedClasses, classes); // Classes doesn't have any properties with plain .css for some reason

  return (
    <div>
      <h1>Hi I'm a {props.title}</h1>
      <p className={assignedClasses.join(" ")}>Lorem ipsum dolor sit amet</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

// Stores a snapshot so it only updates if inputs changes
export default React.memo(Cockpit);
