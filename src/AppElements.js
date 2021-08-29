import styled from "styled-components";

export const Container = styled.div`
  background: #eb5757;
  background: -webkit-linear-gradient(to bottom, #000000, #eb5757);
  background: linear-gradient(to bottom, #000000, #eb5757);
  background-size: cover;
  margin: 0 auto;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;

  @media only screen and (max-width: 768px) {
    grid-gap: 4rem;
  }

  @media only screen and (max-width: 480px) {
    grid-gap: 2rem;
  }
`;
