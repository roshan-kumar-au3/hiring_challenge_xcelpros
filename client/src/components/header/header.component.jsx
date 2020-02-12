import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import Picture from "../../assests/37390781_1759983567455363_2150327307191975936_n.png"

import "./header.styles.scss";

const Header = props => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.auth);
  console.log(loggedInUser);

  const onLogoutUser = event => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  const authLinks = (
    <a className="option" href="/" onClick={onLogoutUser}>
      {loggedInUser.isAuthenticated ? loggedInUser.user.firstName : "Logout"}
    </a>
  );
  const guestLinks = (
    <Link className="option" to="/signin">
      SIGNIN
    </Link>
  );

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <h1>DASHBOARD</h1>
      </Link>
      <div className="options">
        <h3 style={{
          marginRight: "15px"
        }}>{loggedInUser.isAuthenticated ? authLinks : guestLinks}</h3>
        <img src={Picture} alt="user" />
      </div>
    </div>
  );
};

export default Header;
