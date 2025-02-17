import React from "react";
import { CustomLink, CustomLottie, Navbar } from "../components";
import { assets } from "../constant";

const NotfoundPage = (props) => {
  return (
    <>
      <Navbar userProfile={props.data} />
      <div className="not-found-wrapper h-100 w-100">
        <div className="d-flex justify-content-center align-items-center flex-column gap-3 update-profile-wrapper">
          <div className="title">404</div>
          <div className="title">Oops! Page Not Found</div>
          <CustomLottie
            lottieFile={assets.UploadProfile}
            loop={true}
            className="upload-profile-img"
          />
          <div className="subtitle">
            The page you're looking for doesn't exist or has been moved. Please
            go back to the homepage.
          </div>

          <CustomLink type="submit" className="btn btn-custom" to={"/"}>
            Go to Homepage
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default NotfoundPage;
