import "./App.css";
import LoginPage from "./Components/LoginPage";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="w-100 justify-content-between d-flex flex-column">
      <header>
        <NavBar></NavBar>
      </header>
      <main></main>

      <LoginPage></LoginPage>
      <footer></footer>
    </div>
  );
}

export default App;
