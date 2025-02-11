import classNames from "classnames";

const UserProfile = (props) => {
  const classFunction = classNames(props.className);
  return (
    <img src={props.profileImage} alt="Profile" className={classFunction} />
  );
};

export default UserProfile;
