import React from "react";
import { NavLink } from "react-router-dom";
import RowImage from "./RowImage";

const RowDetail = ({
  show,
  release_date,
  first_air_date,
  name,
  title,
  original_title,
  id,
  poster_path,
  backdrop_path,
}) => {
  const currentDate = new Date(release_date || first_air_date);
  const movieTitle = name || title || original_title;
  return (
    <div className='row__post_container'>
      <NavLink to={`show/${show}/${id}`} className='row__poster'>
        <RowImage imgUrl={poster_path || backdrop_path} />
      </NavLink>
      <div className='row_details'>
        <NavLink to={`show/${show}/${id}`} className='movie_title'>
          {movieTitle.substring(0, 23)}
        </NavLink>
        <p className='movie_release_date'>{currentDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default RowDetail;
