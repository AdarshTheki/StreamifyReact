import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Home, Details, Credits, Search, Explore, Profile, Login, SignUp, NotFound } from './Pages';
import { fetchUpComing } from './Redux/bannerSlice';
import { setMovies, setTv } from './Redux/genresSlice';
import { login, logout } from './Redux/userSlice';
import Nav from './Components/Header/Nav';
import GoToButton from './Components/GoToButton/GoToButton';
import { fetchDataFromAPI } from './API';
import { auth } from './firebase';

function App() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.user);

    useEffect(() => {
        const apiTesting = async () => {
            try {
                const [movieGenre, tvGenre] = await Promise.all([
                    fetchDataFromAPI('/genre/movie/list'),
                    fetchDataFromAPI('/genre/tv/list'),
                ]);
                dispatch(setMovies(movieGenre?.genres));
                dispatch(setTv(tvGenre?.genres));
            } catch (error) {
                console.error(`Error fetch Data: ${error.message}`);
            }
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
