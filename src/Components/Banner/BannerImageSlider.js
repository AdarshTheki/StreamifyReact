import React, { useEffect, useState } from 'react';
import BannerDetail from './BannerDetail';
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => {
                return prev === slides.length - 1 ? 0 : prev + 1;
            });
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, [slides.length]);

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const goToSlide = (curr) => {
        setCurrentIndex(curr);
    };

    const imageUrls = `https://image.tmdb.org/t/p/original/${slides[currentIndex]?.backdrop_path}`;

    return (
        <div className='slider__styles'>
            <div className='leftArrow__styles' onClick={goToPrevious}>
                <FaCircleChevronLeft />
            </div>
            <div className='rightArrow__styles' onClick={goToNext}>
                <FaCircleChevronRight />
            </div>
            <div className='dotsContainer__styles'>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dots__styles ${currentIndex === index && 'dotsActive'}`}
                        onClick={() => goToSlide(index)}></div>
                ))}
            </div>
            <div
                className='slide__styles'
                style={{ backgroundImage: `url(${imageUrls})` }}>
                <BannerDetail {...slides[currentIndex]} />
            </div>
        </div>
    );
};

export default ImageSlider;
