import React, { useState } from "react";
import "./sign_in_page.styles.css"

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h1>Login</h1>

      <div className="auth-form">
        <div className="login-form" onSubmit={handleSubmit}>
          <label className="login-headers" htmlFor="email">Email Address</label>
          <input
            className="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <label className="login-headers" htmlFor="password">Password</label>
          <input
            className="login-password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button className="submit-button" type="submit">Log In</button>
        </div>
      </div>
      <div className="no-account">
        <h2 className="link-btn-text">Don't have an account? Register </h2>
        <h2 className="link-btn-register" onClick={() => props.onFormSwitch("register")}>here</h2>
      </div>
    </div>
  );
};
