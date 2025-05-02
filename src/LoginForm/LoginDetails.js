import React from "react";
import backgroundImage from "../../src/assets/pict.jpg";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginDetails = () => {
    const navigate = useNavigate(); 

    const handleLogin = () => {
        alert("Login button clicked!");
        navigate("/home"); 
    };

    const handleGoogleLogin = () => {
        alert("Google login clicked!");
    };

    return (
        <div style={styles.background}>
            <div style={styles.content}>
                <h2 style={styles.welcome}>Welcome Back!</h2>
                <p style={styles.tagline}>Your Odyssey continues...</p>

                <input type="text" placeholder="Enter your name" style={styles.input} />
                <input type="password" placeholder="Enter your password" style={styles.input} />

                <div style={styles.optionsRow}>
                    <label style={styles.rememberMe}>
                        <input type="checkbox" style={styles.checkbox} />
                        Remember me
                    </label>
                    <a href="#" style={styles.forgotPassword}>Forgot password?</a>
                </div>

                <button style={styles.button} onClick={handleLogin}>LOGIN</button>

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
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
    },
    welcome: {
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#fff",
    },
    tagline: {
        textAlign: "center",
        fontStyle: "italic",
        color: "#fff",
    },
    input: {
        padding: "12px",
        width: "250px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "16px",
        outline: "none",
    },
    optionsRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "250px",
        marginTop: "-5px",
        marginBottom: "10px",
    },
    rememberMe: {
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontSize: "14px",
    },
    checkbox: {
        marginRight: "6px",
    },
    forgotPassword: {
        color: "#fff",
        textDecoration: "underline",
        fontSize: "14px",
        cursor: "pointer",
    },
    button: {
        padding: "12px",
        width: "250px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#4285F4",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "16px",
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
        color: "#4285F4",
        cursor: "pointer",
    },
};

export default LoginDetails;
