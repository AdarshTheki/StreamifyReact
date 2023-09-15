import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVjOGRlNWViYWFjMWNlMmMwYjc1ZmJhOTgwMDQ4MiIsInN1YiI6IjY0MTQ5MzFiYjQyMjQyNDE0MmE0NmQxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nJVimJfnnidPs-tHhkKvO9kNO0WGYwvj-NUp5eJrqA8";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
