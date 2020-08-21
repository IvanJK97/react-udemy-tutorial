import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // State is a special property/variable of the class
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ]
  }

  switchNameHandler = () => {
    // console.log("Click");
    this.setState({
      persons: [
        {
          name: 'Maxim',
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ],
      otherState: 'some other value'
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Maxim',
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Explanation of this keyword in assignment solution 11:53
    // setState is provided by component while React is needed for JSX to convert to React.createElement
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name
        </button>
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      </div>
    );
  }
}

// What JSX actually gets compile to - React.createElement(...)
export default App;
