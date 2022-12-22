import classes from "../styles/Miniplayer.module.css";
import { useRef, useState } from "react";
import {useLocation} from "react-router-dom";
import ReactPlayer from "react-player";
export default function MiniPlayer({title, id}) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `//www.youtube.com/watch?v=${id}`;

  const location = useLocation();
  const {state} = location; 
  function toggleMiniPlayer(){
    if(!status){
      setStatus(true);
      buttonRef.current.classList.remove(classes.floatingBtn);
    }else{
      setStatus(false);
      buttonRef.current.classList.add(classes.floatingBtn);
    }
  }


  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn }`} ref={buttonRef} onClick={toggleMiniPlayer}>
      <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniPlayer}> close </span>
      <ReactPlayer className={classes.player} url={videoUrl} width="300px" height="168px" playing={status}></ReactPlayer>
      <p>{state}</p>
    </div>
  );
}
