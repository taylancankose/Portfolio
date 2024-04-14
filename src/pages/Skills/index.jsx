import React, { useContext } from "react";
import "./skills.css";
import { Skills as Data } from "./skills";
import SkillCard from "../../components/SkillCard";
import { AppContext } from "../../context";

function Skills() {
  const { frontend, rest } = Data;
  const { appState } = useContext(AppContext);
  const { colors } = appState.theme;
  const { translations } = appState?.locale?.language;
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
          {translations.skills}
        </h1>
        <div className="skills__card_container">
          <h2
            style={{
              color: colors.gray0,
            }}
          >
            {translations["front-end-skills"]}
          </h2>
          <div className="skills__card_inner_container">
            {frontend?.map((item, i) => (
              <SkillCard item={item} key={i} />
            ))}
          </div>
        </div>
        <div className="skills__card_container">
          <h2
            style={{
              color: colors.gray0,
            }}
          >
            {translations["other-skills"]}
          </h2>
          <div className="skills__card_inner_container">
            {rest?.map((item, i) => (
              <SkillCard item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
