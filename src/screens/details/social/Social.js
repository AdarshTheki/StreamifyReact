import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaWikipediaW,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../../hooks/useFetch";
import { fetchDataFromAPI } from "../../../API";
import "./Social.css";

const Social = () => {
  const location = useLocation();
  const path = location.pathname.replace("/show", "");

  const [keywords, setKeywords] = useState([]);
  const { data, loading } = useFetch(`${path}/external_ids`);

  useEffect(() => {
    fetchDataFromAPI(`${path}/keywords`)
      .then((keywords) => setKeywords(keywords))
      .catch((err) => console.log(err.message));
  }, [path]);

  if (loading) {
    return (
      <div style={{ marginLeft: "2rem" }}>
        <Skeleton width='20%' height={30} />
      </div>
    );
  }

  return (
    <div className='Socials'>
      <div className='social'>
        <h2 className='social__title'>Socials</h2>
        <div className='social__container'>
          <NavLink
            className='icons'
            target='__blank'
            to={`https://www.facebook.com/${data?.facebook_id}`}>
            <FaFacebook className='icon' color='#4867AA' fontSize={30} />
          </NavLink>
          <NavLink
            className='icons'
            target='_blank'
            to={`https://www.instagram.com/${data?.instagram_id}`}>
            <FaInstagramSquare className='icon' color='#F506A8' fontSize={30} />
          </NavLink>
          <NavLink
            className='icons'
            target='_blank'
            to={`https://twitter.com/${data?.twitter_id}`}>
            <FaTwitter className='icon' color='#1DA1F2' fontSize={30} />
          </NavLink>
          <NavLink
            className='icons'
            target='_blank'
            to={`https://www.wikidata.org/wiki/${data?.wikidata_id}`}>
            <FaWikipediaW className='icon' color='black' fontSize={30} />
          </NavLink>
        </div>
      </div>
      <div className='keywords'>
        <div className='keywords__title'>Keywords</div>
        <div className='keywords__container'>
          <Keywords keyword={keywords} />
        </div>
      </div>
      <div className='box-shadow'></div>
    </div>
  );
};

export default Social;

const Keywords = ({ keyword }) => {
  return (
    <>
      {keyword?.results?.map((item) => (
        <span key={item.id} className='keywords-card'>
          {item?.name}
        </span>
      ))}
    </>
  );
};
