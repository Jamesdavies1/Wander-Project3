import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropDownForm from "../components/DropDownForm";
import HomeButton from "../components/HomeButton";
import axios from "axios";

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
      name: '',
      difficulty: '',
      time: 0,
      location: ''
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
    }
    console.log(walk)
    // console.log(JSON.stringify(walk, null, 2));
    // console.log("difficulty: ",JSON.stringify(this.state.difficulty, null, 2));
    // console.log("time: ",JSON.stringify(this.state.time, null, 2));
    // console.log("location: ",JSON.stringify(this.state.location, null, 2));

    axios.get("/api/walks?difficulty="+this.state.difficulty+"&location="+this.state.location+"&time="+this.state.time)
      .then(res => console.log(res.data[Math.floor(Math.random() * res.data.length)]));

    // window.location = "/GeneratedWalk";
  }

  //render html to page
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <DropDownForm
              contents={["Easy", "Medium", "Hard"]}
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
              value="Generate walk!"
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
