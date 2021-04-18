import React from "react";
import "./ContactUs.css";
import Container from "react-bootstrap/Container";

export default function ContactUs() {
  return (
    <div>
      <Container className="ContactUsContainer container">
        <h1 className="HomeScreenHeading">Contact Us </h1>

        <h4 className="ContactUsSubHeading">ONLINE</h4>
        <div className="row">
          <div className="col-sm-6 ContactUsCard">
            <i class="fas fa-phone-alt fa-lg ContactUsIcon"></i>
            +91 9575931349
          </div>
          <div className="col-sm-6 ContactUsCard">
            <i class="fab fa-whatsapp fa-lg ContactUsIcon"></i>
            +91 9575931349
          </div>
          <div className="col-sm-6 ContactUsCard">
            <i class="fas fa-envelope fa-lg ContactUsIcon"></i>
            <a
              className="ContactUsCardAnchor"
              href="mailto:nalinagrawal333@gmail.com"
              target="_top"
            >
              nalinagrawal333@gmail.com
            </a>
          </div>
          <div className="col-sm-6 ContactUsCard">
            <i class="fab fa-linkedin ContactUsIcon fa-lg"></i>
            <a
              className="ContactUsCardAnchor"
              target="_blank"
              href="https://www.linkedin.com/in/nalin-agrawal-a73455191/"
            >
              linkedin.com/in/nalin-agrawal-a73455191/
            </a>
          </div>
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
        </div>
        <h4 className="ContactUsSubHeading">ADDRESS</h4>
        <div className="row">
          <div className="col-sm-6 ContactUsCard">
            <div className="row">
              <div className="col-sm-1">
                <i class="fas fa-home ContactUsIcon fa-lg"></i>
              </div>
              <div className="col-sm-11">
                <p>
                  B-6, Chetakpuri,
                  <br />
                  Gwalior
                  <br /> PIN code: 474007
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ContactUsCard">
            <i class="fas fa-map-marker-alt ContactUsIcon fa-lg"></i>
            Gwalior, Madhya Pradesh
            <br />
            <i class="fas fa-globe-asia ContactUsIcon fa-lg"></i>
            India
          </div>
        </div>
      </Container>
    </div>
  );
}
