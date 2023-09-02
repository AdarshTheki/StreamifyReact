import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../../axios";
import requests from "../../request";
import Skeleton from "react-loading-skeleton";

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const path = location.pathname.replace("/show/", "");

  useEffect(() => {
    let isMounted = true;
    axios
      .get(path + `/credits` + requests.api_link)
      .then((res) => {
        if (isMounted) {
          setCredits(res.data);
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
      <div style={{ background: "#ddd", padding: "30px", maxWidth: "45vw" }}>
        <Skeleton width={100} height={30} />
        <br />
        <div style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
          <Skeleton width={100} height={120} />
          <Skeleton width={100} height={120} />
          <Skeleton width={100} height={120} />
          <Skeleton width={100} height={120} />
          <Skeleton width={100} height={120} />
          <Skeleton width={100} height={120} />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='cast'>
      <h2>Top Billed Cast</h2>
      <div className='cast-container'>
        {credits?.cast?.slice(0, 8)?.map((item) => {
          return (
            <div key={item?.id} className='cast-card'>
              <div className='cast-img'>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item?.profile_path}`}
                  alt=''
                  loading='lazy'
                />
              </div>
              <h2 id='cast-name'>{item.name}</h2>
              <p id='cast-char'>{item?.character}</p>
            </div>
          );
        })}
        <div className='cast-card inline-flex'>
          <NavLink to={`/credits/${path}`} className='_links'>
            Credits more details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cast;
