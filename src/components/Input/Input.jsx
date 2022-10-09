import React from "react";

import "./Input.scss";

const Input = ({ ...rest }) => {
  return (
    <div className="custom-form-control">
      <input className="" {...rest} />
    </div>
  );
};

export default Input;
