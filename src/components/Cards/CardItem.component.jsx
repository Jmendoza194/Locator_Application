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

const CardItem = ({ locationInfo }) => {
  const { address, city, state, name, postal_code } = locationInfo;
  console.log(locationInfo);

  return (
    <CustomCard height="300px">
      <CardHeader
        margin={{
          top: "1rem",
          left: "1.5rem",
          bottom: "1rem",
          right: "1.5rem",
        }}
      >
        <TitleHeading level="2">{name}</TitleHeading>
      </CardHeader>
      <CardBody gap="small" margin={{ left: "1.5rem" }}>
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
      <CustomFooter
        margin={{ left: ".5rem" }}
        pad={{ top: "1rem", bottom: "1rem" }}
        gap="none"
        flex={false}
      >
        <FooterButton>Directions</FooterButton>
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

const CustomFooter = styled(CardFooter)`
  display: block;
`;

const FooterButton = styled.button`
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  border: none;
  background-color: #444444;
  color: white;
  max-width: 200px;
  width: 100%;
  margin-left: 1rem;

  @media only screen and (${breakpoint.device.med}) {
    max-width: 130px;
  }

  @media only screen and (${breakpoint.device.xs}) {
    max-width: 80px;
    font-size: 10px;
    margin-left: 0.5rem;
  }

  @media only screen and (${breakpoint.device.xxs}) {
    max-width: 70px;
    font-size: 10px;
    margin-left: 0.5rem;
  }
`;

const TitleHeading = styled(Heading)`
  @media only screen and (${breakpoint.device.lg}) {
    font-size: 30px;
    line-height: 30px;
  }
`;

export default CardItem;
