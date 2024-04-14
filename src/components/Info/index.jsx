import React, { useContext } from "react";
import "./info.css";
import { AppContext } from "../../context";

function Info({ topic, detail }) {
  const { appState } = useContext(AppContext);
  const { colors } = appState.theme;
  return (
    <div
      className="info__container"
      style={{
        color: colors.gray0,
      }}
    >
      <b>{topic}</b>
      <span>{detail}</span>
    </div>
  );
}

export default Info;
