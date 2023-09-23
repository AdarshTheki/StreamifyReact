import Banner from "../../Components/Banner/Banner";
import Trending from "../../Components/Rows/rows/Trending";
import Movies from "../../Components/Rows/rows/Movies";
import TVShow from "../../Components/Rows/rows/TVShow";
import Logo from "../../Components/Logo/Logo";
import "./HomeScreen.css";
import Footer from "../../Components/Footer/Footer";

function HomeScreen() {
  return (
    <div>
      <Banner />
      <Logo />
      <div className='max-width'>
        <Trending />
        <Movies />
        <TVShow />
      </div>
      <Footer/>
    </div>
  );
}

export default HomeScreen;
