import { Box, styled } from "@mui/system";
import Navbar from "../../components/Navbar";
import SelectedButton from "../../components/SelectedButton";
import { Routes, Route } from "react-router-dom";
import ByClubs from "./ByClubs";
import ByDates from "./ByDates";
import UnselectedButton from "../../components/UnselectedButton";

const EventBackgroundBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "95px",
});

const ButtonBox = styled(Box)({
  display: "flex",
  gap: "20px",
  width: "80vw",
  justifyContent: "start",
  alignItems: "start",
});

const EventBox = styled(Box)({
  height: "75vh",
  width: "80vw",
  background: "#F1F1F1",
});

const Events = () => {
  return (
    <>
      <Navbar />
      <EventBackgroundBox>
        <ButtonBox>
          <SelectedButton text={"By Clubs"} />
          <UnselectedButton text={"By Dates"} />
        </ButtonBox>
        <EventBox>
          <Routes>
            <Route path="/" element={<ByClubs />} />
            <Route path="/byDates" element={<ByDates />} />
          </Routes>
        </EventBox>
      </EventBackgroundBox>
    </>
  );
};

export default Events;
