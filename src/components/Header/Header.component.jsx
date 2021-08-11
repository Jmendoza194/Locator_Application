import React from "react";

import { Header, Text, Image, Box } from "grommet";

import rioLogo from "../../assets/rioseo-logo.png";
import locationIcon from "../../assets/location-icon.png";

const HeaderComponent = () => {
  return (
    <Header>
      <Image src={rioLogo} alt="rio seo logo" />
      <Box gap="large" direction="row">
        <Text>Menu</Text>
        <Box direction="row" gap="xsmall">
          <Box height="20px">
            <Image fit="contain" src={locationIcon} alt="Location Icon" />
          </Box>
          <Text>Truck Locator</Text>
        </Box>
      </Box>
    </Header>
  );
};

export default HeaderComponent;
