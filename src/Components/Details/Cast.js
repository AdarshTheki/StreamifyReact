import React from 'react'
import lazy from '../../assets/lazy.jpg'

const Cast = ({cast}) => {
  return (
    <div className='cast'>
      <h2>Top Billed Cast</h2>
      <div className='cast-container'>
        {cast?.slice(0, 8)?.map((item) => {
          return (
            <div key={item?.id} className='cast-card'>
              <div className='cast-img'>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item?.profile_path}`}
                  alt=''
                  loading='lazy'
                />
              </div>
              <h2 id='cast-name'>{item.name}</h2>
              <p id='cast-char'>{item?.character}</p>
            </div>
          );
        })}
        <div className='cast-card inline-flex'>
          <h2 id='cast-name'>Cast & Crew</h2>
          <p id='cast-char'>more detail</p>
        </div>
      </div>
    </div>
  );
}

export default Cast
