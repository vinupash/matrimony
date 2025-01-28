import React from "react";
import { assets } from "../constant";
import CustomLink from "./CustomLink";
import UserProfile from "./UserProfile";

const Sidemenu = (props) => {
  return (
    <div className="sidemenu-content">
      <div className="user-details-wrapper">
        <div className="avatar">
          <UserProfile
            profileImage={assets.Profile}
            className="user-profile-img"
          />
          {/* <img src={assets.Profile} alt="" /> */}
        </div>
        <div className="greeting">{props.greeting}</div>
        <div className="user-name">Hi, {props.userProfile.name}</div>
        <div className="user-id">M123456</div>
        <div className="membership-detsils">
          Membership Plan: <span>{"Free"}</span>
        </div>
        <div className="profile-view">
          <span>10</span> <CustomLink to={"/"}>profile viewers</CustomLink>
        </div>
        <div className="paid-member-title">Become a paid member now</div>

        <button
          type="submit"
          className="btn btn-custom"
          // onClick={handleLogin}
        >
          upgrade
        </button>
      </div>
      <div className="menu-details-wrapper">
        <ul className="dropdown-menu-list">
          <li className="list-wrapper">
            <div className="menu-icon">
              <img src={assets.EditProfile} alt="House Icon" />
            </div>
            <CustomLink to={"/"}>Edit Profile</CustomLink>
          </li>
          <li className="list-wrapper">
            <div className="menu-icon">
              <img src={assets.EditPreferences} alt="Users Icon" />
            </div>
            <CustomLink to={"/"}>Edit Preferences</CustomLink>
          </li>
          <li className="list-wrapper">
            <div className="menu-icon">
              <img src={assets.SettingsIcon} alt="Users Icon" />
            </div>
            <CustomLink to={"/"}>Settings</CustomLink>
          </li>
        </ul>
      </div>
      <div className="menu-footer-wrapper">
        <ul className="dropdown-menu-list">
          <li className="list-wrapper">
            <div className="menu-icon">
              <img src={assets.LogoutIcon} alt="House Icon" />
            </div>
            <CustomLink to={"/"}>Logout</CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
