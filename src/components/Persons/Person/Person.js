import React, { Component } from "react";
import classes from "./Person.module.css";

class Person extends Component {
  render() {
    // console.log("[Person.js] rendering");
    return (
      <div className={classes.Person}>
        <p>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={(event) => this.props.changed(event, this.props.personId)}
          value={this.props.name}
        />
        <button onClick={() => this.props.delete(this.props.personId)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Person;
