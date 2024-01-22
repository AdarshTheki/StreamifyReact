import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import useFetch from '../../../Hooks/useFetch';
import { fetchDataFromAPI } from '../../../API';
import SocialIcons from './SocialIcons';

const SocialSection = () => {
    const { mediaType, id } = useParams();

    const [keywords, setKeywords] = useState([]);
    const { data, loading } = useFetch(`${mediaType}/${id}/external_ids`);

    useEffect(() => {
        const fetchAPI = async () => {
            await fetchDataFromAPI(`/${mediaType}/${id}/keywords`)
                .then((keywords) => setKeywords(keywords?.results))
                .catch((err) => console.log(err.message));
        };
        fetchAPI();
    }, [mediaType, id]);

    if (loading) {
        return (
            <div style={{ marginLeft: '2rem' }}>
                <Skeleton width='20%' height={30} />
            </div>
        );
    }

    return (
        <div className='SocialSection'>
            <div>
                <h3>Social Media</h3>
                <SocialIcons {...data} />
            </div>
            <div>
                <h3>Keywords</h3>
                <div className='socials_keywords'>
                    {keywords?.slice(0, 10)?.map((item) => (
                        <span key={item?.id} className='keyword'>
                            {item?.name}
                        </span>
                    ))}
                    <span className='keyword'>more...</span>
                </div>
            </div>
        </div>
    );
};
export default SocialSection;
