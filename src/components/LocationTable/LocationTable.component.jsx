import React from "react";

import { Box } from "grommet";
import styled from "styled-components";

import CardList from "../Cards/CardList.component";
import MapContainer from "../Map/MapContainer.component";
import { breakpoint } from "../../styles/breakpoint";

const LocationTable = () => {
  return (
    <TableContainer>
      <CardList />
      <MapContainer />
    </TableContainer>
  );
};

const TableContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column: 3/9;
  grid-row: 2/6;
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.2);

  @media only screen and (${breakpoint.device.sm}) {
    display: none;
  }
`;

export default LocationTable;
