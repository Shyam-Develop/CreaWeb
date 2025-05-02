import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdPhone, MdCheckCircle } from "react-icons/md";

const AccountVerification = () => {
  const navigate = useNavigate();

  const handlePhoneVerify = () => {
    navigate("/phone-verification");
  };



  const handleContinue = () => {
    alert("Account verified successfully!");
    navigate("/home");
  };

  const handleSkip = () => {
    navigate("/upload-id");
  };


  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div></div>
        <span style={styles.skip} onClick={handleSkip}>Skip</span>
      </div>

      <h2 style={styles.title}>Account Verification</h2>

      <div style={styles.cardVerified}>
        <div style={styles.iconWrapper}><MdEmail size={24} /></div>
        <div style={styles.textWrapper}>
          <div style={styles.label}>Email address</div>
          <div style={styles.subLabel}>Verified with your email</div>
        </div>
        <MdCheckCircle size={24} color="#28a745" />
      </div>

      <div style={styles.card}>
        <div style={styles.iconWrapper}><MdPhone size={24} /></div>
        <div style={styles.textWrapper}>
          <div style={styles.label}>Phone Number</div>
          <div style={styles.subLabel}>Verify with your phone number</div>
        </div>
        <div style={styles.verifyButton} onClick={handlePhoneVerify}>Verify</div>
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
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  cardVerified: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #28a745",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#f0fff5",
  },
  card: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "30px",
  },
  iconWrapper: {
    fontSize: "24px",
    marginRight: "15px",
    color: "#666",
  },
  textWrapper: {
    flex: 1,
  },
  label: {
    fontSize: "16px",
    fontWeight: 600,
  },
  subLabel: {
    fontSize: "14px",
    color: "#888",
  },
  verifyButton: {
    color: "#f57c00",
    fontWeight: "bold",
    cursor: "pointer",
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

export default AccountVerification;
