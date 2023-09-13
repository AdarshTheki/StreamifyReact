import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import requests from "../../request";
import axios from "../../axios";
import Skeleton from "react-loading-skeleton";
import lazy from "../../assets/image@4x.png";
import "./Details.css";

const DetailContainer = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const path = location.pathname.replace("/show/", "");

  useEffect(() => {
    let isMounted = true;
    axios
      .get(path + requests.api_link)
      .then((res) => {
        if (isMounted) {
          setMovie(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [path]);

  console.log(movie);

  if (loading) {
    return (
      <div
        style={{ position: "relative", minHeight: "80vh", background: "#ccc" }}>
        <div
          className='detailContainer'
          style={{ margin: "auto", maxWidth: "90vw" }}>
          <div className='img'>
            <Skeleton width='80%' height={350} />
          </div>
          <div className='details'>
            <Skeleton width='100%' height={80} />
            <Skeleton width='100%' height={50} />
            <div>
              <Skeleton width='80%' height={50} count={3} />
            </div>
            <Skeleton width='50%' height={30} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='loading' style={{ minHeight: "70vh" }}>
        <h1 data-text='Somethings was wrong!...'>Somethings was wrong!...</h1>
      </div>
    );
  }

  return <Movies key={movie?.id} {...movie} />;
};

export default DetailContainer;

const Movies = ({
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
  backdrop_path,
}) => {
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

  const URL = "https://image.tmdb.org/t/p/w500/";
  const ImageURL = `${(poster_path && URL + poster_path) || lazy}`;

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
      className='details__main'>
      <div className='details__container'>
        <NavLink to={homepage} target='__blank' className='details__img'>
          <img
            src={ImageURL}
            alt={YourTitle || "image.org"}
            title='Official Website'
          />
        </NavLink>
        <div className='details__detail'>
          <h1 className='details__name'>
            {YourTitle || "NA"}
            <span> ({release_date?.substring(0, 4) || "NA"})</span>
          </h1>
          <div className='details__desc'>
            <p>Status: {status || "NA"}</p>
            <p>{YourDate.toDateString() || "NA"}</p>
            <p>Language [{YourLanguage || "NA"}]</p>
            <p>
              &#9679;{" "}
              {genres?.map((e) => {
                return <span key={e?.id}>{e?.name || "NA"}, </span>;
              })}
            </p>
            <p>
              &#9679; {(runtime / 60)?.toFixed(1).substring(0, 1)}h{" "}
              {runtime - 60 - 60}m
            </p>
            <p>
              Rating{" "}
              <span style={{ color: "#ffe600" }}>
                {rating(vote_average) || "NA"}
              </span>
            </p>
          </div>
          <div className='icons'>
            <FaPlayCircle color='red' />
            <button className='btn'>Play Tailer</button>
          </div>
          <p className='disc'>{overview} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eligendi facilis. Aliquid, quibusdam saepe adipisci perferendis amet ipsa quisquam? Vitae iusto ipsam fugit maiores cum impedit eum repellat labore pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt facere officiis, et in, sapiente ea veniam excepturi maxime incidunt eum laborum dicta temporibus, sed velit consequuntur ab! Consequuntur, reprehenderit.</p>
          <div className='price'>
            <span>Budget: {CurrencyBudget || "NA"}</span>
            <span>Revenue: {CurrencyRevenue || "NA"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
