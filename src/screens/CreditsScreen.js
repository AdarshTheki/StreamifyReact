import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import requests from "../request";
import "./CreditsScreen.css";
import Crew from "./Crew";
import Cast from "./Cast";

const CreditsScreen = () => {
  const location = useLocation();
  const path = location.pathname.replace("/credits/", "").split("/");
  const show = path[0];
  const id = path[1];
  const [creditsData, setCreditsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${show}/${id}/credits${requests?.api_link}&page=1`
        );
        if (!res.ok) {
          setIsError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setCreditsData(data);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchCredits();
  }, [id, show]);

  if (loading) {
    return (
      <div className='loading' style={{ minHeight: "80vh", fontSize: "2rem" }}>
        <h1 data-text='Loading...'>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='loading' style={{ minHeight: "80vh", fontSize: "2rem" }}>
        <h1 data-text='Something Was error!'>Something Was error!</h1>
      </div>
    );
  }
  console.log(creditsData);
  return (
    <div className='credits__screen max-width'>
      <div>
        <h1>Full Casts</h1>
        <div className='credits__cast'>
          {creditsData?.cast.map((cast) => (
            <Cast key={cast?.credit_id} {...cast} />
          ))}
        </div>
      </div>
      <div>
        <h1>Full Crews</h1>
        <div className='credits__crew'>
          {creditsData?.crew.map((crew) => (
            <Crew key={crew?.credit_id} {...crew} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreditsScreen;
