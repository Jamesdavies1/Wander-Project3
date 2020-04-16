import React from "react";
import { Link } from "react-router-dom";
import GeneratedWalkContainer from "../components/GeneratedWalkContainer";
import HomeButton from "../components/HomeButton";
import Map from "../components/leafletMap";

function GeneratedWalk(props) {
  return (
    <div>
      <GeneratedWalkContainer
        selectedWalk={props.location.state.selectedWalk}
        availableWalks={props.location.state.availableWalks}
      />
      <Map />
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default GeneratedWalk;
