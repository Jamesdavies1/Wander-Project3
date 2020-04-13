import React from "react";
import { Link } from "react-router-dom";
import GeneratedWalkContainer from "../components/GeneratedWalkContainer";
import HomeButton from "../components/HomeButton";
import "../pages/HomePage/style.css";
import Map from "../components/leaflet";

function GeneratedWalk(props) {
  return (
    <div>
      <GeneratedWalkContainer
        selectedWalk={props.location.state.selectedWalk}
      />
      <Map />
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default GeneratedWalk;
