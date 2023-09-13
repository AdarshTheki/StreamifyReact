import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Skeleton from "react-loading-skeleton";
import RowDetail from "./RowDetail";

function Rows({ fetchUrl, show, toggle }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const getData = await axios.get(fetchUrl);
        if (getData.status !== 200) {
          setIsError(true);
          return;
        } else {
          setMovies(getData.data.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [fetchUrl]);

  if (isLoading) {
    return (
      <div className='row__container'>
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
        <Skeleton width={200} height={250} style={{ marginLeft: "20px" }} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='loading' style={{ minHeight: "300px" }}>
        <h1 data-text='some Thing was wrang !...'>some Thing was wrang !...</h1>
      </div>
    );
  }

  return (
    <div className={`row__container ${toggle ? "grid" : "flex"}`}>
      {movies?.map((movie) => (
        <RowDetail key={movie.id} {...movie} show={show} />
      ))}
    </div>
  );
}

export default Rows;
