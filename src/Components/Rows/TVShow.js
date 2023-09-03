import React, { useState } from "react";
import requests from "../../request";
import Rows from "./Rows";

const TVShow = () => {
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
      </div>
      <div className='trending__row'>
        <Rows fetchUrl={`/tv/${tvShow}` + requests.api_link} show='tv' />
        <div className='box-shadow'></div>
      </div>
    </div>
  );
};

export default TVShow;
