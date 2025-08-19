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

export default function HiringPreference() {
  const navigate = useNavigate();
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [crewSize, setCrewSize] = useState("");
  const [budget, setBudget] = useState("");
const crewSizes = ["1-5", "6-10", "11-20", "20+"];
const industryTypes = [
  "Films",
  "OTT",
  "Ads",
  "Hindi",
  "Short Film",
  "Feature Film",
];
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
      Your Hiring Preferences
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
         Help us Pre-fill job Post and recommend the right talent.
        </Typography>
      </Box>

      <Box sx={{ height: 2, width: 780, bgcolor: "grey.300", mb: 2 }} />
       

  
 <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
        Typical Project types
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {industryTypes.map((type) => (
          <Chip
            key={type}
            label={type}
            onClick={() => toggleProjectType(type)}
            variant={selectedProjects.includes(type) ? "filled" : "outlined"}
            color={selectedProjects.includes(type) ? "primary" : "default"}
            sx={{ borderRadius: "30px" }}
          />
        ))}
      </Box>
    <Typography fontWeight={500}>Average Crew size</Typography>
 <TextField
        select
        value={crewSize}
        onChange={(e) => setCrewSize(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {crewSizes.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </TextField>
     
      <Box
        sx={{
          width: "100%",
          mt: 20,
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
         onClick={() => navigate('/MyProfile/Basicinfo')}

        >
          Continue
        </Button>
         </Box>
    </Box>
  );
}
