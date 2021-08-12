import React, { useState } from "react";

import { Box } from "grommet";
import styled from "styled-components";

import Header from "../components/Header/Header.component";
import LocationTable from "../components/LocationTable/LocationTable.component";
import Footer from "../components/Footer/Footer.component";
import MobileView from "../components/MobileView/MobileView.component";
import { breakpoint } from "../styles/breakpoint";
import { useFetchLocations } from "../util/useFetchLocations.jsx";
import { useLocation } from "../context/useLocation";
import { useDay } from "../util/useDay";
import { useWindowSize } from "../util/useWindowSize";

const Home = () => {
  const { dispatch } = useLocation();
  const { width } = useWindowSize();

  useDay(dispatch);
  useFetchLocations(dispatch);

  return (
    <AppContainer>
      <Header />
      {width > 768 ? (
        <LocationTable />
      ) : (
        <>
          <MobileView />
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </>
      )}
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
