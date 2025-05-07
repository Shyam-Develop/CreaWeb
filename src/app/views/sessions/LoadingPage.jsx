import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moonImage from "../../../assets/moon.png"; // ✅ correct import

const LoadScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/session/signin"); // Replace with your actual route
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src={moonImage} // ✅ use imported image
          alt="Moon"
          style={styles.image}
        />
        <p style={styles.message}>The name's Bond</p>
        <p style={styles.message}>James Bond...</p>

      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  image: {
    width: "120px",
    height: "120px",
    marginBottom: "60px",
  },
  message: {
    fontSize: "18px",
    color: "#888",
    fontWeight: "bold",
  },
};

export default LoadScreen;
