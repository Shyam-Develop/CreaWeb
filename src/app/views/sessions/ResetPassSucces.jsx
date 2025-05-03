import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordSucces = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/session/login-details");
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
                borderRadius: "20px",
            }}
        >
            <h2 style={{ fontWeight: "600", color: "#1a1a1a" }}>All set welcome !</h2>
            <p style={{ color: "#888", fontSize: "14px", marginTop: "-1px" }}>
                Try to login for next step.
            </p>

            <div style={{ marginBottom: "24px", marginTop: "20px" }}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/10367/10367021.png" // You can replace this image
                    alt="Success"
                    style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
            </div>

            <h3
                style={{
                    color: "#1E2A78",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "30px",
                }}
            >
                Your password has been <br /> reset successfully
            </h3>

            <button
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
                onClick={handleGetStarted}
            >
                Get Started
            </button>
        </div>
    );
};

export default ResetPasswordSucces;
