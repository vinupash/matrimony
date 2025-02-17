import { useState, useContext, useEffect } from "react";
import NavigationContext from "./context/Navigation";
import {
  HomePage,
  LoginPage,
  NotfoundPage,
  NotificationPage,
  ProfileDetailsPage,
} from "./pages";
import { assets } from "./constant";
import { useGreeting } from "./hooks";
import MatchesPage from "./pages/MatchesPage";
import matchPath from "./utils/matchPath";

const App = () => {
  const { currentPath, navigate } = useContext(NavigationContext);
  const [userLogin, setUserLogin] = useState(true);
  const greeting = useGreeting();

  const userProfile = {
    id: 1,
    name: "Rahul Koarde",
    dob: "28 Dec 2024",
    age: 28,
    education: "B.Sc New",
    place: "New",
    profileImg: assets.ProfileFour,
    paid: true,
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
      img: assets.ProfileThree,
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

  const SimilarProfiles = [
    {
      id: 11,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.Profile,
    },
    {
      id: 12,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.ProfileTwo,
    },
    {
      id: 13,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.ProfileThree,
    },
    {
      id: 14,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.ProfileTwo,
    },
    {
      id: 15,
      name: "Priyanka Vijay Itadkar",
      age: "29",
      height: "5'2",
      location: "Thane, Maharashtra",
      profileImg: assets.Profile,
    },
  ];

  const handleSimilarProfileClick = (id) => {
    navigate(`/profile-view/${id}`); // Update the currentPath
  };

  // Redirect logic based on login status
  useEffect(() => {
    if (!userLogin && currentPath !== "/login") {
      navigate("/login");
    } else if (userLogin && currentPath === "/login") {
      navigate("/");
    }
  }, [userLogin, currentPath, navigate]);

  // Render different pages based on the current path
  const renderPage = () => {
    const profileMatch = matchPath(currentPath, "/profile-view/:id");

    if (profileMatch) {
      const { id } = profileMatch;
      const profileData = profileListData.find(
        (profile) => profile.id === parseInt(id)
      );
      if (!profileData) {
        return <NotfoundPage data={userProfile} greeting={greeting} />;
      }
      return (
        <ProfileDetailsPage
          data={profileData}
          greeting={greeting}
          dataUser={userProfile}
          similarProfiles={SimilarProfiles}
          onSimilarProfileClick={handleSimilarProfileClick}
        />
      );
    }
    switch (currentPath) {
      case "/":
        return (
          <HomePage
            dataUser={userProfile}
            greeting={greeting}
            data={profileListData}
          />
        );
      case "/notification":
        return <NotificationPage data={userProfile} greeting={greeting} />;
      case "/matches":
        return <MatchesPage data={userProfile} greeting={greeting} />;
      case "/profile-view":
        return (
          <ProfileDetailsPage dataUser={userProfile} greeting={greeting} />
        );
      case "/login":
        return <LoginPage setUserLogin={setUserLogin} />;
      default:
        return <NotfoundPage data={userProfile} greeting={greeting} />;
    }
  };

  return <>{renderPage()}</>;
};

export default App;
