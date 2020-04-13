import React from "react";
import { Link } from "react-router-dom";
import GeneratedWalkContainer from "../components/GeneratedWalkContainer";
import HomeButton from "../components/HomeButton";

function GeneratedWalk(props) {
  return (
    <div>
      <GeneratedWalkContainer
        selectedWalk={props.location.state.selectedWalk}
      />
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default GeneratedWalk;
