import React, { useState } from "react";

import { Box } from "grommet";
import styled from "styled-components";

import Header from "../components/Header/Header.component";
import CardList from "../components/Cards/CardList.component";
import Footer from "../components/Footer/Footer.component";
import { breakpoint } from "../styles/breakpoint";

const Home = () => {
  const [openList, setOpenList] = useState(true); //true = list tab, false = Map tab
  const [openMap, setOpenMap] = useState(false);

  const handleListClick = () => {
    if (!openList) {
      setOpenList(!openList);
      setOpenMap(!openMap);
    }
  };
  const handleMapClick = () => {
    if (!openMap) {
      setOpenMap(!openMap);
      setOpenList(!openList);
    }
  };

  return (
    <AppContainer>
      <Header />
      <CardList />
      <Footer
        handleMapClick={handleMapClick}
        handleListClick={handleListClick}
        listClicked={openList}
        mapClicked={openMap}
      />
    </AppContainer>
  );
};

export default Home;

const AppContainer = styled(Box)`
  margin: 1.5rem 17rem 0 17rem;
  height: 100%;
  @media only screen and (${breakpoint.device.lg}) {
    margin: 1.5rem 10rem 0 10rem;
  }

  @media only screen and (${breakpoint.device.sm}) {
    margin: 0;
  }
`;
