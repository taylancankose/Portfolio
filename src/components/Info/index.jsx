import React, { useContext } from "react";
import "./info.css";
import { ThemeContext } from "../../context/theme";

function Info({ topic, detail }) {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
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
