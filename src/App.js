import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./screens/footer/Footer";
import Header from "./screens/header/Header";
import Achievements from "./screens/main/achievements/Achievements";
import HomeScreen from "./screens/main/homeScreen/HomeScreen";
import ContactUs from "./screens/main/contactUs/ContactUs";
import Education from "./screens/main/education/Education";
import Experience from "./screens/main/experience/Experience";
import Projects from "./screens/main/projects/Projects";
import Skills from "./screens/main/skills/Skills";
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
            <Achievements />
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="contactus">
            <ContactUs />
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
