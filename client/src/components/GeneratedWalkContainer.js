import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { stringify } from "querystring";

export default class GeneratedWalkContainer extends Component {
  constructor(props) {
    super(props);
    this.refreshResult = this.refreshResult.bind(this);
    console.log("I am the props to generated walk container: ", props);
    // console.log(this.props.selectedWalk.name);
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

  // state = {
  //     name:'',
  //     difficulty:'',
  //     time:'',
  //     location:''
  //   }

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

  refreshResult(e) {
    e.preventDefault();
    const availableWalks = this.props.availableWalks;
    const newSelectedWalk =
      availableWalks[Math.floor(Math.random() * availableWalks.length)];
    console.log(newSelectedWalk.name);
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
            <h1 className="display-4">{this.props.selectedWalk.name}</h1>
          </div>
        </div>
        <div>
          <ul>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Difficulty:</li>
                <li className="list-group-item">
                  {this.props.selectedWalk.difficulty}
                </li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Hours to complete:</li>
                <li className="list-group-item">
                  {this.props.selectedWalk.time}
                </li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Location:</li>
                <li className="list-group-item">
                  {this.props.selectedWalk.location}
                </li>
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
      </div>
    );
  }
}

//test text
