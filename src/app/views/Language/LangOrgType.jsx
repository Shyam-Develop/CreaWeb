import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  Radio,
} from "@mui/material";
import creaLogo from "../../../assets/logo.jpg";

const LangOrgType = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }
    navigate("/Language/LangProfile");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
      }}
    >
      {/* Top Section - Logo */}
      <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 1 }}>
        <img src={creaLogo} alt="CREA Logo" style={{ height: 40 }} />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1b3b5f" }}>
          CREA
        </span>
      </Box>

      {/* Middle Section */}
      <Box sx={{ textAlign: "center", maxWidth: 300 }}>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(11, 11, 12, 1)",
            fontWeight: 600,
            fontSize: "24px",
            mb: 1,
          }}
        >
          Select your Organisation type
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
          This helps us tailor verification and posting requirements.
        </Typography>

        {/* Option Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2,  }}>
          {[
            {
              label: "Studio/Company",
              desc: "Registered Business Hiring for Multiple Productions.",
            },
            {
              label: "Indie Producer/Director",
              desc: "Individuals or small teams hiring for a single project.",
            },
          ].map((item) => (
            <Card
              key={item.label}
              variant="outlined"
              sx={{
                borderRadius: "12px",
                borderColor:
                  selectedOption === item.label ? "#FF5722" : "rgba(0,0,0,0.12)",
              }}
              onClick={() => handleSelect(item.label)}
            >
       <CardActionArea sx={{ p: 3 }}>
  {/* Top row with label and radio */}
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>
    <Radio
      checked={selectedOption === item.label}
      onChange={() => handleSelect(item.label)}
      color="primary"
    />
  </Box>

  {/* Description text aligned left */}
  <Typography
    variant="body2"
    sx={{ opacity: 0.7, textAlign: "left", mt: 1 }}
  >
    {item.desc}
  </Typography>
</CardActionArea>


            </Card>
          ))}
        </Box>
      </Box>

      {/* Bottom Section - Buttons */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Button
          variant="outlined"
          sx={{ borderRadius: "20px", px: 3 }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF5722",
            borderRadius: "20px",
            px: 3,
            "&:hover": { backgroundColor: "#E64A19" },
          }}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default LangOrgType;
