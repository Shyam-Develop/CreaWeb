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
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PastProjectCard from "./PastProjectCard";

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

export default function OwnerAccount() {
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
  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
  <KeyboardBackspaceIcon onClick={() => navigate(-1)} />
  {/* <Button
    sx={{
      textTransform: 'none',
      fontWeight: 700,
      fontSize: 15,
      color: '#2196f3',
      minWidth: 0,
      px: 1,
    }}
  >
    Skip
  </Button> */}
</Box>

      <Box sx={{ maxWidth: 800, width: "100%", p: 2, textAlign: "center" }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Tell us who's hiring
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          We'll keep these details private but use them to verify and notify you.
        </Typography>
      </Box>
      <Box sx={{ height: 2, width: 780, bgcolor: "grey.300", mb: 2 }} />


      {/* Form Fields */}
      <Typography
    sx={{
    fontWeight: 500,
    marginTop: 5,
  }}
      >Full name</Typography>
      <TextField
        // label="Full name"
        placeholder="Ex: John"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Typography fontWeight={500}>Work e-mail</Typography>

    <TextField
  placeholder="e.g: name@studio.com"
  variant="outlined"
  fullWidth
 
/>

      <Typography fontWeight={500}>Mobile Number</Typography>

         <TextField
       placeholder="e.g. name@studio.com"
       variant="outlined"
       fullWidth
       sx={{ mb: 2 }}
       InputProps={{
         endAdornment: (
           <Button
             color="error"
             size="medium"
             sx={{
               whiteSpace: "nowrap",   // prevent wrapping
               minWidth: "auto",       // remove MUI's default min width
               px: 1.5,                 // control padding so text fits
             }}
           >
             Send OTP
           </Button>
         ),
       }}
     />
     
<Box
  sx={{
    maxWidth: 600,
    display: "flex",
    justifyContent: "center", // centers horizontally
    mt:15,
    ml: 10
  }}
>
  <Button
  onClick={() => navigate('/Language/CompanyVerification')}
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
  >
    Continue
  </Button>
</Box>

    </Box>
  );
}
