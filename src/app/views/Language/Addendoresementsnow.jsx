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
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate, useParams } from "react-router-dom";
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

export default function Addendoresementsnow() {
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
      Video 
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
              Upload MP4 Upto 100 MB
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
const UploadVideoBox = ({
  label,
  name,
  setFieldValue,
  value,
  sx,
  disabled,
}) => {
  const inputId = `upload-input-${name}`; // Ensure unique ID if reused
  const params = useParams();
  const isSearchMode = params.mode === "search";
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>

      <label htmlFor={inputId}>
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
            <video
              src={value}
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <Box>
              <IconButton
                component="span"
                size="large"
                isabled={isSearchMode || disabled}
              >
                            <CloudUploadIcon sx={{ fontSize: 36, color: "#ff6f3c" }} />

                {/* <UploadFileIcon
                  sx={{ fontSize: 40, color: "text.secondary" }}
                /> */}
              </IconButton>
              <Typography variant="body2" sx={{ mt: 1 }}>
              Drop file or <strong>browse</strong>
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mt: 0.5 }}
            >
              Upload MP4 Upto 100 MB
            </Typography>
            </Box>
          )}
        </Box>
      </label>

      <input
        id={inputId}
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
        style={{ display: "none" }}
        onChange={async (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
              const base64Image = reader.result;
              // const localUrl = URL.createObjectURL(file);
              setFieldValue(name, base64Image);
            };
            reader.readAsDataURL(file);
          }
        }}
        disabled={isSearchMode || disabled}
      />
    </Box>
  );
};


  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
  <KeyboardBackspaceIcon onClick={() => navigate(-1)} />
  <Button
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
  </Button>
</Box>
      <Box sx={{ maxWidth: 800, width: "100%", p: 2, textAlign: "center" }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
         Add endoresements now
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
      >Descriptor</Typography>
      <TextField
        placeholder="Ex: John"
        variant="outlined"
        fullWidth
        // sx={{ mb: 2 }}
      />
       <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          Who's endorsing you or context e.g., `Director's Note.
        </Typography>
    <Typography
    sx={{
    fontWeight: 500,
    marginTop: 2,
  }}
      >Descriptor's Note</Typography>
      <TextField
        placeholder="Ex: John"
        variant="outlined"
        fullWidth
        multiline
        minRows={3}
        sx={{ mb: 2 }}
      />
 <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          What are they saying about you?
        </Typography>
      <Typography fontWeight={500}>Link</Typography>

    <TextField
        placeholder="Ex: John"
  variant="outlined"
  fullWidth
 
/>
 <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          Paste a public URL(Youtube/Video/Drive)
                  </Typography>

    


       <UploadVideoBox
                            label="Upload Videos"
                            name="video"
                            // setFieldValue={setFieldValue}
                            // value={values.video}
                            // disabled={params.mode === "search"}
                          />
 <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          A Video Where They talk about your work
                  </Typography>
    

  <Box
  sx={{
    maxWidth: 600,
    mx: "auto",
    mt: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  {/* Right corner buttons (endorsement + add more) */}
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
    }}
  >
    {/* Send Endorsement Invite */}
    <Button
      variant="outlined"
      endIcon={<ShareIcon sx={{ fontSize: 18 }} />}
      sx={{
        borderRadius: "20px",
        textTransform: "none",
        backgroundColor: "#E3F2FD",
        color: "#1976d2",
        borderColor: "#E3F2FD",
        "&:hover": {
          backgroundColor: "#BBDEFB",
          borderColor: "#BBDEFB",
        },
      }}
    >
      Send endorsement invite
    </Button>

   
  </Box>

    <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 2,
    }}
  >
  

    {/* Add More */}
    <Button
      onClick={() => navigate("/Language/Endorsement")}
      variant="contained"
      startIcon={<AddCircleOutlineIcon />}
      sx={{
        borderRadius: "20px",
        textTransform: "none",
        backgroundColor: "#ff6f3c",
        "&:hover": { backgroundColor: "#e65a28" },
      }}
    >
      Add More
    </Button>
  </Box>

  {/* Continue Button - centered below */}
  <Button
    onClick={() => navigate("/Language/OwnerAccount")}
    variant="outlined"
    sx={{
      mt: 4,
      borderRadius: "20px",
      textTransform: "none",
      fontWeight: "bold",
      color: "#333",
      borderColor: "#ccc",
      "&:hover": {
        backgroundColor: "transparent",
        borderColor: "#ccc",
        color: "#333",
      },
    }}
  >
    Continue
  </Button>
</Box>



    </Box>
  );
}
