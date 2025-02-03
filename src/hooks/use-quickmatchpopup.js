import { useState } from "react";

const useQuickMatchPopup = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  const showProfile = (id) => setActiveProfile(id);
  const closeProfile = () => setActiveProfile(null);

  return { activeProfile, showProfile, closeProfile };
};

export default useQuickMatchPopup;
