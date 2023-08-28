const API_KEY =  "aef1d66a58269885e6bf92bc2e46ed15";

const requests = {
  // Trading
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/movie/timeWindow?api_key=${API_KEY}&language=en-US`,
  // latest Tailer
  fetchStreaming: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchOnTV: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
  fetchForRent: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchTheaters: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  // fetch billed cast information
  // https://api.themoviedb.org/3/movie/615656/credits?api_key=aef1d66a58269885e6bf92bc2e46ed15
  // https://api.themoviedb.org/3/movie/615656/videos?api_key=aef1d66a58269885e6bf92bc2e46ed15

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
};
export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US/