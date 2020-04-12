import React, {  Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";



export default class GeneratedWalkContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {walks: []};
    }

    componentDidMount(){
        axios.get("/api/walks")
        .then(response => {
            this.setState({walks: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }


  render() {
    return (
      <div className="main-container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Snowdon</h1>
          </div>
        </div>
        <div>
          <ul>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Difficulty:</li>
                <li className="list-group-item">Medium</li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Time to complete in Hr/s:</li>
                <li className="list-group-item">6</li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Location</li>
                <li className="list-group-item">Snowdonia</li>
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
