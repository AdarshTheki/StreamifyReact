import React from "react";

const SignUp = () => {
  return (
    <div className='form__container'>
      <h2>Sign Up</h2>
      <form>
        <input type='email' name='email' required/>
        <input type='text' name='password' required/>
        <button type="submit">sign Up</button>
        <input type='checkbox' id='checkList' />
        <label htmlFor='checkList'>remembers me</label>
      </form>
      <p>
        Are you already signUp? <a href='/'>signIn</a>
      </p>
    </div>
  );
};

export default SignUp;
