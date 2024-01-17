import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Rating = ({ value, size }) => {
    const color =
        value < 50
            ? '#bc2023'
            : value < 60
            ? '#eb442c'
            : value < 70
            ? '#f8b324'
            : value < 80
            ? '#0c6b37'
            : '#094a25';
    return (
        <div className='circleRating'>
            <CircularProgressbar
                value={value}
                strokeWidth={12}
                maxValue={100}
                text={`${value}%`}
                styles={buildStyles({
                    pathColor: color,
                    textColor: color,
                    textSize: size,
                })}
            />
        </div>
    );
};
export default Rating;
