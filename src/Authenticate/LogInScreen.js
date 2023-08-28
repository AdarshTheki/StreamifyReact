import React, { useState } from "react";
import logo from "../assets/netflix_logo.png";
import SignUpScreen from "./SignUpScreen";

function LogInScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className='loginScreen__logo'>
        <img src={logo} alt='netflix' width='100%' />
      </div>
      <button className='loginScreen__button' onClick={() => setSignIn(true)}>
        Sign In
      </button>
      <div className='loginScreen__background' />
      <div className='loginScreen__body'>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films TV Programming and more.</h1>
            <h2>Watch anymore. Cancel at any time </h2>
            <h3>
              Read to watch? Enter email to create or restart your membership.
            </h3>
            <div className='loginScreen__inputs'>
                <button onClick={() => setSignIn(true)}>Get Started</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LogInScreen;
