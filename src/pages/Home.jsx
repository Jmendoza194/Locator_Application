import React from "react";

import { Box } from "grommet";
import styled from "styled-components";

import Header from "../components/Header/Header.component";
import breakpoint from "../styles/breakpoint";

const Home = () => {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
};

export default Home;

const AppContainer = styled(Box)`
  margin: 1.5rem 17rem 0 17rem;
  @media only screen and (${breakpoint.device.lg}) {
    margin: 1.5rem 10rem 0 10rem;
  }

  @media only screen and (${breakpoint.device.sm}) {
    margin: 0;
  }
`;
