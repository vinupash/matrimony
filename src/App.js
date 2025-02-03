import { useState, useContext, useEffect } from "react";
import NavigationContext from "./context/Navigation";
import { HomePage, LoginPage, NotificationPage } from "./pages";
import { assets } from "./constant";
import { useGreeting } from "./hooks";
import MatchesPage from "./pages/MatchesPage";

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
    profileImg: assets.ProfileThree,
    paid: false,
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
    switch (currentPath) {
      case "/":
        return <HomePage data={userProfile} greeting={greeting} />;
      case "/notification":
        return <NotificationPage data={userProfile} greeting={greeting} />;
      case "/matches":
        return <MatchesPage data={userProfile} greeting={greeting} />;
      case "/login":
        return <LoginPage setUserLogin={setUserLogin} />;
      default:
        return <h1>404 Not Found</h1>;
    }
  };

  return <>{renderPage()}</>;
};

export default App;
