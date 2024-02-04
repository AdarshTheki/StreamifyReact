import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { PlayIcon } from '../../Components/VideoPopup/PlayIcon';
import VideoPopup from '../../Components/VideoPopup/VideoPopup';
import lazy from '../../assets/picture-grey.svg';
import useFetch from '../../Hooks/useFetch';
import PosterLoading from '../../Components/Loading/PosterLoading';

export default function DetailSection() {
    const { mediaType, id } = useParams();
    const { data: detail, loading } = useFetch(`/${mediaType}/${id}`);
    const { data: videos } = useFetch(`/${mediaType}/${id}/videos`);

    // VideoPopup show details in this
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const {
        original_language,
        name,
        title,
        genres,
        release_date,
        first_air_date,
        overview,
        vote_average,
        vote_count,
        runtime,
        poster_path,
        origin_country,
        homepage,
        status,
        budget,
        revenue,
        backdrop_path,
    } = detail;

    console.log(detail)

    function formatCurrency(value) {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        });
    }

    const ImageURL = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : lazy;
    const bgImageURL = backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : '';

    if (loading) return <PosterLoading />;

    return (
        <div className='details__main' style={{ background: `url(${bgImageURL})` }}>
            <div className='details__container'>
                <NavLink to={homepage} target='__blank' className='details__img'>
                    <img src={ImageURL} alt='pic.org' title='Official Website' />
                </NavLink>
                <div className='details__detail'>
                    <h1 className='details__name'>{name || title || 'NA'}</h1>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td>status</td>
                                <td>:</td>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                <td>Days</td>
                                <td>:</td>
                                <td>
                                    {dayjs(release_date || first_air_date).format('DD MMM YYYY')}
                                </td>
                            </tr>
                            <tr>
                                <td>language</td>
                                <td>:</td>
                                <td>{origin_country || original_language || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>Genres</td>
                                <td>:</td>
                                <td>
                                    {genres?.map((e) => {
                                        return <span key={e?.id}>{e?.name || 'NA'}, </span>;
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <td>time</td>
                                <td>:</td>
                                <td>{runtime || 'NA'} minutes</td>
                            </tr>
                            <tr>
                                <td>rating</td>
                                <td>:</td>
                                <td>{vote_average || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>vote count</td>
                                <td>:</td>
                                <td>{vote_count || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>Budget</td>
                                <td>:</td>
                                <td>{formatCurrency(budget) || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>Revenue</td>
                                <td>:</td>
                                <td>{formatCurrency(revenue) || 'NA'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        className='playbtn'
                        onClick={() => {
                            setShow(true);
                            setVideoId(videos?.results[0]?.key);
                        }}>
                        <PlayIcon />
                        Watching Trailer
                    </div>
                    <div className='disc'>
                        <h3>Description:</h3>
                        <p>{overview || 'NA'}</p>
                    </div>
                </div>
            </div>
            <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
        </div>
    );
}
