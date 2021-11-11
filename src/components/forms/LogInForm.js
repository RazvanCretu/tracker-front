import { useRef } from "react";

import Card from "../ui/Card";

import styled from "styled-components";

const Form = styled.form`
  padding: 1rem;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
`;

const Actions = styled.div`
  margin-top: 1rem;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    background-color: #a50e48;
    border-color: #a50e48;
  }
`;

function LogInForm({ onLogIn }) {
  const userRef = useRef();
  const passRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    onLogIn({
      identifier: userRef.current.value,
      password: passRef.current.value,
    });
  }

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Control>
          <label htmlFor="user">Email</label>
          <input type="email" required id="user" ref={userRef}></input>
        </Control>
        <Control>
          <label htmlFor="pass">Password</label>
          <input type="password" required id="pass" ref={passRef}></input>
        </Control>
        <Actions>
          <button>Log In</button>
        </Actions>
      </Form>
    </Card>
  );
}

export default LogInForm;
