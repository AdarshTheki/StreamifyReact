import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NoPoster from "../../assets/no-poster.png";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      effect='blur'
      src={src || NoPoster}
      loading='lazy'
    />
  );
};

export default Img;
