import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import Skeleton from "react-loading-skeleton";
import { AiFillLike } from "react-icons/ai";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const getMovieData = await axios.get(requests?.movie_upcoming);
        if (getMovieData.status !== 200) {
          setIsError(true);
        } else {
          setMovie(
            getMovieData.data.results[
              Math.floor(Math.random() * getMovieData.data.results.length - 1)
            ]
          );
          setLoading(false);
        }
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

  const rating = (star) =>
    "★★★★★☆☆☆☆☆".slice(
      Math.round((10 - star) / 2),
      Math.round((20 - star) / 2)
    );
  const releaseDate = new Date(movie?.release_date);

  if (isLoading) {
    return (
      <div
        style={{
          position: "relative",
          minHeight: "400px",
          width: "80vw",
          margin: " 40px auto",
        }}>
        <br />
        <Skeleton width='100%' height={30} />
        <Skeleton width='80%' height={20} />
        <Skeleton width='90%' height={30} />
        <div className="loading">
          <h1 data-text="Loading...">Loading...</h1>
        </div>
        <Skeleton width='50%' height={10} />
        <Skeleton width='100%' height={20} />
        <Skeleton width='80%' height={10} />
        <Skeleton width='60%' height={10} />
        <Skeleton width='100%' height={20} />
        <br />
        <Skeleton width='80%' height={30} />
        <Skeleton width='50%' height={30} />
      </div>
    );
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}>
      {isError && (
        <h1 style={{ fontSize: "3rem", textAlign: "center", color: "red" }}>
          "the server cannot or will not process the request due to something
          that is perceived to be a client error"
        </h1>
      )}
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__detail'>
          <span style={{ color: "gold", fontSize: "1.2rem" }}>
            {rating(movie?.vote_average) || "NA"}
          </span>
          <span>Release on {releaseDate?.toDateString() || "NA"}</span>
          <span>
            <AiFillLike color='red' className='icon' />
            {movie?.popularity?.toFixed() || "NA"}
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
