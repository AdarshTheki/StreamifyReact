import DetailBanner from "./detailBanner/DetailBanner";
import Credits from "./credits/Credits";
import Social from "./social/Social";
import Related from "./related/Related";
import VideoDetail from "./videoSection/VideoDetail";

const DetailScreen = () => {
  return (
    <>
      <DetailBanner />
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
