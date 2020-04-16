import React from "react";
import LogInForm from "../components/logIn";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

function Accounts() {
  return (
    <div>
      <LogInForm />
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default Accounts;
