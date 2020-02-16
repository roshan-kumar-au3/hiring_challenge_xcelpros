import React, { useState } from "react";
import classnames from "classnames";
// import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

// import { registerUser } from "../../redux/actions/authActions";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Background from "../../assests/Sign-up-bg.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    errors: {}
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword
    };
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => setUser({ ...user, errors: err.response.data }));

    setUser({...user ,email: "", password: "", confirmPassword: "", firstName: "", lastName: ""});
  };

  return (
    <div className="sign-up-parent">
      <div className="sign-up-image">
        <h1>Hello :)</h1>
        <img src={Background} alt="login-background" />
      </div>
    <div className="sign-up">
      <h2 className="title">Join our community!</h2>
      <span>Already have an account? <strong><Link to="/signin">Login</Link></strong></span>
        <CustomButton isFacebookSignIn>Log in via facebook</CustomButton>
      <form onSubmit={handleSubmit} noValidate>
        <div className="required-field">* required field</div>
        <div className="form-name">
            <FormInput
              handleChange={handleChange}
              name="firstName"
              className={classnames("form-input", {
                "form-input-invalid": user.errors.firstName
              })}
              type="text"
              value={user.firstName}
              label="First Name*"
            />
            {user.errors.firstName && (
              <div className="isError"> {user.errors.firstName} </div>
            )}

            <FormInput
              handleChange={handleChange}
              name="lastName"
              className={classnames("form-input", {
                "form-input-invalid": user.errors.lastName
              })}
              type="text"
              value={user.lastName}
              label="Last Name*"
            />
            {user.errors.lastName && (
              <div className="isError"> {user.errors.lastName} </div>
            )}
        </div>

        <FormInput
          handleChange={handleChange}
          name="email"
          className={classnames("form-input", {
            "form-input-invalid": user.errors.email
          })}
          type="email"
          value={user.email}
          label="Email*"
        />
        {user.errors.email && (
          <div className="isError"> {user.errors.email} </div>
        )}

        <FormInput
          handleChange={handleChange}
          name="password"
          className={classnames("form-input", {
            "form-input-invalid": user.errors.password
          })}
          type="password"
          value={user.password}
          label="Password*"
        />

        {user.errors.password && (
          <div className="isError"> {user.errors.password} </div>
        )}

        <FormInput
          handleChange={handleChange}
          name="confirmPassword"
          className={classnames("form-input", {
            "form-input-invalid": user.errors.confirmPassword
          })}
          type="password"
          value={user.confirmPassword}
          label="Confirm Password*"
        />
        {user.errors.confirmPassword && (
          <div className="isError"> {user.errors.confirmPassword} </div>
        )}

        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
        <span id="terms">By joining, you agree to our <strong>Terms</strong> and <strong>Privacy Policy</strong></span>
    </div>
    </div>
  );
};

export default SignUp;
