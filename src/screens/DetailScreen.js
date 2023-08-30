import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import { TbBrandDisney } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import { AiFillYoutube, AiFillLike } from "react-icons/ai";
import "./detail.css";
import requests from "../request";

const DetailScreen = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const path = location.pathname.replace("/show/", "");

  useEffect(() => {
    async function fetchData() {
      const getData = await axios.get(path + requests.api_link);
      setMovie(getData.data);
      return getData;
    }
    fetchData();
  }, [path]);

  console.log(movie);
  
  const {
    original_title,
    original_language,
    original_name,
    name,
    title,
    genres,
    release_date,
    first_air_date,
    backdrop_path,
    overview,
    production_companies,
    production_countries,
    spoken_languages,
    vote_average,
    runtime,
    revenue,
    poster_path,
    popularity,
    origin_country,
    id,
    episode_run_time,
  } = movie;

  const YourDate = new Date(release_date || first_air_date);
  const YourTitle = original_name || original_title || title || name;
  const YourLanguage = origin_country || original_language 
  
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
      className='detailScreen'>
      <div className='detailContainer'>
        <div className='img'>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + poster_path}
            alt={YourTitle}
          />
        </div>
        <div className='details'>
          <h1 className='title'>
            {YourTitle}
            <span> ({release_date?.substring(0, 4)})</span>
          </h1>
          <div className='desc'>
            <span>{YourDate.toDateString()}</span>
            <span>[{YourLanguage}]</span>
            <span>
              {genres?.map((e) => {
                return <span key={e?.id}>{e?.name}, </span>;
              })}
            </span>
            <span>
              {(runtime / 60)?.toFixed(1).substring(0, 1)}h{" "}
              {(runtime / 30).toFixed(1)}m
            </span>
          </div>
          <div className='icons'>
            <TbBrandDisney className='icon' />
            <AiFillYoutube className='icon' />
            <AiFillLike className='icon' />
            <button className='btn'>
              <FaPlayCircle className='btnIcon' /> Play Tailer
            </button>
          </div>
          <p className='disc'>{overview}</p>
          <div className='artist'></div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
