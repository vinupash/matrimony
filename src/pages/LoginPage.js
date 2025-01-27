import { useContext, useState } from "react";
import NavigationContext from "../context/Navigation";
import { assets } from "../constant";
import { Nav, Tab } from "react-bootstrap";
import { CustomSelect } from "../components";

const LoginPage = ({ setUserLogin }) => {
  const { navigate } = useContext(NavigationContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selection, setSelection] = useState(null);

  const [activeKey, setActiveKey] = useState("/sign-in");

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateForm = () => {
    let formErrors = {};

    if (!formValues.username.trim()) {
      formErrors.username = "Username is required.";
    } else if (formValues.username.length < 3) {
      formErrors.username = "Username must be at least 3 characters long.";
    }

    if (!formValues.password) {
      formErrors.password = "Password is required.";
    } else if (formValues.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(formErrors);

    // Return true if no errors exist
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Clear the specific field's error when it changes
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with login or API call
      console.log("Form submitted successfully:", formValues);
      setUserLogin(true);
      navigate("/");
    } else {
      console.log("Form contains errors.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isChecked) {
  //     alert("Form submitted!");
  //   }
  // };

  const options = [
    { label: "Myself", value: "myself" },
    { label: "Daughter", value: "daughter" },
    { label: "Sister", value: "sister" },
    { label: "Brother", value: "brother" },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <section className="login-section">
      <video autoPlay muted loop id="bg-video">
        <source src={assets.WeddingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <div className="video-overlay-content">
          <div className="login-container">
            <div className="logo-wrapper"></div>
            <div className="title">Your Perfect Match Awaits</div>
            <div className="subtitle">
              Finding your perfect match just got simpler and smarter.
            </div>
            <Tab.Container
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
            >
              <Nav
                variant="tabs"
                className="flex-row gap-2 justify-content-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="/sign-in">sign in</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sign-up">sign up</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="w-100">
                <Tab.Pane eventKey="/sign-in">
                  <form id="submitSigninForm">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        user name
                      </label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter user name"
                        value={formValues.username}
                        onChange={handleChange}
                        className="form-control form-details"
                      />
                      {errors.username && (
                        <div className="error text-danger" id="usernameError">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        your password
                      </label>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <input
                            id="passwordInput"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={formValues.password}
                            onChange={handleChange}
                            className="form-control form-password"
                          />
                        </div>
                        <div
                          className="flex-shrink-0 eye-icon"
                          onClick={togglePasswordVisibility}
                        >
                          <img
                            id="eyeIcon"
                            src={
                              showPassword
                                ? assets.EyeOpenIcon
                                : assets.EyeClosedIcon
                            }
                            alt={
                              showPassword ? "Hide password" : "Show password"
                            }
                          />
                        </div>
                      </div>
                      {errors.password && (
                        <div className="error text-danger" id="passwordError">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-custom"
                        onClick={handleLogin}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Tab.Pane>
                <Tab.Pane eventKey="sign-up">
                  <form id="submitSigninForm">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Enter name
                      </label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter first & last name"
                        value={formValues.username}
                        onChange={handleChange}
                        className="form-control form-details"
                      />
                      {errors.username && (
                        <div className="error text-danger" id="usernameError">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        last name
                      </label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter last name"
                        value={formValues.username}
                        onChange={handleChange}
                        className="form-control form-details"
                      />
                      {errors.username && (
                        <div className="error text-danger" id="usernameError">
                          {errors.username}
                        </div>
                      )}
                    </div> */}
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        email address
                      </label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter email address"
                        value={formValues.username}
                        onChange={handleChange}
                        className="form-control form-details"
                      />
                      {errors.username && (
                        <div className="error text-danger" id="usernameError">
                          {errors.username}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        email address
                      </label>
                      <div>
                        <CustomSelect
                          options={options}
                          value={selection}
                          onChange={handleSelect}
                        />
                      </div>
                      {errors.username && (
                        <div className="error text-danger" id="usernameError">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        your password
                      </label>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <input
                            id="passwordInput"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={formValues.password}
                            onChange={handleChange}
                            className="form-control form-password"
                          />
                        </div>
                        <div
                          className="flex-shrink-0 eye-icon"
                          onClick={togglePasswordVisibility}
                        >
                          <img
                            id="eyeIcon"
                            src={
                              showPassword
                                ? assets.EyeOpenIcon
                                : assets.EyeClosedIcon
                            }
                            alt={
                              showPassword ? "Hide password" : "Show password"
                            }
                          />
                        </div>
                      </div>
                      {errors.password && (
                        <div className="error text-danger" id="passwordError">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="mb-3 d-flex align-items-center gap-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                      </div>
                      <div>View terms & conditions</div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        // className="btn btn-custom"
                        className={`btn btn-custom ${
                          !isChecked ? "disabled" : ""
                        }`}
                        // disabled={!isChecked}
                        // onClick={handleLogin}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
