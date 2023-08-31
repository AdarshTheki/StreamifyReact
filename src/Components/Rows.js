import React, { useEffect, useState } from "react";
import axios from "../axios";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Images from "./Images";

function Rows({ fetchUrl, show }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const getData = await axios.get(fetchUrl);
        setMovies(getData.data.results);
        setLoading(false);
        return getData;
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [fetchUrl]);

  if (isLoading) {
    return (
      <div className='row__container'>
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
        <Skeleton width={200} height={250} />
      </div>
    );
  }
  return (
    <div className='row__container color-change-2x'>
      {movies?.map((movie) => {
        const currentDate = new Date(
          movie.release_date || movie.first_air_date
        );
        const movieTitle = movie?.original_title || movie?.name || movie?.title;
        return (
          <div key={movie?.id} className='row__post_container'>
            <NavLink to={`show/${show}/${movie?.id}`} className='row__poster'>
              <Images imgUrl={movie?.poster_path} />
            </NavLink>
            <div className='row_details'>
              <NavLink to={`show/${show}/${movie?.id}`} className='movie_title'>
                {movieTitle.substring(0, 25)}
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
