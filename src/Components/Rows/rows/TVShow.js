import React, { useState } from "react";
import Rows from "../Rows";
import { LuLayoutGrid } from "react-icons/lu";

const TVShow = () => {
  const [toggle, setToggle] = useState(false);
  const TvShows = ["top_rated", "on_the_air", "popular", "airing_today"];
  const [tvShow, setTvShow] = useState("top_rated");

  return (
    <div className='trending'>
      <div className='trending__setting'>
        <h1 className='trending__title'>TV show</h1>
        <div className='trending__buttons'>
          {TvShows.map((item) => {
            return (
              <button
                key={item}
                onClick={() => setTvShow(item)}
                className={`trending__btn ${tvShow === item && "isActive"}`}>
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
        <Rows fetchUrl={`/tv/${tvShow}`} show='tv' toggle={toggle} />
        <div className='box-shadow'></div>
      </div>
    </div>
  );
};

export default TVShow;
