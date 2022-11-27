import React, { useState } from "react";

import "./register_page.styles.css"

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <div className="auth-form">
        <div className="register-form" onSubmit={handleSubmit}>
          <label className="register-headers" htmlFor="name">Name</label>
          <input
            className="register-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <label className="register-headers" htmlFor="email">Email Address</label>
          <input
            className="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <label className="register-headers" htmlFor="password">Password</label>
          <input
            className="register-password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button className="submit-button" type="submit">Create Account</button>
        </div>
      </div>

      <div className="no-account">
        <h2 className="link-btn-text">Already have an account? Login </h2>
        <h2 className="link-btn-register" onClick={() => props.onFormSwitch("login")}>here</h2>
      </div>
    </div>
  );
};
