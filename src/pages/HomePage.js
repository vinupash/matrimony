import React from "react";
import { Navbar } from "../components";
import { assets } from "../constant";

const HomePage = () => {
  const userProfile = {
    id: 1,
    name: "Rahul Koarde",
    dob: "28 Dec 2024",
    age: 28,
    education: "B.Sc New",
    place: "New",
    profileImg: assets.Profile,
  };
  return (
    <>
      <Navbar userProfile={userProfile} />
    </>
  );
};

export default HomePage;
