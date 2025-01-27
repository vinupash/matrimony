import { useState, useEffect } from "react";

const useDropdownmenu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to determine mobile or desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initialize on load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownVisible(!isDropdownVisible);
    }
  };
  return { toggleDropdown, isDropdownVisible };
};

export default useDropdownmenu;
