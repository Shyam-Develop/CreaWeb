import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnterOtp = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const navigate = useNavigate();

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer]);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleVerify = () => {
        alert("OTP Submitted: " + otp.join(""));
        navigate("/session/reset-password");
    };

    const handleResend = () => {
        setTimer(60);
        setOtp(["", "", "", ""]);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Enter your OTP</h2>
            <p style={styles.subtitle}>
                We've sent the code to the email on your device
            </p>

            <div style={styles.imageBox}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/709/709699.png"
                    alt="OTP"
                    style={{ width: "80px", height: "80px" }}
                />
            </div>

            <div style={styles.otpBox}>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        style={styles.otpInput}
                    />
                ))}
            </div>

            <p style={styles.timerText}>
                Code expires in :
                <span style={{ color: "#0066FF", fontWeight: "bold" }}>
                    {" "}
                    00:{timer < 10 ? `0${timer}` : timer}
                </span>
            </p>

            <p style={styles.resendText}>
                Didn’t receive code?{" "}
                <span onClick={handleResend} style={styles.resendLink}>
                    Resend Code
                </span>
            </p>

            <button style={styles.button} onClick={handleVerify}>
                Verify OTP
            </button>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "sans-serif",
        maxWidth: "480px",
        margin: "0 auto",
        padding: "24px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
    title: {
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "8px",
        color: "#1E2A78",
    },
    subtitle: {
        fontSize: "14px",
        textAlign: "center",
        color: "#666",
        marginBottom: "20px",
    },
    imageBox: {
        marginBottom: "24px",
    },
    otpBox: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "16px",
    },
    otpInput: {
        width: "40px",
        height: "50px",
        textAlign: "center",
        fontSize: "24px",
        border: "1px solid #ccc",
        borderRadius: "8px",
    },
    timerText: {
        fontSize: "14px",
        color: "#333",
        marginBottom: "8px",
    },
    resendText: {
        fontSize: "14px",
        color: "#777",
        marginBottom: "24px",
    },
    resendLink: {
        color: "#0066FF",
        fontWeight: "bold",
        cursor: "pointer",
        textDecoration: "underline",
    },
    button: {
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        backgroundColor: "#0066FF",
        color: "#fff",
        fontWeight: "bold",
        border: "none",
        fontSize: "16px",
        cursor: "pointer",
        boxShadow: "0px 4px 12px rgba(0, 102, 255, 0.4)",
    },
};

export default EnterOtp;
