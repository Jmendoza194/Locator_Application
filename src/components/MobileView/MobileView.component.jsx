import React from "react";

import { Box } from "grommet";
import styled from "styled-components";

import MapContainer from "../Map/MapContainer.component";
import CardList from "../Cards/CardList.component";
import { breakpoint } from "../../styles/breakpoint";
import { useLocation } from "../../context/useLocation";

const MobileView = () => {
  const { state } = useLocation();

  return (
    <MobileContainer>
      {state.open_mapTab ? <MapContainer /> : <CardList />}
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
