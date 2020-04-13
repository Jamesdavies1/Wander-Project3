import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "../pages/HomePage/style.css";

class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[53, -3]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[53, -3]}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
