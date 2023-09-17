import React from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const ExploreScreen = () => {
  const { mediaType } = useParams();

  return (
    <div>
      <h1>ExploreScreen</h1>
    </div>
  );
};

export default ExploreScreen;
