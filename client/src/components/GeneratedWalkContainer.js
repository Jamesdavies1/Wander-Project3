import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { stringify } from "querystring";

export default class GeneratedWalkContainer extends Component {
  constructor(props) {
    super(props);
    this.refreshResult = this.refreshResult.bind(this);
  }

  state = {
    name: this.props.selectedWalk.name,
    difficulty: this.props.selectedWalk.difficulty,
    time: this.props.selectedWalk.time,
    location: this.props.selectedWalk.location
  };

  refreshResult() {
    const availableWalks = this.props.availableWalks;
    const { name, difficulty, time, location } = availableWalks[
      Math.floor(Math.random() * availableWalks.length)
    ];
    this.setState({
      name,
      difficulty,
      time,
      location
    });
  }

  render() {
    // const newWalkName = this.newSelectedWalk.name;
    // const newWalkDifficulty = this.newSelectedWalk.difficulty;
    // const newWalkTime = this.newSelectedWalk.time;
    // const newWalkLocation = this.newSelectedWalk.location;
    return (
      <div className="main-container">
        <div className="jumbotron jumbotron-fluid created-walk-title-container">
          <div className="container">
            <h1 className="display-4 generated-walk-header-text">
              {this.state.name}
            </h1>
          </div>
        </div>
        <div>
          <div className="generated-walk-difficulty">
            <p>
              {this.state.difficulty} <i className="fas fa-fist-raised"></i>
            </p>
          </div>
          <div className="generated-walk-time">
            <p>
              {this.state.time} <i className="fas fa-clock"></i>
            </p>
          </div>
          <div className="generated-walk-location">
            <p>
              {this.state.location} <i className="fas fa-map-marker-alt"></i>
            </p>
          </div>
        </div>
        <button
          onClick={this.refreshResult}
          type="button"
          className="btn btn-primary btn-lg refresh-walk-button"
        >
          Refresh Adventure
        </button>
      </div>
    );
  }
}
