import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Banner.css";
import { useSelector } from "react-redux";
import BannerImageSlider from "./BannerImageSlider";

function Banner() {
  const { banner, isLoading, isError } = useSelector((state) => state.banner);

  if (isLoading || isError) {
    const styles = {
      position: "relative",
      minHeight: "400px",
      width: "80%",
      paddingTop: "4rem",
    };
    return (
      <div style={styles} className='max-width'>
        <br />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='100%'
          height={30}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='80%'
          height={20}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='90%'
          height={30}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='50%'
          height={10}
        />
        <br />
        <br />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='100%'
          height={20}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='80%'
          height={10}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='60%'
          height={10}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='100%'
          height={20}
        />
        <br />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='80%'
          height={30}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width='50%'
          height={30}
        />
      </div>
    );
  }

  return (
    <div>
      <BannerImageSlider slides={banner} />
    </div>
  );
}

export default Banner;
