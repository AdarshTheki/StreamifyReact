import React, { useState } from "react";
import requests from "../../request";
import Rows from "./Rows";

const Movies = () => {
  const movies = ["upcoming", "now_playing", "popular", "top_rated"];
  const [movie, setMovie] = useState("upcoming");

  return (
    <div className='trending'>
      <div className='trending__setting'>
        <h1 className='trending__title'>Movie</h1>
        <div className='trending__buttons'>
          {movies.map((item) => {
            return (
              <button
                key={item}
                onClick={() => setMovie(item)}
                className={`trending__btn ${movie === item && "isActive"}`}>
                {item.replace("_", " ")}
              </button>
            );
          })}
        </div>
      </div>
      <div className='trending__row'>
        <Rows fetchUrl={`/movie/${movie}` + requests.api_link} show="movie" />
        <div className='box-shadow'></div>
      </div>
    </div>
  );
};

export default Movies;
