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
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";


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
      // navigate("/home");
            navigate("/Language/ChooseLang");

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

//    const handleGoogleSuccess = async (response) => {
//   setLoading(true);

//   try {
//     // 1. Get the Google token
//     const googleToken = response.credential;
//  setLoginMethod("2");
//     // 2. Decode token to get user profile info (email, name, etc.)
//     const profile = jwt_decode(googleToken);
//     console.log("Decoded Google Profile:", profile);
//     // 4. Collect IP/device info (if needed)
//     const { deviceIP, deviceName } = await getIPAndDeviceInfo();
// const data={
//     email: profile.email,
//       password: "", // not required for Google login
//       loginMethod:"2",
//       googleToken,
//       deviceIP,
//       deviceName,
// };
// console.log(data);
//     // 5. Call your login function with the necessary data
//     const user = await login({
//       email: profile.email,
//       password: "", // not required for Google login
//       loginMethod:"2",
//       googleToken,
//       deviceIP,
//       deviceName,
//     });

//     // 6. Navigate on success
//     if (user) {
//       navigate("/home");
//     }
//   } catch (error) {
//     console.error("Login error", error);
//     Swal.fire({
//       icon: "error",
//       title: "Login Failed",
//       text: error?.response?.data?.message || error.message || "Something went wrong.",
//     });
//   } finally {
//     setLoading(false);
//     setLoginMethod("2");
//   }
// };
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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",  backgroundColor: "rgba(0,0,0,0.5)",gap: 2, p: 4, width: 340 }}>
      
      {/* Title */}
      <Typography variant="h4" sx={{ color: "white", fontWeight: "bold", textAlign: "left" }}>
        Sign in with Email
      </Typography>

      {/* Subtitle */}
      <Typography variant="body2" sx={{ color: "white", textAlign: "left", mb: 2 }}>
        Enter your CREA credentials below. Prefer one-tap? Use Google instead.
      </Typography>

      {/* Email */}
      
      <Typography
  variant="subtitle2"
  sx={{
  color: "white",
    textAlign: "left",
    width: "100%",
    mb: 0.1, // small gap (in theme spacing units)
    fontWeight: "bold",
    lineHeight: 1 
  }}
>
  Email
</Typography>
      <TextField
        fullWidth
        size="small"
        type="email"
        name="email"
        placeholder="linda@framcreative.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.email && touched.email)}
        helperText={touched.email && errors.email}
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": { borderRadius: 1 }
        }}
      />
<Typography
  variant="subtitle2"
  sx={{
  color: "white",
    textAlign: "left",
    width: "100%",
    mb: 0.1, // small gap (in theme spacing units)
    fontWeight: "bold",
    lineHeight: 1 
  }}
>
  Password
</Typography>
      {/* Password */}
      <TextField
        fullWidth
        size="small"
        type="password"
        name="password"
        placeholder="••••••••"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.password && touched.password)}
        helperText={touched.password && errors.password}
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": { borderRadius: 1 }
        }}
      />

      {/* Remember & Forgot */}
      <Box sx={{ display: "flex", justifyContent: "space-between",alignItems: "center", width: "100%", mb: 2 }}>
        <FormControlLabel
          control={<Checkbox size="small"  sx={{ color: "white" }}/>}
          label={<Typography sx={{ fontSize: 14,color: 'white' }}>Remember me</Typography>}
        />
        <Typography
          onClick={() => navigate("/session/forgot-password")}
          sx={{ fontSize: 14, color: "#4285F4", cursor: "pointer", textDecoration: "underline", }}
        >
          Forgot password?
        </Typography>
      </Box>

      {/* Continue Button */}
      <Button
        variant="contained"
        fullWidth
        type="submit"
        disabled={loading}
        sx={{
          backgroundColor: "#F4511E",
          fontWeight: "bold",
           width: 200,
          borderRadius: 1,
          fontSize: "16px",
          "&:hover": { backgroundColor: "#d63f14" },
        }}
      >
        {loading ? "Logging in..." : "Continue"}
      </Button>

      {/* Google Login */}
        <Box sx={{ textAlign: "center", mt: 3, width: 250, }}>
             <Typography
                  sx={{
                    color: "white",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                    fontSize: 13,
                    mb: 1,
                  }}
                >
                  Continue with 
                </Typography>
                 {/* <Box
        sx={{
          border: "1px solid white",
          borderRadius: "50px",
          display: "inline-block",
          padding: "4px 8px",
          backgroundColor: "white",
        }}
      > */}
       <GoogleOAuthProvider
                  clientId="50904006478-o74eja1e3shdrfsp6caqn24b9daghejs.apps.googleusercontent.com">
                  <GoogleLogin
                    // onSuccess={handleGoogleSuccess}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                  {/* <FaGoogle style={{ color: "#DB4437", fontSize: 22 }} /> */}
                </GoogleOAuthProvider>
      {/* </Box> */}
       {/* <GoogleOAuthProvider
       sx={{border: '15px',color: 'green'}}
                  clientId="50904006478-o74eja1e3shdrfsp6caqn24b9daghejs.apps.googleusercontent.com">
                  <GoogleLogin
                    // onSuccess={handleGoogleSuccess}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                  {/* <FaGoogle style={{ color: "#DB4437", fontSize: 22 }} /> 
                </GoogleOAuthProvider> */}
                </Box>
      {/* <Button
        variant="outlined"
        fullWidth
        startIcon={<FaGoogle style={{ color: "#4285F4" }} />}
        sx={{
          backgroundColor: "white",
          mt: 2,
          borderRadius: 5,
          textTransform: "none",
          fontWeight: "bold",
        }}
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </Button> */}

      {/* Footer */}
      <Typography variant="caption" sx={{ color: "white", mt: 3, textAlign: "center", opacity: 0.8 }}>
        By continuing, you agree to CREA’s Terms and Privacy Policy.
      </Typography>
    </Box>
  </Box>
