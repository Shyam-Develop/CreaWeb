import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import creaLogo from "../../../assets/logo.jpg";

const ChooseLang = () => {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState(null);

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
  };

  const handleContinue = () => {
    if (!selectedLang) {
      alert("Please select a language");
      return;
    }
    // navigate to the next page
    navigate("/next-page");
  };

  return (
   <Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // pushes top, middle, and bottom apart
    alignItems: "center",
    p: 3,
  }}
>
  {/* Top Section - Logo */}
  <Box
    sx={{
      mt: 4,
      display: "flex",
      alignItems: "center", // vertically center logo & text
      gap: 1, // space between logo and text
    }}
  >
    <img src={creaLogo} alt="CREA Logo" style={{ height: 40 }} />
    <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1b3b5f" }}>
      CREA
    </span>
  </Box>

  {/* Middle Section - Language Selection */}
  <Box sx={{ textAlign: "center" }}>
    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
      Select your language
    </Typography>
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
      <Button
        variant={selectedLang === "English" ? "contained" : "outlined"}
      onClick={() => {
  navigate("/Language/ChooseLangType");
  handleLanguageSelect("English");
}}
        sx={{ borderRadius: "10px", px: 3 }}
      >
        English
      </Button>
      <Button
        variant={selectedLang === "Tamil" ? "contained" : "outlined"}
        onClick={() => handleLanguageSelect("Tamil")}
        sx={{ borderRadius: "10px", px: 3 }}
      >
        Tamil
      </Button>
    </Box>
  </Box>

  {/* Bottom Section - Continue Button + Note */}
  <Box sx={{ width: "100%", mb: 4, alignItems: 'center' }}>
 {/* Bottom Section - Continue Button + Note */}
<Box
  sx={{
    width: "100%",
    mb: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Button
    variant="contained"
    sx={{
      width: "250px",
      backgroundColor: "#FF5722",
      borderRadius: "30px",
      py: 1.5,
      fontWeight: "bold",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: "#E64A19",
      },
    }}
    onClick={handleContinue}
  >
    Continue
  </Button>
  <Typography
    variant="caption"
    sx={{
      display: "block",
      textAlign: "center",
      mt: 1,
      color: "text.secondary",
    }}
  >
    Everything in Crea will appear in the language you choose.
    You can switch later in Settings.
  </Typography>
</Box>

  </Box>
</Box>

  );
};

export default ChooseLang;
