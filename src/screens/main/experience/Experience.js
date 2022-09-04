import React from "react";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "./Experience.css";
import experience from "../../../data/ExperienceData";
import Comet from "../../../images/comet.jpg";
export default function Experience() {
  const experienceData = experience.experienceArray;
  return (
    <div>
      <div className="container ExperiencesContainer">
        <Fade>
          <h1 className="ExperiencesHeading">Experience</h1>
        </Fade>

        <div className="row">
          {experienceData.map((experience) => (
            <LightSpeed left>
              <div className="ExperiencesProjectCard" id={experience._id}>
                <div className="ExperienceTitleDiv">
                  <h2 className="ExperiencesTitle">{experience.title}</h2>
                </div>
                <div className="ExperienceCardBody">
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "500px",
                      }}
                    >
                      <img
                        // src={process.env.PUBLIC_URL + experience.logo}
                        src={experience.logo}
                        alt="logo"
                        style={{
                          width: "200px",
                          hight: "200px",
                          borderRadius: "25px",
                          position: "absolute",
                          top: "30%",
                          left: "75px",
                        }}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <h3 className="ExperienceCardBodyLanguage">
                        {experience.languages}
                      </h3>
                      <h5>
                        {experience.startDate} - {experience.endDate}
                      </h5>
                      <p>{experience.description}</p>
                    </div>
                  </div>
                </div>
                <div className="ExperienceCardLinksDiv">
                  {experience.hostedUrl.length !== 0 && (
                    <a
                      href={experience.hostedUrl}
                      target="_blank"
                      className="ExperienceCardLink"
                    >
                      VIEW
                    </a>
                  )}
                </div>
              </div>
            </LightSpeed>
          ))}
        </div>
      </div>
    </div>
  );
}
