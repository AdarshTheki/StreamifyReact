import React, { useState } from "react";
import Rows from "./Rows";
import { LuLayoutGrid } from "react-icons/lu";

const Trending = () => {
  const [date, setDate] = useState("day");
  const [show, setShow] = useState("movie");
  const [toggle, setToggle] = useState(false);

  return (
    <div className='trending'>
      <div className='trending__setting'>
        <h1 className='trending__title'>trending</h1>
        <div className='trending__buttons'>
          <button
            onClick={() => setDate("day")}
            className={`trending__btn ${date === "day" && "isActive"}`}>
            Todays
          </button>
          <button
            onClick={() => setDate("week")}
            className={`trending__btn ${date === "week" && "isActive"}`}>
            Week
          </button>
          <button
            onClick={() => setShow("movie")}
            className={`trending__btn ${show === "movie" && "isActive"}`}>
            movie
          </button>
          <button
            onClick={() => setShow("tv")}
            className={`trending__btn ${show === "tv" && "isActive"}`}>
            TV
          </button>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className={`toggle__btn ${toggle && "isActive"}`}>
          <LuLayoutGrid fontSize={20} />
        </button>
      </div>
      <div className='trending__row'>
        <Rows
          fetchUrl={`/trending/${show}/${date}`}
          show={show}
          toggle={toggle}
        />
        <div className='box-shadow'></div>
      </div>
    </div>
  );
};

export default Trending;
