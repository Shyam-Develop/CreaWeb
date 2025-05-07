import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";

const UploadgovermentID = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setFileName(file.name);
    } else {
      alert("File size should not exceed 2 MB");
    }
  };

  const handleContinue = () => {
   
    navigate("/session/load-screen");
  };

  const handleSkip = () => {
    navigate("/session/uploadgov-id");
  };

  return (
    <div style={styles.container}>
     

      <h3 style={styles.uploadIdTitle}>Upload a GovernmentID</h3>
      <h1 style={styles.subtitle}>This is to make sure you're a valid person</h1>

      <h4 style={styles.uploadsubtitle}>Upload Document</h4>


      <div style={styles.uploadBox}>
        <label htmlFor="fileInput" style={styles.uploadLabel}>
          <FaUpload size={24} style={{ marginBottom: 10 }} />
          <span>
            <strong style={{ color: "#4f74f9", cursor: "pointer" }}>Choose</strong>{" "}
            file to upload
          </span>
          <p style={styles.subNote}>Select File in jpeg or PDF</p>
          <input
            id="fileInput"
            type="file"
            accept=".jpg,.jpeg,.pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
        {fileName && <p style={styles.fileName}>Uploaded: {fileName}</p>}
      </div>

      <p style={styles.fileSizeNote}>The file size should not exceed 2 mb</p>

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
  uploadsubtitle: {
    fontSize: "23px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  uploadBox: {
    border: "2px dashed #ccc",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "10px",
    backgroundColor: "#fafafa",
  },
  uploadLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    color: "#333",
  },
  subNote: {
    fontSize: "14px",
    color: "#888",
    marginTop: "6px",
  },
  fileSizeNote: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "20px",
    textAlign: "center",
  },
  fileName: {
    fontSize: "13px",
    color: "#4f74f9",
    marginTop: "10px",
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
