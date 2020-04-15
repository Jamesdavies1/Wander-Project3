import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { stringify } from "querystring";

export default class GeneratedWalkContainer extends Component {
  constructor(props) {
    super(props);
    this.refreshResult = this.refreshResult.bind(this);
    // this.newWalkName = this.newWalkName.name.bind(this);
    // this.newWalkDifficulty = this.newWalkDifficulty.name.bind(this);
    // this.newWalkTime = this.newWalkTime.name.bind(this);
    // this.newWalkLocation = this.newWalkLocation.name.bind(this);

    console.log("I am the props to generated walk container: ", props);
    // console.log(this.props.selectedWalk.name);
    // this.state = {
    //   isShow: true
    // };
  }

  // componentDidMount() {
  // console.log("I am the state: ", JSON.stringify(this.props, null, 2));
  // axios.get("/api/walks")
  // .then(response => {
  //     this.setState({walks: response.data})
  // })
  // .catch((error) => {
  //     console.log(error);
  // })
  // }

  state = {
    name: this.props.selectedWalk.name,
    difficulty: this.props.selectedWalk.difficulty,
    time: this.props.selectedWalk.time,
    location: this.props.selectedWalk.location
  };

  //   componentDidMount = () => {
  //     this.getWalkFromDatabase();
  //   };

  //   getWalkFromDatabase = () => {
  //   axios.get("/api/walks")
  //   .then((response) => {
  //     const data = JSON.stringify(response.data);
  //     this.setState({name:'', difficulty:'', time:'', location:''});
  //     console.log("data recieved " + data);
  //   })
  //   .catch(() => {
  //     alert("error getting data");
  //   });
  //   }

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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{this.state.name}</h1>
          </div>
        </div>
        <div>
          <ul>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Difficulty:</li>
                <li className="list-group-item">{this.state.difficulty}</li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Hours to complete:</li>
                <li className="list-group-item">{this.state.time}</li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Location:</li>
                <li className="list-group-item">{this.state.location}</li>
              </ul>
            </div>
          </ul>
        </div>
        <button
          onClick={this.refreshResult}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Refresh
        </button>
        {/* <NewWalkName newWalkName={newWalkName} isShow={this.state.isShow} /> */}
      </div>
    );
  }
}

// const NewWalkName = ({ newWalkName, isShow }) =>
//   isShow ? <h1>{newWalkName}</h1> : null;

// class NewWalk extends Component {
//   render() {
//     return <h1>{this.props.newWalkName}</h1>;
//   }
// }

//test text
