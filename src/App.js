import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./screens/footer/Footer";
import Header from "./screens/header/Header";
import HomeScreen from "./screens/main/homeScreen/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Header />
        </header>
        <main>
          <div id="homescreen">
            <HomeScreen />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
