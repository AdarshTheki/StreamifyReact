import React, { useState } from "react";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Rows from "../Components/Rows";
import requests from "../request";


function HomeScreen() {
  const [trending, setTrending] = useState(false);

  const trendingURL = requests?.fetchTrending?.replace("timeWindow", trending ? "week" : "day");
  
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      {/* Trending */}
      <div className='trending'>
        <h1 onClick={() => setTrending(!trending)}>Trending {trending?.toString()}</h1>
        <Rows fetchUrl={trendingURL} />
      </div>
      {/* <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/> */}
      {/* <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> */}
    </div>
  );
}

export default HomeScreen;
