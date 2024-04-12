import React from "react";
import "./card.css";

function SkillCard({ item }) {
  return (
    <div key={item.id} className="skill_card__container">
      <img src={item.imgURL} height={120} width={120} className="card__img" />
      <h3 className="card__title">{item.name.toUpperCase()}</h3>
      <h4 className="card__level">{item?.level}</h4>
    </div>
  );
}

export default SkillCard;
