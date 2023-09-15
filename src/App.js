import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";
import Nav from "./Components/Header/Nav";
import DetailScreen from "./screens/DetailScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { useEffect } from "react";
// import { auth } from "./firebase";
// import { login } from "./redux/userSlice";
import CreditsScreen from "./screens/CreditsScreen";
import { fetchUpComing } from "./redux/bannerSlice";
// import { fetchDataFromAPI } from "./API";
import Explore from "./screens/Explore";
import SearchResult from "./screens/SearchResult";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/404/PageNotFound";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   apiTesting();
  // }, []);

  // const apiTesting = () => {
  //   fetchDataFromAPI("/movie/popular").then((data) => {
  //     console.log(data);
  //   });
  // };

  // useEffect(() => {
  //   const unSubscribed = () => {
  //     auth.onAuthStateChanged((userAuth) => {
  //       if (userAuth) {
  //         dispatch(
  //           login({
  //             uid: userAuth.uid,
  //             email: userAuth.email,
  //             emailVerified: userAuth.emailVerified,
  //             displayName: userAuth.displayName,
  //             photoURL: userAuth.photoURL,
  //             lastSignInTime: userAuth.metadata.lastSignInTime,
  //           })
  //         );
  //       } else {
  //         dispatch(login(null));
  //       }
  //     });
  //   };
  //   unSubscribed();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUpComing());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='search/:query' element={<SearchResult />} />
        <Route path='explore/:query' element={<Explore />} />

        <Route path='login' element={<SignUpScreen />} />
        <Route path='profile' element={<ProfileScreen />} />
        <Route path='show/:id/:id' element={<DetailScreen />} />
        <Route path='credits/:id/:id' element={<CreditsScreen />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
