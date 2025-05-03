import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Checkbox,
  Grid,
  TextField,
  Box,
  styled,
  useTheme,
  Typography,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "app/hooks/useAuth";
import { Paragraph } from "app/components/Typography";
import backgroundImage from "../../../assets/photo1.jpg";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
  display: "flex",
}));

const ContentBox = styled("div")(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)",
}));

const StyledRoot = styled("div")(() => ({
  backgroundImage: `url(/assets/images/meat1.jpg)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#1A2038",
  backgroundSize: "cover", // Cover the whole container
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  minHeight: "100% !important",
  "& .card": {
    maxWidth: 400,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
  },

  ".img-wrapper": {
    height: "100%",
    minWidth: 320,
    display: "flex",
    padding: "2rem 2rem 1rem 2rem",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));


// form field validation schema

export default function JwtLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/session/login-details");
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };

  const handleSignUp = () => {
    navigate("/session/signup-page");
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          p: 5,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          Welcome
        </Typography>

        <Typography
          sx={{
            mb: 4,
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Stay signed in with your account to make it easier
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: "#4285F4",
            mb: 2,
            width: 200,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#3367d6",
            },
          }}
        >
          Login
        </Button>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSignUp}
          sx={{
            backgroundColor: "#34A853",
            width: 200,
            borderRadius: 1,
            mb: 2,
            "&:hover": {
              backgroundColor: "#2c8c47",
            },
          }}
        >
          Sign Up
        </Button>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography
            sx={{
              color: "white",
              textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
              fontSize: 16,
              mb: 1,
            }}
          >
            Continue with Login via Google
          </Typography>
          <FaGoogle
            style={{
              fontSize: "30px",
              color: "#DB4437",
              cursor: "pointer",
            }}
            onClick={handleGoogleLogin}
          />
        </Box>
      </Box>
    </Box>
  );
};