import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addSession, minusSession, selectSession } from "../toolkit/timeSlice";

const Session = () => {
  const sessionTime = useSelector(selectSession);
  const dispatch = useDispatch();

  return (
    <Container id="session-label">
      <h1>Session Time</h1>
      <BtnWrapper>
        <div id="session-decrement">
          <FaMinusSquare
            className="minus"
            onClick={() => dispatch(minusSession())}
          />
        </div>
        <h2 id="session-length">{sessionTime}</h2>
        <div id="session-increment">
          <FaPlusSquare
            className="plus"
            onClick={() => dispatch(addSession())}
          />
        </div>
      </BtnWrapper>
    </Container>
  );
};

export default Session;



export const Container = styled.div`
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

export const BtnWrapper = styled.div`
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
