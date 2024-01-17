import React from 'react';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import Circular from '../../Components/Progressbar/Circular';
import Genres from './genres/Genres';
import Img from '../LazyImage/Img';

const Row = ({
    show,
    release_date,
    first_air_date,
    name,
    title,
    id,
    poster_path,
    vote_average,
    genre_ids,
}) => {
    const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : null;
    const names = (name || title)?.substring(0, 23);
    const date = dayjs(release_date || first_air_date).format('DD MMM, YYYY');

    return (
        <div className='rowPostContainer'>
            <NavLink to={`/show/${show}/${id}`} className='rowPoster'>
                <Img src={posterUrl} className={'rowImg'} />
                <Circular value={(vote_average * 10)?.toFixed(0)} size={'1.8rem'} />
                <Genres genres={genre_ids} />
            </NavLink>
            <div className='rowDetails'>
                <NavLink to={`/show/${show}/${id}`} className='rowTitle'>
                    {names}
                </NavLink>
                <p className='rowReleaseDate'>{date}</p>
            </div>
        </div>
    );
};
export default Row;
