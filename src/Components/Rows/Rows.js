import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Images from "./Images";

function Rows({ fetchUrl, show }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const getData = await axios.get(fetchUrl);
        if (getData.status !== 200) {
          setIsError(true);
          return;
        } else {
          setMovies(getData.data.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [fetchUrl]);

  if (isLoading) {
    return (
      <div className='row__container'>
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
      </div>
    );
  }

  if(isError){
    return (
      <div className='loading' style={{ minHeight: "300px" }}>
        <h1 data-text='some Thing was wrang !...'>some Thing was wrang !...</h1>
      </div>
    );
  }

  return (
    <div className='row__container'>
      {movies?.map((movie) => {
        const currentDate = new Date(
          movie.release_date || movie.first_air_date
        );
        const movieTitle = movie?.name || movie?.title || movie?.original_title;
        return (
          <div key={movie?.id} className='row__post_container'>
            <NavLink to={`show/${show}/${movie?.id}`} className='row__poster'>
              <Images imgUrl={movie?.poster_path || movie?.backdrop_path} />
            </NavLink>
            <div className='row_details'>
              <NavLink to={`show/${show}/${movie?.id}`} className='movie_title'>
                {movieTitle.substring(0, 23)}
              </NavLink>
              <p className='movie_release_date'>{currentDate.toDateString()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rows;
