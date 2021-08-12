import React from "react";

import styled from "styled-components";
import { Box, Text } from "grommet";

import { useLocation } from "../../context/useLocation";
import { breakpoint } from "../../styles/breakpoint";

const TimeList = () => {
  const { state } = useLocation();
  const { selected_location, today } = state;

  const timeArr = [
    {
      day: "Monday",
      open: selected_location.monday_open,
      closed: selected_location.monday_close,
    },
    {
      day: "Tuesday",
      open: selected_location.tuesday_open,
      closed: selected_location.tuesday_close,
    },
    {
      day: "Wednesday",
      open: selected_location.wednesday_open,
      closed: selected_location.wednesday_close,
    },
    {
      day: "Thursday",
      open: selected_location.thursday_open,
      closed: selected_location.thursday_close,
    },
    {
      day: "Friday",
      open: selected_location.friday_open,
      closed: selected_location.friday_close,
    },
    {
      day: "Satruday",
      open: selected_location.saturday_open,
      closed: selected_location.saturday_close,
    },
  ];

  const renderTime = timeArr.map(({ day, open, closed }) => {
    return (
      <TimeBox key={day} today={today === day}>
        <Text>{day}</Text>
        <Text>
          {open} - {closed}
        </Text>
      </TimeBox>
    );
  });

  return (
    <ListContainer direction="row" wrap={true}>
      {" "}
      {renderTime}
    </ListContainer>
  );
};

const TimeBox = styled(Box)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-right: 2rem;
  ${({ today }) =>
    today &&
    `
    font-weight: 700;
  `}
`;

const ListContainer = styled(Box)`
  @media only screen and (${breakpoint.device.sm}) {
    margin-top: 1rem;
  }
`;

export default TimeList;
