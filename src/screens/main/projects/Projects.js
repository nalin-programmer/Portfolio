import React from "react";
import "./Projects.css";
import projects from "../../../data/ProjectsData";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
export default function Projects() {
  const projectData = projects.projectsArray;
  return (
    <div>
      <div className="container ProjectsContainer">
        <Fade>
          <h1 className="ProjectsHeading">Projects</h1>
        </Fade>

        <div className="row">
          {projectData.map((project) => (
            <Flip top>
              <div className="ProjectsProjectCard col-sm" id={project._id}>
                <div className="ProjectTitleDiv">
                  <h2 className="ProjectsTitle">{project.title}</h2>
                </div>
                <div className="ProjectCardBody">
                  <h3 className="ProjectCardBodyLanguage">
                    {project.languages}
                  </h3>
                  <p>{project.description}</p>
                </div>
                <div className="ProjectCardLinksDiv">
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    className="ProjectCardLink"
                  >
                    GITHUB
                  </a>{" "}
                  {project.hostedUrl.length !== 0 && (
                    <a
                      href={project.hostedUrl}
                      target="_blank"
                      className="ProjectCardLink"
                    >
                      VIEW
                    </a>
                  )}
                </div>
              </div>
            </Flip>
          ))}
        </div>
      </div>
    </div>
  );
}
