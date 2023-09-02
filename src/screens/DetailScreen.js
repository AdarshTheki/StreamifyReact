import React, { useEffect, useState } from "react";
import axios from "../axios";
import { NavLink, useLocation } from "react-router-dom";
import requests from "../request";
import Details from "../Components/Details/Details";
import Skeleton from "react-loading-skeleton";
import Cast from "../Components/Details/Cast";
import Social from "../Components/Details/Social";
import Related from "../Components/Details/Related";

const DetailScreen = () => {
  const [movie, setMovie] = useState([]);
  const [ids, setIds] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [credits, setCredits] = useState([]);
  const [related, setRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const path = location.pathname.replace("/show/", "");

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const getData = await axios.get(path + requests.api_link);
        setMovie(getData.data);
        return getData;
      } catch (error) {
        console.log("fetchData: ", error.message);
      }
    }
    fetchData();

    async function fetchIds() {
      try {
        const getIds = await axios.get(
          path + `/external_ids` + requests.api_link
        );
        setIds(getIds.data);
        return getIds;
      } catch (error) {
        console.log("fetchIds: ", error.message);
      }
    }
    fetchIds();

    async function fetchKeywords() {
      try {
        const getKeyword = await axios.get(
          path + `/keywords` + requests.api_link
        );
        setKeywords(getKeyword.data);
        return getKeyword;
      } catch (error) {
        console.log("fetchKeywords: ", error.message);
      }
    }
    fetchKeywords();

    async function fetchCredits() {
      try {
        const getCredits = await axios.get(
          path + `/credits` + requests.api_link
        );
        setCredits(getCredits.data);
        return getCredits;
      } catch (error) {
        console.log("fetchCredits: ", error.message);
      }
    }
    fetchCredits();

    async function fetchRecommendations() {
      try {
        const getRecommendations = await axios.get(
          path + `/recommendations` + requests.api_link + `&page=1`
        );
        setRelated(getRecommendations.data);
        return getRecommendations;
      } catch (error) {
        console.log("recommendations: ", error.message);
      }
    }
    fetchRecommendations();

    setIsLoading(false);
  }, [path]);

  const LoadingShow = () => {
    return (
      <div className='DetailScreen'>
        <Skeleton width={300} height={200} />
        <Skeleton width={300} height={200} />
        <Skeleton width={300} height={200} />
        <Skeleton width={300} height={200} />
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <LoadingShow />
      ) : (
        <>
          <Details movie={movie} />
          <div className='max-width'>
            <div className='more-details'>
              <Cast {...credits} />
              <Social ids={ids} keywords={keywords} {...movie} />
            </div>
            <div>
              <h2>Recommendations</h2>
              <div className='related'>
                {related?.results?.slice(0, 10)?.map((items) => {
                  return <Related key={items.id} {...items} />;
                })}
                <NavLink className='related-link inline-flex' to={``}>
                  more details
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailScreen;
