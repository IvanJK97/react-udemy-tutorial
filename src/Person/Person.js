import React from "react";
import Radium from "radium";
import "./Person.css";

const person = (props) => {
  // Radium CSS media queries
  // Person div will not keep resizing/expanding once it's > 500px
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    // style will override className as a CSS rule
    <div className="Person" style={style}>
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

export default Radium(person);
