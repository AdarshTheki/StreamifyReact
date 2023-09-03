import React, { useState } from "react";
import { useRef } from "react";
import {
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import "./SignUpScreen.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SignUpScreen = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [newUser, setNewUser] = useState(true);

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
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("Verification email sent.");
            emailRef.current.value = "";
            passwordRef.current.value = "";
          })
          .catch((error) => {
            console.error("Error sending verification email:", error);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signup'>
      {user?.emailVerified === false && (
        <h1 className='verify'>
          Please Verify Your Email send to your email address
        </h1>
      )}
      {!!user?.emailVerified ? (
        <div className='signup__success'>
          <h1>Successfully</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit
            provident nihil similique eveniet modi odio distinctio, reiciendis
            sapiente minima laudantium ea necessitatibus veritatis rem, vel
            eligendi. Nemo, eum quidem.
          </p>
          <NavLink className='btn' to='/profile'>
            Go to Profile Page
          </NavLink>
        </div>
      ) : (
      <div className='signup__container'>
        <form onSubmit={newUser ? register : signIn}>
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
            <button type='submit'>Sign up</button>
          ) : (
            <button type='submit'>Sign In</button>
          )}
        </form>
        <div className='signup__change'>
          {newUser ? (
            <span>
              Already exists netflix?{" "}
              <button onClick={() => setNewUser(false)}> Sign In.</button>
            </span>
          ) : (
            <span>
              New user to netflix?{" "}
              <button onClick={() => setNewUser(true)}> Sign up Now.</button>
            </span>
          )}
        </div>
      </div>
      )}
    </div>
  );
};
export default SignUpScreen;
