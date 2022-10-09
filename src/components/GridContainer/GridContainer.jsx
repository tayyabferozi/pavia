import React from "react";
import clsx from "clsx";

const GridContainer = ({ className, rowClassName, children }) => {
  return (
    <div className={clsx(className, "container-fluid px-0")}>
      <div className={clsx(rowClassName, "row")}>{children}</div>
    </div>
  );
};

export default GridContainer;
