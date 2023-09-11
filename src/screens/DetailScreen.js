import Details from "../Components/Details/Details";
import Credits from "../Components/Details/Credits";
import Social from "../Components/Details/Social";
import Related from "../Components/Details/Related";

const DetailScreen = () => {
  return (
    <>
      <Details />
      <div className='max-width'>
        <div className="more-details">
        <Credits />
        <Social />
        </div>
        <Related />
      </div>
    </>
  );
};
export default DetailScreen;
