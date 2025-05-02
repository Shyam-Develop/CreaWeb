import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Joinus = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const handleContinue = () => {
    if (selectedRole) {
      alert(`Joined as ${selectedRole}. Account verified successfully!`);
      navigate("/home");
    } else {
      alert("Please select a role to continue.");
    }
  };

  const handleSkip = () => {
    navigate("/country-industry");
  };

  const roles = ["Aspirant", "Professional", "Business", "Technician"];

  return (
    <div style={styles.container}>
      {/* Skip on top right */}
      <div style={styles.skipWrapper}>
        <span style={styles.skip} onClick={handleSkip}>
          Skip
        </span>
      </div>

      <div style={styles.stepsContainer}>
        {["I am", "Self", "Experience", "Education"].map((label, index) => (
          <div key={index} style={styles.stepWrapper}>
            <span style={styles.stepLabel}>{label}</span>
            <div style={styles.stepDot} />
            <div style={styles.stepLine} />
          </div>
        ))}
      </div>

      <h2 style={styles.uploadIdTitle}>Join as...</h2>

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
  skipWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "8px",
  },
  skip: {
    fontSize: "16px",
    color: "#666",
    cursor: "pointer",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
    marginBottom: "24px",
    marginTop: "28px",
    marginBottom: "50px"
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
    marginTop: "30px"
  },
};

export default Joinus;
