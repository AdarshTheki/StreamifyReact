import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import Login from "./Login";

const SignUpScreen = () => {
  const user = useSelector((state) => state?.user?.user);
  const [newUser, setNewUser] = useState(!user);

  return <div>{newUser ? <SignUp /> : <Login />}</div>;
};
export default SignUpScreen;
