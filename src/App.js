import { useState, useContext, useEffect } from "react";
import NavigationContext from "./context/Navigation";
import { HomePage, LoginPage } from "./pages";

const App = () => {
  const { currentPath, navigate } = useContext(NavigationContext);
  const [userLogin, setUserLogin] = useState(true);

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
        return <HomePage />;
      case "/login":
        return <LoginPage setUserLogin={setUserLogin} />;
      default:
        return <h1>404 Not Found</h1>;
    }
  };

  return <>{renderPage()}</>;
};

export default App;
