import "./App.css";
import { Container, Wrapper } from "./AppElements";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";

function App() {
  return (
    <Container>
      <Timer />
      <Wrapper>
        <Session />
        <Break />
      </Wrapper>
    </Container>
  );
}

export default App;
