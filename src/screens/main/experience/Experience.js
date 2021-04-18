import React from "react";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "./Experience.css";
import experience from "../../../data/ExperienceData";

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
              <div
                className="ExperiencesProjectCard col-sm"
                id={experience._id}
              >
                <div className="ExperienceTitleDiv">
                  <h2 className="ExperiencesTitle">{experience.title}</h2>
                </div>
                <div className="ExperienceCardBody">
                  <h3 className="ExperienceCardBodyLanguage">
                    {experience.languages}
                  </h3>
                  <h5>
                    {experience.startDate} - {experience.endDate}
                  </h5>
                  <p>{experience.description}</p>
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
