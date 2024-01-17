import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromAPI } from '../../API';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Cards from './Cards';
import './ExploreScreen.scss';

const ExploreScreen = () => {
    const { mediaType } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            await fetchDataFromAPI(`/${mediaType}/popular?page=${page}`)
                .then((data) => {
                    setMovies(data);
                })
                .catch((err) => console.log(`Error Fetching Data: ${err.message}`));
        };
        fetchData();
    }, [mediaType, page]);

    return (
        <Wrapper>
            {/* <div className='filterOption'>
                <label htmlFor='sort'>Filters By</label>
                <select id='sort' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='popularity'>Popularity</option>
                    <option value='vote_average'>vote average</option>
                    <option value='release_date'>release date</option>
                </select>
                <button onClick={() => setSortOrder('asc')}>Asc</button>
                <button onClick={() => setSortOrder('desc')}>Dsc</button>
            </div> */}
            <Cards shows={movies.results} />
            <button onClick={() => setPage((prev) => prev + 1)}>Load more data</button>
        </Wrapper>
    );
};

export default ExploreScreen;
