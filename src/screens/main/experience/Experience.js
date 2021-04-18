import React from "react";
import "./Experience.css";
import experience from "../../../data/ExperienceData";

export default function Experience() {
  const experienceData = experience.experienceArray;
  return (
    <div>
      <div className="container ExperiencesContainer">
        <h1 className="ExperiencesHeading">Experience</h1>

        <div className="row">
          {experienceData.map((experience) => (
            <div className="ExperiencesProjectCard col-sm" id={experience._id}>
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
                {experience.hostedUrl.length != 0 && (
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
          ))}
        </div>
      </div>
    </div>
  );
}
