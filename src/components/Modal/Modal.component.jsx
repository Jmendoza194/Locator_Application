import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Box,
  Image,
  Text,
  Heading,
} from "grommet";
import styled from "styled-components";

import ImagePlaceholder from "../../assets/image-placeholder.jpg";
import PhoneIcon from "../../assets/phone-icon.png";
import DirectionIcon from "../../assets/direction-icon.png";
import { useLocation } from "../../context/useLocation";
import TimeList from "../util/TimeList.component";
import { breakpoint } from "../../styles/breakpoint";

const Modal = () => {
  const { state, dispatch } = useLocation();
  const { city, address, postal_code, name } = state.selected_location;

  const encodedAddress = encodeURI(address);

  const handleExitClick = () => {
    dispatch({ type: "close_modal" });
  };

  const handleDirectionClick = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin&destination=${encodedAddress}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <ModalBackground>
      <ModalCard>
        <ExitButton onClick={handleExitClick}>&#9747;</ExitButton>
        <ModalHeader>
          <Image
            width="100%"
            height="100%"
            fit="cover"
            src={ImagePlaceholder}
            alt="image placeholder"
          />
        </ModalHeader>
        <CardBody margin={{ left: "1.5rem", right: "1.5rem" }} gap="xsmall">
          <Heading level="5">{name}</Heading>
          <Box>
            <CustomText>{address}</CustomText>
            <CustomText>
              {city}, {state.state} {postal_code}
            </CustomText>
          </Box>
          <Box direction="row" gap="large">
            <Box direction="row">
              <Image src={PhoneIcon} alt="phone Icon" />
              <CustomText color="#fc8f00"> Number </CustomText>
            </Box>
            <DirectionButton onClick={handleDirectionClick}>
              <Image src={DirectionIcon} alt="phone Icon" />
              <CustomText color="#fc8f00"> Get Directions </CustomText>
            </DirectionButton>
          </Box>
          <TimeList />
        </CardBody>
        <ModalFooter>
          <CustomFooterButton
            rel="noopener"
            href={state.selected_location.url}
            target="_blank"
          >
            View Full Details
          </CustomFooterButton>
        </ModalFooter>
      </ModalCard>
    </ModalBackground>
  );
};

//`https://www.google.com/maps/dir/?api=1&destionation${encodedAddress}`

const ModalBackground = styled(Box)`
  z-index: 4;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  height: 100%;
  width: 90%;
  background-color: white;
  margin: 1rem;
  border-radius: 0;
`;

const ModalHeader = styled(CardHeader)`
  height: 200px;
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
  @media only screen and (${breakpoint.device.sm}) {
    height: 250px;
  }

  @media only screen and (${breakpoint.device.xs}) {
    height: 200px;
  }

  @media only screen and (${breakpoint.device.xxs}) {
    margin: 1rem;
    margin-bottom: 0.5rem;
    height: 120px;
  }
`;

const ModalFooter = styled(CardFooter)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

const CustomFooterButton = styled.a`
  border: none;
  border-radius: 0.5rem;
  background-color: #444444;
  color: white;
  text-decoration: none;
  width: 100%;
  padding: 1rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const ExitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  margin-right: 1.5rem;
  margin-top: 0rem;
  color: #bbbfc4;
  font-size: 20px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (${breakpoint.device.xxs}) {
    margin-right: 1rem;
    font-size: 15px;
  }
`;

const DirectionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const CustomText = styled(Text)`
  font-size: 15px;
  line-height: 15px;
  @media only screen and (${breakpoint.device.lg}) {
    font-size: 10px;
    line-height: 15px;
  }
`;

export default Modal;
