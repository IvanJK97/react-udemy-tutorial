import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    // console.log("[Person.js] rendering");
    return (
      <Aux>
        <p>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={(event) => this.props.changed(event, this.props.personId)}
          value={this.props.name}
        />
        <button onClick={() => this.props.delete(this.props.personId)}>
          Delete
        </button>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
