import React, { useEffect, useState } from "react";
import lazy from "../../assets/lazy.jpg";

const Images = ({ imgUrl }) => {
  const imgURL = `https://image.tmdb.org/t/p/w200/${imgUrl}`; // w500/original
  // const lazy = `https://image.tmdb.org/t/p/h100/${imgUrl}`;

  const [imgSrc, setSrc] = useState(lazy || imgURL);

  useEffect(() => {
    const img = new Image();
    img.src = imgURL;
    img.onload = () => {
      setSrc(imgURL);
    };
  }, [imgURL]);

  return <img src={imgSrc} placeholder="blur" alt='img' loading='lazy' />;
};

export default Images;
