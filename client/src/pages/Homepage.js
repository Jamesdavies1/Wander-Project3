import React from "react";
import {Link} from "react-router-dom";


function HomePage() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Project 3</h1>
          <p className="lead">
            Catchy Slogan Goes Here
          </p>
        </div>
      </div>
      <Link to='/SelectWalk'>
      <button type="button" className="btn btn-primary btn-lg">
        Generate Walk
      </button>
      </Link>
      <Link to='/CreateWalk'>
      <button type="button" className="btn btn-secondary btn-lg">
        Add New Walk
      </button>
      </Link>
    </div>
  );
}

export default HomePage;