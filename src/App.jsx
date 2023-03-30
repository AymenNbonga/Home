import styled from "styled-components";
import Contact from "./components/Contact";
import Dash from "./components/Dash";
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Dash />
      <Contact />
    </Container>
  );
}

export default App;
