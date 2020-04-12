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

  //react life cycle method
  //   componentDidMount() {
  //     this.setState({
  //       name: "test walk"
  //     });
  //   }

  //change name
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

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
      name: this.state.name,
      difficulty: this.state.difficulty,
      time: this.state.time,
      location: this.state.location
    }
    console.log(walk)
    // console.log(JSON.stringify(walk, null, 2));
    // console.log("difficulty: ",JSON.stringify(this.state.difficulty, null, 2));
    // console.log("time: ",JSON.stringify(this.state.time, null, 2));
    // console.log("location: ",JSON.stringify(this.state.location, null, 2));

    axios.post("api/add", walk)
      .then(res => console.log(res.data));

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
              onChange={this.onChangeDifficulty}
            />
            <DropDownForm
              contents={[0.5, 1, 2, 4, 6, 8]}
              title={"Time to complete"}
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
