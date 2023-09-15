import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Row from "./Row";
import { fetchDataFromAPI } from "../../API";
import "./Rows.css";

function Rows({ fetchUrl, show, toggle }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchMultipleApi();
  }, [fetchUrl]);

  const fetchMultipleApi = async () => {
    await fetchDataFromAPI(fetchUrl)
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setLoading(false);
      });
  };

  console.log(movies);

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
        <Row key={movie.id} {...movie} show={show} />
      ))}
    </div>
  );
}

export default Rows;
