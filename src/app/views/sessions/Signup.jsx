import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import logo from "../../../assets/logo.jpg";

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email or Phone Number is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };

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

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ width: "100%", p: 4, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
        <Stack spacing={2} alignItems="center" mb={2}>
          <Avatar src={logo} sx={{ width: 100, height: 100 }} />
          <Typography variant="h5">Create Your Artistic Profile</Typography>
        </Stack>

        <Formik
          initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            handleContinueClick(values)
          }}
        >
{({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      })=>(
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  id="fullName"
                  label="Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  error={Boolean(errors.fullName && touched.fullName)}
                  helperText={touched.fullName && errors.fullName}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                        '& .MuiInputLabel-asterisk': {
                            color: 'red',
                        },
                    },
                }}/>
                <TextField
                  id="email"
                  label="Email or Phone Number"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.email && touched.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                        '& .MuiInputLabel-asterisk': {
                            color: 'red',
                        },
                    },
                }}/>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={Boolean(errors.password && touched.password)}
                  helperText={touched.password && errors.password}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                        '& .MuiInputLabel-asterisk': {
                            color: 'red',
                        },
                    },
                }}/>
                <TextField
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={Boolean(errors.confirmPassword && touched.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                        '& .MuiInputLabel-asterisk': {
                            color: 'red',
                        },
                    },
                }}/>

                <Typography variant="body2" align="center">
                  Already have an account?{' '}
                  <Button variant="text" size="small" onClick={handleSignInClick}>
                    Log In
                  </Button>
                </Typography>

                <Stack spacing={1} alignItems="center">
                  <Typography variant="body1">Continue with Login via Google</Typography>
                  <IconButton onClick={handleGoogleLogin} sx={{ bgcolor: "#4285F4", color: "white", '&:hover': { bgcolor: "#357ae8" } }}>
                    <FaGoogle size={24} />
                  </IconButton>
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  // onClick={handleContinueClick}
                >
                  Continue
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default SignUp;
