import Details from "./detailBanner/Details";
import Credits from "./credits/Credits";
import Social from "./social/Social";
import Related from "./related/Related";
import VideoDetail from "./videoSection/VideoDetail";
import Footer from "../../Components/Footer/Footer";

const DetailScreen = () => {
  return (
    <>
      <Details />
      <div className='max-width relative'>
        <Credits />
        <Social />
        <VideoDetail />
        <Related />
        <div className='box-shadow'></div>
      </div>
      <Footer/>
    </>
  );
};
export default DetailScreen;
