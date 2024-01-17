import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaWikipediaW } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import useFetch from '../../../Hooks/useFetch';
import { fetchDataFromAPI } from '../../../API';

const SocialSection = () => {
    const location = useLocation();
    const path = location.pathname.replace('/show', '');

    const [keywords, setKeywords] = useState([]);
    const { data, loading } = useFetch(`${path}/external_ids`);

    useEffect(() => {
        fetchDataFromAPI(`${path}/keywords`)
            .then((keywords) => setKeywords(keywords?.keywords))
            .catch((err) => console.log(err.message));
    }, [path]);

    if (loading) {
        return (
            <div style={{ marginLeft: '2rem' }}>
                <Skeleton width='20%' height={30} />
            </div>
        );
    }

    return (
        <div className='Socials'>
            <Socials {...data}/>
            <Keywords keyword={keywords} />
            <div className='box-shadow'></div>
        </div>
    );
};

export default SocialSection;

const Socials = ({ facebook_id, instagram_id, twitter_id, wikidata_id }) => {
  return (
      <div className='social'>
          <h2 className='social__title'>Socials</h2>
          <div className='social__container'>
              <NavLink
                  className='icons'
                  target='__blank'
                  to={`https://www.facebook.com/${facebook_id}`}>
                  <FaFacebook className='icon' color='#4867AA' fontSize={30} />
              </NavLink>
              <NavLink
                  className='icons'
                  target='_blank'
                  to={`https://www.instagram.com/${instagram_id}`}>
                  <FaInstagramSquare className='icon' color='#F506A8' fontSize={30} />
              </NavLink>
              <NavLink
                  className='icons'
                  target='_blank'
                  to={`https://twitter.com/${twitter_id}`}>
                  <FaTwitter className='icon' color='#1DA1F2' fontSize={30} />
              </NavLink>
              <NavLink
                  className='icons'
                  target='_blank'
                  to={`https://www.wikidata.org/wiki/${wikidata_id}`}>
                  <FaWikipediaW className='icon' color='black' fontSize={30} />
              </NavLink>
          </div>
      </div>
  );
}
const Keywords = ({ keyword }) => {
    return (
        <div className='keywords'>
            <h2 className='keywords__title'>Keywords</h2>
            <div className='keywords__container'>
                {keyword.map((item) => (
                    <span key={item.id} className='keywords-card'>
                        {item?.name}
                    </span>
                ))}
            </div>
        </div>
    );
};
