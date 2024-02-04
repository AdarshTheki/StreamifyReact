import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import NoPicUser from '../../assets/user-male-grey.svg';
import RowLoading from '../../Components/Loading/RowLoading';
import useFetch from '../../Hooks/useFetch';

export default function CreditsSection() {
    const { mediaType, id } = useParams();
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/credits`);

    if (loading || error) {
        return (
            <div style={{ lineHeight: 2 }}>
                <RowLoading width={120} height={160} counts={10} />
                <RowLoading width={120} height={10} counts={10} />
            </div>
        );
    }

    return (
        <div className='castSection_main'>
            <h2>Top Billed Cast</h2>
            <div className='castSection_container'>
                {data?.cast?.map((item) => {
                    const castPics = item?.profile_path
                        ? `https://image.tmdb.org/t/p/w200/${item?.profile_path}`
                        : NoPicUser;
                    return (
                        <div className='castSection_card' key={item?.id}>
                            <div className='castSection_img'>
                                <img src={castPics} alt={item?.name} height={200} />
                            </div>
                            <div>
                                <h2 className='castSection_name'>{item?.name}</h2>
                                <p className='castSection_char'>{item?.character}</p>
                            </div>
                        </div>
                    );
                })}
                <div className='castSection_card inline-flex'>
                    <NavLink to={`/credits/${mediaType}/${id}`} className='_links'>
                        Credits more details
                    </NavLink>
                </div>
            </div>
            <h2>Top billed Crew</h2>
        </div>
    );
}
