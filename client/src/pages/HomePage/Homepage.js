import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomePage() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 title-header">wander</h1>
          <p className="lead sub-title-header">where can you explore today?</p>
        </div>
      </div>
      <Link to="/SelectWalk">
        <button
          type="button"
          className="btn btn-primary btn-lg find-a-walk-button"
        >
          Go!
        </button>
      </Link>
      <Link to="/CreateWalk">
        <button
          type="button"
          className="btn btn-secondary btn-lg add-new-walk-button"
        >
          Create
        </button>
      </Link>
      <Link to="Accounts">
        <button
          type="button"
          className="btn btn-secondary btn-lg accounts-page-button"
        >
          Accounts
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
