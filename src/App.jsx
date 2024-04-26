import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./Components/NavBar";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <RegisterPage></RegisterPage>
      </Container>
    </>
  );
}

export default App;
