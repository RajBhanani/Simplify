import { Alert, Box, Typography, styled } from "@mui/material";

import GreenTextField from "../components/stickers/GreenTextField";
import PasswordTextField from "../components/stickers/PasswordTextField";
import CustomButton from "../components/stickers/CustomButton";

import StyledLink from "../components/stickers/StyledLink";

const LoginBackgroundBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginBox = styled(Box)({
  width: "25%",
  height: "65%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 10px",
  gap: "4vh",
});

const ExtraButtonBox = styled(Box)({
  display: "flex",
  gap: "50%",
  justifyContent: "center",
  alignItems: "center",
});

const Login = () => {
  return (
    <LoginBackgroundBox>
      <LoginBox>
        <Typography variant="h4">Login to Account</Typography>
        <GreenTextField label={"Email"} width="80%" />
        <PasswordTextField width="80%" />
        <CustomButton
          variant="contained"
          text="Login"
          color="white"
          background="#3DD455"
          borderColor="#3DD455"
          hoverBackground="#3DD4557F"
          hoverborderColor="#3DD455"
          hoverColor="#3DD455"
          width={"50%"}
        />
        <ExtraButtonBox>
          <StyledLink>
            <Typography noWrap color={"black"}>
              Sign up
            </Typography>
          </StyledLink>
          <StyledLink>
            <Typography noWrap color={"black"}>
              Forgot Password
            </Typography>
          </StyledLink>
        </ExtraButtonBox>
      </LoginBox>
    </LoginBackgroundBox>
  );
};

export default Login;
