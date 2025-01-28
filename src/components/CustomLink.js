import classNames from "classnames";
import React from "react";
import { useNavigation } from "../hooks";

const CustomLink = ({ children, to, className, activeClass }) => {
  const { navigate, currentPath } = useNavigation();
  const classFunction = classNames(
    "",
    className,
    currentPath === to && activeClass
  );
  const handelClick = (event) => {
    // console.log(event);
    if (event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handelClick} className={classFunction}>
      {children}
    </a>
  );
};

export default CustomLink;
