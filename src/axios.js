import axios from "axios";
/**
 * base url to make request to the movie TMDB database
 */
const instances = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instances;
