import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";
import Nav from "./Components/Nav";
import "./StyleFiles/App.css";
import DetailScreen from "./screens/DetailScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribed = () => {
      auth.onAuthStateChanged((userAuth) => {
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
    };
    unSubscribed();
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='login' element={<SignUpScreen />} />
        <Route path='profile' element={<ProfileScreen />} />
        <Route path='show/:id/:id' element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
