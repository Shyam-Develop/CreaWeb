import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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



const Joinus = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const handleContinue = () => {
    if (selectedRole) {
      alert(`Joined as ${selectedRole}. Account verified successfully!`);
      navigate("/session/country-industry");
    } else {
      alert("Please select a role to continue.");
    }
  };

  const handleSkip = () => {
    navigate("/session/country-industry");
  };

  const roles = ["Aspirant", "Professional", "Business", "Technician"];

  return (
    <div style={styles.container}>
      {/* Steps */}
       <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
              <Typography variant="caption" fontWeight={500} color="text.secondary">I am</Typography>
              <Typography variant="caption" fontWeight={500} color="primary">Self</Typography>
              <Typography variant="caption" fontWeight={500} color="text.secondary">Experience</Typography>
              <Typography variant="caption" fontWeight={500} color="text.secondary">Education</Typography>
            </Stack>
      {/* Profile Section */}
         <Box mt={1}>
              <LinearProgress variant="determinate" value={15} sx={{ height: 6, borderRadius: 5 }} />
            </Box>

      {/* Skip */}
      <div style={styles.skipWrapper}>
        <span style={styles.skip} onClick={handleSkip}>
          Skip
        </span>
      </div>

      {/* Title */}
      <h2 style={styles.uploadIdTitle}>Join as...</h2>

      {/* Role Selection */}
      {roles.map((role) => (
        <div
          key={role}
          onClick={() => setSelectedRole(role)}
          style={{
            ...styles.optionBox,
            borderColor: selectedRole === role ? "#4285F4" : "#ccc",
            backgroundColor: selectedRole === role ? "#e7f0fd" : "#f9f9f9",
          }}
        >
          {role}
        </div>
      ))}

      {/* Continue Button */}
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
    position: "relative",
    marginBottom: "50px",
    marginTop: "28px",
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
  skipWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "8px",
  },
  skip: {
    fontSize: "16px",
    color: "#4285F4",
    cursor: "pointer",
    fontWeight: "500",
  },
  uploadIdTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "12px",
    textAlign: "center",
  },
  optionBox: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    marginBottom: "16px",
    cursor: "pointer",
    textAlign: "left",
    paddingLeft: "16px",
  },
  continueButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4285F4",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    marginTop: "30px",
  },

  // Profile styles
  profileContainer: {
    textAlign: "center",
    marginBottom: "30px",
    position: "relative",
  },
  bannerContainer: {
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "180px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
  },
  editIconBanner: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "6px",
    fontSize: "14px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
    cursor: "pointer",
  },
  profilePicWrapper: {
    position: "relative",
    marginTop: "-50px",
    display: "inline-block",
  },
  profilePic: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "4px solid #fff",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#ddd",
  },
  editIconProfile: {
    position: "absolute",
    bottom: "0",
    right: "0",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "4px",
    fontSize: "14px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
    cursor: "pointer",
  },
  profileText: {
    marginTop: "10px",
  },
  profileName: {
    fontSize: "20px",
    fontWeight: "600",
    margin: "6px 0",
  },
  profileRole: {
    fontSize: "14px",
    color: "#666",
  },
};

export default Joinus;
