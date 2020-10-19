import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    // can do this.state = {...} here
  }
  // State is a special property/variable of the class
  state = {
    persons: [
      { id: "1a", name: "Max", age: 28 },
      { id: "2b", name: "Manu", age: 29 },
      { id: "3c", name: "Stephanie", age: 26 },
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false,
  };

  static getDeriveStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // Deprecated
  // componentWillReceiveProps(props) {...}
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }
  // componentWillUpdate() ...

  // Used the most for component creation
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // For performance purposes, will tell React whether to continue update
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  // Used the most for component prop updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
  }

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
    // SetState is not guaranteed to finish and set state immediately, so should use prevState function syntax
    // Should not do this.setState({ changeCounter: this.state.changeCounter + 1})
    this.setState((prevState, props) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.nameChangeHandler}
          clicked={this.deletePersonHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    // Explanation of this keyword in assignment 1 solution 11:53
    // setState is provided by component while React is needed for JSX to convert to React.createElement
    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

// What JSX actually gets compile to - React.createElement(...)
export default withClass(App, styles.App);
