import React from "react";
import classes from "./Person.module.css";

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={(event) => props.changed(event, props.personId)}
        value={props.name}
      />
      <button onClick={() => props.delete(props.personId)}>Delete</button>
    </div>
  );
};

export default person;
