import React, { useEffect, useRef, useState } from 'react';
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';
import BannerDetail from './BannerDetail';
import ToolTip from '../Tooltip/ToolTip';

const ImageSlider = ({ slides, timeStamp = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleInterval = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };
        const intervalId = setInterval(handleInterval, timeStamp);
        return () => clearInterval(intervalId);
    }, [slides.length, timeStamp]);

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const imageUrls = `https://image.tmdb.org/t/p/original/${slides[currentIndex]?.backdrop_path}`;

    return (
        <div className='slider__styles' style={{overflow:'hidden'}}>
            <div className='slide__styles' style={{ backgroundImage: `url(${imageUrls})` }}>
                <BannerDetail {...slides[currentIndex]} />
                <div className='slider_leftArrow' onClick={goToPrevious}>
                    <FaCircleChevronLeft />
                </div>
                <div className='slider_rightArrow' onClick={goToNext}>
                    <FaCircleChevronRight />
                </div>
            </div>
            <div className='slider_lists'>
                {slides.map((item, index) => {
                    const imageItem = item?.backdrop_path
                        ? `https://image.tmdb.org/t/p/w200/${item?.backdrop_path}`
                        : '';
                    return (
                        <div
                            key={item?.id}
                            className={`slider_item ${currentIndex === index && 'active'}`}>
                            <ToolTip
                                data={item}
                                handleClick={() => setCurrentIndex(index)}>
                                <img src={imageItem} alt={item?.title} className='slider_img' />
                            </ToolTip>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSlider;
