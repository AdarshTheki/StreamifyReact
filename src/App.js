import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogInScreen from "./Authenticate/LogInScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Nav from "./Components/Nav";
import "./StyleFiles/App.css";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            emailVerified: userAuth.emailVerified,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
            lastSignInTime: userAuth.metadata.lastSignInTime,
          })
        );
      } else {
        dispatch(login(null));
      }
    });
    return unSubscribed;
  }, [dispatch]);

  console.log(user?.user)

  return (
    <div>
      {!user?.user ? (
        <LogInScreen />
      ) : (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='profile' element={<ProfileScreen />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
