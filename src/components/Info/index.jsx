import React from "react";
import "./info.css";

function Info({ topic, detail }) {
  return (
    <div className="info__container">
      <b>{topic}</b>
      <span>{detail}</span>
    </div>
  );
}

export default Info;
