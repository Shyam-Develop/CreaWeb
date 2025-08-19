import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, IconButton,Divider } from "@mui/material";
import { FaGoogle, FaApple } from "react-icons/fa";
import backgroundImage from "../../../assets/photo1.jpg";
import Googleimage from "../../../assets/Google1.jpg";
export default function JwtLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/session/login-details");
  };

  const handleSignUp = () => {
    navigate("/session/signup-page");
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };

  const handleAppleLogin = () => {
    alert("Apple login clicked!");
  };

  return (
    
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
          // backgroundColor: "rgba(0,0,0,0.5)",
          p: 5,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 900,
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
               textAlign: "left",
          }}
        >
          Welcome to CREA
        </Typography>

        <Typography
          sx={{
            mb: 4,
            color: "#949393ff",
            // textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            fontSize: 14,
            textAlign: "left",
          }}
        >
         Choose how you'd like to continue
        </Typography>

         <Box sx={{ width: "100%", maxWidth: 320, mt: 4 }}>
       <Button
  // onClick={handleGoogleLogin}
  onClick={(e) => {
      e.stopPropagation(); // prevent button click
      handleGoogleLogin();
    }}
  variant="outlined"
  fullWidth
  startIcon={
    <Box
      component="img"
      src={Googleimage}
      alt="Google logo"
      sx={{ width: 30, height: 30 }}
    />
  }
  sx={{
    backgroundColor: "white",
    borderRadius: "50px",
    textTransform: "none",
    fontWeight: 500,
    fontSize: 14,
    borderColor: "#ddd",
    height: 42,
    "&:hover": {
      backgroundColor: "#f8f8f8",
      borderColor: "#ccc",
    },
  }}
>
  Continue with Google
</Button>

      </Box>


  {/* Divider with text */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 320,
          display: "flex",
          alignItems: "center",
          my: 2,
        }}
      >
        <Divider sx={{ flex: 1, borderColor: "#555" }} />
        <Typography sx={{ mx: 1, color: "#aaa", fontSize: 13 }}>or</Typography>
        <Divider sx={{ flex: 1, borderColor: "#555" }} />
      </Box>

      {/* Enter Email link */}
      <Typography
        sx={{
          fontSize: 14,
          color: "white",
          cursor: "pointer",
          // textDecoration: "underline",
          "&:hover": { opacity: 0.8 },
        }}
        onClick={() =>  navigate("/session/login-details")}
      >
        Enter Email
      </Typography>
        {/* <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: "#4285F4",
            mb: 2,
            width: 200,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#3367d6",
            },
          }}
        >
          Login
        </Button>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSignUp}
          sx={{
            backgroundColor: "#34A853",
            width: 200,
            borderRadius: 1,
            mb: 3,
            "&:hover": {
              backgroundColor: "#2c8c47",
            },
          }}
        >
          Sign Up
        </Button> */}

        {/* "Continue with" line */}
        {/* <Typography
          sx={{
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            fontSize: 14,
            mb: 1,
          }}
        >
          Continue with
        </Typography> */}

        {/* Social Icons */}
        {/* <Box sx={{ display: "flex", gap: 2 }}>
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
        </Box> */}
      </Box>
    </Box>
  );
}
