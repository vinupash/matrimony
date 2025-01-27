import { useState, useEffect } from "react";

const useGreeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();

      // Convert UTC to IST (UTC + 5:30)
      const indianTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      const hours = indianTime.getHours(); // Get hours in IST

      // Determine greeting based on hours
      if (hours >= 5 && hours < 12) {
        setGreeting("Good Morning");
      } else if (hours >= 12 && hours < 17) {
        setGreeting("Good Afternoon");
      } else if (hours >= 17 && hours < 21) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  return greeting;
};

export default useGreeting;
