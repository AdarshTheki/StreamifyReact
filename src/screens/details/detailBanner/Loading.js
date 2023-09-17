import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Loading = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className='max-width'>
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={800}
          height={30}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={500}
          height={20}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={800}
          height={10}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={300}
          height={10}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={800}
          height={10}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={300}
          height={10}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={400}
          height={20}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={800}
          height={40}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={800}
          height={40}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={500}
          height={40}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={500}
          height={30}
        />
        <Skeleton
          highlightColor='#333'
          baseColor='#222'
          width={800}
          height={20}
        />
      </div>
    </div>
  );
}

export default Loading
