import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Home, Details, Credits, Search, Explore, Profile, Login, SignUp, NotFound } from './Pages';
import { fetchBannerLists, fetchGenreMovieLists, fetchGenreTvLists } from './Redux/fetchDataSlice';
import { login, logout } from './Redux/userSlice';
import Nav from './Components/Header/Nav';
import GoToButton from './Components/GoToButton/GoToButton';
import { auth } from './firebase';

function App() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.user);

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
        dispatch(fetchBannerLists());
        dispatch(fetchGenreMovieLists());
        dispatch(fetchGenreTvLists());
    }, [dispatch]);

    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='profile' element={!user?.uid ? <Login /> : <Profile />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='search/:query' element={<Search />} />
                <Route path='explore/:mediaType' element={<Explore />} />
                <Route path='show/:mediaType/:id' element={<Details />} />
                <Route path='credits/:id/:id' element={<Credits />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <GoToButton />
        </div>
    );
}

export default App;
