// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { stopTimer, startTimer, timerOn } from "../toolkit/timeSlice";

const StartButton = () => {
  const on = useSelector(timerOn);
  const dispatch = useDispatch();
  
  const onClick = () => {
    on ? dispatch(stopTimer()) : dispatch(startTimer());
  };

  return (
    <Button
      style={{ backgroundColor: on ? "#a40000" : "#00AB66"}}
      id="start_stop"
      onClick={onClick}
    >
      {on ? "STOP" : "START"}
    </Button>
  );
};

export default StartButton;



const Button = styled.button`
  display: block;
  font-family: "Zen Dots", cursive;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  color: #fff;
  border: none;
  /* background-color: off #00AB66; on #a40000 */
  font-size: 20px;
  transition: 0.2s ease-in all;
  cursor: pointer;

  &:hover {
    transition: ease-in 0.3s all;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
    transition: 0.2s ease-in all;
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  @media only screen and (max-width: 768px) {
    width: 125px;
    height: 40px;
    font-size: 16px;
  }

  @media only screen and (max-width: 480px) {
    width: 100px;
    height: 35px;
    font-size: 14px;
  }
`;
