import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaWikipediaW } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Socials({ facebook_id, instagram_id, twitter_id, wikidata_id }) {
    return (
        <div className='socials_icons'>
            <NavLink
                className='icon'
                target='__blank'
                to={`https://www.facebook.com/${facebook_id}`}>
                <FaFacebook className='icon' color='#4867AA' fontSize={30} />
            </NavLink>
            <NavLink
                className='icon'
                target='_blank'
                to={`https://www.instagram.com/${instagram_id}`}>
                <FaInstagramSquare className='icon' color='#F506A8' fontSize={30} />
            </NavLink>
            <NavLink className='icon' target='_blank' to={`https://twitter.com/${twitter_id}`}>
                <FaTwitter className='icon' color='#1DA1F2' fontSize={30} />
            </NavLink>
            <NavLink
                className='icon'
                target='_blank'
                to={`https://www.wikidata.org/wiki/${wikidata_id}`}>
                <FaWikipediaW className='icon' color='black' fontSize={30} />
            </NavLink>
        </div>
    );
}
