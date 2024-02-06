import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import useFetch from '../../Hooks/useFetch';
import RowLoading from '../Loading/RowLoading';
import Row from './Row';
import './Rows.css';

function Rows({ fetchUrl, show, toggle }) {
    const { data, loading, error } = useFetch(fetchUrl);
    const containerRef = useRef(null);

    const sideScroll = (direction) => {
        const scrollAmount = direction === 'left' ? -400 : 400;
        containerRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    };

    if (loading || error) return <LoadData />;

    function LoadData() {
        return (
            <div style={{ lineHeight: 3 }}>
                <RowLoading width={160} height={220} counts={8} />
                <RowLoading width={160} height={20} counts={8} />
            </div>
        );
    }

    return (
        <div className={`row__container scrollbar ${toggle ? 'grid' : 'flex'}`} ref={containerRef}>
            {data.results.length ? (
                data?.results?.map((movie) => <Row key={movie.id} {...movie} show={show} />)
            ) : (
                <LoadData />
            )}
            {data.results.length
                ? !toggle && (
                      <>
                          <div id='leftArrow' onMouseOver={() => sideScroll('left')}>
                              <FaAngleLeft onClick={() => sideScroll('left')} />
                          </div>
                          <div id='rightArrow' onMouseOver={() => sideScroll('right')}>
                              <FaAngleRight onClick={() => sideScroll('right')} />
                          </div>
                      </>
                  )
                : null}
        </div>
    );
}

export default Rows;
