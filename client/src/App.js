import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import HomePage from "./pages/HomePage/Homepage";
import SelectWalk from "./pages/SelectWalk";
import CreateWalk from "./pages/CreateWalk";
import GeneratedWalk from "./pages/GeneratedWalk";
import "./pages/HomePage/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/SelectWalk" component={SelectWalk} />
          <Route path="/CreateWalk" component={CreateWalk} />
          <Route path="/GeneratedWalk" component={GeneratedWalk} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
