import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[53.4, -2.3]}
        zoom={8}
        maxZoom={15}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[53.4, -2.3]}>
          <Popup>More features coming soon.</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
