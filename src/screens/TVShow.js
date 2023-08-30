import React, { useState } from "react";
import requests from "../request";
import Rows from "../Components/Rows";

const TVShow = () => {
  const [tvShow, setTvShow] = useState("top_rated");
  const [show, setShow] = useState("tv");

  return (
    <div className='trending'>
      <div className='trending__setting'>
        <h1 className='trending__title'>TV show</h1>
        <div className='trending__buttons'>
          <button
            onClick={() => setTvShow("on_the_air")}
            className={`trending__btn ${
              tvShow === "on_the_air" && "isActive"
            }`}>
            onAir
          </button>
          <button
            onClick={() => setTvShow("popular")}
            className={`trending__btn ${tvShow === "popular" && "isActive"}`}>
            popular
          </button>
          <button
            onClick={() => setTvShow("top_rated")}
            className={`trending__btn ${tvShow === "top_rated" && "isActive"}`}>
            top rated
          </button>
          <button
            onClick={() => setTvShow("airing_today")}
            className={`trending__btn ${
              tvShow === "airing_today" && "isActive"
            }`}>
            airing today
          </button>
        </div>
      </div>
      <div className="trending__row">
      <Rows fetchUrl={`/${show}/${tvShow}` + requests.api_link} show={show} />
      <div className="box-shadow"></div>
      </div>
    </div>
  );
};

export default TVShow;
