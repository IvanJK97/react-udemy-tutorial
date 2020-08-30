import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  // State is a special property/variable of the class
  state = {
    persons: [
      { id: "1a", name: "Max", age: 28 },
      { id: "2b", name: "Manu", age: 29 },
      { id: "3c", name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    // Find the index in persons array that matches id
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    const newPerson = {
      ...this.state.persons[personIndex],
      name: event.target.value,
    };
    const persons = [...this.state.persons];
    persons[personIndex] = newPerson;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (personId) => {
    // Should always modify a copy of the state instead of modifying directly (modify immutably)
    // const persons = this.state.persons.slice(personIndex) or const persons = [...this.state.persons];
    // persons.splice(personIndex, 1); // Can "modify" a const because this is a reference to an array. We didn't change the reference but modified the array it points to
    const persons = this.state.persons.filter(
      (person) => person.id !== personId
    ); // Will create a new array with filter func
    this.setState({ persons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => (
            <Person
              key={person.id}
              personId={person.id}
              name={person.name}
              age={person.age}
              changed={this.nameChangeHandler}
              delete={this.deletePersonHandler}
            />
          ))}
        </div>
      );
    }

    // Dynamically assign className
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    // Explanation of this keyword in assignment solution 11:53
    // setState is provided by component while React is needed for JSX to convert to React.createElement
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(" ")}>Lorem ipsum dolor sit amet</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

// What JSX actually gets compile to - React.createElement(...)
export default App;
