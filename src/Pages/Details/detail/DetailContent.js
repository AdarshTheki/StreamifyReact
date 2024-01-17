import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { PlayIcon } from '../../../Components/VideoPopup/PlayIcon';
import VideoPopup from '../../../Components/VideoPopup/VideoPopup';
import lazy from '../../../assets/no-poster.png';
import useFetch from '../../../Hooks/useFetch';

const DetailContainer = ({
    path,
    original_language,
    name,
    title,
    genres,
    release_date,
    first_air_date,
    overview,
    vote_average,
    runtime,
    poster_path,
    origin_country,
    homepage,
    status,
    budget,
    revenue,
    backdrop_path,
}) => {
    // VideoPopup show details in this
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const { data } = useFetch(`${path}/videos`);

    const CurrencyBudget = budget?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const CurrencyRevenue = revenue?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const ImageURL = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : lazy;

    return (
        <div
            style={{
                background: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            }}
            className='details__main'>
            <div className='details__container'>
                <NavLink to={homepage} target='__blank' className='details__img'>
                    <img src={ImageURL} alt='pic.org' title='Official Website' />
                </NavLink>
                <div className='details__detail'>
                    <h1 className='details__name'>
                        {name || title || 'NA'}
                        <span>({dayjs(release_date || first_air_date).format('YYYY')})</span>
                    </h1>
                    <div className='details__desc'>
                        <p>
                            <strong>Status:</strong> {status || 'NA'}
                        </p>
                        <p>
                            <strong>Days:</strong>
                            {dayjs(release_date || first_air_date).format('DD MMM YYYY')}
                        </p>
                        <p>
                            <strong>Language:</strong>
                            {origin_country || original_language || 'NA'}
                        </p>
                        <p>
                            <strong>Genres:</strong>
                            {genres?.map((e) => {
                                return <span key={e?.id}>{e?.name || 'NA'}, </span>;
                            })}
                        </p>
                        <p>
                            <strong>Time:</strong>
                            {runtime} minutes
                        </p>
                    </div>
                    <div
                        className='playbtn'
                        onClick={() => {
                            setShow(true);
                            setVideoId(data?.results[0]?.key);
                        }}>
                        <PlayIcon />
                        Watching Trailer
                    </div>
                    <p className='disc'>
                        {overview} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Veritatis, eligendi facilis. Aliquid, quibusdam saepe adipisci perferendis
                        amet ipsa quisquam? Vitae iusto ipsam fugit maiores cum impedit eum repellat
                        labore pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident nesciunt facere officiis, et in, sapiente ea veniam excepturi
                        maxime incidunt eum laborum dicta temporibus, sed velit consequuntur ab!
                        Consequuntur, reprehenderit.
                    </p>
                    {budget !== 0 && (
                        <div className='price'>
                            <span>Budget: {CurrencyBudget}</span>
                            <span>Revenue: {CurrencyRevenue}</span>
                        </div>
                    )}
                </div>
            </div>
            <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
        </div>
    );
};
export default DetailContainer;
