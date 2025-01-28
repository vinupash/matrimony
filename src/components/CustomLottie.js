import React from "react";
import classNames from "classnames";
import Lottie from "lottie-react";

const CustomLottie = (props) => {
  const classFunction = classNames(props.className);
  return (
    <div className={classFunction}>
      <Lottie animationData={props.lottieFile} loop={props.loop} />
    </div>
  );
};

export default CustomLottie;
