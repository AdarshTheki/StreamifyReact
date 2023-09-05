import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../../axios";
import requests from "../../request";
import Skeleton from "react-loading-skeleton";
// import lazy from "../../assets/lazy.jpg";

const Related = () => {
  const [related, setRelated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const path = location.pathname.replace("/show/", "");

  const rating = (star) =>
    "★★★★★☆☆☆☆☆".slice(
      Math.round((10 - star) / 2),
      Math.round((20 - star) / 2)
    );

  useEffect(() => {
    let isMounted = true;
    axios
      .get(path + `/recommendations` + requests.api_link)
      .then((res) => {
        if (isMounted) {
          setRelated(res.data?.results);
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
        <h1 text-data={`Error: ${error.message}`}>Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className='Relates'>
      <h2>Recommendations</h2>
      <div className='related__container'>
        {related?.map((item) => {
          return (
            <NavLink
              key={item?.id}
              to={`/show/${item?.media_type}/${item?.id}`}
              className='related__link'>
              <div className='related__img'>
                <span className='related__star'>
                  {rating(item?.vote_average) || "NA"}
                </span>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${
                    item?.backdrop_path ?? item?.poster_path
                  }`}
                  alt='img'
                  loading='lazy'
                />
              </div>
              <p className='related__name'>
                {item?.title || item?.original_name || item?.name || "NA"}
              </p>
            </NavLink>
          );
        })}
        <div className='related__link inline-flex'>
          <NavLink to={`/credits/${path}`} className='_links'>
            More details →
          </NavLink>
        </div>
      </div>
      <div className="box-shadow"></div>
    </div>
  );
};

export default Related;
