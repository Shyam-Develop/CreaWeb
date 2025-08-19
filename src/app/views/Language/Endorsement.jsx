import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
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
import EndoresementCard from "./EndoresementCard";

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

export default function Endorsement() {
  const navigate = useNavigate();
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [crewSize, setCrewSize] = useState("");
  const [budget, setBudget] = useState("");

  const toggleProjectType = (type) => {
    setSelectedProjects((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
         <div>
      {/* Skip button */}
      {/* <Button
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          fontWeight: 700,
          fontSize: 15,
          color: "#2196f3",
          minWidth: 0,
          px: 1,
        }}
      >
        Skiphii
      </Button> */}

      {/* Confirmation card */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            p: 3,
            textAlign: "center",
            maxWidth: 400,
          },
        }}
      >
        <DialogContent>
          <Typography variant="h6" fontWeight={700}>
            Skip endorsements for now?
          </Typography>
          <Typography sx={{ mt: 1, mb: 3, color: "text.secondary" }}>
            Endorsements boost your credibility and unlock more opportunities.
            Are you sure you want to skip?
          </Typography>

          <Box display="flex" justifyContent="center" gap={3}>
            <Button
              onClick={handleClose}
              sx={{
                textTransform: "none",
                color: "#000",
              }}
            >
              Skip
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                textTransform: "none",
                color: "#ff5722",
                fontWeight: 600,
              }}
            >
              Go Back
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
  <KeyboardBackspaceIcon onClick={() => navigate(-1)} />
  <Button
   onClick={handleOpen}
    sx={{
      textTransform: 'none',
      fontWeight: 700,
      fontSize: 15,
      color: '#2196f3',
      minWidth: 0,
      px: 1,
    }}
  >
    Skip for alert
  </Button>
   
</Box>
      <Box sx={{ maxWidth: 800, width: "100%", p: 2, textAlign: "center" }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
         Add Endoresemens
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
            Share shout-outs or praise from collabarators these boost trust with studios
        </Typography>
      </Box>

<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
  <EndoresementCard />
  <EndoresementCard />
</Box>


    

      <Box
  sx={{
    // width: "100%",
    maxWidth: 600,
     display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 4,
  }}
>
  <Button
  onClick={() => navigate(`/Language/Addendoresementsnow`)}
    variant="outlined"
    sx={{
      width: 140, // fixed width
      borderRadius: "20px",
      textTransform: "none",
      color: "#333",
      backgroundColor: "#e0e0e0",
       borderColor: "transparent",
       "&:hover": {
      borderColor: "transparent", // no bg color
      backgroundColor: "#e0e0e0",         // same border on hover
      color: "#333",                  // same text color on hover
    },
      marginLeft: 15
    }}
  >
    Continue
  </Button>
 
</Box>

    </Box>
  );
}
