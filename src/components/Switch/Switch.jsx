import React from "react";

import "./Switch.scss";

const Switch = () => {
  return (
    <div className="switch-container">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      Show Estates
    </div>
  );
};

export default Switch;
