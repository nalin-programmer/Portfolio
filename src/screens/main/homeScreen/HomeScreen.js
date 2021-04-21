import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Nalin from "../../../images/NALIN.jpeg";
import Resume from "../../../data/Resume.pdf";
import Button from "@material-ui/core/Button";
import "./HomeScreen.css";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
export default function HomeScreen() {
  return (
    <div>
      <Fade bottom>
        <Jumbotron fluid className="HomeScreenJumbotron">
          <Container className="HomeScreenSmallIntro">
            <img src={Nalin} className="HomeSceenProfilePicture" />
            <h1 className="HomeScreenH1">Nalin Agrawal</h1>
            <h2 className="HomeScreenH2">
              Competitive Programmer | MERN Stack Developer | Android Developer
            </h2>
            <p
              className="HomeScreenP"
              style={{ marginTop: "30px", marginBottom: "10px" }}
            >
              A competitive programmer and developer. Good grip on Data
              Structures. Self-Motivated and Enthusiastic Developer. Have
              knowledge of DS, Algorithms, Android development and Web
              Development.
            </p>
          </Container>
        </Jumbotron>
      </Fade>
      <RubberBand>
        <div className="homeScreenPdfContainer">
          <Button
            variant="contained"
            color="primary"
            href={Resume}
            target="_blank"
            className="ResumeLink"
          >
            View Resume
          </Button>
        </div>
      </RubberBand>
    </div>
  );
}
