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
      maxWidth="xs"
      sx={{
        bgcolor: "#ccc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Typography variant="h2" sx={{ color: "#2e2f3e", fontWeight: "bold" }}>
        CREA
      </Typography>

      <Box mt={4}>
        <img
          src={Crea}
          alt="CREA Logo"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Container>
  );
};

export default CreaScreen;
