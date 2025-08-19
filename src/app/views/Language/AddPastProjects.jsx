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

export default function AddPastProjects() {
  const navigate = useNavigate();
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [crewSize, setCrewSize] = useState("");
  const [budget, setBudget] = useState("");

  const toggleProjectType = (type) => {
    setSelectedProjects((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

const UploadBox = ({ label, name, setFieldValue, value, sx }) => (
    <Box sx={{ mt: 2 }}>
    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
      Media Proof
    </Typography>

    <label htmlFor="upload-input">
      <Box
        sx={{
          border: "2px dashed #f5b9a7", // light peach border
          backgroundColor: "#fff4f0", // peach background
          borderRadius: 2,
          textAlign: "center",
          cursor: "pointer",
          height: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": { borderColor: "#ff6f3c" }, // orange hover
          transition: "border-color 0.3s ease",
          p: 2,
        }}
      >
        {value ? (
          <img
            src={value}
            alt="Uploaded"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        ) : (
          <>
            <CloudUploadIcon sx={{ fontSize: 36, color: "#ff6f3c" }} />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Drop file or <strong>browse</strong>
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mt: 0.5 }}
            >
              Format: .jpeg, .png & Max file size: 25 MB
            </Typography>
          </>
        )}
      </Box>
    </label>

    <input
      id="upload-input"
      type="file"
      accept="image/jpeg, image/png"
      style={{ display: "none" }}
      onChange={(event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setFieldValue(name, reader.result);
          };
          reader.readAsDataURL(file);
        }
      }}
    />
   </Box>
);


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
         Add your past projects
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          List every project you 've worked on so studios can gauge your real-world experience.
        </Typography>
      </Box>

    <PastProjectCard/>

      {/* Form Fields */}
      <Typography
    sx={{
    fontWeight: 500,
    marginTop: 2,
  }}
      >Project title</Typography>
      <TextField
        // label="Full name"
        placeholder="Ex: John"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Typography fontWeight={500}>Release Year</Typography>

    <TextField
  placeholder="Ex: 1998"
  variant="outlined"
  fullWidth
 
/>

      <Typography fontWeight={500}>Your role</Typography>

      <TextField
        placeholder="Ex: John"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Typography fontWeight={500}>What was the project about</Typography>

      <TextField
        // label="Bio"
        placeholder="Placeholder"
        variant="outlined"
        fullWidth
        multiline
        minRows={3}
        sx={{ mb: 2 }}
      />
<Typography fontWeight={500}>Industry</Typography>
      <TextField
        // label="Full name"
        placeholder="Ex: John"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Typography fontWeight={500}>Project Link</Typography>

    <TextField
        placeholder="Ex: John"
  variant="outlined"
  fullWidth
/>
      <Typography 
   
      sx={{
        textAlign: 'right',
        color: "#2196f3",
        fontWeight: 600
      }}
      >Add More</Typography>


      <UploadBox
                  // label="Upload Cover Image"
                  name="coverImage"
                //   setFieldValue={setFieldValue}
                //   value={values.coverImage}
                />

    

      <Box
  sx={{
    // width: "100%",
    maxWidth: 600,
    display: "flex",
    justifyContent: "space-between",
    mt: 4,
    gap: 2, // space between buttons
  }}
>
  <Button
    variant="outlined"
    sx={{
      width: 140, // fixed width
      borderRadius: "20px",
      textTransform: "none",
      color: "#333",
      borderColor: "#ccc",
      marginLeft: 15
    }}
  >
    Continue
  </Button>
  <Button
   onClick={() => {
  navigate("/Language/Endorsement")}
}
    variant="contained"
    sx={{
      width: 140, // fixed width
      borderRadius: "20px",
      textTransform: "none",
      backgroundColor: "#ff6f3c",
      "&:hover": { backgroundColor: "#e65a28" },
    }}
  >
    + Add More
  </Button>
</Box>

    </Box>
  );
}
