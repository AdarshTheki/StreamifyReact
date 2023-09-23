import React from "react";
import Row from "./Row";
import useFetch from "../../hooks/useFetch";
import "./Rows.css";
import Loading from './Loading'
import NoPoster from "../NotFund/NoPoster";

function Rows({ fetchUrl, show, toggle }) {
  const { data, loading } = useFetch(fetchUrl);

  if(loading || data.message){
    return <Loading/>
  }

  return (
    <div className={`row__container ${toggle ? "grid" : "flex"}`}>
      {!data?.results?.length && <NoPoster/>}
      {data?.results?.map((movie) => {
        return <Row key={movie.id} {...movie} show={show} />;
      })}
    </div>
  );
}

export default Rows;
