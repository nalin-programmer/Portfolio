import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Nalin from "../../../images/NALIN.png";
import Background from "../../../images/Background.png";
import Resume from "../../../data/Resume.pdf";
import Button from "@material-ui/core/Button";
import "./HomeScreen.css";
import Fade from "react-reveal/Fade";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import RubberBand from "react-reveal/RubberBand";
import Grid from "@material-ui/core/Grid";
export default function HomeScreen() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 400,
      backSpeed: 60,
      strings: [
        "Competitive Programmer",
        "MERN Stack Web Developer",
        "Android Developer",
      ],
    });
  }, []);
  return (
    <div style={{ marginBottom: "20px" }}>
      <Fade bottom>
        {/* <Jumbotron fluid className="HomeScreenJumbotron">
          <Container className="HomeScreenSmallIntro">
            <img src={Nalin} className="HomeSceenProfilePicture" />
            <h1 className="HomeScreenH1">Nalin Agrawal</h1>
            <h2 className="HomeScreenH2">
              Competitive Programmer | MERN Stack Developer
            </h2>
            <p
              className="HomeScreenP"
              style={{ marginTop: "30px", marginBottom: "10px" }}
            >
              A self-motivated competitive programmer and developer with a good
              grip on Data Structures and Algorithm.
            </p>
          </Container>
        </Jumbotron> */}
        <Grid container>
          <Grid
            style={{ textAlign: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <div className="imgContainer">
              <img
                src={Nalin}
                alt=""
                style={{
                  hight: "250px",
                  width: "250px",
                  borderRadius: "50%",
                  backgroundColor: "#1E90FF",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div style={{ width: "100%", padding: "50px 0", height: "100%" }}>
              <h2 className="intro_text">Hi I'm </h2>
              {/* <h1 className="intro_text">Nalin Agrawal</h1> */}
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                Nalin Agrawal
              </h1>
              <h3 className="intro_text">
                I'm a <span style={{ color: "#3f51b5" }} ref={textRef}></span>
              </h3>
            </div>
          </Grid>
        </Grid>
      </Fade>
      <RubberBand>
        <div className="homeScreenPdfContainer">
          <a target="_blank" href="https://www.linkedin.com/in/nalin-agrawal/">
            <i
              class="fab fa-solid fa-linkedin fa-2xl"
              style={{ fontSize: "36px", marginRight: "10px", color: "black" }}
            ></i>
          </a>
          <a target="_blank" href="https://github.com/nalin-programmer">
            <i
              class="fab fa-solid fa-github fa-2xl"
              style={{ fontSize: "36px", color: "black", marginRight: "10px" }}
            ></i>
          </a>
          <a
            target="_blank"
            href="mailto:nalinagrawal.iiitp@gmail.com"
            target="_top"
          >
            <i
              class="fas fa-solid fa-envelope fa-2xl"
              style={{ fontSize: "36px", color: "black" }}
            ></i>
          </a>
        </div>
        <div className="homeScreenPdfContainer">
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            className="ResumeLink"
            style={{ marginRight: "5px" }}
          >
            Contact
          </Button>
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
