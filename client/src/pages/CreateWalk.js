import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropDownForm from "../components/DropDownForm";
import HomeButton from "../components/HomeButton";

export default class CreateWalks extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
    // this.onChangeTime = this.onChangeTime.bind(this);
    // this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      difficulty: [],
      time: [],
      location: [],
    };
  }

  //react life cycle method
      componentDidMount() {
          this.setState({
              name: "test walk"
          })
      }

  //change name
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  //change difficulty
  onChangeDifficulty(e) {
    this.setState({
      difficulty: e.target.value
    });
    console.log("hello")

  }

  //change time
  onChangeTime(e) {
    this.setState({
      time: e.target.value
    });
  }

  //change location
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const walk = {
      name: this.state.name,
      difficulty: this.state.difficulty,
      time: this.state.time,
      location: this.state.location
    }
    console.log(walk)
    window.location = "/";
  }
  //render html to page
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              uref="userInput"
              required
              className="form-control form-control-lg"
              value={this.state.name}
              onChange={this.onChangeName}
              type="text"
              placeholder="Insert name of walk"
            />
            <DropDownForm
              contents={["easy", "medium", "hard"]}
              title={"Difficulty level"}
              value={this.state.difficulty}
              onChange={this.onChangeDifficulty}
            />
            <DropDownForm
              contents={[0.5, 1, 2, 4, 6, 8]}
              title={"Time to complete"}
              value={this.state.time}
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
              title={"Region of activity"}
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create new walk"
              className="btn btn-primary btn-lg"
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
