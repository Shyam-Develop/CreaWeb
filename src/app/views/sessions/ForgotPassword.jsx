import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/session/enter-your-otp");
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "480px",
        margin: "0 auto",
        padding: "16px",
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontWeight: "600", color: "#1a1a1a" }}>Forgot Password</h2>
      <p style={{ color: "#888", fontSize: "14px", marginTop: "-1px" }}>
        Remember & input your email or
      </p>
      <p style={{ color: "#888", fontSize: "14px", marginTop: "-7px" }}>
        phone number below
      </p>

      <div style={{ marginBottom: "24px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
          alt="Lock Illustration"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
        />
      </div>

      <div style={{ width: "100%", marginBottom: "24px" }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "8px", textAlign: "left" }}
        >
          Email or Phone Number
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <span role="img" aria-label="email" style={{ marginRight: "8px" }}>
            📧
          </span>
          <input
            id="email"
            type="text"
            placeholder="Hello@Zachry.com"
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: "16px",
            }}
          />
          <span role="img" aria-label="check" style={{ color: "#007bff" }}>
            ✔️
          </span>
        </div>
      </div>

      <button
        onClick={handleResetPassword}
        style={{
          backgroundColor: "#1a73e8",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "14px 0",
          width: "100%",
          fontSize: "16px",
          fontWeight: "600",
          boxShadow: "0 4px 8px rgba(26, 115, 232, 0.3)",
          cursor: "pointer",
        }}
      >
        Reset Password
      </button>
    </div>
  );
};

export default ForgotPassword;
