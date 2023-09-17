import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "../../Components/Rows/Row";
import { fetchDataFromAPI } from "../../API";
import Loading from "./Loading";

const SearchResult = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const dataFetch = async () => {
      await fetchDataFromAPI(`/search/multi?query=${query}&page=${page}`)
        .then((data) => {
          setCollection(data);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(true)
        });
    };
    dataFetch();
  }, [query, page]);

  if (loading) {
    return <Loading />;
  }

  const pageHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return (
    <div className='max-width'>
      <h1>SearchResult</h1>
      <div className='row__container grid'>
        {collection?.results?.map((item) => {
          return <Row key={item?.id} {...item} show='movie' />;
        })}
      </div>
      <h2 style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span onClick={() => setPage(page + 1)}>Next {collection?.page}</span>
        <span onClick={pageHandler}>Previous Page</span>
      </h2>
    </div>
  );
};

export default SearchResult;
