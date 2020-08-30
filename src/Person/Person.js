import React from "react";
import styled from "styled-components";
// import "./Person.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  /* Person div will not keep resizing/expanding once it's > 500px */
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
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
    </StyledDiv>
  );
};

export default person;
