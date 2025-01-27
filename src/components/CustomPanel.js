import React from "react";
import classNames from "classnames";

const CustomPanel = ({ children, className, ...rest }) => {
  const classFunction = classNames("custom-select", className);
  return <div className={classFunction}>{children}</div>;
};

export default CustomPanel;
