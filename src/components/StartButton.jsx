import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stopTimer, startTimer, timerOn } from "../toolkit/timeSlice";

const StartButton = () => {
  
  const on = useSelector(timerOn);
  const dispatch = useDispatch();

  const onClick = () => {
    on ? dispatch(stopTimer()) : dispatch(startTimer());
  };

  return (
    <button className="btn" id="start_stop" onClick={onClick}>
      {on ? "Stop" : "Start"}
    </button>
  );
};

export default StartButton;
