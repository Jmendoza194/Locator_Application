import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Header, Text, Image, Box } from "grommet";
import styled from "styled-components";

import rioDesktopLogo from "../../assets/rioseo-logo.png";
import rioMobileLogo from "../../assets/rioseo-logo-mobile.png";
import locationIcon from "../../assets/location-icon.png";
import breakpoint from "../../styles/breakpoint";

const HeaderComponent = () => {
  return (
    <ResponsiveHeader gap="none">
      <Bar />
      <DesktopLogo src={rioDesktopLogo} alt="rio seo logo" />
      <MobileLogo src={rioMobileLogo} alt="rio seo mobile logo" />
      <DesktopHeaderText gap="large" direction="row">
        <Text>Menu</Text>
        <Box direction="row" gap="xsmall">
          <Box height="20px">
            <Image fit="contain" src={locationIcon} alt="Location Icon" />
          </Box>
          <Text>Truck Locator</Text>
        </Box>
      </DesktopHeaderText>
      <LocationIcon />
    </ResponsiveHeader>
  );
};

export default HeaderComponent;

const ResponsiveHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  @media only screen and (${breakpoint.device.sm}) {
    padding: 0.5rem 0;
    background-color: #444444;
  }
`;

const DesktopLogo = styled(Image)`
  @media only screen and (${breakpoint.device.sm}) {
    display: none;
  }
`;

const MobileLogo = styled(Image)`
  display: none;
  @media only screen and (${breakpoint.device.sm}) {
    align-self: center;
    display: block;
  }
`;

const DesktopHeaderText = styled(Box)`
  @media only screen and (${breakpoint.device.sm}) {
    display: none;
  }
`;

const LocationIcon = styled(IoLocationOutline)`
  display: none;
  @media only screen and (${breakpoint.device.sm}) {
    display: block;
    color: white;
    font-size: 25px;
    margin-right: 1rem;
  }
`;

const Bar = styled(FaBars)`
  display: none;
  @media only screen and (${breakpoint.device.sm}) {
    display: block;
    color: white;
    font-size: 25px;
    margin-left: 1rem;

    &:hover{
      cursor: pointer;
    }
  }
`;
