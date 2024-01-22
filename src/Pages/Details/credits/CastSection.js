import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
import NoPicUser from '../../../assets/user-male-grey.svg';
import Loading from './Loading';

const CastSection = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/credits`);

    if (loading) return <Loading />;

    return (
        <div className='castSection_main relative'>
            <h2>Top Billed Cast</h2>
            <div className='castSection_container'>
                {data?.cast?.map((item) => (
                    <CastScroller key={item?.id} {...item} />
                ))}
                <div className='castSection_card inline-flex'>
                    <NavLink to={`/credits/${mediaType}/${id}`} className='_links'>
                        Credits more details
                    </NavLink>
                </div>
            </div>
            <div className='box-shadow-credits'></div>
        </div>
    );
};
export default CastSection;

const CastScroller = ({ profile_path, name, character }) => {
    const castPics = profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : NoPicUser;
    return (
        <div className='castSection_card'>
            <div className='castSection_img'>
                <img src={castPics} alt={name} height={200} />
            </div>
            <div>
                <h2 className='castSection_name'>{name}</h2>
                <p className='castSection_char'>{character}</p>
            </div>
        </div>
    );
};
