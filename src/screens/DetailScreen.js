import Details from "../Components/Details/Details";
import Cast from "../Components/Details/Cast";
import Social from "../Components/Details/Social";
import Related from "../Components/Details/Related";

const DetailScreen = () => {
  return (
    <>
      <Details />
      <div className='max-width'>
        <div className='more-details'>
          <Cast />
          <Social />
        </div>
        <Related />
      </div>
    </>
  );
};
export default DetailScreen;
