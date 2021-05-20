import * as React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "../components/map.css"

const Map = ({ children, className, ...rest }) => {
  let mapClassName = `map`;
  if(className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  const mapSettings = {
    className: "map-base",
    zoomControl: false,
    ...rest,
  };

  return (
    <div className={mapClassName}>
      <MapContainer {...mapSettings}>
        {children}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};
  
export default Map;
