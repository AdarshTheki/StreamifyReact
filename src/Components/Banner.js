import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import Skeleton from "react-loading-skeleton";
import { AiFillLike, AiFillStar } from "react-icons/ai";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const getMovieData = await axios.get(requests?.movie_upcoming);
        setMovie(
          getMovieData.data.results[
            Math.floor(Math.random() * getMovieData.data.results.length - 1)
          ]
        );
        setLoading(false);
        return getMovieData;
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  // string manage descriptions length not mentions
  function truncate(string, n) {
    return string && string.length > n
      ? string.substr(0, n - 1) + "..."
      : string;
  }

  const lazyUrl = `https://image.tmdb.org/t/p/w200/${movie?.backdrop_path}`;
  const originalUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  const [imgSrc, setSrc] = useState(lazyUrl || originalUrl);
  useEffect(() => {
    const img = new Image();
    img.src = originalUrl;
    img.onload = () => {
      setSrc(originalUrl);
    };
  }, [originalUrl]);

  if (isLoading) {
    return <Skeleton className='banner'></Skeleton>;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__detail'>
          <span>
            <AiFillStar color="yellow" className="icon"/>
            {movie?.vote_average || "NA"}
          </span>
          <span>
            Release on {new Date(movie?.release_date).toDateString() || "NA"}
          </span>
          <span>
            <AiFillLike color="red" className="icon"/> {movie?.popularity.toFixed() || "NA"}
          </span>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className='banner__gradient'></div>
    </header>
  );
}

export default Banner;
