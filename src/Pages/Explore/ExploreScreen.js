/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import InfinityScreen from './InfinityScreen';
import Wrapper from '../../Components/Wrapper/Wrapper';
import './ExploreScreen.scss';

const ExploreScreen = () => {
    const { mediaType } = useParams();
    const [movies, setMovies] = useState([]);
    const [sort, setSort] = useState('popularity-az');
    const [menuType, setMenuType] = useState('popular');
    const [page, setPage] = useState(1);

    React.useEffect(() => {
        const fetchData = async () => {
            window.scroll(0, 0);
            await axiosInstance.get(`/${mediaType}/${menuType}?page=${page}`)
                .then((data) => setMovies(data.data.results))
                .catch((err) => console.log(`Error Fetching Data: ${err.message}`));
        };
        fetchData();
    }, [page, mediaType, menuType]);

    React.useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                setPage((prev) => prev + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page]);

    return (
        <Wrapper>
            <div className='filterContainer'>
                <div className='filterOption'>
                    <label htmlFor='sort'>Filters By</label>
                    <select id='sort' value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value='popularity-az'>Popularity ascending</option>
                        <option value='popularity-za'>Popularity descending</option>
                        <option value='vote_average-az'>Rating ascending</option>
                        <option value='vote_average-za'>Rating descending</option>
                        <option value='title-az'>title (A-Z)</option>
                        <option value='title-za'>title (Z-A)</option>
                    </select>
                </div>
                <div className='filterPageBtn'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <button
                            onClick={() => setPage(index + 1)}
                            className={`pageBtn ${index + 1 === page && 'active'}`}
                            key={index}>
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div className='filterOption'>
                    <label htmlFor='menuType'>Menu Type:</label>
                    {mediaType === 'movie' ? (
                        <select
                            id='menuType'
                            value={menuType}
                            onChange={(e) => setMenuType(e.target.value)}>
                            <option value='popular'>popular</option>
                            <option value='now_playing'>now playing</option>
                            <option value='upcoming'>upcoming</option>
                            <option value='top_rated'>top rated</option>
                        </select>
                    ) : (
                        <select
                            id='menuType'
                            value={menuType}
                            onChange={(e) => setMenuType(e.target.value)}>
                            <option value='popular'>popular</option>
                            <option value='airing_today'>airing today</option>
                            <option value='on-the-air'>On error TV</option>
                            <option value='top_rated'>top rated</option>
                        </select>
                    )}
                </div>
            </div>
            <InfinityScreen movies={movies} sort={sort} show={mediaType} />
            <div className='spinner'></div>
        </Wrapper>
    );
};

export default ExploreScreen;
