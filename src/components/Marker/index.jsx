import React, { useContext } from "react";
import "./marker.css";
import { ThemeContext } from "../../context/theme";

function Marker({ children, color, size }) {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <mark
      className="marker"
      style={{
        background: color,
        paddingBottom: size,
        color: colors.gray0,
      }}
    >
      {children}
    </mark>
  );
}

export default Marker;
