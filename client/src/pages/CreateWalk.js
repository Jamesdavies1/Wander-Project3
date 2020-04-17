import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropDownForm from "../components/DropDownForm";
import HomeButton from "../components/HomeButton";
import axios from "axios";

export default class CreateWalks extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      selectedDifficulty: ["easy", "medium", "hard"],
      time: [0.5, 1, 2, 4, 6, 8],
      location: [
        "Cheshire",
        "Lake District",
        "Peak District",
        "Scotland",
        "Snowdonia",
        "Yorkshire Dales"
      ]
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDifficulty(difficulty) {
    this.setState({
      difficulty
    });
  }

  onChangeTime(time) {
    this.setState({
      time
    });
  }

  onChangeLocation(location) {
    this.setState({
      location
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const walk = {
      name: this.state.name,
      difficulty: this.state.difficulty,
      time: this.state.time,
      location: this.state.location
    };
    axios.post("api/add", walk).then(res => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              uref="userInput"
              required
              className="form-control form-control-lg create-walk-text-input"
              value={this.state.name}
              onChange={this.onChangeName}
              type="text"
              placeholder="please insert name of new adventure"
            />
            <DropDownForm
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

          <div className="form-group ">
            <input
              type="submit"
              value="Create"
              className="btn btn-primary btn-lg create-new-walk-button"
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
