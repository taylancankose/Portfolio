import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import "./navbar.css";
import Switch from "../Switch";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
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
          href="#"
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
            İNGİLİZCE
          </span>
          ’YE GEÇ
        </a>
      </div>
    </div>
  );
}

export default Navbar;
