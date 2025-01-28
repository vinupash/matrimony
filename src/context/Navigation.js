import { useState, useEffect, createContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  // const [isProfileUploaded, setIsProfileUploaded] = useState(true);
  const [isProfileUploaded] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider
      value={{ currentPath, navigate, isProfileUploaded }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
