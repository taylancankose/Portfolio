import React, { useContext } from "react";
import "./navbar.css";
import Switch from "../Switch";
import { AppContext } from "../../context";

function Navbar() {
  const { appState, toggleLng } = useContext(AppContext);
  const { colors } = appState.theme;
  const { translations } = appState?.locale?.language;
  return (
    <div
      className="navbar__container"
      style={{
        backgroundColor: colors.gray90,
      }}
    >
      <div className="navbar__inner_container">
        <div className="navbar__switch_container">
          <Switch />
        </div>
        <div
          className="line"
          style={{
            borderLeft: `2px solid ${colors.gray70}`,
          }}
        />
        <a
          onClick={toggleLng}
          className="language"
          style={{
            color: colors.gray0,
          }}
        >
          <span
            style={{
              color: colors.red,
            }}
          >
            {translations.lng}
          </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
