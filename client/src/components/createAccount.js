import React, { Component } from "react";
import axios from "axios";
import Recaptcha from "react-recaptcha";

export default class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.emailAddressInput = this.emailAddressInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    };
  }

  state = {
    email: "",
    password: ""
  };

  emailAddressInput(e) {
    this.setState({ email: e.target.value });
  }

  passwordInput(e) {
    this.setState({
      password: e.target.value
    });
  }

  recaptchaLoaded() {
    console.log("captcha successfully loaded");
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.isVerified) {
      alert("You have successfully created a new account!");
      console.log("signup has been activated");
      const createdAccount = {
        email: this.state.email,
        password: this.state.password
      };
      console.log(createdAccount);
      axios
        .post("/api/addUser", createdAccount)
        .then(res => console.log(res.data));

      window.location = "/";
    } else {
      alert("Please verify that you are a real adventurer...");
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control email-input-form"
              onChange={this.emailAddressInput}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email address"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control password-input-form"
              onChange={this.passwordInput}
              id="exampleInputPassword1"
              placeholder="password"
              value={this.state.password}
            />
          </div>
          <button
            name="signup"
            type="submit"
            value="Create Account"
            className="btn btn-primary create-account-button"
          >
            Create Account
          </button>
        </form>
        <div className="re-captcha-widget">
          <Recaptcha
            sitekey="6LcSXuoUAAAAACUSoa7i1cvLopfmXIAqC9FEGhKe"
            theme="dark"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    );
  }
}
