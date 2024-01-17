import Banner from '../../Components/Banner/Banner';
import Trending from '../../Components/Rows/rows/Trending';
import Movies from "../../Components/Rows/rows/Movies";
import TVShow from "../../Components/Rows/rows/TVShow";
import './HomeScreen.css';
import Footer from '../../Components/Footer/Footer';

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
