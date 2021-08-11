import React, { useState } from "react";

import { Box } from "grommet";
import styled from "styled-components";

import Header from "../components/Header/Header.component";
import LocationTable from "../components/LocationTable/LocationTable.component";
import Footer from "../components/Footer/Footer.component";
import MobileView from "../components/MobileView/MobileView.component";
import { breakpoint } from "../styles/breakpoint";
import { useFetchLocations } from "../util/useFetchLocations";
import { useLocation } from "../context/useLocation";

const Home = () => {
  const [openList, setOpenList] = useState(true);
  const [openMap, setOpenMap] = useState(false);
  const { dispatch } = useLocation();

  useFetchLocations(dispatch);

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

  const handleInfoClick = () => {};

  return (
    <AppContainer>
      <Header />
      <LocationTable />
      <MobileView />
      <FooterContainer>
        <Footer
          handleMapClick={handleMapClick}
          handleListClick={handleListClick}
          listClicked={openList}
          mapClicked={openMap}
        />
      </FooterContainer>
    </AppContainer>
  );
};

export default Home;

const AppContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 100%;

  @media only screen and (${breakpoint.device.sm}) {
    display: flex;
    margin: 0;
  }
`;

const FooterContainer = styled.div`
  display: none;
  @media only screen and (${breakpoint.device.sm}) {
    display: block;
    width: 100%;
    position: sticky;
    bottom: 0;
  }
`;
