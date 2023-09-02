import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaWikipediaW,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Social = ({ keywords, ids, }) => {
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
        <div className='keywords__title'>Go to full Cast & Crew</div>
    </div>
    </div>
  );
};

export default Social;
