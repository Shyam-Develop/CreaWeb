import React, { useState } from "react";
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../assets/pict.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "app/hooks/useAuth";

export default function LoginDetails() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login button clicked!");
    navigate("/home");
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      // console.log("🚀 ~ handleFormSubmit ~ login(values.email, values.password):", login(values.email, values.password))
       await login(values.email, values.password);
      navigate("/home");
    } catch (e) {
      // console.log('loginjsx',JSON.parse(e));
       alert(e)
      
      setLoading(false);
    }
  };
  // initial login credentials
  const initialValues = {
    email: "safin@gmail.com",
    password: "dummyPass",
    remember: true,
  };
  
  // form field validation schema
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
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          Welcome Back!
        </Typography>

        <Typography variant="subtitle1" sx={{ color: "white", fontStyle: "italic", textAlign: "center", mb: 2 }}>
          Your Odyssey continues...
        </Typography>

        {/* <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your name"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            width: 250,
          }}
        />

        <TextField
          fullWidth
          type="password"
          variant="outlined"
          placeholder="Enter your password"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            width: 250,
          }}
        /> */}
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
                      sx={{ mb: 3 }}
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
                      sx={{ mb: 1.5 }}
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
            control={<Checkbox size="small" sx={{ color: "white" }} />}
            label={<Typography sx={{ fontSize: 14, color: "white" }}>Remember me</Typography>}
          />
          <Link href="#" underline="hover" sx={{ fontSize: 14, color: "white" }}>
            Forgot password?
          </Link>
        </Box>

        <Button
  variant="contained"
  fullWidth
  type="submit"      // ✅ THIS
  disabled={loading} // optional: disable while loading
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
            Continue with Login via Google
          </Typography>
          <FaGoogle
            style={{
              fontSize: "30px",
              color: "#4285F4",
              cursor: "pointer",
            }}
            onClick={handleGoogleLogin}
          />
        </Box>
      </Box>
    </Box>
    </form>
                )}
              </Formik>
  );
};


