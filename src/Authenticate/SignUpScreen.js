import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [newUser, setNewUser] = useState(false);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser.user);
      })
      .catch((err) => {
        alert(err.message);
      });
    
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <>
      <SignUpContainer>
        <form>
          {newUser ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
          <input type='text' ref={emailRef} placeholder='Email' />
          <input type='text' ref={passwordRef} placeholder='password' />
          {newUser && (
            <div>
              <input type='checkbox' name='' id='check' />
              <label htmlFor='check'> Remember Me</label>
            </div>
          )}
          {newUser ? (
            <button type='submit' onClick={register}>
              Sign up
            </button>
          ) : (
            <button type='submit' onClick={signIn}>
              Sign In
            </button>
          )}
          <p>
            {!newUser ? (
              <>
                New user to netflix?{" "}
                <button onClick={() => setNewUser(true)}> Sign up Now.</button>
              </>
            ) : (
              <>
                Already exists netflix?{" "}
                <button onClick={() => setNewUser(false)}> Sign In.</button>
              </>
            )}
          </p>
        </form>
      </SignUpContainer>
    </>
  );
};
export default SignUpScreen;

const SignUpContainer = styled.div`
  max-width: 300px;
  margin: auto;
  background: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;

  form {
    display: grid;
    grid-gap: 20px;

    input {
      padding: 10px;
      border: 0;
      outline: 0;
      border-radius: 5px;
      border-left: 10px solid red;

      &:focus-within {
        border-left: 10px solid green;
        outline: 2px solid #ff1c0b;
        outline-offset: 3px;
      }
      &::placeholder {
        color: gray;
        font-weight: 500;
        font-size: 1rem;
      }
    }

    button {
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      background: transparent;
      border: none;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    button[type="submit"] {
      font-size: 1rem;
      font-weight: 500;
      background: #ff1c0b;
      padding: 10px;
      border: 0;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #b61509;
      }
    }
  }
  p {
    color: gray;

    span {
      color: #fff;
      cursor: pointer;
    }
  }
`;
