import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "react-bootstrap/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import achievements from "../../../data/AchievementsData";
export default function Achievements() {
  const achivementsData = achievements.achievementArray;
  return (
    <div>
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
    </div>
  );
}
