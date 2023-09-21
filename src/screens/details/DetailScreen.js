import Details from "./detailBanner/Details";
import Credits from "./credits/Credits";
import Social from "./social/Social";
import Related from "./related/Related";
import VideoDetail from "./videoSection/VideoDetail";

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
    </>
  );
};
export default DetailScreen;
