import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementTime,
  interval,
  switchBreak,
  switchSession,
  timeLeft,
  timerOn,
} from "../toolkit/timeSlice";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import StartButton from "./StartButton";
import ResetButton from "./ResetButton";

momentDurationFormatSetup(moment);
const Timer = () => {

  const time = useSelector(timeLeft);
  const on = useSelector(timerOn);
  const type = useSelector(interval);
  const dispatch = useDispatch();
  const audioElement = useRef(null);

  const formatTime = moment
    .duration(time, "s")
    .format("mm:ss", { trim: false });

  useEffect(() => {
    let countdown = null;
    if (on && time > 0) {
      countdown = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    } else if (on && time === 0) {
      countdown = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
      audioElement.current.play();
      if (type === "Session") {
        dispatch(switchBreak());
      } else if (type === "Break") {
        dispatch(switchSession());
      }
    } else {
      clearInterval(countdown);
      audioElement.current.load();
    }
    return () => clearInterval(countdown);
  }, [type, time, on, dispatch, audioElement]);

  return (
    <div className="timer">
      <h1 id="timer-label">{type}</h1>
      <h1 id="time-left">{formatTime}</h1>
      <StartButton />
      <ResetButton />
      <audio ref={audioElement} id="beep">
        <source src="https://onlineclock.net/audio/options/default.mp3"
                type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Timer;
