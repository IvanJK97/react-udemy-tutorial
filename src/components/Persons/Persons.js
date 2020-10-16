import React, { PureComponent } from "react";
import Person from "./Person/Person";

// PureComponent does the same thing as shouldComponentUpdate with checking on all props
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Person.js] shouldComponentUpdate");
  //   // persons is an array, but these are two different arrays so should point to two diff places in memory
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false; // Does not keep updating if props.persons is the same
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  // For clean up work - like removing event listeners
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
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
