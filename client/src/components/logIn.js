import React, { Component } from "react";
import axios from "axios";

export default class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.emailAddressInput = this.emailAddressInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onSubmitCreate = this.onSubmitCreate.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  emailAddressInput(e) {
    this.setState({ email: e.target.value });
  }

  passwordInput(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmitCreate(e) {
    e.preventDefault();
    const createdAccount = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(createdAccount);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            type="submit"
            value="Create Account"
            className="btn btn-primary"
          >
            Create Account
          </button>
          <button type="submit" value="Log In" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    );
  }
}
