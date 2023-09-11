import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import Skeleton from "react-loading-skeleton";
import { FaStar, FaPlay, FaPlus } from "react-icons/fa";
import "./Banner.css";

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

  const releaseDate = new Date(movie?.release_date);
  const today = new Date();
  const daysDifference = Math.floor(
    (today - releaseDate) / (1000 * 60 * 60 * 24)
  );

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
        <div className='loading'>
          <h1 data-text='Loading...'>Loading...</h1>
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

  // console.log(movie);

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
        <p className='release'>
          release: {releaseDate?.toDateString() || "NA"}
        </p>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__detail'>
          <p className='rating'>
            Rating: <FaStar color='yellow' fontSize={20} />
            {movie?.vote_average || "NA"}
          </p>

          <p className='days-left'>
            <span>{daysDifference || "NA"}</span> days left
          </p>

          <p className='language'>
            Language: [<span>{movie?.original_language || "NA"}</span>]
          </p>
          <p className='popularity'>
            popularity : {movie?.popularity.toFixed(1)}K
          </p>
        </div>
        <h2 className='banner__description'>
          {truncate(movie?.overview, 200)}
        </h2>
        <div className='banner__buttons'>
          <button className='btn red-btn'>
            <FaPlay color='white' /> Play
          </button>
          <button className='btn black-btn'>
            <FaPlus color='white' /> Watch Lists
          </button>
        </div>
      </div>
      <div className='banner__gradient'></div>
    </header>
  );
}

export default Banner;
