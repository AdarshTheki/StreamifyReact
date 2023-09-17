import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ genres }) => {
  const movieList = useSelector((state) => state.genres.movieList);
  const tvList = useSelector((state) => state.genres.tvList);

  const filter =
    movieList?.find((item) => item?.id === genres?.[0]) ||
    tvList?.find((item) => item?.id === genres)?.[0];

  return <span className='genre'>{filter?.name}</span>;
};

export default Genres;
