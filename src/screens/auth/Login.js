import React, { useRef, useState } from "react";
import "./Forms.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
            navigate('/profile')         
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
    <div className='container'>

      <div className='form-container'>
        <h1>Login Page</h1>
        <form className='form' onSubmit={signIn}>
          <input ref={emailRef} type='text' placeholder='Email' required />
          <input
            ref={passwordRef}
            type='text'
            placeholder='Password'
            required
          />
          <button type='submit'>Login Here</button>
        </form>
        <div className='form-detail'>
          <p>
            New to design flix? <NavLink to='/signup'>Sign Up now</NavLink>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
            <NavLink to='https://www.google.com/recaptcha/intro/'>
              Google reCAPTCHA
            </NavLink>
            to ensure you are not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
