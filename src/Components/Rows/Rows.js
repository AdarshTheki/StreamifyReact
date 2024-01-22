import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import useFetch from '../../Hooks/useFetch';
import NoPoster from '../NotFund/NoPoster';
import Loading from './Loading';
import Row from './Row';
import './Rows.css';

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

    if (loading) {
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
