import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person) => (
      <Person
        key={person.id}
        personId={person.id}
        name={person.name}
        age={person.age}
        changed={this.props.changed}
        delete={this.props.clicked}
      />
    ));
  }
}

export default Persons;
