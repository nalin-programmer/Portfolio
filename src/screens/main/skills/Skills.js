import React from "react";
import Container from "react-bootstrap/Container";
import skills from "../../../data/SkillsData";
export default function Skills() {
  const skillData = skills.skillsArray;
  return (
    <div>
      <Container className="HomeScreenContainer  container ">
        <h1 className="HomeScreenHeading">Skills </h1>

        <div className="row">
          {skillData.map((skill) => (
            <div item xs={3} sm={3} className="col-sm" id={skill._id}>
              <div className="HomeScreenSkillContent">
                {skill.icon}
                <p className="HomeScreenSkillContentP">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
