import React from 'react';
import { useLocation } from 'react-router-dom';
import Rows from '../../../Components/Rows/Rows';

const Related = () => {
    const location = useLocation();
    const path = location.pathname.replace('/show', '');
    const find = location.pathname.match('movie');
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <h2>Similar Show</h2>
                <Rows fetchUrl={`${path}/similar`} show={!find ? 'tv' : 'movie'} />
            </div>
            <div style={{ position: 'relative' }}>
                <h2>Recommendations</h2>
                <Rows fetchUrl={`${path}/recommendations`} show={!find ? 'tv' : 'movie'} />
            </div>
        </div>
    );
};
export default Related;
