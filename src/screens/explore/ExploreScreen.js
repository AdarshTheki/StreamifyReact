import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromAPI } from "../../API";
import Row from "../../Components/Rows/Row";
import Wrapper from "../../Components/Wrapper/Wrapper";
import "./style.scss";

const ExploreScreen = () => {
  const { mediaType } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [sortOrder, setSortOrder] = useState("desc");

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromAPI(`/${mediaType}/popular?page=${page}`);
      const newItems = data?.results;

      if (page === 1 && newItems) {
        if (mediaType === "movie") {
          setMovies(newItems);
        } else if (mediaType === "tv") {
          setMovies(newItems);
        }
      } else if (newItems) {
        if (mediaType === "movie") {
          setMovies((prev) => [...prev, ...newItems]);
        } else if (mediaType === "tv") {
          setMovies((prev) => [...prev, ...newItems]);
        }
      }
    } catch (error) {
      console.error("Error Fetching Data: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleScrolled = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, mediaType]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortBy === "popularity") {
      return sortOrder === "asc"
        ? a.popularity - b.popularity
        : b.popularity - a.popularity;
    } else if (sortBy === "vote_average") {
      return sortOrder === "asc"
        ? a.vote_average - b.vote_average
        : b.vote_average - a.vote_average;
    } else if (sortBy === "release_date") {
      // Assuming release_date is in ISO format (e.g., 'yyyy-mm-dd')
      return sortOrder === "asc"
        ? new Date(a.release_date) - new Date(b.release_date)
        : new Date(b.release_date) - new Date(a.release_date);
    }
    return 0;
  });

  return (
    <Wrapper>
      <div className='filterOption'>
        <label htmlFor='sort'>Filters By</label>
        <select
          id='sort'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value='popularity'>Popularity</option>
          <option value='vote_average'>vote average</option>
          <option value='release_date'>release date</option>
        </select>
        <button onClick={() => setSortOrder("asc")}>Asc</button>
        <button onClick={() => setSortOrder("desc")}>Dsc</button>
      </div>
      <div className='row__container grid'>
        {sortedMovies?.map((item) => (
          <Row key={item?.id} {...item} show={mediaType} />
        ))}
      </div>
      {!loading && <div className='spinner'></div>}
    </Wrapper>
  );
};

export default ExploreScreen;
