import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./nav_bar.styles.css";

const F_NavBar = () => {
  return (
    <div className="page">
      <div className="nav-bar">
        <div className="link">
          <Link to="">signin</Link>
        </div>
        <div className="link">
          <Link to="/register">Register</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default F_NavBar;
