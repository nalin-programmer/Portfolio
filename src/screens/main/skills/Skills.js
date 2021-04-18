import React from "react";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Container from "react-bootstrap/Container";
import skills from "../../../data/SkillsData";
export default function Skills() {
  const skillData = skills.skillsArray;
  return (
    <div>
      <Container className="HomeScreenContainer  container ">
        <Fade>
          <h1 className="HomeScreenHeading">Skills </h1>
        </Fade>

        <div className="row">
          {skillData.map((skill) => (
            <Roll bottom>
              <div item xs={3} sm={3} className="col-sm" id={skill._id}>
                <div className="HomeScreenSkillContent">
                  {skill.icon}
                  <p className="HomeScreenSkillContentP">{skill.name}</p>
                </div>
              </div>
            </Roll>
          ))}
        </div>
      </Container>
    </div>
  );
}
