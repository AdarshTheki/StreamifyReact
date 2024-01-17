import React, { useRef } from 'react';
import Row from './Row';
import useFetch from '../../Hooks/useFetch';
import './Rows.css';
import Loading from './Loading';
import NoPoster from '../NotFund/NoPoster';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Rows({ fetchUrl, show, toggle }) {
    const { data, loading } = useFetch(fetchUrl);
    const containerRef = useRef(null);

    const sideScroll = (direction) => {
        const scrollAmount = direction === 'left' ? -400 : 400;
        containerRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    };

    if (loading || data.message) {
        return <Loading />;
    }

    return (
        <div className={`row__container ${toggle ? 'grid' : 'flex'}`} ref={containerRef}>
            {!data?.results?.length ? (
                <NoPoster />
            ) : (
                data?.results?.map((movie) => {
                    return <Row key={movie.id} {...movie} show={show} />;
                })
            )}
            {!toggle && (
                <>
                    <span id='leftArrow' onClick={() => sideScroll('left')}>
                        <FaAngleLeft />
                    </span>
                    <span id='rightArrow' onClick={() => sideScroll('right')}>
                        <FaAngleRight />
                    </span>
                </>
            )}
        </div>
    );
}

export default Rows;
