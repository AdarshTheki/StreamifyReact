import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "../../Components/Rows/Row";
import { fetchDataFromAPI } from "../../API";
import Loading from "./Loading";
import "./style.scss";

const SearchResult = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState("");

  const initialDataFetch = async () => {
    setLoading(true);
    await fetchDataFromAPI(`/search/multi?query=${query}&page=${page}`)
      .then((res) => {
        setTotalPage(res?.total_pages);
        setCollection((prev) => [...prev, ...res.results]);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight &&
      page !== totalPage
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    initialDataFetch();
  }, [query, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page, totalPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='max-width'>
      <div className='searchResult'>
        <h2>You search this "{query}"</h2>
        <div className='row__container grid'>
          {!collection && <h1>Sorry, Results not found!</h1>}
          {collection?.map((item) => {
            return <Row key={item?.id} {...item} show='movie' />;
          })}
        </div>
        <div className='spinner'></div>
      </div>
    </div>
  );
};

export default SearchResult;
