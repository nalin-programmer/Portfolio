import React from "react";
import "./ContactUs.css";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Container from "react-bootstrap/Container";
import LightSpeed from "react-reveal/LightSpeed";
export default function ContactUs() {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Container className="ContactUsContainer container">
        <Fade>
          <h1 className="HomeScreenHeading">Contact </h1>
        </Fade>
        {/* <Fade>
          <h4 className="ContactUsSubHeading">ONLINE</h4>
        </Fade> */}
        <div className="row">
          <Jump>
            <div className="col-sm-6 ContactUsCard">
              <i class="fas fa-phone-alt fa-lg ContactUsIcon"></i>
              +91 9575931349
            </div>
          </Jump>{" "}
          {/* <Jump>
            <div className="col-sm-6 ContactUsCard">
              <i class="fab fa-whatsapp fa-lg ContactUsIcon"></i>
              +91 9575931349
            </div>
          </Jump> */}
          <Jump>
            <div className="col-sm-6 ContactUsCard">
              <i class="fas fa-envelope fa-lg ContactUsIcon"></i>
              <a
                className="ContactUsCardAnchor"
                href="mailto:nalinagrawal.iiitp@gmail.com"
                target="_top"
              >
                nalinagrawal.iiitp@gmail.com
              </a>
            </div>
          </Jump>
          <Jump>
            <div className="col-sm-6 ContactUsCard">
              <i class="fab fa-linkedin ContactUsIcon fa-lg"></i>
              <a
                className="ContactUsCardAnchor"
                target="_blank"
                href="https://www.linkedin.com/in/nalin-agrawal/"
              >
                https://www.linkedin.com/in/nalin-agrawal/
              </a>
            </div>
          </Jump>
          <Jump>
            <div className="col-sm-6 ContactUsCard">
              <i class="fab fa-github ContactUsIcon fa-lg"></i>
              <a
                className="ContactUsCardAnchor"
                target="_blank"
                href="https://github.com/nalin-programmer"
              >
                github.com/nalin-programmer
              </a>
            </div>
          </Jump>
          {/* <Jump>
            <div className="col-sm-6 ContactUsCard">
              <i class="fab fa-instagram  ContactUsIcon fa-lg"></i>
              <a
                className="ContactUsCardAnchor"
                target="_blank"
                href="https://www.instagram.com/nalinagrawal382/?hl=en"
              >
                instagram.com/nalinagrawal382/?hl=en
              </a>
            </div>
          </Jump> */}
        </div>
        {/* <Fade>
          <h4 className="ContactUsSubHeading">ADDRESS</h4>
        </Fade>
        <div className="row">
          {" "}
          <LightSpeed left>
            <div className="col-sm-6 ContactUsCard">
              <div className="row">
                <div className="col-sm-1">
                  <i class="fas fa-home ContactUsIcon fa-lg"></i>
                </div>
                <div className="col-sm-11">
                  <p>
                    B-6, Chetakpuri, Gwalior
                    <br /> PIN code: 474007
                  </p>
                </div>
              </div>
            </div>
          </LightSpeed>
          <LightSpeed right>
            <div className="col-sm-6 ContactUsCard">
              <i class="fas fa-map-marker-alt ContactUsIcon fa-lg"></i>
              Gwalior, Madhya Pradesh
              <br />
              <i class="fas fa-globe-asia ContactUsIcon fa-lg"></i>
              India
            </div>
          </LightSpeed>
        </div> */}
      </Container>
    </div>
  );
}
