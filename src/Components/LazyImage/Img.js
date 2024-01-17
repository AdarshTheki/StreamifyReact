import React from 'react';
import NoPoster from '../../assets/no-poster.png';

const Img = ({ src, className }) => {
    return <img src={src || NoPoster} alt='moPoster' loading='lazy' className={className} />;
};

export default Img;
