import React from "react";
import CustomLink from "./CustomLink";

const SimilarProfile = (props) => {
  return (
    <CustomLink
      to={props.to}
      className="d-flex align-items-center similar-profiles-section"
    >
      <div className="flex-shrink-0 similar-profile-section">
        <img src={props.profile} className="similar-profile-img" alt="" />
      </div>
      <div className="flex-grow-1 ms-2 similar-profile-text">
        <span className="profile-name">{props.name}</span>
        <span className="profile-age">
          {props.age}Yr, {props.height}
        </span>
        <span className="profile-location">{props.location}</span>
      </div>
    </CustomLink>
  );
};

export default SimilarProfile;
