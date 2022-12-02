import React from "react";
import { Link, Outlet } from "react-router-dom";

import useUserContext from "../../context/user.context";

import "./nav_bar.styles.css";

const NavBar = () => {
  const { logout } = useUserContext();

  return (
    <div className="page">
      <div className="nav-bar">
        <div className="link">
          <Link to="/home">Home</Link>
        </div>
        <div className="link">
          <Link to="/addproduct">Sell Product</Link>
        </div>
        <div className="link">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="link">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="link" onClick={logout}>
          <Link to="/">Log Out</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
