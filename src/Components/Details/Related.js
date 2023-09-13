import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import requests from "../../request";
import Skeleton from "react-loading-skeleton";
import lazy from "../../assets/image@4x.png";
import './Related.css'
const IMAGE_URL = "https://image.tmdb.org/t/p/w300/";
const BASE_URL = "https://api.themoviedb.org/3/";

const Related = () => {
  const [related, setRelated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const path = location.pathname.replace("/show/", "");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          BASE_URL + path + `/recommendations` + requests.api_link
        );
        if (!res.ok) {
          setError("Somethings was Wrongs!");
          setLoading(false);
          return;
        }
        const data = await res.json();
        setRelated(data?.results);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
      setLoading(false)
    };
    getData();
  }, [path]);

  const Loading = () => {
    return (
      <div style={{ background: "#ddd", padding: "10px" }}>
        <Skeleton width={200} height={40} />
        <div style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
          <Skeleton width={250} height={150} />
          <Skeleton width={250} height={150} />
          <Skeleton width={250} height={150} />
          <Skeleton width={250} height={150} />
          <Skeleton width={250} height={150} />
        </div>
      </div>
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className='loading'>
        <h1 text-data={`Error: ${error}`}>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className='Relates'>
      <h2>Recommendations</h2>
      <div className='related__container'>
        {related?.map((item) => (
          <RelatedContainer key={item.id} {...item} />
        ))}
        <div className='related__link inline-flex'>
          <NavLink to={`/credits/${path}`} className='_links'>
            More details →
          </NavLink>
        </div>
      </div>
      <div className='box-shadow'></div>
    </div>
  );
};
export default Related;



const RelatedContainer = ({
  title,
  name,
  id,
  original_name,
  media_type,
  vote_average,
  backdrop_path,
}) => {
  const rating = (star) =>
    "★★★★★☆☆☆☆☆".slice(
      Math.round((10 - star) / 2),
      Math.round((20 - star) / 2)
    );

  return (
    <NavLink
      key={id}
      to={`/show/${media_type}/${id}`}
      className='related__link'>
      <div className='related__img'>
        <span className='related__star'>{rating(vote_average) || "NA"}</span>
        <ProgressiveImage imgUrl={IMAGE_URL + backdrop_path} />
      </div>
      <p className='related__name'>{title || original_name || name || "NA"}</p>
    </NavLink>
  );
};

const ProgressiveImage = ({ imgUrl }) => {
  const [imgSrc, setSrcImg] = useState(lazy || imgUrl);
  const customClass =
    lazy && imgUrl === lazy ? "loading-image" : "loaded-image";
  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      setSrcImg(imgUrl);
    };
  }, [imgUrl]);

  return <img src={imgSrc} alt='' className={customClass} />;
};
