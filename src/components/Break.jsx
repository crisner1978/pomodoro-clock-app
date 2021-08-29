import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addBreak, minusBreak, selectBreak } from "../toolkit/timeSlice";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

const Break = () => {
  const breakTime = useSelector(selectBreak);
  const dispatch = useDispatch();

  return (
    <Container id="break-label">
      <h1>Break Time</h1>
      <ButtonWrapper>
        <div id="break-decrement">
          <FaMinusSquare
            className="minus"
            onClick={() => dispatch(minusBreak())}
          />
        </div>
        <h2 id="break-length">{breakTime}</h2>
        <div id="break-increment">
          <FaPlusSquare className="plus" onClick={() => dispatch(addBreak())} />
        </div>
      </ButtonWrapper>
    </Container>
  );
};

export default Break;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    background: linear-gradient(to top, #eef2f3, #8e9eab);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -1rem;
  padding: 0;
  color: #fff;

  h2 {
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  svg {
    font-size: 2rem;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
      
    }
  }

  .plus {
    background-color: #00ab66;
    outline: none;
  }
  .minus {
    background-color: #a40000;
  }
`;
