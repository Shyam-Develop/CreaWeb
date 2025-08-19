import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Box, IconButton } from "@mui/material";

import logo from "../../../assets/logo.jpg";

const SignUp = () => {
  const navigate = useNavigate();


  const handleSignInClick = () => {
    navigate("/session/signin");
  };
  const handleContinueClick = async (values) => {
    const data = {
      Fullname: values.fullName,
      Email: values.email,
      Password: values.password,
      ConfirmPassword: values.confirmPassword,
    };

    console.log("Form Data Submitted:", data);
    alert("Sign Up Successful!");
    navigate("/session/email-verification");
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };

  const handleAppleLogin = () => {
    alert("Apple login clicked!");
  };

  return (
    <div style={styles.container}>
      <form 
      // onSubmit={handleSubmit} 
      style={styles.form}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>

        <h2 style={styles.heading}>Create Your Artistic Profile</h2>

        {/* {error && <p style={styles.error}>{error}</p>} */}

        <input
          type="text"
          name="fullName"
          placeholder="Name"
          // value={formData.fullName}
          // onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email or Phone Number"
          // value={formData.email}
          // onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          // value={formData.password}
          // onChange={handleChange}
          style={styles.input}
        />
    

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span onClick={handleSignInClick} style={styles.link}>
            Sign In
          </span>
        </p>

        {/* Social Login Section */}
        <div style={styles.googleLoginContainer}>
          <p style={styles.googleText}>Continue with</p>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              onClick={handleGoogleLogin}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                "&:hover": { backgroundColor: "#f1f1f1" },
                width: 48,
                height: 48,
              }}
            >
              <FaGoogle style={{ color: "#DB4437", fontSize: 22 }} />
            </IconButton>

            <IconButton
              onClick={handleAppleLogin}
              sx={{
                backgroundColor: "#000",
                "&:hover": { backgroundColor: "#1a1a1a" },
                width: 48,
                height: 48,
              }}
            >
              <FaApple style={{ color: "#fff", fontSize: 22 }} />
            </IconButton>
          </Box>
        </div>

        <button
          type="button"
          onClick={handleContinueClick}
          style={styles.continueButton}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fff", // Change this to white
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: "40px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "100px",
    height: "auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    marginBottom: "15px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "14px",
  },
  link: {
    color: "#4285F4",
    cursor: "pointer",
    textDecoration: "underline",
  },
  googleLoginContainer: {
    marginTop: "10px",
    marginBottom: "20px",
    textAlign: "center",
  },
  googleText: {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
  },
  continueButton: {
    padding: "12px",
    backgroundColor: "#4285F4",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default SignUp;
