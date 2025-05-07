import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  Stack,
  TextField,
  MenuItem,
  IconButton,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

const EducationScreen = () => {
  const navigate = useNavigate();
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [field, setField] = useState('');
  const [pursuing, setPursuing] = useState(false);
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const yearOptions = Array.from({ length: 70 }, (_, i) => `${1970 + i}`);

  const handleContinue = () => {
    navigate('/session/help-option-screen', {
      state: {
        institution,
        degree,
        field,
        pursuing,
        startMonth,
        startYear,
        endMonth,
        endYear,
      },
    });
  };

  const handleAdd = () => {
    // Example placeholder for "Add" action
    console.log('Add another education entry');
  };

  return (
    <Container maxWidth="xs" sx={{ py: 2 }}>
      {/* Back Button */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <IconButton size="small">
          <ArrowBackIcon />
        </IconButton>
      </Stack>

      {/* Steps */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="caption" fontWeight={500} color="text.secondary">I am</Typography>
        <Typography variant="caption" fontWeight={500} color="primary">Self</Typography>
        <Typography variant="caption" fontWeight={500} color="text.secondary">Experience</Typography>
        <Typography variant="caption" fontWeight={500} color="text.secondary">Education</Typography>
      </Stack>

      {/* Progress Bar */}
      <Box sx={{ mb: 3 }}>
        <LinearProgress variant="determinate" value={100} sx={{ height: 6, borderRadius: 5 }} />
      </Box>

      {/* Existing Education Info */}
      <Box sx={{ mb: 3 }}>
        <Typography fontWeight="600">AMC College</Typography>
        <Typography variant="body2" color="text.secondary">
          BE - Mechanical<br />
          June 2020 – Dec 2024
        </Typography>
      </Box>

      {/* Form Title */}
      <Typography fontWeight="600" sx={{ mb: 2 }}>Add Education</Typography>

      {/* Inputs */}
      <TextField
        fullWidth
        label="Institution"
        placeholder="Ex: Boston University"
        variant="outlined"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Degree"
        placeholder="Ex: Bachelor's"
        variant="outlined"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Field of Study"
        placeholder="Ex: Cinematography"
        variant="outlined"
        value={field}
        onChange={(e) => setField(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Checkbox */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          mb: 3,
        }}
        onClick={() => setPursuing(!pursuing)}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '2px solid #0060ff',
            backgroundColor: pursuing ? '#0060ff' : 'transparent',
            mr: 1.5,
          }}
        />
        <Typography>I am currently pursuing</Typography>
      </Box>

      {/* Start Date */}
      <Typography variant="subtitle2" sx={{ mb: 1 }}>Start date</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          select
          fullWidth
          value={startMonth}
          onChange={(e) => setStartMonth(e.target.value)}
        >
          <MenuItem disabled value="">Month</MenuItem>
          {monthOptions.map((month) => (
            <MenuItem key={month} value={month}>{month}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
        >
          <MenuItem disabled value="">Year</MenuItem>
          {yearOptions.map((year) => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
        </TextField>
      </Stack>

      {/* End Date */}
      <Typography variant="subtitle2" sx={{ mb: 1 }}>End Date (or expected)</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          select
          fullWidth
          value={endMonth}
          onChange={(e) => setEndMonth(e.target.value)}
        >
          <MenuItem disabled value="">Month</MenuItem>
          {monthOptions.map((month) => (
            <MenuItem key={month} value={month}>{month}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
        >
          <MenuItem disabled value="">Year</MenuItem>
          {yearOptions.map((year) => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
        </TextField>
      </Stack>

      {/* Buttons: Continue and Add */}
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleContinue}
        >
          Continue
        </Button>
        <Button
  variant="outlined"
  color="primary"
  onClick={handleAdd}
  sx={{ minWidth: 0, padding: 1, borderRadius: '50%' }}
>
  <AddIcon />
</Button>

      </Stack>
    </Container>
  );
};

export default EducationScreen;
