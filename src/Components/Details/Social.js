import axios from "../../axios";
import requests from "../../request";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaWikipediaW,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { NavLink, useLocation } from "react-router-dom";

const Social = () => {
  const [ids, setIds] = useState(null);
  const [keywords, setKeywords] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const path = location.pathname.replace("/show/", "");

  useEffect(() => {
    let isMounted = true;
    axios
      .get(path + `/external_ids` + requests.api_link)
      .then((res) => {
        if (isMounted) {
          setIds(res.data);
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

  useEffect(() => {
    let isMounted = true;
    axios
      .get(path + `/keywords` + requests.api_link)
      .then((res) => {
        if (isMounted) {
          setKeywords(res.data);
          setLoading1(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading1(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [path]);

  const Loading = () => {
    return (
      <div style={{marginLeft:"2rem"}}>
        <Skeleton width='20%' height={30} />
        <Skeleton width='100%' height={10} />
        <Skeleton width='70%' height={20} />
        <div style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
          <Skeleton width={40} height={40} style={{ borderRadius: "50%" }} />
          <Skeleton width={40} height={40} style={{ borderRadius: "50%" }} />
          <Skeleton width={40} height={40} style={{ borderRadius: "50%" }} />
          <Skeleton width={40} height={40} style={{ borderRadius: "50%" }} />
        </div>
        <Skeleton width="100%" height={10} />
        <Skeleton width="100%" height={20} />
        <Skeleton width="50%" height={10} />
        <Skeleton width="30%" height={10} />
        <Skeleton width="80%" height={30} />
        <Skeleton width="90%" height={10} />
      </div>
    );
  };

  if (loading && loading1) return <Loading />;

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <Loading />
      </div>
    );
  }
  return (
    <div className="Socials">
      <div className='social'>
        <h2 className='social__title'>Socials</h2>
        <div className='social__container'>
          <NavLink
            className='icon'
            target='__blank'
            to={`https://www.facebook.com/${ids?.facebook_id}`}>
            <FaFacebook color='#4867AA' fontSize={30} />
          </NavLink>
          <NavLink
            className='icon'
            target='_blank'
            to={`https://www.instagram.com/${ids?.instagram_id}`}>
            <FaInstagramSquare color='#F506A8' fontSize={30} />
          </NavLink>
          <NavLink
            className='icon'
            target='_blank'
            to={`https://twitter.com/${ids?.twitter_id}`}>
            <FaTwitter color='#1DA1F2' fontSize={30} />
          </NavLink>
          <NavLink
            className='icon'
            target='_blank'
            to={`https://www.wikidata.org/wiki/${ids?.wikidata_id}`}>
            <FaWikipediaW color='black' fontSize={30} />
          </NavLink>
        </div>
      </div>
      <div className='keywords'>
        <div className='keywords__title'>Keywords</div>
        <div className='keywords__container'>
          {keywords?.keywords?.map((item) => (
            <span className='keywords-card' key={item?.id}>
              {item?.name}
            </span>
          ))}
        </div>
      </div>
      <div className='keywords'>
        <NavLink to={`/credits/${path}`} className='_links'>
          Full Cast & Crew
        </NavLink>
      </div>
      <div className="box-shadow"></div>
    </div>
  );
};

export default Social;
