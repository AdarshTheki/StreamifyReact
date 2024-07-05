import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVjOGRlNWViYWFjMWNlMmMwYjc1ZmJhOTgwMDQ4MiIsInN1YiI6IjY0MTQ5MzFiYjQyMjQyNDE0MmE0NmQxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nJVimJfnnidPs-tHhkKvO9kNO0WGYwvj-NUp5eJrqA8';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
    },
});

export default instance;
