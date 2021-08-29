import { useDispatch } from "react-redux";
import styled from "styled-components";
import { resetTimer } from "../toolkit/timeSlice";

const ResetButton = () => {
  const dispatch = useDispatch();

  return (
    <Button className="btn" id="reset" onClick={() => dispatch(resetTimer())}>
      RESET
    </Button>
  );
};

export default ResetButton;



const Button = styled.button`
  display: block;
  font-family: "Zen Dots", cursive;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  background-color: transparent;
  color: #a40000;
  border: 3px solid #a40000;
  font-size: 20px;
  transition: 0.3s ease-in all;
  cursor: pointer;

  &:hover {
    background: transparent;
    border: 3px solid #a40000;
    transition: ease-in 0.3s all;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
    transition: 0.3s ease-in all;
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
