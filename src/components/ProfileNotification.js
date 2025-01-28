import React from "react";
import CustomLink from "./CustomLink";

const ProfileNotification = (props) => {
  return (
    <CustomLink to={props.to}>
      <div className="d-flex align-items-center dropdown-notification-details">
        <div className="flex-shrink-0 notification-profile-section">
          <img
            src={props.Profile}
            className="notification-profile-img"
            alt=""
          />
        </div>
        <div className="flex-grow-1 ms-2 notification-profile-text">
          <span>{props.profileVisterName}</span> has viewed your profile.
        </div>
      </div>
    </CustomLink>
  );
};

export default ProfileNotification;
