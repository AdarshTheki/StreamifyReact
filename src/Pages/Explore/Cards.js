import React from 'react';
import Row from '../../Components/Rows/Row';

export default function Cards({ shows }) {
    return (
        <div>
            <div className='row__container grid'>
                {shows?.map((item) => (
                    <Row key={item?.id} {...item} />
                ))}
            </div>
        </div>
    );
}
