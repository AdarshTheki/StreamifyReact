import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./images/Image";
import dayjs from "dayjs";
import Rating from "./ratings/Rating";
import Genres from "./genres/Genres";

const Row = ({
  show,
  release_date,
  first_air_date,
  name,
  title,
  id,
  poster_path,
  backdrop_path,
  vote_average,
  genre_ids,
}) => {

  return (
    <div className='rowPostContainer'>
      <NavLink to={`/show/${show}/${id}`} className='rowPoster'>
        <Image imgUrl={poster_path || backdrop_path} />
        <Rating rating={(vote_average * 10)?.toFixed(0)} />
        <Genres genres={genre_ids}/>
      </NavLink>
      <div className='rowDetails'>
        <NavLink to={`/show/${show}/${id}`} className='rowTitle'>
          {(name || title)?.substring(0, 23)}
        </NavLink>
        <p className='rowReleaseDate'>
          {dayjs(release_date || first_air_date).format("DD MMM, YYYY")}
        </p>
      </div>
    </div>
  );
};
export default Row;
