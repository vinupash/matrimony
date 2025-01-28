// import { useState, useEffect } from "react";
import { assets } from "../constant";
import CustomLink from "./CustomLink";
import { useDropdownmenu, useGreeting } from "../hooks";
import UserProfile from "./UserProfile";
import ProfileNotification from "./ProfileNotification";

const Navbar = (props) => {
  const { isDropdownVisible, toggleDropdown } = useDropdownmenu();
  const greeting = useGreeting();

  // console.log(props);
  const profileNotificationData = [
    { id: 1, name: "Pradnya Sutar", profileImg: assets.Profile },
    { id: 2, name: "Pradnya Sutar", profileImg: assets.Profile },
    { id: 3, name: "Pradnya Sutar", profileImg: assets.Profile },
  ];

  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo-section">
            <CustomLink>
              <div className="logo"></div>
            </CustomLink>
          </div>
          <div className="menu-section">
            <ul className="menu-list">
              <li className="list-wrapper">
                <div className="menu-icon">
                  <img src={assets.HouseIcon} alt="House Icon" />
                </div>
                <CustomLink to={"/"}>Home</CustomLink>
              </li>
              <li className="list-wrapper">
                <div className="menu-icon">
                  <img src={assets.UsersIcon} alt="Users Icon" />
                </div>
                <CustomLink to={"/"}>Matches</CustomLink>
              </li>
              <li className="list-wrapper dropdown-notification">
                <div className="menu-icon">
                  <img src={assets.BellIcon} alt="Bell Icon" />
                </div>
                <div className="notification-text">Notification</div>
                <div className="notification-count">1</div>

                <div className="dropdown-notification-content">
                  <div className="dropdown-notification-content-wrapper">
                    {profileNotificationData.map((profileVisiter) => {
                      return (
                        <ProfileNotification
                          key={profileVisiter.id}
                          Profile={profileVisiter.profileImg}
                          profileVisterName={profileVisiter.name}
                        />
                      );
                    })}
                  </div>
                </div>
              </li>
            </ul>
            <div className="dropdown-menu-section">
              <div
                className="d-flex gap-1 align-items-center"
                onClick={toggleDropdown}
              >
                <div className="avatar">
                  <UserProfile
                    profileImage={assets.Profile}
                    className="user-profile-img"
                  />
                </div>
                <img
                  src={assets.ChevronDownIcon}
                  alt=""
                  className="chevron-down"
                />
              </div>

              <div
                className={`dropdown-content ${
                  isDropdownVisible ? "dropdown-content-block" : ""
                }`}
              >
                <div className="user-details-wrapper">
                  <div className="greeting">{greeting}</div>
                  <div className="user-name">Hi, {props.userProfile.name}</div>
                  <div className="user-id">M123456</div>
                  <div className="membership-detsils">
                    Membership Plan: <span>{"Free"}</span>
                  </div>
                  <div className="profile-view">
                    <span>10</span>{" "}
                    <CustomLink to={"/"}>profile viewers</CustomLink>
                  </div>
                  <div className="paid-member-title">
                    Become a paid member now
                  </div>
                  {/* <div className="text-center"> */}
                  <button
                    type="submit"
                    className="btn btn-custom"
                    // onClick={handleLogin}
                  >
                    upgrade
                  </button>
                  {/* </div> */}
                  {/* <div ></div>
                  <div></div>
                  <div></div> */}
                </div>
                <div className="mobile-menu">
                  <ul className="dropdown-menu-list">
                    <li className="list-wrapper">
                      <div className="menu-icon">
                        <img src={assets.HouseBlackIcon} alt="House Icon" />
                      </div>
                      <CustomLink to={"/"}>Home</CustomLink>
                    </li>
                    <li className="list-wrapper">
                      <div className="menu-icon">
                        <img src={assets.UsersBlackIcon} alt="Users Icon" />
                      </div>
                      <CustomLink to={"/"}>Matches</CustomLink>
                    </li>
                    <li className="list-wrapper">
                      <div className="menu-icon">
                        <img src={assets.BellBlackIcon} alt="Bell Icon" />
                      </div>
                      <CustomLink to={"/"}>Notification</CustomLink>
                      <div className="notification-count">20</div>
                    </li>
                  </ul>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
