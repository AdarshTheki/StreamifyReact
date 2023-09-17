import React from "react";
import "./Logo.css";
import { images } from "../../assets/logo/images";

const Logo = () => {
  return (
    <div className='logo_images'>
      {images.map((item, index) => (
        <img className='logo_image' key={index} src={item} alt='logo' />
      ))}
    </div>
  );
};

export default Logo;
