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

  if (loading) {
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
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h2>Recommendations</h2>
      <div className='related'>
        {related?.map((item) => {
          return (
            <NavLink
              key={item?.id}
              to={`/show/${item?.media_type}/${item?.id}`}
              className='related-link'>
              <div className='related-img'>
                <span className='related-star' style={{ color: "#ffe600" }}>
                  {rating(item?.vote_average) || "NA"}
                </span>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${
                    item?.backdrop_path || item?.poster_path
                  }`}
                  alt='img'
                  loading='lazy'
                />
              </div>
              <p className='related-title'>
                {item?.title || item?.original_title || "NA"}
              </p>
            </NavLink>
          );
        })}
        <div className='related-link inline-flex'>
          <NavLink to={`/credits/${path}`} className='_links'>
            More details →
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Related;
