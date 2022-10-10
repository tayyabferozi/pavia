import React from "react";

import "./Switch.scss";

const Switch = () => {
  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      Show Estates
    </div>
  );
};

export default Switch;
