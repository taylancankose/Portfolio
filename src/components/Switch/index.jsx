import React, { useContext } from "react";
import "./switch.css";
import { ThemeContext } from "../../context/theme";
import { LocaleContext } from "../../context/locale";

function Switch() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { colors, key } = theme;
  const { lng } = useContext(LocaleContext);
  const { translations } = lng.language;
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
          {translations[`theme-${key}`]}
        </span>
      </label>
    </div>
  );
}

export default Switch;
