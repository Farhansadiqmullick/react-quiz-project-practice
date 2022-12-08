import classes from "../styles/Video.module.css";
export default function Video({title, id, noq}) {
  
  const Image =  `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  return (
      <div className={classes.video}>
        <img src={Image} alt={title} />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Score : {noq * 5}</p>
        </div>
      </div>
  );
}
