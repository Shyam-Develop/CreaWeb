import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const SelectedSkills = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedSkills = location.state?.selectedSkills || [];

    const handleContinue = () => {
        navigate("/session/profile-step");
    };

    return (
        <div style={styles.container}>
            {/* Steps Progress Bar */}
                     <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
                                          <Typography variant="caption" fontWeight={500} color="text.secondary">I am</Typography>
                                          <Typography variant="caption" fontWeight={500} color="primary">Self</Typography>
                                          <Typography variant="caption" fontWeight={500} color="text.secondary">Experience</Typography>
                                          <Typography variant="caption" fontWeight={500} color="text.secondary">Education</Typography>
                                        </Stack>
                                  {/* Profile Section */}
                                     <Box mt={1}>
                                          <LinearProgress variant="determinate" value={37} sx={{ height: 6, borderRadius: 5 }} />
                                        </Box>
            <h2 style={styles.uploadIdTitle}>Choose one skill You want</h2>
            <h2 style={styles.uploadIdTitle2}>to be known for...</h2>


            <div style={styles.skillsWrapper}>
                {selectedSkills.map((skill, index) => (
                    <div key={index} style={styles.skillChip}>
                        {skill}
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
        position: "relative",
        marginBottom: "40px",
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
    uploadIdTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
    },
    uploadIdTitle2: {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "-20px",
    },
    skillsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        maxHeight: "220px",
        overflowY: "auto",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#f5f5f5",
    },
    skillChip: {
        padding: "10px 16px",
        borderRadius: "20px",
        fontSize: "14px",
        backgroundColor: "#4285F4",
        color: "#fff",
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
        marginLeft: "15%",
        display: "flex",
        justifyContent: "center",
    },
};

export default SelectedSkills;
