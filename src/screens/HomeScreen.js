import Banner from "../Components/Banner/Banner";
import Trending from "../Components/Rows/Trending";
import Movies from "../Components/Rows/Movies";
import TVShow from "../Components/Rows/TVShow";

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Banner />
      <div className='max-width'>
        <Trending />
        <Movies />
        <TVShow />
      </div>
    </div>
  );
}

export default HomeScreen;
