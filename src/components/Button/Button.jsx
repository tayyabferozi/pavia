import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = ({
  to,
  primary,
  dark,
  lightGrey,
  className,
  children,
  ...rest
}) => {
  let Comp;

  if (to) {
    Comp = function ({ children, ...rest }) {
      return <Link {...rest}>{children}</Link>;
    };
  } else {
    Comp = function ({ children, ...rest }) {
      return <button {...rest}>{children}</button>;
    };
  }
  return (
    <Comp
      className={clsx(
        "btn",
        className,
        primary && "btn-primary",
        dark && "btn-dark",
        lightGrey && "btn-light-grey"
      )}
      {...rest}
    >
      <div className="btn-text">{children}</div>
    </Comp>
  );
};

export default Button;
