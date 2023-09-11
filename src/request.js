const API_KEY =  "aef1d66a58269885e6bf92bc2e46ed15";

const requests = {
  // Trading
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/movie/timeWindow?api_key=${API_KEY}&language=en-US`,
  // latest Tailer
  fetchLatestTailer: `/movieLatest?api_key=${API_KEY}&language=en-US`,

  api_link: `?api_key=${API_KEY}&language=en-US`,

  trending_all_week: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  trending_all_day: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  trending_movie_day: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  trending_movie_week: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  trending_tv_day: `/trending/tv/day?api_key=${API_KEY}&language=en-US`,
  trending_tv_week: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,

  movie_now_playing: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  movie_popular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  movie_top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  movie_upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  movie_latest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  movie_detail: `/movie/movie_id?api_key=${API_KEY}&language=en-US`,
  movie_external_ids: `/movie/movie_id/external_ids?api_key=${API_KEY}&language=en-US`,
  movie_credits: `/movie/movie_id/credits?api_key=${API_KEY}&language=en-US`,
  movie_recommendations: `/movie/movie_id/recommendations?api_key=${API_KEY}&language=en-US`,
  movie_reviews: `/movie/movie_id/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  movie_keywords: `/movie/movie_id/keywords?api_key=${API_KEY}&language=en-US&page=1`,
  movie_videos: `/movie/movie_id/videos?api_key=${API_KEY}&language=en-US`,
  movie_images: `/movie/movie_id/images?api_key=${API_KEY}`,

  tv_airing_today: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
  tv_on_the_air: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
  tv_popular: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  tv_top_rated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  tv_detail: `/tv/tv_id?api_key=${API_KEY}&language=en-US`,

  // Search
  search: `https://api.themoviedb.org/3/search/movie?query=iron%20man?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`,

  // MOVIE LISTS
  // movie/now_playing, movie/popular, movie/top_rated, movie/upcoming,
  // Detail = movie/movie_id, movie/movie_id/external_ids, movie/movie_id/credits,
  //          movie/movie_id/recommendations, movie/movie_id/reviews?language=en-US&page=1
  // TV SERIES LISTS
  // tv/airing_today, tv/on_the_air, tv/popular, tv/top_rated
  // Detail = tv/{id}, tv/{id}/external_ids, tv/{id}/credits,
  //          tv/{id}/recommendations, tv/{id}/reviews?&language=en-US&page=1

  // TRENDING
  // trending/all/{time_window}, trending/movie/{time_window}, trending/tv/{time_window}

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