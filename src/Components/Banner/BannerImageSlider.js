import React, { useEffect, useRef, useState } from 'react';
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';
import BannerDetail from './BannerDetail';

const ImageSlider = ({ slides, time = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderContainer = useRef(null);

    useEffect(() => {
        const handleInterval = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };
        const intervalId = setInterval(handleInterval, time);
        return () => clearInterval(intervalId);
    }, [slides.length, time]);

    useEffect(() => {
        const scrollSlide = () => {
            sliderContainer.current.scrollTo({
                left: currentIndex * sliderContainer.current.clientWidth * 0.15,
                behavior: 'smooth',
            });
        };
        scrollSlide();
    }, [currentIndex]);

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
            <div className='slide__styles' style={{ backgroundImage: `url(${imageUrls})` }}>
                <BannerDetail {...slides[currentIndex]} />
            </div>
            <div className='slider'>
                <div className='slider_leftArrow' onClick={goToPrevious}>
                    <FaCircleChevronLeft />
                </div>
                <div className='slider_rightArrow' onClick={goToNext}>
                    <FaCircleChevronRight />
                </div>
                <div className='slider_lists' ref={sliderContainer}>
                    {slides.map((item, index) => {
                        const imageItem = item?.backdrop_path
                            ? `https://image.tmdb.org/t/p/w200/${item?.backdrop_path}`
                            : '';
                        return (
                            <div
                                key={item?.id}
                                className={`slider_item ${currentIndex === index && 'active'}`}>
                                <img
                                    src={imageItem}
                                    alt={item?.title}
                                    key={index}
                                    className='slider_img'
                                    onClick={() => goToSlide(index)}
                                />
                                <p className='slider_title'>{item?.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
