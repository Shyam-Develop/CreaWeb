import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { FaGoogle, FaApple } from "react-icons/fa"; // Import Apple logo
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../assets/pict.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "app/hooks/useAuth";

export default function LoginDetails() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };

  const handleAppleLogin = () => {
    alert("Apple login clicked!");
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate("/home");
    } catch (e) {
      alert(e);
      setLoading(false);
    }
  };

  const initialValues = {
    email: "safin@gmail.com",
    password: "dummyPass",
    remember: true,
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be 6 character length")
      .required("Password is required!"),
    email: Yup.string()
      .email("Invalid Email address")
      .required("Email is required!"),
  });

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                backgroundColor: "rgba(0,0,0,0.5)",
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "white", textAlign: "center" }}
              >
                Welcome Back!
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontStyle: "italic",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Your Odyssey continues...
              </Typography>

              <TextField
                fullWidth
                size="small"
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={Boolean(errors.email && touched.email)}
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
              />

              <TextField
                fullWidth
                size="small"
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                helperText={touched.password && errors.password}
                error={Boolean(errors.password && touched.password)}
                sx={{
                  mb: 1.5,
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
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 250,
                  mt: -1,
                  mb: 2,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox size="small" sx={{ color: "white" }} />
                  }
                  label={
                    <Typography sx={{ fontSize: 14, color: "white" }}>
                      Remember me
                    </Typography>
                  }
                />
                <Typography
                  onClick={() => navigate("/session/forgot-password")}
                  sx={{
                    fontSize: 14,
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={loading}
                sx={{
                  backgroundColor: "#4285F4",
                  fontWeight: "bold",
                  width: 250,
                  borderRadius: 1,
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#3367d6",
                  },
                }}
              >
                {loading ? "Logging in..." : "LOGIN"}
              </Button>

              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography
                  sx={{
                    color: "white",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                    fontSize: 16,
                    mb: 1,
                  }}
                >
                  Continue with Login via
                </Typography>

                {/* Google login button */}
                <FaGoogle
                  style={{
                    fontSize: "30px",
                    color: "#4285F4",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                  onClick={handleGoogleLogin}
                />

                {/* Apple login button */}
                <FaApple
                  style={{
                    fontSize: "30px",
                    color: "#000",
                    cursor: "pointer",
                  }}
                  onClick={handleAppleLogin}
                />
              </Box>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
}