</form>

        // <form onSubmit={handleSubmit}>
        //   <Box
        //     sx={{
        //       backgroundImage: `url(${backgroundImage})`,
        //       backgroundSize: "cover",
        //       backgroundPosition: "center",
        //       minHeight: "100vh",
        //       display: "flex",
        //       justifyContent: "center",
        //       alignItems: "center",
        //     }}
        //   >
        //     <Box
        //       sx={{
        //         display: "flex",
        //         flexDirection: "column",
        //         alignItems: "center",
        //         gap: 2,
        //         backgroundColor: "rgba(0,0,0,0.5)",
        //         p: 4,
        //         borderRadius: 2,
        //       }}
        //     >
        //       <Typography
        //         variant="h5"
        //         sx={{ color: "white", textAlign: "center",fontWeight: "bold" }}
        //       >
        //         Sign in With Email
        //       </Typography>

        //       <Typography
        //         variant="subtitle1"
        //         sx={{
        //           color: "white",
        //           fontStyle: "italic",
        //           textAlign: "center",
        //           mb: 2,
        //         }}
        //       >
        //         Your Odyssey continues...
        //       </Typography>

        //       <TextField
        //         fullWidth
        //         size="small"
        //         type="email"
        //         name="email"
        //         label="Email"
        //         variant="outlined"
        //         onBlur={handleBlur}
        //         value={values.email}
        //         onChange={handleChange}
        //         helperText={touched.email && errors.email}
        //         error={Boolean(errors.email && touched.email)}
        //         sx={{
        //           mb: 3,
        //           input: { color: "white" },
        //           label: { color: "white" },
        //           "& .MuiOutlinedInput-root": {
        //             "& fieldset": {
        //               borderColor: "white",
        //             },
        //             "&:hover fieldset": {
        //               borderColor: "#90caf9",
        //             },
        //             "&.Mui-focused fieldset": {
        //               borderColor: "#42a5f5",
        //             },
        //           },
        //         }}
        //         InputLabelProps={{
        //           style: { color: "white" },
        //         }}
        //       />

        //       <TextField
        //         fullWidth
        //         size="small"
        //         name="password"
        //         type="password"
        //         label="Password"
        //         variant="outlined"
        //         onBlur={handleBlur}
        //         value={values.password}
        //         onChange={handleChange}
        //         helperText={touched.password && errors.password}
        //         error={Boolean(errors.password && touched.password)}
        //         sx={{
        //           mb: 1.5,
        //           input: { color: "white" },
        //           label: { color: "white" },
        //           "& .MuiOutlinedInput-root": {
        //             "& fieldset": {
        //               borderColor: "white",
        //             },
        //             "&:hover fieldset": {
        //               borderColor: "#90caf9",
        //             },
        //             "&.Mui-focused fieldset": {
        //               borderColor: "#42a5f5",
        //             },
        //           },
        //         }}
        //         InputLabelProps={{
        //           style: { color: "white" },
        //         }}
        //       />

        //       <Box
        //         sx={{
        //           display: "flex",
        //           justifyContent: "space-between",
        //           alignItems: "center",
        //           width: 250,
        //           mt: -1,
        //           mb: 2,
        //         }}
        //       >
        //         <FormControlLabel
        //           control={
        //             <Checkbox size="small" sx={{ color: "white" }} />
        //           }
        //           label={
        //             <Typography sx={{ fontSize: 14, color: "white" }}>
        //               Remember me
        //             </Typography>
        //           }
        //         />
        //         <Typography
        //           onClick={() => navigate("/session/forgot-password")}
        //           sx={{
        //             fontSize: 14,
        //             color: "white",
        //             cursor: "pointer",
        //             textDecoration: "underline",
        //           }}
        //         >
        //           Forgot password?
        //         </Typography>
        //       </Box>

        //       <Button
        //         variant="contained"
        //         fullWidth
        //         type="submit"
        //         disabled={loading}
        //         sx={{
        //           backgroundColor: "#4285F4",
        //           fontWeight: "bold",
        //           width: 250,
        //           borderRadius: 1,
        //           fontSize: "16px",
        //           "&:hover": {
        //             backgroundColor: "#3367d6",
        //           },
        //         }}
        //       >
        //         {loading ? "Logging in..." : "LOGIN"}
        //       </Button>

        //       <Box sx={{ textAlign: "center", mt: 3 }}>
        //         <Typography
        //           sx={{
        //             color: "white",
        //             textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
        //             fontSize: 16,
        //             mb: 1,
        //           }}
        //         >
        //           Continue with Login via
        //         </Typography>

        //         {/* Google login button */}
        //         <FaGoogle
        //           style={{
        //             fontSize: "30px",
        //             color: "#4285F4",
        //             cursor: "pointer",
        //             marginRight: "20px",
        //           }}
        //           onClick={handleGoogleLogin}
        //         />

        //         {/* Apple login button */}
        //         <FaApple
        //           style={{
        //             fontSize: "30px",
        //             color: "#000",
        //             cursor: "pointer",
        //           }}
        //           onClick={handleAppleLogin}
        //         />
        //       </Box>
        //     </Box>
        //   </Box>
        // </form>
      )}
    </Formik>
  );
}
