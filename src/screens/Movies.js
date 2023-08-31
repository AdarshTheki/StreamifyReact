import React, { useState } from "react";
import requests from "../request";
import Rows from "../Components/Rows";

const Movies = () => {
  const [movie, setMovie] = useState("upcoming");
  const [show, setShow] = useState("movie");

  return (
    <div className='trending'>
      <div className='trending__setting'>
        <h1 className='trending__title'>Movie</h1>
        <div className='trending__buttons'>
          <button
            onClick={() => setMovie("upcoming")}
            className={`trending__btn ${movie === "upcoming" && "isActive"}`}>
            upcoming
          </button>
          <button
            onClick={() => setMovie("now_playing")}
            className={`trending__btn ${
              movie === "now_playing" && "isActive"
            }`}>
            now playing
          </button>
          <button
            onClick={() => setMovie("popular")}
            className={`trending__btn ${movie === "popular" && "isActive"}`}>
            popular
          </button>
          <button
            onClick={() => setMovie("top_rated")}
            className={`trending__btn ${movie === "top_rated" && "isActive"}`}>
            top rated
          </button>
        </div>
      </div>
      <div className='trending__row'>
        <Rows fetchUrl={`/${show}/${movie}` + requests.api_link} show={show} />
        <div className='box-shadow'></div>
      </div>
    </div>
  );
};

export default Movies;
