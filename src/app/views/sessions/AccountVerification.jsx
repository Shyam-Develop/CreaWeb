import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdPhone, MdCheckCircle } from "react-icons/md";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";

const AccountVerification = () => {
  const navigate = useNavigate();

  const handlePhoneVerify = () => {
    navigate("/session/phone-verification");
  };

  const handleContinue = () => {
    alert("Account verified successfully!");
    navigate("/home");
  };

  const handleSkip = () => {
    navigate("/session/upload-id");
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 480, margin: "0 auto", fontFamily: "sans-serif" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box />
        <Typography
          variant="body2"
          sx={{ cursor: "pointer", color: "text.secondary" }}
          onClick={handleSkip}
        >
          Skip
        </Typography>
      </Box>

      <Typography variant="h5" fontWeight="bold" mb={3}>
        Account Verification
      </Typography>

      {/* Verified Email Card */}
      <Card sx={{ borderColor: "success.main", border: 1, backgroundColor: "#f0fff5", mb: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <IconButton disabled>
            <MdEmail size={24} color="#666" />
          </IconButton>
          <Box sx={{ flex: 1, ml: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Email address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Verified with your email
            </Typography>
          </Box>
          <MdCheckCircle size={24} color="#28a745" />
        </CardContent>
      </Card>

      {/* Phone Verification Card */}
      <Card sx={{ borderColor: "grey.400", border: 1, mb: 4 }}>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <IconButton disabled>
            <MdPhone size={24} color="#666" />
          </IconButton>
          <Box sx={{ flex: 1, ml: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Phone Number
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Verify with your phone number
            </Typography>
          </Box>
          <Button variant="text" color="warning" onClick={handlePhoneVerify}>
            Verify
          </Button>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        fullWidth
        color="primary"
        size="large"
        sx={{ borderRadius: 2 }}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </Box>
  );
};

export default AccountVerification;
