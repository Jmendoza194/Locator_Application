import React from "react";

import styled from "styled-components";
import { Box } from "grommet";

import { breakpoint } from "../../styles/breakpoint";

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
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px -2px 3px 1px rgb(1, 1, 1, 0.2);
`;

const FooterButton = styled.button`
  border: none;
  width: 100%;
  padding: 2rem;
  color: ${(props) => (props.Selected ? "white" : "#fc8f00")};
  background-color: ${(props) => (props.Selected ? "#fc8f00" : "white")};
`;

export default Footer;
