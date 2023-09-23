import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../Components/LazyImage/Img";
import Loading from "./Loading";
import "./Credits.css";

const Cast = () => {
  const location = useLocation();
  const path = location.pathname.replace("/show", "");

  const { data, loading } = useFetch(`${path}/credits`);

  return (
    <div className='credits__main'>
      <h2>Top Billed Cast</h2>
      {!loading ? (
        <div className='credits__container'>
          {data?.cast?.map((item) => {
            return (
              <div key={item?.id} className='credits__card'>
                <div className='credits__img'>
                  <Img
                    src={`https://image.tmdb.org/t/p/w200/${item?.profile_path}`}
                  />
                </div>
                <div>
                  <h2 className='credits__name'>{item.name}</h2>
                  <p className='credits__char'>{item?.character}</p>
                </div>
              </div>
            );
          })}
          <div className='credits__card inline-flex'>
            <NavLink to={`/credits${path}`} className='_links'>
              Credits more details
            </NavLink>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <div className='box-shadow-credits'></div>
    </div>
  );
};

export default Cast;
