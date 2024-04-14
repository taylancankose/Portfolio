import React, { useContext } from "react";
import "./switch.css";
import { AppContext } from "../../context";

function Switch() {
  const { appState, toggleTheme } = useContext(AppContext);
  const { colors } = appState.theme;
  const { translations } = appState?.locale?.language;

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
          {
            translations[
              `theme-${appState?.theme?.key === "dark" ? "light" : "dark"}`
            ]
          }
        </span>
      </label>
    </div>
  );
}

export default Switch;
