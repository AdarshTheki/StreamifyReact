import React, { useCallback, useState } from "react";
import BannerDetail from "./BannerDetail";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageUrl = slides[currentIndex]?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${slides[currentIndex]?.backdrop_path}`
    : "";

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

  return (
    <div className='slider__styles'>
      <div className='leftArrow__styles' onClick={goToPrevious}>
        «
      </div>
      <div className='rightArrow__styles' onClick={goToNext}>
        »
      </div>
      <div className='dotsContainer__styles'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dots__styles ${currentIndex === index && "dotsActive"}`}
            onClick={() => goToSlide(index)}></div>
        ))}
      </div>
      <div
        className='slide__styles'
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <BannerDetail {...slides[currentIndex]} />
      </div>
    </div>
  );
};

export default ImageSlider;
