import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Rating = ({ rating }) => {
  return (
    <div className='circleRating'>
      <CircularProgressbar
        value={rating}
        strokeWidth={10}
        maxValue={100}
        text={`${rating}%`}
        styles={buildStyles({
          pathColor:
            rating < 40
              ? "red"
              : rating < 60
              ? "hotpink"
              : rating < 80
              ? "orange"
              : "green",
          textColor: "black",
          textSize: "2rem",
        })}
      />
    </div>
  );
};
export default Rating;
