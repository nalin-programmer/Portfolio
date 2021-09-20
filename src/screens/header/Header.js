import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Header.css";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "#ffffff",
      textColor: "#ffffff",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const displayMobile = () => {
  const classes = UseStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Nalin Agrawal
        </Typography>
        {/* <div className="dropdown">
          <Link to="#admin">
            <MenuIcon className="menuIcon" />
          </Link>
          <ul className="dropdown-content">
            <li>
              <Button color="primary" href="#experience">
                Experience
              </Button>
            </li>
            <li>
              <Button color="primary" href="#projects">
                Projects
              </Button>
            </li>
            <li>
              <Button color="primary" href="#education">
                Education
              </Button>
            </li>
            <li>
              <Button color="primary" href="#contactus">
                Contact
              </Button>
            </li>
            <li>
              <Button color="primary" href="#sendmail">
                Send Mail
              </Button>
            </li>
          </ul>
        </div> */}
      </Toolbar>
    </AppBar>
  );
};
const displayDesktop = () => {
  const classes = UseStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <a href="#homescreen" className="HeaderA">
            Nalin Agrawal
          </a>
        </Typography>
        <Button color="inherit" href="#education" className="menuContent">
          Education
        </Button>
        <Button color="inherit" href="#achievements" className="menuContent">
          Achievements
        </Button>
        <Button color="inherit" href="#experience" className="menuContent">
          Experience
        </Button>
        <Button color="inherit" href="#skills" className="menuContent">
          Skills
        </Button>
        <Button color="inherit" href="#projects" className="menuContent">
          Projects
        </Button>
        <Button color="inherit" href="#cetrificates" className="menuContent">
          Certificates
        </Button>
        <Button color="inherit" href="#contactus" className="menuContent">
          Contact
        </Button>
        <Button color="inherit" href="#sendmail" className="menuContent">
          Send Mail
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  return (
    <BrowserRouter>
      {mobileView ? displayMobile() : displayDesktop()}
    </BrowserRouter>
  );
}
