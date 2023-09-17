import Skeleton from "react-loading-skeleton";

export default function Loading() {
  const styles = {
    display: "flex",
    gap: "1rem",
  };
  return (
    <div style={styles}>
      <Skeleton
        baseColor='#222'
        highlightColor='#333'
        width={200}
        height={250}
      />
      <Skeleton
        baseColor='#222'
        highlightColor='#333'
        width={200}
        height={250}
      />
      <Skeleton
        baseColor='#222'
        highlightColor='#333'
        width={200}
        height={250}
      />
      <Skeleton
        baseColor='#222'
        highlightColor='#333'
        width={200}
        height={250}
      />
      <Skeleton
        baseColor='#222'
        highlightColor='#333'
        width={200}
        height={250}
      />
      <Skeleton
        baseColor='#222'
        highlightColor='#333'
        width={200}
        height={250}
      />
    </div>
  );
}
