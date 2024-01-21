import Banner from '../../Components/Banner/Banner';
import Trending from './Trending';
import Movies from "./Movies";
import TVShow from "./TVShow";
import Footer from '../../Components/Footer/Footer';
import './HomeScreen.css';

function HomeScreen() {
    return (
        <div>
            <Banner />
            <div className='max-width'>
                <Trending />
                <Movies />
                <TVShow />
            </div>
            <Footer />
        </div>
    );
}

export default HomeScreen;
