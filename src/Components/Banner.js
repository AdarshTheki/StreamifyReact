import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getMovieData = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        getMovieData.data.results[
          Math.floor(Math.random() * getMovieData.data.results.length - 1)
        ]
      );
      return getMovieData;
    }
    fetchData();
  }, []);

  // string manage descriptions length not mentions
  function truncate(string, n) {
    return string && string.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My Lists</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 140)}
        </h1>
      </div>
      <div className='banner__gradient'></div>
    </header>
  );
}

export default Banner;
