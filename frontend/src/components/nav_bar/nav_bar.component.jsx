import React from "react";
import { Link, Outlet } from "react-router-dom";

import './nav_bar.styles.css'

const NavBar = () => {
  return (
    <div className="page">
      <div className="nav-bar">
        <div className="link">
          <Link to="/home">Home</Link>
        </div>
        <div className="link">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="link">
          <Link to="/">log-out</Link>
        </div>
        <div className="link">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="link">
          <Link to="/addproduct">Add Product</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};


export default NavBar;
