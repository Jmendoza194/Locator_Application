import React, { useState } from "react";

import { Box } from "grommet";
import styled from "styled-components";

import MapContainer from "../Map/MapContainer.component";
import CardList from "../Cards/CardList.component";
import Footer from "../Footer/Footer.component";
import { breakpoint } from "../../styles/breakpoint";

const MobileView = () => {
  return (
    <MobileContainer>
      <CardList />
    </MobileContainer>
  );
};

const MobileContainer = styled(Box)`
  display: none;

  @media only screen and (${breakpoint.device.sm}) {
    display: block;
  }
`;

export default MobileView;
