import React, { useState } from "react";

const Crews = ({ crews }) => {
  const [data, setData] = useState(crews);

  const departments = [...new Set(crews?.map((e) => e.department))];

  const filter = (dep) => {
    setData(crews.filter((e) => e.department === dep));
  };

  return (
    <div className="crew">
      <div className='crew__buttons'>
        {departments.map((e) => (
          <button onClick={() => filter(e)} className='btn' key={e}>
            {e}
          </button>
        ))}
        <button onClick={() => setData(crews)} className='btn'>
          All Top 20
        </button>
      </div>
      <div className='crew__container'>
        {data?.slice(0, 30)?.map((e, index) => {
          return (
            <div className='crew__details' key={index}>
              <h2>{e?.name || e?.original_name}</h2>
              <p>{e?.job}</p>
              <p className='crew__icon'>
                {e?.popularity?.toFixed(1)}K<span>🤍</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Crews;
