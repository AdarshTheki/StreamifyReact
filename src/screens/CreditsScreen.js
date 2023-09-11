import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import requests from "../request";
import Crews from "../Components/Crews";
import Casts from "../Components/Casts";
import "./CreditsScreen.css";

const CreditsScreen = () => {
  const location = useLocation();
  const path = location.pathname.replace("/credits/", "").split("/");
  const show = path[0];
  const id = path[1];
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${show}/${id}/credits${requests?.api_link}&page=1`
        );
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await res.json();
        setIsData(data);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
      setIsLoading(false);
    };
    fetchCredits();
  }, [id, show]);

  if (isLoading) {
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

  return (
    <div className='credits__screen max-width'>
      <div>
        <h1>Casts</h1>
        <Casts casts={isData.cast} />
      </div>
      <div>
        <h1>Crews</h1>
        <Crews crews={isData.crew} />
      </div>
    </div>
  );
};

export default CreditsScreen;
