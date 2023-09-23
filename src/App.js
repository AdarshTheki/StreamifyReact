import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Components/Header/Nav";
import HomeScreen from "./screens/home/HomeScreen";
import DetailScreen from "./screens/details/DetailScreen";
import CreditsScreen from "./screens/credits/CreditsScreen";
import SearchResult from "./screens/searchResult/SearchResult";
import ExploreScreen from "./screens/explore/ExploreScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import PageNotFound from "./screens/404/PageNotFound";
import { fetchUpComing } from "./redux/bannerSlice";
import { fetchDataFromAPI } from "./API";
import { setMovies, setTv } from "./redux/genresSlice";
import { auth } from "./firebase";
import { login, logout } from "./redux/userSlice";
import SignUp from "./screens/auth/SignUp";
import Login from "./screens/auth/Login";
import GoToButton from "./Components/GoToButton/GoToButton";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.user);

  useEffect(() => {
    const apiTesting = () => {
      fetchDataFromAPI("/genre/movie/list").then((data) => {
        dispatch(setMovies(data?.genres));
      });
      fetchDataFromAPI("/genre/tv/list").then((data) => {
        dispatch(setTv(data?.genres));
      });
    };
    apiTesting();
  }, [dispatch]);

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
              photoURL: userAuth?.photoURL,
              lastSignInTime: userAuth.metadata.lastSignInTime,
            })
          );
        } else {
          dispatch(logout(null));
        }
      });
    };
    unSubscribed();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUpComing());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route
          path='profile'
          element={!user?.uid ? <Login /> : <ProfileScreen />}
        />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='search/:query' element={<SearchResult />} />
        <Route path='explore/:mediaType' element={<ExploreScreen />} />
        <Route path='show/:id/:id' element={<DetailScreen />} />
        <Route path='credits/:id/:id' element={<CreditsScreen />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <GoToButton />
    </div>
  );
}

export default App;
