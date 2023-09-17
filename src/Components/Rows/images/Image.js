import React, { useEffect, useState } from "react";
import lazy from "../../../assets/no-poster.png";

const RowImage = ({ imgUrl }) => {
  const imgURL = `https://image.tmdb.org/t/p/w200/${imgUrl}`;
  const [imgSrc, setSrc] = useState(lazy || imgURL);

  const customClass =
    lazy && imgURL === lazy ? "loading-image" : "loaded-image";

  useEffect(() => {
    const img = new Image();
    img.src = imgURL;
    img.onload = () => {
      setSrc(imgURL);
    };
  }, [imgURL]);

  return <img src={imgSrc} className={customClass} alt='' loading='lazy' />;
};

export default RowImage;
