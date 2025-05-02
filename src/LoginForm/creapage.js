import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreaScreen = () => {
  const navigate = useNavigate();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchEndX.current - touchStartX.current;

    // Right swipe threshold
    if (diff > 50) {
      navigate("/login");
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        fontFamily: "sans-serif",
        maxWidth: "480px",
        margin: "0 auto",
        padding: "16px",
        backgroundColor: "#ccc",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="/your-logo-path.png" // Make sure this path is valid
        alt="CREA logo"
        style={{ width: "120px", marginBottom: "24px" }}
      />
      <h1 style={{ fontSize: "48px", color: "#2e2f3e", margin: 0 }}>CREA</h1>
      <p style={{ position: "absolute", bottom: "20px", color: "#666" }}>
        Swipe right to continue →
      </p>
    </div>
  );
};

export default CreaScreen;
