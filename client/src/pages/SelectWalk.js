import React, { Component } from "react";
import DropDownForm from "../components/DropDownForm";
import HomeButton from "../components/HomeButton";
import axios from "axios";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
export default class SelectWalks extends Component {
  constructor(props) {
    super(props);

    this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // const avaliableDifficulties = ["easy", "medium", "hard"];
    // const avaliableTimes = [0.5, 1, 2, 4, 6, 8];
    // const avaliableLocations = [
    //   "Cheshire",
    //   "Lake District",
    //   "Peak District",
    //   "Scotland",
    //   "Snowdonia",
    //   "Yorkshire Dales"
    // ];

    this.state = {
      name: "",
      difficulty: "",
      time: 0,
      location: "",
      shouldRedirect: false,
      availableWalks: [],
      selectedWalk: null
    };
  }

  //react life cycle method
  //   componentDidMount() {
  //     this.setState({
  //       name: "test walk"
  //     });
  //   }

  //change difficulty
  onChangeDifficulty(difficulty) {
    //   console.log("i have been called with ", difficulty)
    this.setState({
      difficulty
    });
  }

  //change time
  onChangeTime(time) {
    // console.log("i have been called with ", time)
    this.setState({
      time
    });
  }

  //change location
  onChangeLocation(location) {
    // console.log("i have been called with ", location)
    this.setState({
      location
    });
  }

  //button submit method
  onSubmit(e) {
    e.preventDefault();
    const walk = {
      difficulty: this.state.difficulty,
      time: this.state.time,
      location: this.state.location
    };
    console.log(walk);
    // console.log(JSON.stringify(walk, null, 2));
    // console.log("difficulty: ",JSON.stringify(this.state.difficulty, null, 2));
    // console.log("time: ",JSON.stringify(this.state.time, null, 2));
    // console.log("location: ",JSON.stringify(this.state.location, null, 2));

    axios
      .get(
        "/api/walks?difficulty=" +
          this.state.difficulty +
          "&location=" +
          this.state.location +
          "&time=" +
          this.state.time
      )
      .then(res => {
        const selectedWalk =
          res.data[Math.floor(Math.random() * res.data.length)];
        this.setState({
          availableWalks: res.data,
          selectedWalk,
          shouldRedirect: true
        });
      });

    // render () {
    //   return (
    //      <div>
    //       {this.renderRedirect()}
    //       <button onClick={this.setRedirect}>Redirect</button>
    //      </div>
    //   )
    // };
  }

  //render html to page
  render() {
    return this.state.shouldRedirect ? (
      <Redirect
        to={{
          pathname: "/GeneratedWalk",
          state: {
            availableWalks: this.state.availableWalks,
            selectedWalk: this.state.selectedWalk
          }
        }}
      />
    ) : (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <DropDownForm
              required
              contents={["Easy", "Medium", "Hard"]}
              title={"Difficulty level..."}
              onChange={this.onChangeDifficulty}
            />
            <DropDownForm
              contents={[0.5, 1, 2, 4, 6, 8]}
              title={"Available hours..."}
              onChange={this.onChangeTime}
            />
            <DropDownForm
              contents={[
                "Cheshire",
                "Lake District",
                "Peak District",
                "Scotland",
                "Snowdonia",
                "Yorkshire Dales"
              ]}
              title={"Region of exploration..."}
              onChange={this.onChangeLocation}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Lets see what awaits... "
              className="btn btn-primary btn-lg submit-selected-walk-button"
            />
          </div>
        </form>
        <Link to="/">
          <HomeButton />
        </Link>
      </div>
    );
  }
}
