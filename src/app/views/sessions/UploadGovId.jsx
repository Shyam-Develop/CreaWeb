import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";


const UploadgovermentID = () => {
  const navigate = useNavigate();

  const [aadhaarCard, setAadhaarCard] = useState("");
  const [panCard, setPanCard] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");

  const handleContinue = () => {
    alert("Account verified successfully!");
    navigate("/home");
  };

  const handleSkip = () => {
    navigate("/session/uploadgov-id");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div></div>
        <span style={styles.skip} onClick={handleSkip}>Skip</span>
      </div>

      <h2 style={styles.uploadIdTitle}>Upload a GovernmentID</h2>
      <h1 style={styles.subtitle}>This is to make sure you're a valid person</h1>

      <div style={styles.inputWrapper}>
        <div style={styles.inputContainer}>
          <span style={styles.rupeeSymbol}>₹</span>
          <select
            style={styles.selectField}
            value={aadhaarCard}
            onChange={(e) => setAadhaarCard(e.target.value)}
          >
            <option value="" disabled>Aadhaar Card</option>
            <option value="aadhaar">Aadhaar Card</option>
          </select>
        </div>
      </div>

      <div style={styles.inputWrapper}>
        <div style={styles.inputContainer}>
          <FaRegCreditCard style={styles.iconStyle} />
          <select
            style={styles.selectField}
            value={panCard}
            onChange={(e) => setPanCard(e.target.value)}
          >
            <option value="" disabled>PAN Card</option>
            <option value="pan">PAN Card</option>
          </select>
        </div>
      </div>

      <div style={styles.inputWrapper}>
        <div style={styles.inputContainer}>
          <FaIdCard style={styles.iconStyle} />
          <select
            style={styles.selectField}
            value={drivingLicense}
            onChange={(e) => setDrivingLicense(e.target.value)}
          >
            <option value="" disabled>Driving License</option>
            <option value="dl">Driving License</option>
          </select>
        </div>
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
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  skip: {
    fontSize: "16px",
    color: "#666",
    cursor: "pointer",
  },
  uploadIdTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  inputWrapper: {
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    border: "1px solid #ccc",
    overflow: "hidden",
  },
  rupeeSymbol: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    borderRight: "1px solid #ccc",
    color: "#333",
  },
  iconStyle: {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#f9f9f9",
    borderRight: "1px solid #ccc",
    color: "#333",
  },
  selectField: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    outline: "none",
  },
  continueButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4285F4",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default UploadgovermentID;
