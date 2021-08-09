import React from "react";
import { useDispatch } from "react-redux";
import { resetTimer } from "../toolkit/timeSlice";

const ResetButton = () => {
  const dispatch = useDispatch();

  return (
    <button className="btn" id="reset" onClick={() => dispatch(resetTimer())}>
      Reset
    </button>
  );
};

export default ResetButton;
