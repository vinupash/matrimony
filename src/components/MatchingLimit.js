import React from "react";

const MatchingLimit = () => {
  return (
    <div className="daily-limit-alert text-center">
      <div className="user-name">Hi Rahul Koarde,</div>
      <div className="title">You've Reached Your Daily Match Limit</div>
      <div className="subtitle">
        Check back tomorrow for more matches or upgrade to a premium membership
        for unlimited access.
      </div>
      <button
        type="submit"
        className="btn btn-custom"
        // onClick={handleLogin}
      >
        upgrade
      </button>
    </div>
  );
};

export default MatchingLimit;
