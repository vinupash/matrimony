import React from "react";
import { Navbar, Sidemenu, SimilarProfile } from "../components";
import { assets } from "../constant";

const NotificationPage = (props) => {
  const SimilarProfiles = [
    {
      id: 1,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.Profile,
    },
    {
      id: 2,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.ProfileTwo,
    },
    {
      id: 3,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.ProfileThree,
    },
    {
      id: 4,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.ProfileTwo,
    },
    {
      id: 5,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.Profile,
    },
  ];
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
              <div className="position-sticky top-0 start-0 section-top-bar">
                <div className="section-title">Recent Notification</div>
              </div>

              <div className="recent-view-section-wrapper">
                <div className="page-title">Recent View Profile</div>
                <div className="recent-view-page-section">
                  {SimilarProfiles.map((data) => {
                    return (
                      <SimilarProfile
                        key={data.id}
                        to={`/about${data.id}`}
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

              <div className="update-view-section-wrapper">
                <div className="page-title">Update</div>
                <div className="update-view-page-section-wrapper">
                  <div className="update-view-page-section">
                    <div className="d-flex align-items-center update-section">
                      <div className="flex-shrink-0 update-section-img">
                        <img
                          src={assets.StarIcon}
                          className="update-img"
                          alt=""
                        />
                      </div>
                      <div className="flex-grow-1 ms-2 update-content">
                        Now you can take a look at profiles who have shortlisted
                        you!
                      </div>
                    </div>
                  </div>

                  <div className="update-view-page-section">
                    <div className="d-flex align-items-center update-section">
                      <div className="flex-shrink-0 update-section-img">
                        <img
                          src={assets.StarIcon}
                          className="update-img"
                          alt=""
                        />
                      </div>
                      <div className="flex-grow-1 ms-2 update-content">
                        Now you can take a look at profiles who have shortlisted
                        you!
                      </div>
                    </div>
                  </div>

                  <div className="update-view-page-section">
                    <div className="d-flex align-items-center update-section">
                      <div className="flex-shrink-0 update-section-img">
                        <img
                          src={assets.StarIcon}
                          className="update-img"
                          alt=""
                        />
                      </div>
                      <div className="flex-grow-1 ms-2 update-content">
                        Now you can take a look at profiles who have shortlisted
                        you!
                      </div>
                    </div>
                  </div>
                </div>
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
                      {SimilarProfiles.map((data) => {
                        return (
                          <SimilarProfile
                            key={data.id}
                            to={`/about${data.id}`}
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
              {/* <div className="right-section-wrapper">
                <div className="right-section-content">
                  <div className="right-section-content-title">
                    Similar Profiles
                  </div>
                  {SimilarProfiles.map((data) => {
                    return (
                      <SimilarProfile
                        key={data.id}
                        to={`/about${data.id}`}
                        name={data.name}
                        profile={data.profileImg}
                        age={data.age}
                        height={data.height}
                        location={data.location}
                      />
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
