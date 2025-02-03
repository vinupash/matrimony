import React from "react";
import { Modal } from "react-bootstrap";
import { assets } from "../constant";
import UserProfile from "./UserProfile";
const QuickMatchPopup = (props) => {
  console.log(props);

  return (
    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    //   backdrop="static"
    //   className="quick-match-popup"
    //   show={props.activeProfile}
    // >
    //   <Modal.Body>
    //     {/* <div className="close-icon" onClick={props.closeButton}>
    //       <img src={assets.CloseIcon} alt="Close Icon" />
    //     </div> */}
    //     <h4>{props.userProfileName}</h4>
    //     <h4>{props.listProfileName}</h4>
    //   </Modal.Body>
    //   {/* <Modal.Footer>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer> */}
    // </Modal>

    <Modal
      show={props.activeProfile}
      onHide={props.onClick}
      className="quick-match-popup"
      centered
      backdrop="static"
    >
      <Modal.Body>
        <div className="close-icon" onClick={props.onClick}>
          <img src={assets.CloseIcon} alt="Close Icon" />
        </div>
        {/* <h4>{props.userProfileName}</h4>
        <h4>{props.listProfileName}</h4> */}
        <div className="profile-match-wrapper-details">
          <div className="profile-match-details">
            <div className="profile-details">
              <div className="user-name">{props.listProfileName}</div>
              <div className="user-profile-img-wrapper">
                <UserProfile
                  profileImage={props.listProfileImg}
                  className="user-profile-img"
                />
              </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="profile-match-result-content">
              You match 18/19 of her preferences
            </div>
            <div className="horizontal-line"></div>
            <div className="profile-details">
              <div className="user-name">{props.userProfileName}</div>
              <div className="user-profile-img-wrapper">
                <UserProfile
                  profileImage={props.userProfileImg}
                  className="user-profile-img"
                />
              </div>
            </div>
          </div>
          <div className="content">
            Your profile is not uploaded. Please complete your profile.
          </div>
          <button type="submit" className="btn btn-custom">
            View {props.listProfileName} Profile
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default QuickMatchPopup;
