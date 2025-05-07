import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HelpOptionScreen = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleContinue = () => {
    if (value) {
      navigate('/session/loading-page');
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        padding: '20px',
        fontFamily: 'sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Section */}
      <Box>
        <Typography variant="h6" fontWeight="bold" mt={2} mb={3}>
          How can we help you?
        </Typography>

        <RadioGroup value={value} onChange={handleChange}>
          {[
            'Get me more opportunities',
            'Need to network',
            'I am here to hire',
          ].map((option, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                mb: 2,
                px: 2,
                py: 1,
              }}
            >
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={<Typography variant="body1">{option}</Typography>}
                sx={{ width: '100%', margin: 0 }}
              />
            </Paper>
          ))}
        </RadioGroup>
      </Box>

      {/* Continue Button */}
      <Box mb={2}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ borderRadius: '12px', textTransform: 'none' }}
          disabled={!value}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default HelpOptionScreen;
