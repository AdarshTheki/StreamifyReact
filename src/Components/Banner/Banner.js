import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Banner.css";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";

function Banner() {
  const { banner, isLoading, isError } = useSelector((state) => state.banner);

  if (isLoading) {
    return (
      <div
        style={{ position: "relative", minHeight: "400px", width: "80%" }}
        className='max-width'>
        <br />
        <Skeleton width='100%' height={30} />
        <Skeleton width='80%' height={20} />
        <Skeleton width='90%' height={30} />
        <div className='loading'>
          <h1 data-text='Loading...'>Loading...</h1>
        </div>
        <Skeleton width='50%' height={10} />
        <Skeleton width='100%' height={20} />
        <Skeleton width='80%' height={10} />
        <Skeleton width='60%' height={10} />
        <Skeleton width='100%' height={20} />
        <br />
        <Skeleton width='80%' height={30} />
        <Skeleton width='50%' height={30} />
      </div>
    );
  }

  if (isError) {
    return (
      <h1 style={{ fontSize: "3rem", textAlign: "center", color: "red" }}>
        "the server cannot or will not process the request due to something that
        is perceived to be a client error"
      </h1>
    );
  }

  return (
    <div>
      <ImageSlider slides={banner} />
    </div>
  );
}

export default Banner;
