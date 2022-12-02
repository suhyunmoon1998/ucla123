import React from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

import useUserContext from "../../context/user.context";

import "./sign_in_page.styles.css";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const {login} = useUserContext();

  function changeUsername(event) {
    setUsername(event.target.value)
  }

  function changePassword(event) {
    setPassword(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault();
    const loginData = {
      username: username,
      password: password
    };
    axios
      .post("http://localhost:4000/app/signin", loginData)
      .then((response) => {
        let loginRes = response.data;
        if (loginRes.status === 1) {
          console.log(loginRes)
          setIsSignedIn(true);
          login(username)
        } else {
          alert(loginRes.message);
        }
      });
  }

  if (isSignedIn) {
    return <Navigate to={{ pathname: "/home " }} />;
  }
  return (
    <div className="auth-from-container">
      {/* <h1>Welcome to our shopping mall.</h1>
        <h1>Please login to continue</h1> */}
      <center>
        <div className="h1">
          <h1 className="login-page-header">Login</h1>
        </div>
      </center>
      <div className="auth-form">
        <form className="login-form" onSubmit={onSubmit}>
          <label className="login-headers">Username</label>
          <input
            className="login-username"
            type="text"
            placeholder="Username"
            onChange={changeUsername}
            value={username}
          />

          <label className="login-headers">Password</label>
          <input
            className="login-password"
            type="password"
            placeholder="Password"
            onChange={changePassword}
            value={password}
          />

          <input
            type="submit"
            className=" submit-button"
            value="Submit"
          ></input>
        </form>
      </div>
      <div className="no-account">
        <h2 className="link-btn-text">Don't have an account? Register </h2>
        <Link className="link-btn-register" to="/register">
          here
        </Link>
      </div>
    </div>
  );
};

export default Login;
