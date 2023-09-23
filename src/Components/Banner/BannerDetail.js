import React from "react";
import { FaStar, FaPlay, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BannerDetail = ({
  title,
  name,
  original_name,
  release_date,
  vote_average,
  original_language,
  popularity,
  overview,
  id,
}) => {
  const navigate = useNavigate();

  // Date Manage
  const releaseDate = new Date(release_date);
  const today = new Date();
  const daysDifference = Math.floor(
    (today - releaseDate) / (1000 * 60 * 60 * 24)
  );
  return (
    <div className='banner'>
      <div className='banner__contents'>
        <p className='release'>
          release: {releaseDate?.toDateString() || "NA"}
        </p>
        <h1 className='banner__title'>{title || name || original_name}</h1>
        <div className='banner__detail'>
          <p className='rating'>
            Rating: <FaStar color='yellow' fontSize={20} />
            {vote_average || "NA"}
          </p>

          <p className='days-left'>
            <span>{daysDifference || "NA"}</span> days left
          </p>

          <p className='language'>
            Language: [<span>{original_language || "NA"}</span>]
          </p>
          <p className='popularity'>popularity : {popularity?.toFixed(1)}K</p>
        </div>
        <h2 className='banner__description'>
          {overview} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Autem quis eius nobis iste, sunt consectetur, modi necessitatibus
          beatae et officia laudantium voluptatem? Maiores unde voluptates
          aliquam dolores quas obcaecati maxime?
        </h2>
        <div className='banner__buttons'>
          <button
            className='btn red-btn'
            onClick={() => navigate(`/show/movie/${id}`)}>
            <FaPlay color='white' /> Play Now
          </button>
          <button className='btn black-btn'>
            <FaPlus color='white' /> Watch Lists
          </button>
        </div>
      </div>
      {/*  */}
      <div className='banner__gradient'></div>
    </div>
  );
};

export default BannerDetail;
