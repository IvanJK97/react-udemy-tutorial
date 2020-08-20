import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  // destructuring array - useState returns two things, the state and a function to modify state
  const [ personsState, setPersonsState] = useState({
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
  })

  // Separate state into different slices with multiple useState
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    });
  }
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

// State is a special property/variable of the class
// this.setState automatically merges new state with old state, updating changed values - but not with useState
// What JSX actually gets compile to - React.createElement(...)
export default App;
