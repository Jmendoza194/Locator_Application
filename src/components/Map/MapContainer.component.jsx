import React from "react";

import { Box, Text } from "grommet";
import styled from "styled-components";

const MapContainer = () => {
  return (
    <CustomContainer>
      <Text textAlign="center">Click a location card to load a map</Text>
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
