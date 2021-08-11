import React from "react";

import { Box } from "grommet";
import styled from "styled-components";

import CardItem from "./CardItem.component";
import { useLocation } from "../../context/useLocation";

const CardList = () => {
  const { state } = useLocation();

  const renderCards = state.locations.map((location) => {
    return <CardItem key={location.id} locationInfo={location} />;
  });

  return <ListContainer gap="none">{renderCards}</ListContainer>;
};

const ListContainer = styled(Box)`
  grid-column: 1/4;
  margin: 0;
  overflow-y: auto;
  height: 100%;
  display: block;
`;

export default CardList;
