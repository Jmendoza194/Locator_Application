import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box } from "grommet";
import styled from "styled-components";

import CardItem from "./CardItem.component";

const CardList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      const { data } = await axios.get(
        "https://my.api.mockaroo.com/locations.json?key=a45f1200"
      );
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
  margin: 1rem 3rem;
  overflow-y: auto;
  height: 100%;
  display: block;
`;

export default CardList;
