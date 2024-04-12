import React from "react";
import "./pill.css";

function Pill({ item }) {
  return (
    <div className="pill__container">
      <p>{item.toLowerCase()}</p>
    </div>
  );
}

export default Pill;
