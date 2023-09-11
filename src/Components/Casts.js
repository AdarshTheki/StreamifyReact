import React, { useState } from "react";

const Casts = ({ casts }) => {
  const [data, setData] = useState(casts);
  console.log(data);

  return (
    <div className='cast__container'>
      {data?.map((item) => (
        <div key={item?.credit_id} className='cast__details'>
          <div className="cast__image">
          <img
            src={`https://image.tmdb.org/t/p/h100${item?.profile_path}`}
            alt='img'
            />
          <p className='cast__popularity'><span>🤍</span> {item?.popularity?.toFixed(2)}k</p>
            </div>
          <p className='cast__name'>{item?.name || item?.original_name}</p>
          <p className="cast__char">{item?.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Casts;
