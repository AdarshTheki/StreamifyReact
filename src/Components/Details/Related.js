import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import lazy from '../../assets/compress.jpg'

const Related = ({
  backdrop_path,
  title,
  original_title,
  id,
  media_type,
  vote_average,
}) => {
  const rating = (star) =>
    "★★★★★☆☆☆☆☆".slice(
      Math.round((10 - star) / 2),
      Math.round((20 - star) / 2)
    );

    const originalUrl = `https://image.tmdb.org/t/p/w300/${backdrop_path}`;
    const [imgSrc, setSrc] = useState(lazy || originalUrl);

    useEffect(() => {
      const img = new Image();
      img.src = originalUrl;
      img.onload = () => {
        setSrc(originalUrl);
      };
    }, [originalUrl]);


  return (
    <NavLink to={`/show/${media_type}/${id}`} className='related-link'>
      <div className='related-img'>
        <span className='related-star' style={{ color: "#ffe600" }}>
          {rating(vote_average) || "NA"}
        </span>
        <img src={imgSrc} alt='img' loading='lazy' width={300} />
      </div>
      <p className='related-title'>{title || original_title || "NA"}</p>
    </NavLink>
  );
};

export default Related;
