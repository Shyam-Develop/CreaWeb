import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode !== "123456") {
      setError("Invalid verification code.");
      return;
    }

    setError("");
    alert("Email verified successfully!");
    navigate("/account-verification");
  };

  const handleResendCode = () => {
    alert("Verification code has been resent!");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleVerificationSubmit} style={styles.form}>
        <h2 style={styles.heading}>Email Verification</h2>
        <p style={styles.subheading}>We're going to send you a verification code.</p>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          placeholder="Enter your EmailID"
          style={styles.input}
        />

        <p style={styles.infoText}>OTP sent!</p>
        <p style={styles.infoText}>Please enter the verification code</p>

        <div style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              style={styles.codeInput}
            />
          ))}
        </div>

        <button type="submit" style={styles.verifyButton}>
          Verify
        </button>

        <p style={styles.resendText} onClick={handleResendCode}>
          Didn't receive the code? Resend
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: "40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
    fontSize: "24px",
  },
  subheading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#666",
    fontSize: "14px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center",
  },
  infoText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#333",
    marginTop: "5px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  codeInputContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    marginBottom: "20px",
  },
  codeInput: {
    width: "40px",
    height: "40px",
    fontSize: "18px",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  verifyButton: {
    padding: "12px",
    backgroundColor: "#4285F4",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  resendText: {
    color: "#4285F4",
    textAlign: "center",
    cursor: "pointer",
    marginTop: "15px",
    textDecoration: "underline",
  },
};

export default EmailVerification;
