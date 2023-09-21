import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div>
      <div className='grid' style={{ gap: "1rem" }}>
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width={200}
          height={300}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width={200}
          height={300}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width={200}
          height={300}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width={200}
          height={300}
        />
        <Skeleton
          baseColor='#222'
          highlightColor='#333'
          width={200}
          height={300}
        />
      </div>
    </div>
  );
};

export default Loading;
