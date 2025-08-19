import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";
const ResetPassword = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

    const handleContinue = () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Password has been reset successfully!");
        navigate("/session/reset-pass-succes");
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
            <h2 style={{ fontWeight: "600", color: "#1a1a1a" }}>Enter your New Password</h2>
            <p style={{ color: "#888", fontSize: "14px", marginTop: "-4px", marginBottom: "24px" }}>
                Don't forget it, this time!
            </p>

            <div style={{ width: "100%", marginBottom: "16px" }}>
                <input
                    type="password"
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={inputStyle}
                    
                />
            </div>

            {/* <div style={{ width: "100%", marginBottom: "16px" }}>
               <TextField
                // autoComplete="off"
                fullWidth
                size="small"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                // onBlur={handleBlur}
                // value={values.password}
                // onChange={handleChange}
                // helperText={touched.password && errors.password}
                // error={Boolean(errors.password && touched.password)}
                sx={{
                  mb: 3,
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "#90caf9",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#42a5f5",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: 'white' }} />
                        ) : (
                          <Visibility sx={{ color: 'white' }} />
                        )}
                      </IconButton>

                    </InputAdornment>
                  ),
                }}
              />
            </div> */}
            <div style={{ width: "100%", marginBottom: "24px" }}>
                <input
                    type="password"
                    placeholder="Enter Password again"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={inputStyle}
                />
            </div>

            <button
                onClick={handleContinue}
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
                    marginTop: "50px"
                }}
            >
                Continue
            </button>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
    outline: "none",
};

export default ResetPassword;
