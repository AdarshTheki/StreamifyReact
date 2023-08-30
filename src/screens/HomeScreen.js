import React, { useState } from "react";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import "./Home.css";
import Trending from "./Trending";
import Movies from "./Movies";
import TVShow from "./TVShow";

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Trending />
      <Movies />
      <TVShow />
    </div>
  );
}

export default HomeScreen;
