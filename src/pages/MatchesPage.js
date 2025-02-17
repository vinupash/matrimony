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
import { Modal } from "react-bootstrap";
import CustomFilterSelect from "../components/CustomFielterSelect";
// import QuickMatchPopup from "../components/QuickMatchPopup";

const MatchesPage = (props) => {
  // console.log(props);

  const { isProfileUploaded } = useContext(NavigationContext);
  const { activeProfile, showProfile, closeProfile } = useQuickMatchPopup();
  const [activeTab, setActiveTab] = useState("tab1");

  // age modal
  // const [showAge, setShowAge] = useState(false);
  // const handleClose = () => setShowAge(false);
  // const handleShowAge = () => setShowAge(true);
  const [modalShowAge, setModalShowAge] = useState(false);
  const [modalShowHeight, setModalShowHeight] = useState(false);
  const [modalShowProfileCreatedBy, setModalShowProfileCreatedBy] =
    useState(false);
  const [modalShowMaritalStatus, setModalShowMaritalStatus] = useState(false);
  const [modalShowSelectMotherTongue, setModalShowSelectMotherTongue] =
    useState(false);
  const [modalShowSelectPhysicalStatus, setModalShowSelectPhysicalStatus] =
    useState(false);
  const [modalShowSelectReligion, setModalShowSelectReligion] = useState(false);
  const [modalShowSelectCast, setModalShowSelectCast] = useState(false);
  const [modalShowSelectDosham, setModalShowSelectDosham] = useState(false);
  const [modalShowSelectOccupation, setModalShowSelectOccupation] =
    useState(false);
  const [modalShowSelectAnnualIncome, setModalShowSelectAnnualIncome] =
    useState(false);
  const [modalShowSelectEmploymentType, setModalShowSelectEmploymentType] =
    useState(false);
  const [modalShowSelectEducation, setModalShowSelectEducation] =
    useState(false);
  const [modalShowSelectEatingHabits, setModalShowSelectEatingHabits] =
    useState(false);
  const [modalShowSelectFamilyType, setModalShowSelectFamilyType] =
    useState(false);

  // const [show, setShow] = useState(false);

  const userProfile = {
    id: 1,
    name: "Rahul Koarde",
    dob: "28 Dec 2024",
    age: 28,
    education: "B.Sc New",
    place: "New",
    profileImg: assets.ProfileFour,
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
      gender: 0,
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

  const [selectionAge, setAgeSelection] = useState(null);
  const optionsAge = [
    { label: "4", value: "4" },
    { label: "4.1", value: "4.1" },
    { label: "4.2", value: "4.2" },
    { label: "4.3", value: "4.3" },
    { label: "4.4", value: "4.4" },
    { label: "4.6", value: "4.6" },
    { label: "4.7", value: "4.7" },
    { label: "4.8", value: "4.8" },
  ];

  const handleAgeSelect = (option) => {
    setAgeSelection(option);
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
                    <div className="filter-details-wrapper">
                      {/* <div className="title">Basic Details</div> */}
                      <div className="filter-wrapper">
                        <div className="filter-title">Age</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowAge(true)}
                        >
                          <div>26 Yrs - 34 Yrs</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Height</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowHeight(true)}
                        >
                          <div>4'6" - 5'4"</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Profile Created By</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowProfileCreatedBy(true)}
                        >
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Marital Status</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowMaritalStatus(true)}
                        >
                          <div>Never Married</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Mother Tongue</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectMotherTongue(true)}
                        >
                          <div>Marathi</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Physical Status</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectPhysicalStatus(true)}
                        >
                          <div>Normal</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Religion</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectReligion(true)}
                        >
                          <div>Hindu</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Caste</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectCast(true)}
                        >
                          <div>Any Caste</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      {/* <div className="filter-wrapper">
                        <div className="filter-title">Star</div>
                        <div className="filter-result">
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div> */}
                      <div className="filter-wrapper">
                        <div className="filter-title">Mangal Dosha</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectDosham(true)}
                        >
                          <div>Doesn't Matter</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Occupation</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectOccupation(true)}
                        >
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Annual Income</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectAnnualIncome(true)}
                        >
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Employment Type</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectEmploymentType(true)}
                        >
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Education</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectEducation(true)}
                        >
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      <div className="filter-wrapper">
                        <div className="filter-title">Eating Habits</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectEatingHabits(true)}
                        >
                          <div>Vegetarian, Eggetarian,</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      {/* <div className="filter-wrapper">
                        <div className="filter-title">Family Status</div>
                        <div className="filter-result">
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div> */}
                      <div className="filter-wrapper">
                        <div className="filter-title">Family Type</div>
                        <div
                          className="filter-result"
                          onClick={() => setModalShowSelectFamilyType(true)}
                        >
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div>
                      {/* <div className="filter-wrapper">
                        <div className="filter-title">Family Value</div>
                        <div className="filter-result">
                          <div>Any</div>
                          <img src={assets.PencilIcon} alt="edit icon" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-2">
                    <button type="submit" class="btn btn-custom">
                      Reset
                    </button>

                    <button type="submit" class="btn btn-custom">
                      Apply
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

      <Modal
        show={modalShowAge}
        onHide={() => setModalShowAge(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div className="close-icon" onClick={() => setModalShowAge(false)}>
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Age</div>
          <div className="filter-select-wrapper">
            <div className="filter-select-block">
              <CustomFilterSelect
                options={optionsAge}
                value={selectionAge}
                onChange={handleAgeSelect}
              />
            </div>
            <div>to</div>
            <div className="filter-select-block">
              <CustomFilterSelect
                options={optionsAge}
                value={selectionAge}
                onChange={handleAgeSelect}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowHeight}
        onHide={() => setModalShowHeight(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div className="close-icon" onClick={() => setModalShowHeight(false)}>
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Height</div>
          <div className="filter-select-wrapper">
            <div className="filter-select-block">
              <CustomFilterSelect
                options={optionsAge}
                value={selectionAge}
                onChange={handleAgeSelect}
              />
            </div>
            <div>to</div>
            <div className="filter-select-block">
              <CustomFilterSelect
                options={optionsAge}
                value={selectionAge}
                onChange={handleAgeSelect}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowProfileCreatedBy}
        onHide={() => setModalShowProfileCreatedBy(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowProfileCreatedBy(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Profile Created By</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowMaritalStatus}
        onHide={() => setModalShowMaritalStatus(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowMaritalStatus(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Marital Status</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectMotherTongue}
        onHide={() => setModalShowSelectMotherTongue(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectMotherTongue(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Mother Tongue</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectPhysicalStatus}
        onHide={() => setModalShowSelectPhysicalStatus(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectPhysicalStatus(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Physical Status</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectReligion}
        onHide={() => setModalShowSelectReligion(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectReligion(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Religion</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectCast}
        onHide={() => setModalShowSelectCast(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectCast(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Cast</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectDosham}
        onHide={() => setModalShowSelectDosham(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectDosham(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Dosham</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectOccupation}
        onHide={() => setModalShowSelectOccupation(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectOccupation(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Occupation</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectAnnualIncome}
        onHide={() => setModalShowSelectAnnualIncome(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectAnnualIncome(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Annual Income</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectEmploymentType}
        onHide={() => setModalShowSelectEmploymentType(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectEmploymentType(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Employment Type</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectEducation}
        onHide={() => setModalShowSelectEducation(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectEducation(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Employment</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectEducation}
        onHide={() => setModalShowSelectEducation(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectEducation(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Education</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectEatingHabits}
        onHide={() => setModalShowSelectEatingHabits(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectEatingHabits(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Eating Habits</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowSelectFamilyType}
        onHide={() => setModalShowSelectFamilyType(false)}
        className="flter-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowSelectFamilyType(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">Select Family Type</div>
          <div className="filter-select-wrapper"></div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div class="d-flex justify-content-center gap-2">
              <button type="submit" class="btn btn-custom">
                Reset
              </button>
              <button type="submit" class="btn btn-custom">
                Apply
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MatchesPage;
