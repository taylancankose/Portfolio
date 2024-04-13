import React, { useContext } from "react";
import "./skills.css";
import { Skills as Data } from "./skills";
import SkillCard from "../../components/SkillCard";
import { ThemeContext } from "../../context/theme";

function Skills() {
  const { frontend, rest } = Data;
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <div
      style={{
        backgroundColor: colors.bgColor,
      }}
    >
      <div className="skills__inner_container">
        <h1
          style={{
            color: colors.gray0,
          }}
        >
          Skills
        </h1>
        <div className="skills__card_container">
          <h2
            style={{
              color: colors.gray0,
            }}
          >
            Frontend Skills:
          </h2>
          <div className="skills__card_inner_container">
            {frontend?.map((item) => (
              <SkillCard item={item} />
            ))}
          </div>
        </div>
        <div className="skills__card_container">
          <h2
            style={{
              color: colors.gray0,
            }}
          >
            Backend & Business Skills:
          </h2>
          <div className="skills__card_inner_container">
            {rest?.map((item) => (
              <SkillCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
