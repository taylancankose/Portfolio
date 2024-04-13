import React, { useContext } from "react";
import "./switch.css";
import { ThemeContext } from "../../context/theme";

function Switch() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { colors, key } = theme;
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={toggleTheme}
      />
      <label htmlFor="check">
        <span
          className="theme_span"
          style={{
            color: colors.gray0,
          }}
        >
          {key === "dark" ? "LIGHT" : "DARK"} MODE
        </span>
      </label>
    </div>
  );
}

export default Switch;
