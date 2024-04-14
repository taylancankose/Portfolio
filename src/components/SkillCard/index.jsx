import React, { useContext } from "react";
import "./card.css";
import { AppContext } from "../../context";

function SkillCard({ item }) {
  const { appState } = useContext(AppContext);
  const { colors } = appState.theme;
  return (
    <div key={item.id} className="skill_card__container">
      <img src={item.imgURL} height={120} width={120} className="card__img" />
      <h3
        className="card__title"
        style={{
          color: colors.gray70,
        }}
      >
        {item.name.toUpperCase()}
      </h3>
      <h4
        className="card__level"
        style={{
          color: colors.gray0,
        }}
      >
        {item?.level}
      </h4>
    </div>
  );
}

export default SkillCard;
