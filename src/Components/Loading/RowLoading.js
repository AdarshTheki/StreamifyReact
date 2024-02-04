import Skeleton from 'react-loading-skeleton';

export default function Loading({
    height = 250,
    width = 200,
    gap = '16px',
    counts = 5,
    baseColor = '#222',
    highlightColor = '#333',
}) {
    const styles = {
        display: 'flex',
        gap: gap,
        width: '100%',
        overflow: 'hidden',
    };
    return (
        <div style={styles}>
            {Array(counts)
                ?.fill()
                ?.map((_, index) => (
                    <div key={index}>
                        <Skeleton
                            baseColor={baseColor}
                            highlightColor={highlightColor}
                            width={width}
                            height={height}
                        />
                    </div>
                ))}
        </div>
    );
}
