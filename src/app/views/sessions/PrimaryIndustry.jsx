import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {
  Box,
  Container,
  Typography,
  Avatar,
  TextField,
  LinearProgress,
  IconButton,
  Button,
  Stack,
} from '@mui/material';

const PrimaryIndustry = ({ title = "Choose one primary industry", images = [], nextPath = "/" }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleContinue = () => {
    navigate("/session/select-your-skills");
  };

  const handleSearch = () => {
    // Search functionality can be added later
  };

  return (
    <div style={styles.container}>
             <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
                         <Typography variant="caption" fontWeight={500} color="text.secondary">I am</Typography>
                         <Typography variant="caption" fontWeight={500} color="primary">Self</Typography>
                         <Typography variant="caption" fontWeight={500} color="text.secondary">Experience</Typography>
                         <Typography variant="caption" fontWeight={500} color="text.secondary">Education</Typography>
                       </Stack>
                 {/* Profile Section */}
                    <Box mt={1}>
                         <LinearProgress variant="determinate" value={25} sx={{ height: 6, borderRadius: 5 }} />
                       </Box>
           
      <h2 style={styles.uploadIdTitle}>{title}</h2>

      <div style={styles.searchWrapper}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search your industry"
          style={styles.searchInput}
        />
        <FiSearch style={styles.searchIcon} onClick={handleSearch} />
      </div>

      <div style={styles.circleImagesWrapper}>
        {images.map((item) => (
          <div key={item.id} style={styles.circleImageContainer}>
            <img src={item.src} alt={item.name} style={styles.circleImage} />
            <span style={styles.imageName}>{item.name}</span>
          </div>
        ))}
      </div>

      <button style={styles.continueButton} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    maxWidth: "480px",
    margin: "0 auto",
    position: "relative",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "28px",
    marginBottom: "50px",
  },
  stepWrapper: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  },
  stepLabel: {
    fontSize: "13px",
    color: "#333",
    marginBottom: "4px",
    display: "block",
  },
  stepDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#4285F4",
    margin: "0 auto",
  },
  stepLine: {
    position: "absolute",
    top: "35px",
    left: "-30%",
    width: "80%",
    height: "3px",
    backgroundColor: "#d6e2fa",
    zIndex: -1,
    transform: "translateX(50%)",
  },
  uploadIdTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "12px",
    textAlign: "center",
  },
  searchWrapper: {
    position: "relative",
    marginBottom: "16px",
    width: "100%",
  },
  searchInput: {
    width: "100%",
    padding: "12px 40px 12px 16px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    right: "16px",
    transform: "translateY(-50%)",
    color: "#888",
    fontSize: "20px",
    cursor: "pointer",
  },
  continueButton: {
    width: "70%",
    padding: "14px",
    backgroundColor: "#4285F4",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    marginTop: "30px",
    marginLeft: "50px",
    display: "flex",
    justifyContent: "center",
  },
  circleImagesWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "40px",
  },
  circleImageContainer: {
    textAlign: "center",
    marginBottom: "24px",
    width: "100px",
  },
  circleImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #e0e0e0",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    backgroundColor: "#fff",
  },
  imageName: {
    display: "block",
    marginTop: "8px",
    fontSize: "14px",
    color: "#333",
    textAlign: "center",
    wordWrap: "break-word",
  },
};

export default PrimaryIndustry;
