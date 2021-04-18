import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Nalin from "../../../images/NALIN.jpeg";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./HomeScreen.css";
import achievements from "../../../data/AchievementsData";
import skills from "../../../data/SkillsData";
// import { AnimatedOnScroll } from "react-animated-css-onscroll";
export default function HomeScreen() {
  const achivementsData = achievements.achievementArray;
  const skillData = skills.skillsArray;
  return (
    <div>
      {/* ----------------------------------------------Jumbotron------------------------------------- */}
      {/* <AnimatedOnScroll
        animationIn="fadeIn"
        animationInDuration={3500}
        isVisible={true}
      > */}
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
      {/* </AnimatedOnScroll> */}
      {/* ----------------------------------------------Achievements------------------------------------- */}
      {/* <AnimatedOnScroll
        animationIn="slideInUp"
        animationInDuration={1000}
        isVisible={true}
      > */}
      <Container className="HomeScreenContainer container">
        <h1 className="HomeScreenHeading">Achievements </h1>
        <div className="row">
          {achivementsData.map((achievement) => (
            <div className="HomeScreenAchievementsCard">
              <CardActionArea
                className="HomeScreenAchievementsCardArea"
                id={achievement._id}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    style={{ fontFamily: "Trebuchet MS", fontStyle: "bold" }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {achievement.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={achievement.profileURL} target="_blank">
                    VIEW PROFILE
                  </a>
                </Button>
              </CardActions>
            </div>
          ))}

          <div className="row">
            <div item xs={3} sm={3} className="col-sm"></div>
          </div>
        </div>
      </Container>
      {/* </AnimatedOnScroll> */}
      {/* ----------------------------------------------Skills------------------------------------- */}
      {/* <AnimatedOnScroll
        animationIn="zoomIn"
        animationInDuration={1000}
        isVisible={true}
      > */}
      <Container className="HomeScreenContainer  container ">
        <h1 className="HomeScreenHeading">Skills </h1>

        <div className="row">
          {skillData.map((skill) => (
            <div item xs={3} sm={3} className="col-sm" id={skill._id}>
              <div className="HomeScreenSkillContent">
                {skill.icon}
                <p className="HomeScreenSkillContentP">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      {/* </AnimatedOnScroll> */}
    </div>
  );
}
