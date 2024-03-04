import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const ByClubsBox = styled(Box)({
  display: "flex",
  padding: "10px",
  gap: "20px",
  overflowY: "auto",
  height: "100%",
});

const ClubBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "20px",
  width: "175px",
  background: "#D9D9D9",
  borderRadius: "40px",
  gap: "5px",
});

const EventBox = styled(Box)({
  display: "flex",
  width: "100%",
  height: "10%",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
});

const ByClubs = () => {
  const clubEvents = [
    { key: 1, name: "Android Club", events: ["A", "B", "C"] },
    { key: 2, name: "Android Club", events: ["A", "B", "C"] },
    { key: 3, name: "Android Club", events: ["A", "B", "C"] },
    { key: 4, name: "Android Club", events: ["A", "B", "C"] },
  ];

  return (
    <ByClubsBox>
      {clubEvents.map((club) => (
        <ClubBox key={club.key}>
          <Typography variant="h6" align="center" fontWeight={600}>
            {club.name}
          </Typography>
          {club.events.map((event) => (
            <EventBox key={event}>{event}</EventBox>
          ))}
        </ClubBox>
      ))}
    </ByClubsBox>
  );
};

export default ByClubs;
