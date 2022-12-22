import classes from "../styles/Summary.module.css";
import SuccessImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import { useMemo } from "react";
export default function Summary({ score, noq }) {
  const getKeyImage = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 69) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 79) {
      return "very good";
    } else if ((score / (noq * 5)) * 100 < 94) {
      return "awesome";
    } else if ((score / (noq * 5)) * 100 < 99) {
      return "excellent";
    }
  }, [score, noq]);


  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyImage}&per_page=1`,
    "Get",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : SuccessImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
