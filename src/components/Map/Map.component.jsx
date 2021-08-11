import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Map = ({ center }) => {
  console.log("Hi");
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} zoom={15} center={center}>
        <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
