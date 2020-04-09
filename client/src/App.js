import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import SelectWalk from "./pages/SelectWalk";
import CreateWalk from "./pages/CreateWalk";


function App() {
  return (

<Router>
  <div className = "App">
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/SelectWalk" component={SelectWalk} />
      <Route path="/CreateWalk" component={CreateWalk} />
    </Switch>
  </div>
</Router>

  );
}

export default App;
