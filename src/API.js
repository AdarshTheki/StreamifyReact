import axios from 'axios';

export const fetchDataFromAPI = async (url, params) => {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const TMDB_TOKEN =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVjOGRlNWViYWFjMWNlMmMwYjc1ZmJhOTgwMDQ4MiIsInN1YiI6IjY0MTQ5MzFiYjQyMjQyNDE0MmE0NmQxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nJVimJfnnidPs-tHhkKvO9kNO0WGYwvj-NUp5eJrqA8';

    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers: { Authorization: 'bearer ' + TMDB_TOKEN },
            params,
        });
        return data;
    } catch (error) {
        throw new Error(`Error fetching data from API: ${error.message}`);
    }
};
