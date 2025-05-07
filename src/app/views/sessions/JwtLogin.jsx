import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FaGoogle, FaApple } from "react-icons/fa";
import backgroundImage from "../../../assets/photo1.jpg";

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
          backgroundColor: "rgba(0,0,0,0.5)",
          p: 5,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          Welcome
        </Typography>

        <Typography
          sx={{
            mb: 4,
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Stay signed in with your account to make it easier
        </Typography>

        <Button
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
        </Button>

        {/* "Continue with" line */}
        <Typography
          sx={{
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            fontSize: 14,
            mb: 1,
          }}
        >
          Continue with
        </Typography>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
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
        </Box>
      </Box>
    </Box>
  );
}
