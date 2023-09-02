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

  if (loading && loading1) {
    return (
      <div style={{ background: "transparent", padding: "30px", maxWidth: "40vw", margin:'auto'}}>
        <Skeleton width={300} height={30} />
        <div style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
        <Skeleton width={40} height={40} style={{borderRadius:'50%'}} />
        <Skeleton width={40} height={40} style={{borderRadius:'50%'}} />
        <Skeleton width={40} height={40} style={{borderRadius:'50%'}} />
        <Skeleton width={40} height={40} style={{borderRadius:'50%'}} />
        </div>
        <br />
        <div style={{ display: "flex", flexWrap:'wrap', gap: "20px", overflow: "hidden" }}>
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
        </div>
      </div>
    );
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
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
    </div>
  );
};

export default Social;
