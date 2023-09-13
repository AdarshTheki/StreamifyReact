import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ImageSlider.css";
import BannerDetail from "./BannerDetail";

const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(
      https://image.tmdb.org/t/p/original/${slides[currentIndex]?.backdrop_path})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [slides, currentIndex]);

  const goToSlide = (curr) => {
    setCurrentIndex(curr);
  };

  useEffect(() => {
    const timeOut = (timerRef.current = setTimeout(() => {
      goToNext();
    }, 20000));
    return () => {
      clearTimeout(timeOut);
    };
  }, [goToNext]);

  return (
    <div className='slider__styles'>
      <div className='leftArrow__styles' onClick={goToPrevious}>
        «
      </div>
      <div className='rightArrow__styles' onClick={goToNext}>
        »
      </div>
      <div className='slide__styles' style={slideStyles}></div>
      <div className='dotsContainer__styles'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`dots__styles ${currentIndex === index && "dotsActive"}`}
            onClick={() => goToSlide(index)}></div>
        ))}
      </div>
      <div className='slide__styles' style={slideStyles}>
        <BannerDetail {...slides[currentIndex]} />
      </div>
    </div>
  );
};

export default ImageSlider;
