import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import "./SendMail.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Bounce from "react-reveal/Bounce";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SendMail() {
  const [open, setOpen] = React.useState(false);
  const [erroropen, setErroropen] = React.useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClick();
        },
        (error) => {
          console.log(error.text);
          handleErrorClick();
        }
      );
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleErrorClick = () => {
    setErroropen(true);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErroropen(false);
  };
  return (
    <div>
      <Bounce bottom>
        <Container className="sendMailcontainer ">
          <Fade>
            <h1 className="HomeScreenHeading">Send Mail</h1>
          </Fade>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Message send successfully !!!
            </Alert>
          </Snackbar>
          <Snackbar
            open={erroropen}
            autoHideDuration={3000}
            onClose={handleErrorClose}
          >
            <Alert onClose={handleClose} severity="error">
              Sorry, Something went worng !!!
            </Alert>
          </Snackbar>
          <form className="feedbackForm" ref={form} onSubmit={sendEmail}>
            <div className="sendMailInput">
              {/* <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="from_name"
                fullWidth
              /> */}
            </div>
            <div className="sendMailInput">
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                name="subject"
                fullWidth
              />
            </div>

            <div className="sendMailInput">
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                fullWidth
                name="message"
                rows={8}
                variant="outlined"
              />
            </div>

            <div className="sendMailSubmit">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Send"
              >
                Submit
              </Button>
            </div>
          </form>
        </Container>
      </Bounce>
    </div>
  );
}
