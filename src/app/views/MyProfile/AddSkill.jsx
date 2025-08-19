import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Chip,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search"; // ✅ using MUI Search Icon instead of missing image

// Dummy skill data (replace with API data later)
const sampleSkills = [
  { RecordID: 1, Name: "Acting" },
  { RecordID: 2, Name: "Direction" },
  { RecordID: 3, Name: "Editing" },
  { RecordID: 4, Name: "Cinematography" },
];

const UploadButton = styled(Button)({
  textTransform: "none",
  fontSize: "14px",
  borderRadius: "20px",
});

export default function Basicinfo() {
  const navigate = useNavigate();

  // ✅ State for search + selected skills
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const skillRefs = useRef({});

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const toggleSkill = (skillId) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      <KeyboardBackspaceIcon onClick={() => navigate(-1)} />

      {/* Title */}
      <Box sx={{ maxWidth: 800, width: "100%", p: 2, textAlign: "center" }}>
        {/* Search */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search your skill"
          value={searchTerm}
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
          }}
        />

        {/* Skill Chips */}
        <Box
          display="flex"
          flexWrap="wrap"
          gap={1}
          mt={1}
          maxHeight={220}
          sx={{ overflowY: "auto", borderRadius: 1 }}
        >
          {sampleSkills.map((skill) => {
            const isMatched =
              searchTerm &&
              skill.Name.toLowerCase().includes(searchTerm.toLowerCase());
            const isSelected = selectedSkills.includes(skill.RecordID);

            return (
              <Chip
                key={skill.RecordID}
                ref={(el) => (skillRefs.current[skill.RecordID] = el)}
                label={skill.Name}
                onClick={() => toggleSkill(skill.RecordID)}
                clickable
                sx={{
                  backgroundColor: isSelected
                    ? "#4285F4"
                    : isMatched
                    ? "#fff59d"
                    : "#e0ecff",
                  color: isSelected ? "#fff" : "#0056d2",
                  fontWeight: 500,
                }}
              />
            );
          })}
        </Box>

        {/* Continue Button */}
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
            onClick={() => navigate("/Language/LanguageProjects")}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
