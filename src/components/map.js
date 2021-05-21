import * as React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import useConfigureLeaflet from "../hooks/useConfigureLeaflet";
import "../components/map.css"

const isDomAvailable = () => (
  typeof window !== "undefined" &&
  !!window.document &&
  !!window.document.createElement
);

const Map = ({ children, className, ...rest }) => {
  useConfigureLeaflet();
  let mapClassName = `map`;
  if(className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  const mapSettings = {
    className: "map-base",
    zoomControl: false,
    ...rest,
  };

  if(!isDomAvailable()){
    return (
      <div className={mapClassName}>
        <p className="map-loading">Loading map…</p>
      </div>
    );
  }

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
