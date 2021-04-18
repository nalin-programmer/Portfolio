import React from "react";
import "./Education.css";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div>
      <Fade>
        <h1 className="HomeScreenHeading" style={{ textAlign: "center" }}>
          Education{" "}
        </h1>
      </Fade>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Slide right>
              <Typography variant="body2" color="textSecondary">
                10th Board (CBSE)
              </Typography>
            </Slide>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Slide left>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  style={{ fontFamily: "Trebuchet MS", textStyle: "bold" }}
                >
                  Gwalior Glory High School
                </Typography>
                <Typography>CGPA 10</Typography>
              </Paper>
            </Slide>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Slide left>
              <Typography variant="body2" color="textSecondary">
                12th Board(CBSE)
              </Typography>
            </Slide>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Slide right>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  style={{ fontFamily: "Trebuchet MS", textStyle: "bold" }}
                >
                  Sanskar Public School
                </Typography>
                <Typography>85.2%</Typography>
              </Paper>
            </Slide>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Slide right>
              <Typography variant="body2" color="textSecondary">
                B. Tech(CSE) Sem-1
              </Typography>
            </Slide>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Slide left>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  style={{ fontFamily: "Trebuchet MS", textStyle: "bold" }}
                >
                  Indian Institute of Information Technology, Pune (IIIT Pune)
                </Typography>
                <Typography>SGPA: 8.79, CGPA: 8.79</Typography>
              </Paper>
            </Slide>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Slide left>
              <Typography variant="body2" color="textSecondary">
                B. Tech(CSE) Sem-2
              </Typography>
            </Slide>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Slide right>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  style={{ fontFamily: "Trebuchet MS", textStyle: "bold" }}
                >
                  Indian Institute of Information Technology, Pune (IIIT Pune)
                </Typography>
                <Typography>SGPA: 8.65, CGPA: 8.72</Typography>
              </Paper>
            </Slide>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Slide right>
              <Typography variant="body2" color="textSecondary">
                B. Tech(CSE) Sem-3
              </Typography>
            </Slide>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Slide left>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  style={{ fontFamily: "Trebuchet MS", textStyle: "bold" }}
                >
                  Indian Institute of Information Technology, Pune (IIIT Pune)
                </Typography>
                <Typography>SGPA: 8.24, CGPA: 8.55</Typography>
              </Paper>
            </Slide>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
