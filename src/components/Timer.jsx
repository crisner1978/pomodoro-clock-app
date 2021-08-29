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
import styled from "styled-components";

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
    <Container>
      <h2 id="timer-label">{type}</h2>
      <h1 id="time-left">{formatTime}</h1>
      <ButtonWrapper>
        <StartButton />
        <ResetButton />
      </ButtonWrapper>
      <audio ref={audioElement} id="beep">
        <source
          src="https://onlineclock.net/audio/options/default.mp3"
          type="audio/mpeg"
        />
      </audio>
    </Container>
  );
};

export default Timer;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  background: #8e9eab;
  background: -webkit-linear-gradient(to bottom, #eef2f3, #8e9eab);
  background: linear-gradient(to bottom, #eef2f3, #8e9eab);
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    max-width: 450px;
    max-height: 450px;
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-width: 480px) {
      max-width: 320px;
      max-height: 320px;
      width: 95%;
      height: 95%;
    }
  }
  h2 {
    font-size: 30px;
    text-transform: uppercase;
    text-shadow: -5px 5px 8px rgba(0, 0, 0, 0.6);
    @media only screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  h1 {
    font-size: 75px;
    @media only screen and (max-width: 768px) {
      font-size: 50px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
