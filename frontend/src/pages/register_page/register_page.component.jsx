import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./register_page.styles.css";
import axios from "axios";

class register extends Component {
  constructor() {
    super();
    this.state = {
      //fullName: "",
      username: "",
      email: "",
      password: "",
    };
    //this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /*
  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
*/

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      //fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));
    window.location = "/home";
    this.setState({
      //fullName: "",
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="auth-from-container">
        {/* <h1>Welcome to our shopping mall.</h1>
        <h1>Please login to continue</h1> */}
        <h1>Register</h1>
        <div className="auth-form">
          <form className="register-form" onSubmit={this.onSubmit}>
            <label className="register-headers">Username</label>
            <input
              className="register-username"
              type="text"
              placeholder="Username"
              onChange={this.changeUsername}
              value={this.state.username}
            />

            <label className="register-headers"> Email</label>
            <input
              className="register-email"
              type="text"
              placeholder="E-mail"
              onChange={this.changeEmail}
              value={this.state.email}
            />

            <label className="register-headers">Password</label>
            <input
              className="register-password"
              type="password"
              placeholder="Password"
              onChange={this.changePassword}
              value={this.state.password}
            />
            <input
              type="submit"
              className=" submit-button"
              value="Register"
            ></input>
          </form>
        </div>
        <div className="no-account">
          <h2 className="link-btn-text">Already have an account? Login </h2>
          <Link to="/" className="link-btn-register">
            here
          </Link>
        </div>
      </div>
    );
  }
}

export default register;
