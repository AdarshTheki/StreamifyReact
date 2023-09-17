import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import HomeScreen from "./screens/home/HomeScreen";
import DetailScreen from "./screens/details/DetailScreen";
import CreditsScreen from "./screens/credits/CreditsScreen";
import SearchResult from "./screens/searchResult/SearchResult";
import ExploreScreen from "./screens/explore/ExploreScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import PageNotFound from "./screens/404/PageNotFound";
import { fetchUpComing } from "./redux/bannerSlice";
import { fetchDataFromAPI } from "./API";
import { setMovies, setTv } from "./redux/genresSlice";

function App() {
  const dispatch = useDispatch();

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
        <Route path='login' element={<SignUpScreen />} />
        <Route path='profile' element={<ProfileScreen />} />
        <Route path='search/:query' element={<SearchResult />} />
        <Route path='explore/:mediaType' element={<ExploreScreen />} />
        <Route path='show/:id/:id' element={<DetailScreen />} />
        <Route path='credits/:id/:id' element={<CreditsScreen />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
