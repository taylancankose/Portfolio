import React from "react";
import "./skills.css";
import { Skills as Data } from "./skills";
import SkillCard from "../../components/SkillCard";

function Skills() {
  const { frontend, rest } = Data;
  return (
    <div className="skills__inner_container">
      <h1>Skills</h1>
      <div className="skills__card_container">
        <h2>Frontend Skills:</h2>
        <div className="skills__card_inner_container">
          {frontend?.map((item) => (
            <SkillCard item={item} />
          ))}
        </div>
      </div>
      <div className="skills__card_container">
        <h2>Backend & Business Skills:</h2>
        <div className="skills__card_inner_container">
          {rest?.map((item) => (
            <SkillCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
