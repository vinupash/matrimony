import React from "react";
import CustomLink from "./CustomLink";
import { assets } from "../constant";
// import NavigationContext from "../context/Navigation";

const ProfileListingItem = (props) => {
  // const { navigate } = useContext(NavigationContext);
  // console.log(props);

  return (
    <div className="profile-list-item" key={props.id}>
      <div className="profile-image-wrapper">
        <CustomLink to={`/about?${props.id}`}>
          <img src={props.img} alt="" className="profile-image" />
        </CustomLink>
      </div>
      <div className="profile-details">
        <div className="profile-details-wrapper">
          <CustomLink to={"/about"} className={"profile-details-link"}>
            <div className="profile-personal-details">
              <div className="profile-dob">21 Dec 2024</div>
              <div className="profile-name">{props.name}, 34Yr</div>
              <ul className="profile-search-card">
                <li>5 ft 6 in</li>
                <li>Ahmednagar</li>
                <li>Sutar</li>
              </ul>
              <div className="profile-occupation-wrapper">
                <div className="d-flex align-items-center gap-1">
                  <div className="flex-shrink-0 icon-box">
                    <img src={assets.BagIcon} alt="icon" />
                  </div>
                  <div className="flex-grow-1 occupation">
                    Govt. - Non - IT Engineer
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <div className="flex-shrink-0 icon-box">
                    <img src={assets.SalaryIcon} alt="icon" />
                  </div>
                  <div className="flex-grow-1 income">Rs. 3 - 4 Lakh p.a</div>
                </div>
              </div>
              <div className="profile-occupation-wrapper">
                <div className="d-flex align-items-center gap-1">
                  <div className="flex-shrink-0 icon-box">
                    <img src={assets.EducationIcon} alt="icon" />
                  </div>
                  <div className="flex-grow-1 education-degree">M.Sc, B.Sc</div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <div className="flex-shrink-0 icon-box">
                    <img src={assets.WeddingIcon} alt="icon" />
                  </div>
                  <div className="flex-grow-1 marital-status">
                    Never Married
                  </div>
                </div>
              </div>
            </div>
          </CustomLink>
          <div className="profile-nav-wrapper">
            <ul>
              <li onClick={props.openPopup}>
                <img src={assets.MatchingIcon} alt="icon" />
              </li>
              <li>
                <img src={assets.StarIcon} alt="icon" />
              </li>
              <li>
                <img src={assets.ViewProfileIcon} alt="icon" />
              </li>
              <li>
                <img src={assets.DeleteIcon} alt="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileListingItem;
