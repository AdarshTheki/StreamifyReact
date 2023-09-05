import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Trending from "../Components/Rows/Trending";
import Movies from "../Components/Rows/Movies";
import TVShow from "../Components/Rows/TVShow";

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      {/* <Trending /> */}
      <Movies />
      {/* <TVShow /> */}
    </div>
  );
}

export default HomeScreen;
