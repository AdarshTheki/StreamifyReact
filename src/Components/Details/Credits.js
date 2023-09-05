import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../../axios";
import requests from "../../request";
import Skeleton from "react-loading-skeleton";
import './Credits.css'

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

  const Loading = () => {
    return (
      <div style={{ margin: "10px 2rem" }}>
        <Skeleton width={200} height={30} />
        <Skeleton width='100%' height={20} />
        <Skeleton width='60%' height={10} />
        <Skeleton width='60%' height={10} />
        <Skeleton width='60%' height={10} />
        <Skeleton width='60%' height={10} />
        <Skeleton width='100%' height={5} />
        <Skeleton width='90%' height={15} />
        <Skeleton width='80%' height={25} />
        <Skeleton width='100%' height={10} />
      </div>
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <Loading />
      </div>
    );
  }
  return (
    <div className='credits__main'>
      <h2>Top Billed Cast</h2>
      <div className='credits__container'>
        {credits?.cast?.slice(0, 8)?.map((item) => {
          return (
            <div key={item?.id} className='credits__card'>
              <div className='credits__img'>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item?.profile_path}`}
                  alt=''
                  loading='lazy'
                />
              </div>
              <h2 className='credits__name'>{item.name}</h2>
              <p className='credits__char'>{item?.character}</p>
            </div>
          );
        })}
        <div className='credits__card inline-flex'>
          <NavLink to={`/credits/${path}`} className='_links'>
            Credits more details
          </NavLink>
        </div>
      </div>
      <div className='box-shadow-credits'></div>
    </div>
  );
};

export default Cast;
