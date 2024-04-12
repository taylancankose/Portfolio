import React from "react";
import "./marker.css";

function Marker({ children, color, size }) {
  return (
    <mark
      className="marker"
      style={{
        background: color,
        paddingBottom: size,
      }}
    >
      {children}
    </mark>
  );
}

export default Marker;
