import { useState } from "react";
import { Navbar, Sidemenu, SimilarProfile } from "../components";
import { assets } from "../constant";
import { Modal } from "react-bootstrap";

const ProfileDetailsPage = (props) => {
  console.log("props.data", props.similarProfiles);

  const [modalShowProfileGallery, setModalShowProfileGallery] = useState(false);
  const [modalShowAlert, setModalShowAlert] = useState(false);

  // const SimilarProfiles = [
  //   {
  //     id: 11,
  //     name: "Priyanka Vijay Itadkar",
  //     age: "29",
  //     height: "5'2",
  //     location: "Thane, Maharashtra",
  //     profileImg: assets.Profile,
  //   },
  //   {
  //     id: 12,
  //     name: "Priyanka Vijay Itadkar",
  //     age: "29",
  //     height: "5'2",
  //     location: "Thane, Maharashtra",
  //     profileImg: assets.ProfileTwo,
  //   },
  //   {
  //     id: 13,
  //     name: "Priyanka Vijay Itadkar",
  //     age: "29",
  //     height: "5'2",
  //     location: "Thane, Maharashtra",
  //     profileImg: assets.ProfileThree,
  //   },
  //   {
  //     id: 14,
  //     name: "Priyanka Vijay Itadkar",
  //     age: "29",
  //     height: "5'2",
  //     location: "Thane, Maharashtra",
  //     profileImg: assets.ProfileTwo,
  //   },
  //   {
  //     id: 15,
  //     name: "Priyanka Vijay Itadkar",
  //     age: "29",
  //     height: "5'2",
  //     location: "Thane, Maharashtra",
  //     profileImg: assets.Profile,
  //   },
  // ];

  return (
    <>
      <Navbar userProfile={props.dataUser} />
      <div className="main-wrapper right-panel">
        <div className="container">
          <div className="position-relative content-wrapper">
            <div className="left-section">
              <div className="sidemenu-content-wrapper">
                <Sidemenu
                  userProfile={props.dataUser}
                  greeting={props.greeting}
                />
              </div>
            </div>
            <div className="main-section">
              <div
                className="profile-view-details-wrapper"
                onClick={() => {
                  if (!props.dataUser.paid) {
                    setModalShowAlert(true);
                  } else {
                    setModalShowProfileGallery(true);
                  }
                }}
              >
                <div
                  className="profile-gallery-wrapper"
                  style={{
                    backgroundImage: `url(${props.data.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={
                      props.data.img
                        ? props.data.img
                        : props.datagender === 0
                        ? assets.BlankWomanIcon
                        : assets.BlankManIcon
                    }
                    alt=""
                    className="profile-image"
                  />
                  <div className="profile-data-wrapper">
                    <div className="profile-dob">{"21 Dec 2024"}</div>
                    <div className="profile-name">{props.data.name}, 34Yr</div>
                    <div className="profile-id">{props.data.id}</div>
                  </div>
                </div>

                <div>about data</div>
                <div>Education data</div>
                <div>Career data</div>
                <div>Family data</div>
                <div>Lifestyle and Interests data</div>
                <div>Who is she looking for... data</div>
                <div>Career data</div>
              </div>
            </div>
            <div className="right-section">
              <div className="right-section-wrapper">
                <div className="right-section">
                  <div className="right-section-content">
                    <div className="right-content-wrapper">
                      <div className="right-section-content-title">
                        Similar Profiles
                      </div>
                      {props.similarProfiles.map((data) => {
                        return (
                          <SimilarProfile
                            key={data.id}
                            to={`/profile-view/${data.id}`}
                            name={data.name}
                            profile={data.profileImg}
                            age={data.age}
                            height={data.height}
                            location={data.location}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalShowProfileGallery}
        onHide={() => setModalShowProfileGallery(false)}
        className="gallery-popup"
        centered
        size="lg"
      >
        <Modal.Body>
          <div
            className="close-icon"
            onClick={() => setModalShowProfileGallery(false)}
          >
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          <div class="popup-title">setModalShowProfileGallery</div>
          <div className="filter-select-wrapper">
            setModalShowProfileGallery
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={modalShowAlert}
        onHide={() => setModalShowAlert(false)}
        className="alert-gallery-popup"
        centered
        size="md"
      >
        <Modal.Body>
          <div className="close-icon" onClick={() => setModalShowAlert(false)}>
            <img src={assets.CloseIcon} alt="Close Icon" />
          </div>
          {/* <div class="popup-title">Select Family Type</div> */}
          <div className="d-flex align-items-center justify-content-center flex-column text-center gap-2">
            <div>Want to View Gallery Images?</div>
            <div>
              Unlock access to exclusive gallery images by subscribing to our
              premium plan.
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileDetailsPage;
