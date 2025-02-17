import React from "react";
import classNames from "classnames";

const CustomFilterPanel = ({ children, className, ...rest }) => {
  const classFunction = classNames("custom-filter-select", className);
  return <div className={classFunction}>{children}</div>;
};

export default CustomFilterPanel;
