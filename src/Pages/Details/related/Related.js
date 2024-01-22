import React from 'react';
import { useParams } from 'react-router-dom';
import Rows from '../../../Components/Rows/Rows';

const Related = () => {
    const { mediaType, id } = useParams();
    return (
        <div>
            <h2>Similar Show</h2>
            <div style={{ position: 'relative' }}>
                <Rows fetchUrl={`/${mediaType}/${id}/similar`} show={mediaType} />
            </div>
            <h2>Recommendations</h2>
            <div style={{ position: 'relative' }}>
                <Rows fetchUrl={`/${mediaType}/${id}/recommendations`} show={mediaType} />
            </div>
        </div>
    );
};
export default Related;
