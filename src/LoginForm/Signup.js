import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import logo from "../../src/assets/logo.jpg";

const handleGoogleLogin = () => {
  alert("Google login clicked!");
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Sign Up Successful!");
    navigate("/nextpage");
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleContinueClick = () => {
    navigate("/email-verification");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>



        <h2 style={styles.heading}>Create Your artistic profile</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          name="fullName"
          placeholder="Name"
          value={formData.fullName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email or PhoneNumber"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={styles.loginText}>
          Already have an account? <span onClick={handleSignInClick} style={styles.link}>Log In</span>
        </p>

        <div style={styles.googleLoginContainer}>
          <p style={styles.googleText}>Continue with Login via Google</p>
          <div style={styles.googleIconContainer} onClick={handleGoogleLogin}>
            <FaGoogle style={styles.googleIcon} />
          </div>
        </div>

        <button type="button" onClick={handleContinueClick} style={styles.continueButton}>
          Continue
        </button>
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
  },
  link: {
    color: "#4285F4",
    cursor: "pointer",
    textDecoration: "underline",
  },
  googleLoginContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  googleText: {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
  },
  googleIconContainer: {
    display: "inline-block",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "#4285F4",
    cursor: "pointer",
  },
  googleIcon: {
    color: "white",
    fontSize: "24px",
  },
  continueButton: {
    padding: "12px",
    backgroundColor: "#4285F4",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default SignUp;
