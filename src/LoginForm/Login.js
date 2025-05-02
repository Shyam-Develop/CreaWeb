import React from "react";
import backgroundImage from "../assets/photo1.jpg";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login-details");
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div style={styles.background}>
      <div style={styles.centerContent}>
        <h2 style={styles.welcome}>Welcome</h2>
        <p style={styles.subText}>Stay signed in with your account to make it easier</p>

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        <button onClick={handleSignUp} style={styles.signupButton}>
          Sign Up
        </button>

        <div style={styles.googleLoginContainer}>
          <p style={styles.googleText}>Continue with Login via Google</p>
          <FaGoogle style={styles.googleIcon} onClick={handleGoogleLogin} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "40px",
    borderRadius: "10px",
  },
  welcome: {
    marginBottom: "10px",
    color: "white",
    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
  },
  subText: {
    marginBottom: "20px",
    color: "white",
    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4285F4",
    color: "white",
    cursor: "pointer",
    marginBottom: "10px",
    width: "200px",
  },
  signupButton: {
    padding: "10px",
    backgroundColor: "#34A853",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "200px",
    marginBottom: "10px",
  },
  googleLoginContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  googleText: {
    color: "white",
    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
    fontSize: "16px",
    marginBottom: "10px",
  },
  googleIcon: {
    fontSize: "30px",
    color: "#DB4437",
    cursor: "pointer",
  },
};

export default Login;
