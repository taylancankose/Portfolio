import React, { useContext } from "react";
import "./marker.css";
import { AppContext } from "../../context";

function Marker({ children, color, size }) {
  const { appState } = useContext(AppContext);
  const { colors } = appState.theme;
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
