import { Box, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";

import CustomButton from "./stickers/CustomButton";
import StyledLink from "./stickers/StyledLink";
import theme from "../constants/theme";
import SelectedButton from "./SelectedButton";
import UnselectedButton from "./UnselectedButton";

import { useLocation, useNavigate } from "react-router-dom";

const NavBox = styled(Box)({
  display: "flex",
  gap: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
});

const NavButtons = () => {
  const location = useLocation();
  return (
    <NavBox>
      {location.pathname.includes("/home") ? (
        <SelectedButton text={"Home"} />
      ) : (
        <UnselectedButton text={"Home"} />
      )}
      {location.pathname.includes("/events") ? (
        <SelectedButton text={"Events"} />
      ) : (
        <UnselectedButton text={"Events"} />
      )}
      {location.pathname.includes("/books") ? (
        <SelectedButton text={"Books"} />
      ) : (
        <UnselectedButton text={"Books"} />
      )}
      {location.pathname.includes("/notes") ? (
        <SelectedButton text={"Notes"} />
      ) : (
        <UnselectedButton text={"Notes"} />
      )}
      {location.pathname.includes("/profile") ? (
        <SelectedButton text={"Profile"} />
      ) : (
        <UnselectedButton text={"Profile"} />
      )}
    </NavBox>
  );
};

export default NavButtons;
