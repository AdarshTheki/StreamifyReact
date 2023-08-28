import React, { useEffect, useState } from "react";
import axios from "../axios";

function Rows({ fetchUrl, isLargeRows }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getData = await axios.get(fetchUrl);
      setMovies(getData.data.results);
      return getData;
    }
    fetchData();
  }, [fetchUrl]);

  // const base_Url = "https://image.tmdb.org/t/p/original/";
  const base_Url = "https://image.tmdb.org/t/p/w500/";

  console.log(movies);

  return (
    <div className='row__container'>
      {movies.map((movie) => (
        <div key={movie.id} className='row__post_container'>
          <div className='row__poster'>
            <img
              src={`${base_Url}${
                isLargeRows ? movie.backdrop_path : movie.poster_path
              } `}
              alt={movie.name}
            />
          </div>
          <div className='row_details'>
            <h2 className='movie_title'>
              {movie?.original_title || movie?.name || movie?.title}
            </h2>
            <p className='movie_release_date'>
              {movie?.release_date || "coming soon..."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rows;
