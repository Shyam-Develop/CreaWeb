import React from "react";
import { useNavigate } from "react-router-dom";

const UploadgovID = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    alert("Account verified successfully!");
    navigate("/home");
  };

  const handleSkip = () => {
    navigate("/session/join-us");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div></div>
        <span style={styles.skip} onClick={handleSkip}>Skip</span>
      </div>

      <h2 style={styles.uploadIdTitle}>Upload a Government ID</h2>
      <h1 style={styles.subtitle}>This is to make sure you're a valid person</h1>

      <div style={styles.inputWrapper}>
        <p style={styles.uploadLabel}>Upload Document</p>
        <div style={styles.fileInputWrapper}>
          <input
            type="file"
            accept="image/jpeg, image/png, application/pdf"
            style={styles.fileInput}
          />
          <p style={styles.chooseFileLabel}>Choose file to upload</p>
          <p style={styles.fileNote}>Select file in JPEG, PNG, or PDF format</p>

        </div>
        <p style={styles.fileNote}>The file size should not exceeded 2mb</p>

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
  uploadLabel: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "10px",
  },
  chooseFileLabel: {
    fontSize: "16px",
    marginBottom: "8px",
    color: "#4285F4",
    cursor: "pointer",
  },
  fileInputWrapper: {
    border: "2px solid #4285F4",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  },
  fileInput: {
    display: "none",
  },
  fileNote: {
    fontSize: "14px",
    color: "#666",
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

export default UploadgovID;
