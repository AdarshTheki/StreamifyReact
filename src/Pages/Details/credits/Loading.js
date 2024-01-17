import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div style={{ margin: "10px 2rem" }}>
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width={200}
        height={30}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='100%'
        height={20}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='60%'
        height={10}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='60%'
        height={10}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='60%'
        height={10}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='60%'
        height={10}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='100%'
        height={5}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='90%'
        height={15}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='80%'
        height={25}
      />
      <Skeleton
        baseColor='#333'
        highlightColor='#222'
        width='100%'
        height={10}
      />
    </div>
  );
};

export default Loading;
