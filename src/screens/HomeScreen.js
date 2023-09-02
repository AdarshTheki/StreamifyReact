import React, { useState } from "react";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Trending from "../Components/Trending";
import Movies from "../Components/Movies";
import TVShow from "../Components/TVShow";

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      {/* <Banner /> */}
      {/* <Trending /> */}
      <Movies />
      {/* <TVShow /> */}
    </div>
  );
}

export default HomeScreen;
