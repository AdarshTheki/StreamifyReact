import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DetailContainer = ({ movie }) => {
  const {
    original_title,
    original_language,
    original_name,
    name,
    title,
    genres,
    release_date,
    first_air_date,
    overview,
    vote_average,
    runtime,
    poster_path,
    origin_country,
    homepage,
    status,
    budget,
    revenue,
  } = movie;

  const YourDate = new Date(release_date || first_air_date);
  const YourTitle = title || original_title || original_name || name;
  const YourLanguage = origin_country || original_language;
  const rating = (star) =>
    "★★★★★☆☆☆☆☆".slice(
      Math.round((10 - star) / 2),
      Math.round((20 - star) / 2)
    );

  const CurrencyBudget = budget?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const CurrencyRevenue = revenue?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
      className='detailScreen'>
      <div className='detailContainer'>
        <NavLink to={homepage} target='__blank' className='img'>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + poster_path}
            alt={YourTitle || "image.org"}
            title='Official Website'
          />
        </NavLink>
        <div className='details'>
          <h1 className='title'>
            {YourTitle || "NA"}
            <span> ({release_date?.substring(0, 4) || "NA"})</span>
          </h1>
          <div className='desc'>
            <p>Status: {status || "NA"}</p>
            <p>{YourDate.toDateString() || "NA"}</p>
            <p>[{YourLanguage || "NA"}]</p>
            <p>
              &#9679;{" "}
              {genres?.map((e) => {
                return <span key={e?.id}>{e?.name || "NA"}, </span>;
              })}
            </p>
            <p>
              &#9679; {(runtime / 60)?.toFixed(1).substring(0, 1)}h{" "}
              {(runtime - 60).toFixed()}m
            </p>
            <p>
              Rating{" "}
              <span style={{ color: "#ffe600" }}>
                {rating(vote_average) || "NA"}
              </span>
            </p>
          </div>
          <div className='icons'>
            <button className='btn'>
              <FaPlayCircle color='red' /> Play Tailer
            </button>
          </div>
          <p className='disc'>{overview}</p>
          <div className='price'>
            <span>Budget: {CurrencyBudget || "NA"}</span>
            <span>Revenue: {CurrencyRevenue || "NA"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
