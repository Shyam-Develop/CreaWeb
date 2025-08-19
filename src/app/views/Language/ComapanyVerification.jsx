import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  TextField,
  Chip,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const projectTypes = [
  "Films",
  "OTT",
  "Ads",
  "Hindi",
  "Short Film",
  "Feature Film",
];

const crewSizes = ["1-5", "6-10", "11-20", "20+"];
const budgets = ["< ₹50k", "₹50k - ₹2L", "₹2L - ₹5L", "₹5L+"];

const UploadButton = styled(Button)({
  textTransform: "none",
  fontSize: "14px",
  borderRadius: "20px",
});

export default function CompanyVerification() {
  const navigate = useNavigate();
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [crewSize, setCrewSize] = useState("");
  const [budget, setBudget] = useState("");

  const toggleProjectType = (type) => {
    setSelectedProjects((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      {/* <IconButton onClick={() => navigate(-1)}> */}
      <KeyboardBackspaceIcon onClick={() => navigate(-1)} />
      {/* </IconButton> */}
      {/* Title */}
      <Box sx={{ maxWidth: 800, width: "100%", p: 2, textAlign: "center" }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
         Verify Your Studio
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          Add legal details so creators Know you're legit and invoices list the right info.
        </Typography>
      </Box>

      <Box sx={{ height: 2, width: 780, bgcolor: "grey.300", mb: 2 }} />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
 Logo
      </Typography>

      {/* Profile Photo Upload */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // space between horizontally
          alignItems: "center", // center vertically
          gap: 2,
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#e0e0e0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            mb: 2,
          }}
        >
          <Tooltip title="Upload Photo">
            <IconButton component="label">
              <PhotoCameraIcon sx={{ fontSize: 28, color: "#555" }} />
              <input hidden accept="image/*" type="file" />
            </IconButton>
          </Tooltip>
        </Box>
        {/* <Avatar sx={{ width: 56, height: 56 }} /> */}
        <UploadButton
          sx={{
            backgroundColor: "#006064",
            "&:hover": {
              backgroundColor: "#004d4d",
            },
          }}
          variant="contained"
          startIcon={<CloudUploadIcon />}
          component="label"
        >
          Upload Photo
          <input type="file" hidden />
        </UploadButton>
      </Box>

      {/* Form Fields */}
      <Typography fontWeight={500}>Registered Company Name</Typography>
      <TextField
        // label="Full name"
        placeholder="Ex: John"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Typography fontWeight={500}>GSTIN / PAN / CIN</Typography>

    <TextField
  placeholder="e.g. name@studio.com"
  variant="outlined"
  fullWidth
  sx={{ mb: 2 }}
  // InputProps={{
  //   endAdornment: (
  //     <Button
  //       color="error"
  //       size="medium"
  //       sx={{
  //         whiteSpace: "nowrap",   // prevent wrapping
  //         minWidth: "auto",       // remove MUI's default min width
  //         px: 1.5,                 // control padding so text fits
  //       }}
  //     >
  //       Send OTP
  //     </Button>
  //   ),
  // }}
/>

      <Typography fontWeight={500}>Company Website</Typography>

      <TextField
        // label="Primary location"
        placeholder="Ex: Chennai"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />

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
         onClick={() => navigate('/Language/CompanyVerifyComplete')}

        >
          Continue
        </Button>
         </Box>
    </Box>
  );
}
