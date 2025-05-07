import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import Crea from "../../../assets/logo.jpg";

const CreaScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/crea/on-boarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        bgcolor: "#fff", // white background
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ color: "#2e2f3e", fontWeight: "bold" }}>
        CREA
      </Typography>

      <Box mt={4}>
        <img
          src={Crea}
          alt="CREA Logo"
          style={{ maxWidth: "300px", width: "100%", height: "auto" }}
        />
      </Box>
    </Container>
  );
};

export default CreaScreen;
