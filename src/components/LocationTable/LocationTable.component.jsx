import React, { useEffect } from "react";

import { Box, Heading } from "grommet";
import styled from "styled-components";

import CardList from "../Cards/CardList.component";
import MapContainer from "../Map/MapContainer.component";
import { breakpoint } from "../../styles/breakpoint";
import { useLocation } from "../../context/useLocation";

const LocationTable = () => {
  const { state, dispatch } = useLocation();

  // //Set mobile view back to default
  // useEffect(() => {
  //   dispatch({ type: "open_card_list" });
  // }, [dispatch]);

  const center = {
    lng: state.selected_location.latitude,
    lat: state.selected_location.longitude,
  };
  console.log("hello?");
  return (
    <>
      <TableContainer gap="small">
        <Heading>Found {state.locations.length} Trucks</Heading>
        <InnerContainer>
          <CardList />
          <MapContainer center={center} />
        </InnerContainer>
      </TableContainer>
    </>
  );
};

const TableContainer = styled(Box)`
  grid-column: 3/9;
  grid-row: 2/6;
`;

const InnerContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.2);
`;

export default LocationTable;
