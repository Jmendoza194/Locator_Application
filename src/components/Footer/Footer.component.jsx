import React from "react";

import styled from "styled-components";
import { Box } from "grommet";

import breakpoint from "../../styles/breakpoint";

const Footer = ({
  listClicked,
  mapClicked,
  handleMapClick,
  handleListClick,
}) => {
  return (
    <FooterContainer>
      <FooterButton
        onClick={handleListClick}
        Selected={listClicked ? true : false}
      >
        List
      </FooterButton>
      <FooterButton
        onClick={handleMapClick}
        Selected={mapClicked ? true : false}
      >
        Map
      </FooterButton>
    </FooterContainer>
  );
};
const FooterContainer = styled(Box)`
  display: none;
  @media only screen and (${breakpoint.device.sm}) {
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    box-shadow: 0px -1px 3px 1px rgb(1, 1, 1, 0.2);
  }
`;

const FooterButton = styled.button`
  border: none;
  width: 100%;
  padding: 2rem;
  color: ${(props) => (props.Selected ? "white" : "#fc8f00")};
  background-color: ${(props) => (props.Selected ? "#fc8f00" : "white")};
`;

export default Footer;
