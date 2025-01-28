import { useContext } from "react";
import { CustomLink, CustomLottie, Navbar, Sidemenu } from "../components";
import { assets } from "../constant";
import { useGreeting } from "../hooks";
import NavigationContext from "../context/Navigation";

const HomePage = () => {
  const { isProfileUploaded } = useContext(NavigationContext);
  const greeting = useGreeting();
  const userProfile = {
    id: 1,
    name: "Rahul Koarde",
    dob: "28 Dec 2024",
    age: 28,
    education: "B.Sc New",
    place: "New",
    profileImg: assets.Profile,
  };

  const profileListData = [
    {
      id: 1,
      name: "John Doe",
      details: "Software Engineer",
      img: assets.Profile,
    },
    {
      id: 2,
      name: "Jane Smith",
      details: "Product Manager",
      img: assets.ProfileTwo,
    },
    { id: 3, name: "Alex Brown", details: "Designer", img: assets.ProfileTwo },
    { id: 4, name: "Alex Brown", details: "Designer", img: assets.Profile },
    {
      id: 5,
      name: "John Doe",
      details: "Software Engineer",
      img: assets.ProfileTwo,
    },
    {
      id: 6,
      name: "Jane Smith",
      details: "Product Manager",
      img: assets.Profile,
    },
    { id: 7, name: "Alex Brown", details: "Designer", img: assets.Profile },
    { id: 8, name: "Alex Brown", details: "Designer", img: assets.ProfileTwo },
  ];
  return (
    <>
      <Navbar userProfile={userProfile} />
      <div className="container main-wrapper">
        <div className="menu-section">
          <Sidemenu userProfile={userProfile} greeting={greeting} />
        </div>
        <div className="main-section">
          {isProfileUploaded ? (
            <div className="profile-listing-container">
              <div className={`profile-list-container`}>
                {profileListData.map((data) => {
                  return (
                    <div className="profile-list-item" key={data.id}>
                      <div className="profile-image-wrapper">
                        <CustomLink to={"/about"}>
                          <img
                            src={data.img}
                            alt=""
                            className="profile-image"
                          />
                        </CustomLink>
                      </div>
                      <div className="profile-details">
                        <div className="profile-details-wrapper">
                          <CustomLink
                            to={"/about"}
                            className={"profile-details-link"}
                          >
                            <div className="profile-personal-details">
                              <div className="profile-dob">21 Dec 2024</div>
                              <div className="profile-name">
                                Vinayak Abhang, 34Yr
                              </div>
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
                                  <div className="flex-grow-1 income">
                                    Rs. 3 - 4 Lakh p.a
                                  </div>
                                </div>
                              </div>
                              <div className="profile-occupation-wrapper">
                                <div className="d-flex align-items-center gap-1">
                                  <div className="flex-shrink-0 icon-box">
                                    <img
                                      src={assets.EducationIcon}
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="flex-grow-1 education-degree">
                                    M.Sc, B.Sc
                                  </div>
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
                              <li>
                                <img src={assets.MatchingIcon} alt="icon" />
                              </li>
                              <li>
                                <img src={assets.StarIcon} alt="icon" />
                              </li>
                              <li
                                ddata-bs-toggle="tooltip"
                                data-bs-title="Some tooltip text!"
                              >
                                <img src={assets.ViewProfileIcon} alt="icon" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="daily-limit-alert text-center">
                <div className="user-name">Hi Rahul Koarde,</div>
                <div className="title">
                  You’ve reached your daily limit to view matches
                </div>
                <CustomLottie
                  lottieFile={assets.Nomore}
                  loop={true}
                  className="daily-limit-alert-img"
                />
                <div className="subtitle">
                  Come back tomorrow for more or upgrade to a paid membership to
                  continue viewing
                </div>
                <button
                  type="submit"
                  className="btn btn-custom"
                  // onClick={handleLogin}
                >
                  upgrade
                </button>
              </div>
            </div>
          ) : (
            <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column gap-3 update-profile-wrapper">
              <div className="title">Find Your Perfect Match!</div>
              <CustomLottie
                lottieFile={assets.UploadProfile}
                loop={true}
                className="upload-profile-img"
              />
              <div className="subtitle">
                Upload your profile to discover suitable matches tailored just
                for you.
              </div>

              <button type="submit" className="btn btn-custom">
                Upload your profile
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
