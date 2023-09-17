import React, { useState } from "react";
import Rows from "../Rows";
import { LuLayoutGrid } from "react-icons/lu";

const Movies = () => {
  const [toggle, setToggle] = useState(false);
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
        <button
          onClick={() => setToggle(!toggle)}
          className={`toggle__btn ${toggle && "isActive"}`}>
          <LuLayoutGrid fontSize={20} />
        </button>
      </div>
      <div className='trending__row'>
        <Rows fetchUrl={`/movie/${movie}`} show='movie' toggle={toggle} />
        <div className='box-shadow'></div>
      </div>
    </div>
  );
};

export default Movies;
