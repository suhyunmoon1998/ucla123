import React from "react";
import { Link, Outlet } from "react-router-dom";

import './nav_bar.styles.css'

const NavBar = () => {
  return (
    <div className="page">
      <div className="nav-bar">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
