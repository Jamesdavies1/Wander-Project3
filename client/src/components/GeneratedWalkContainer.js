import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { stringify } from "querystring";
import "../pages/HomePage/style.css";

export default class GeneratedWalkContainer extends Component {
  constructor(props) {
    super(props);
    console.log("I am the props to generated walk container: ", props);
    console.log(props.selectedWalk.name);
  }

  componentDidMount() {
    // console.log("I am the state: ", JSON.stringify(this.props, null, 2));
    // axios.get("/api/walks")
    // .then(response => {
    //     this.setState({walks: response.data})
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
  }

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

  render() {
    return (
      <div className="main-container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{this.props.selectedWalk.name}</h1>
          </div>
        </div>
        <div className="card-container">
          <ul>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Difficulty: {this.props.selectedWalk.difficulty}
                </li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Hours to complete: {this.props.selectedWalk.time}
                </li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Location: {this.props.selectedWalk.location}
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <button type="button" className="btn btn-primary btn-lg">
          Refresh
        </button>
      </div>
    );
  }
}

//test text
