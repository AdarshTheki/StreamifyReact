import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./Image";
import dayjs from "dayjs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Row = ({
  show,
  release_date,
  first_air_date,
  name,
  title,
  original_title,
  id,
  poster_path,
  backdrop_path,
  vote_average,
}) => {
  const movieTitle = name || title || original_title;
  return (
    <div className='rowPostContainer'>
      <NavLink to={`show/${show}/${id}`} className='rowPoster'>
        <Image imgUrl={poster_path || backdrop_path} />
        <div>{<Rating rating={vote_average} />}</div>
      </NavLink>
      <div className='rowDetails'>
        <NavLink to={`show/${show}/${id}`} className='rowTitle'>
          {movieTitle.substring(0, 23)}
        </NavLink>
        <p className='rowReleaseDate'>
          {dayjs(release_date || first_air_date).format("DD MMM, YYYY")}
        </p>
      </div>
    </div>
  );
};
export default Row;

const Rating = ({ rating }) => {
  return (
    <div className='circleRating'>
      <CircularProgressbar
        value={rating}
        strokeWidth={14}
        maxValue={10}
        text={`${rating}`}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 6 ? "orange" : "green",
          textColor: "black",
          textSize: "2rem",
        })}
      />
    </div>
  );
};
