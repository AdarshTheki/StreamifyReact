import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import lazy from "../../assets/image@4x.png";
import "./Details.css";
import useFetch from "../../hooks/useFetch";
import dayjs from "dayjs";
import Wrapper from "../Wrapper/Wrapper";

const DetailContainer = () => {
  const location = useLocation();
  const path = location.pathname.replace("/show", "");

  const { data, loading, error } = useFetch(path);

  if (loading) {
    return (
      <div style={{ padding: "8rem 0", textAlign: "center" }}>
        <h1>Loading.... {error}</h1>
      </div>
    );
  }

  return <Movies key={data?.id} {...data} />;
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
  const YourTitle = title || original_title || original_name || name;
  const YourLanguage = origin_country || original_language;
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
            <span>
              ({dayjs(release_date || first_air_date).format("YYYY")})
            </span>
          </h1>
          <div className='details__desc'>
            <p>Status: {status || "NA"}</p>
            <p>{dayjs(release_date || first_air_date).format("DD MMM YYYY")}</p>
            <p>Language: [{YourLanguage || "NA"}]</p>
            <p>
              &#9679;{" "}
              {genres?.map((e) => {
                return <span key={e?.id}>{e?.name || "NA"}, </span>;
              })}
            </p>
            <p>{runtime} minutes</p>
            <p>
              Rating: {Math.ceil(vote_average)}
              <span>⭐</span>
            </p>
          </div>
          <div className='icons'>
            <FaPlayCircle color='red' />
            <button className='btn'>Play Tailer</button>
          </div>
          <p className='disc'>
            {overview} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Veritatis, eligendi facilis. Aliquid, quibusdam saepe adipisci
            perferendis amet ipsa quisquam? Vitae iusto ipsam fugit maiores cum
            impedit eum repellat labore pariatur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident nesciunt facere officiis, et
            in, sapiente ea veniam excepturi maxime incidunt eum laborum dicta
            temporibus, sed velit consequuntur ab! Consequuntur, reprehenderit.
          </p>
          <div className='price'>
            <span>Budget: {CurrencyBudget || "NA"}</span>
            <span>Revenue: {CurrencyRevenue || "NA"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
