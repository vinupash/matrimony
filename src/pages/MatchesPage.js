import { useContext, useState } from "react";
import {
  CustomLottie,
  // MatchingLimit,
  Navbar,
  ProfileListingItem,
  QuickMatchPopup,
  Sidemenu,
} from "../components";
import { assets } from "../constant";
import { useQuickMatchPopup } from "../hooks";
import NavigationContext from "../context/Navigation";
// import { Nav, Tab } from "react-bootstrap";
// import QuickMatchPopup from "../components/QuickMatchPopup";

const MatchesPage = (props) => {
  // console.log(props);

  const { isProfileUploaded } = useContext(NavigationContext);
  const { activeProfile, showProfile, closeProfile } = useQuickMatchPopup();
  const [activeTab, setActiveTab] = useState("tab1");

  const userProfile = {
    id: 1,
    name: "Rahul Koarde",
    dob: "28 Dec 2024",
    age: 28,
    education: "B.Sc New",
    place: "New",
    profileImg: assets.ProfileThree,
    paid: false,
  };

  const profileListData = [
    {
      id: 1,
      name: "John Doe",
      details: "Software Engineer",
      img: null,
      gender: 0,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      details: "Product Manager",
      img: assets.Profile,
      gender: 0,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
    {
      id: 3,
      name: "Alex Brown",
      details: "Designer",
      img: assets.ProfileFour,
      gender: 0,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
    {
      id: 4,
      name: "Alex Brown",
      details: "Designer",
      img: assets.Profile,
      gender: 0,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
    {
      id: 5,
      name: "John Doe",
      details: "Software Engineer",
      img: assets.ProfileThree,
      gender: 0,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
    {
      id: 6,
      name: "Jane Smith",
      details: "Product Manager",
      img: assets.Profile,
      gender: 0,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
    {
      id: 7,
      name: "Alex Brown",
      details: "Designer",
      img: assets.Profile,
      gender: 0,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
    {
      id: 8,
      name: "Alex Brown",
      details: "Designer",
      img: assets.ProfileTwo,
      gender: 1,
      profile_img_show: true,
      profile_img_show_only_paid: false,
    },
  ];

  const maskedProfiles = profileListData.map((profile) => {
    const [firstName, lastName] = profile.name.split(" ");
    return {
      ...profile,

      name: `${firstName} ${
        lastName
          ? userProfile.paid
            ? lastName
            : "#".repeat(lastName.length)
          : ""
      }`,
    };
  });

  const maskLastName = (profile) => {
    const [firstName, lastName] = profile.name.split(" ");
    return `${firstName} ${
      lastName
        ? userProfile.paid
          ? lastName
          : "#".repeat(lastName.length)
        : ""
    }`;
  };

  return (
    <>
      <Navbar userProfile={props.data} />
      <div className="main-wrapper right-panel">
        <div className="container">
          <div className="position-relative content-wrapper">
            <div className="left-section">
              <div className="sidemenu-content-wrapper">
                <Sidemenu userProfile={props.data} greeting={props.greeting} />
              </div>
            </div>
            <div className="main-section">
              {isProfileUploaded ? (
                <>
                  <div className="position-sticky top-0 start-0 section-top-tab-bar">
                    <div className="tab-wrapper">
                      <div
                        className={`tab-nav ${
                          activeTab === "tab1" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("tab1")}
                      >
                        All Matches
                      </div>
                      <div
                        className={`tab-nav ${
                          activeTab === "tab2" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("tab2")}
                      >
                        Newly Joined
                      </div>
                      <div
                        className={`tab-nav ${
                          activeTab === "tab3" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("tab3")}
                      >
                        Shortlisted You
                      </div>
                      <div
                        className={`tab-nav ${
                          activeTab === "tab4" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("tab4")}
                      >
                        Viewed By You
                      </div>
                      <div
                        className={`tab-nav ${
                          activeTab === "tab5" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("tab5")}
                      >
                        Mutual Matches
                      </div>
                      <div
                        className={`tab-nav ${
                          activeTab === "tab6" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("tab6")}
                      >
                        Horoscope Matches
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    {activeTab === "tab1" && (
                      <div>
                        {isProfileUploaded ? (
                          <div className="profile-listing-container">
                            <div className={`profile-list-container`}>
                              {maskedProfiles.map((data) => {
                                return (
                                  <ProfileListingItem
                                    key={data.id}
                                    id={data.id}
                                    img={
                                      data.img &&
                                      (userProfile.paid ||
                                        data.profile_img_show)
                                        ? data.img
                                        : data.gender === 0
                                        ? assets.BlankManIcon
                                        : assets.BlankWomanIcon
                                    }
                                    name={data.name}
                                    openPopup={() => showProfile(data.id)}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}
                    {activeTab === "tab2" && <div>This is Tab 2 content.</div>}
                    {activeTab === "tab3" && <div>This is Tab 3 content.</div>}
                    {activeTab === "tab4" && <div>This is Tab 4 content.</div>}
                    {activeTab === "tab5" && <div>This is Tab 5 content.</div>}
                    {activeTab === "tab6" && <div>This is Tab 6 content.</div>}
                  </div>
                </>
              ) : (
                <>
                  <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column gap-3 update-profile-wrapper">
                    <div className="title">Find Your Perfect Match!</div>
                    <CustomLottie
                      lottieFile={assets.UploadProfile}
                      loop={true}
                      className="upload-profile-img"
                    />
                    <div className="subtitle">
                      Upload your profile to discover suitable matches tailored
                      just for you.
                    </div>

                    <button type="submit" className="btn btn-custom">
                      Upload your profile
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="right-section">
              <div className="right-filter-wrapper">
                <div className="filter-section">
                  <div className="right-section-content-title">
                    Filter Profiles
                  </div>
                  <div className="filter-section-wrapper">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" class="btn btn-custom">
                      upgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {profileListData.map((listProfile) => {
        return (
          <QuickMatchPopup
            key={listProfile.id}
            activeProfile={activeProfile === listProfile.id}
            userProfileName={userProfile.name}
            userProfileImg={userProfile.profileImg}
            //
            listProfileName={maskLastName(listProfile)}
            listProfileImg={
              listProfile.img &&
              (userProfile.paid || listProfile.profile_img_show)
                ? listProfile.img
                : listProfile.gender === 0
                ? assets.BlankManIcon
                : assets.BlankWomanIcon
            }
            onClick={closeProfile}
            onHide={closeProfile}
          />
        );
      })}
    </>
  );
};

export default MatchesPage;
