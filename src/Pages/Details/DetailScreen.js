import DetailContainer from './detail/DetailContainer';
import CastSection from './credits/CastSection';
import SocialSection from './social/SocialSection';
import Related from './related/Related';
import VideoDetail from './videoSection/VideoDetail';
import Footer from '../../Components/Footer/Footer';
import './DetailScreen.scss';

const DetailScreen = () => {
    return (
        <>
            <DetailContainer />
            <div className='max-width relative'>
                <div className='mediaSection'>
                    <CastSection />
                    <SocialSection />
                </div>
                <VideoDetail />
                <Related />
                <div className='box-shadow'></div>
            </div>
            <Footer />
        </>
    );
};
export default DetailScreen;
