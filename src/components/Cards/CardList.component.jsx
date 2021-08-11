import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box } from "grommet";
import styled from "styled-components";

import CardItem from "./CardItem.component";
import { data } from "../../mockData.js";
import { breakpoint } from "../../styles/breakpoint";

const CardList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      // const { data } = await axios.get(
      //   "https://my.api.mockaroo.com/locations.json?key=a45f1200"
      // );
      //setLocations([{ city: "Somewhere", name: "Here", address: "address" }]);
      setLocations(data);
    };

    getLocations();
  }, []);

  const renderCards = locations.map((location) => {
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
