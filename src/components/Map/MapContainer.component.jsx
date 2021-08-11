import React from "react";

import { Box, Text } from "grommet";
import styled from "styled-components";

import Map from "./Map.component";
import { useLocation } from "../../context/useLocation";

const MapContainer = () => {
  const { state } = useLocation();
  console.log(state.selected_location);

  const center = {
    lat: parseInt(state.selected_location.latitude),
    lng: parseInt(state.selected_location.longitude),
  };

  return (
    <CustomContainer>
      {state.selected_location.latitude ? (
        <Map center={center} />
      ) : (
        <Text textAlign="center">Click a location card to load a map</Text>
      )}
    </CustomContainer>
  );
};

const CustomContainer = styled(Box)`
  background-color: #d8d8d8;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    grid-column: 4/7;
  }
`;

export default MapContainer;
