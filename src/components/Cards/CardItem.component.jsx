import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Text,
  Box,
  Image,
  Heading,
} from "grommet";
import styled from "styled-components";

import PhoneIcon from "../../assets/phone-icon.png";
import { breakpoint } from "../../styles/breakpoint";
import { useLocation } from "../../context/useLocation";

const CardItem = ({ locationInfo }) => {
  const { dispatch } = useLocation();
  const { address, city, state, name, postal_code } = locationInfo;

  const handleClick = () => {
    dispatch({ type: "select_location", payload: locationInfo });
    console.log(locationInfo);
  };

  return (
    <CustomCard height="300px">
      <CustomHeader>
        <TitleHeading level="3">{name}</TitleHeading>
      </CustomHeader>
      <CardBody gap="small" margin={{ left: "1rem", right: "1rem" }}>
        <Box>
          <Text>{address}</Text>
          <Text>
            {city}, {state} {postal_code}
          </Text>
        </Box>
        <Box>
          <Text>Open Today until </Text>
        </Box>
        <Box direction="row">
          <Image src={PhoneIcon} alt="phone Icon" />
          <Text color="#fc8f00"> Number </Text>
        </Box>
      </CardBody>
      <CustomFooter gap="none">
        <FooterButton onClick={handleClick}>Directions</FooterButton>
        <FooterButton>More Info</FooterButton>
      </CustomFooter>
    </CustomCard>
  );
};

const CustomCard = styled(Card)`
  box-shadow: 0px 0px 5px 3px rgb(1, 1, 1, 0.2);
  border-radius: 0;
  margin: 1rem;
`;

const CustomHeader = styled(CardHeader)`
  margin: 1rem;
`;

const CustomFooter = styled(CardFooter)`
  padding: 1rem 0;
  margin: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  max-width: 300px;
`;

const FooterButton = styled.button`
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  border: none;
  background-color: #444444;
  color: white;
  max-width: 140px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (${breakpoint.device.xxs}) {
    font-size: 10px;
  }
`;

const TitleHeading = styled(Heading)`
  @media only screen and (${breakpoint.device.lg}) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export default CardItem;
