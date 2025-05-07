import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdPhone, MdCheckCircle } from "react-icons/md";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";

const AccountVerification = () => {
  const navigate = useNavigate();

  const handlePhoneVerify = () => {
    navigate("/session/phone-number");
  };

  const handleEmailVerify = () => {
    navigate("/session/email-verify");
  };

  const handleContinue = () => {
    navigate("/session/upload-id");
  };

 

  return (
    <Box sx={{ padding: 2, maxWidth: 480, margin: "0 auto", fontFamily: "sans-serif" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box />
       
      </Box>

      <Typography variant="h5" fontWeight="bold" mb={3}>
        Account Verification
      </Typography>

      {/* Email Card */}
      <Card
        sx={{ borderColor: "grey.400", border: 1, mb: 2 }}
        onClick={handleEmailVerify}
        style={{ cursor: "pointer" }}
      >
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <IconButton disabled>
            <MdEmail size={24} color="#666" />
          </IconButton>
          <Box sx={{ flex: 1, ml: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Email Address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Verify with your email
            </Typography>
          </Box>
          <Button variant="text" color="primary">
            Verify
          </Button>
        </CardContent>
      </Card>

      {/* Phone Card */}
      <Card
        sx={{ borderColor: "grey.400", border: 1, mb: 4 }}
        onClick={handlePhoneVerify}
        style={{ cursor: "pointer" }}
      >
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
          <Button variant="text" color="warning">
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
