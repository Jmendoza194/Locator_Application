import React from "react";

import { Box } from "grommet";
import styled from "styled-components";

import MapContainer from "../Map/MapContainer.component";
import CardList from "../Cards/CardList.component";
import { breakpoint } from "../../styles/breakpoint";

const MobileView = ({ showMap }) => {
  return (
    <MobileContainer>
      {showMap ? <MapContainer /> : <CardList />}
    </MobileContainer>
  );
};

const MobileContainer = styled(Box)`
  display: none;

  @media only screen and (${breakpoint.device.sm}) {
    display: block;
    height: 100%;
  }
`;

export default MobileView;
