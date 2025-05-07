import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, InputAdornment } from "@mui/material";

const PhoneNumberOTP = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
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
    alert("Phone number verified successfully!");
    navigate("/session/account-verification");
  };

  const handleResendCode = () => {
    alert("Verification code has been resent!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleVerificationSubmit}
        sx={{
          p: 4,
          borderRadius: 2,
          width: "100%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", mb: 1 }}>
          Phone Verification
        </Typography>

        <Typography variant="body2" sx={{ textAlign: "center", mb: 2, color: "text.secondary" }}>
          We're going to send you a verification code.
        </Typography>

        {error && (
          <Typography sx={{ color: "red", textAlign: "center", mb: 2 }}>
            {error}
          </Typography>
        )}

        {/* Indian Phone Number Field */}
        <TextField
          variant="outlined"
          placeholder="Enter 10-digit mobile number"
          type="tel"
          fullWidth
          value={phoneNumber}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,10}$/.test(val)) {
              setPhoneNumber(val);
            }
          }}
          inputProps={{
            maxLength: 10,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>+91</Typography>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
          OTP sent!
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", mb: 2 }}>
          Please enter the verification code
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          {code.map((digit, index) => (
            <TextField
              key={index}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: "18px",
                  padding: 0,
                },
              }}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              inputRef={(el) => (inputsRef.current[index] = el)}
              sx={{
                width: "45px",
                "& input": {
                  p: 1,
                },
              }}
            />
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#4285F4",
            textAlign: "center",
            cursor: "pointer",
            mt: 2,
            textDecoration: "underline",
          }}
          onClick={handleResendCode}
        >
          Didn't receive code? Resend
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#4285F4",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: 1,
            mt: 1,
            "&:hover": {
              backgroundColor: "#3367d6",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PhoneNumberOTP;
