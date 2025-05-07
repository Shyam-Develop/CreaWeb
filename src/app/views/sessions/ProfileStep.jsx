import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  TextField,
  LinearProgress,
  IconButton,
  Button,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

import profileImg from "../../../assets/flim.jpg";
import bannerImg from "../../../assets/pict.jpg";

const styles = {
  label: {
    fontWeight: 500,
    marginBottom: 8,
    display: 'block',
  },
  row: {
    display: 'flex',
    gap: '8px',
    marginTop: 8,
  },
  input: {
    width: '100%',
    padding: '6px 4px',
    fontSize: '13px',
    border: '1px solid #ccc',
    borderRadius: '2px',
    outline: 'none',
    height: '36px',
  },
  rowNote: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    marginTop: 4,
    marginBottom: 8,
  },
  mandatory: {
    color: 'red',
  },
  optional: {
    color: 'gray',
    fontSize: '12px',
    marginTop: 4,
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    border: '2px solid #999',
    borderRadius: 4,
    marginRight: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  checkboxBoxChecked: {
    backgroundColor: '#1976d2',
    borderColor: '#1976d2',
    color: '#fff',
  },
  checkmark: {
    fontSize: 14,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1976d2',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 8,
    border: 'none',
    marginTop: 20,
    cursor: 'pointer',
  },
};

const ProfileStep = () => {
  const navigate = useNavigate();

  const [bio, setBio] = useState("");
  const [dob, setDob] = useState(""); // Single input for DD-MM-YYYY
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleSkip = () => {
    navigate("/session/experience");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        padding: '20px',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Step Titles */}
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
        <Typography variant="caption" fontWeight={500} color="text.secondary">I am</Typography>
        <Typography variant="caption" fontWeight={500} color="primary">Self</Typography>
        <Typography variant="caption" fontWeight={500} color="text.secondary">Experience</Typography>
        <Typography variant="caption" fontWeight={500} color="text.secondary">Education</Typography>
      </Stack>

      {/* Step Progress */}
      <Box mt={1}>
        <LinearProgress variant="determinate" value={50} sx={{ height: 6, borderRadius: 5 }} />
      </Box>

      {/* Banner */}
      <Box
        sx={{
          height: 120,
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mt: 2,
          borderRadius: 2,
        }}
      />

      {/* Profile Avatar */}
      <Box sx={{ position: 'relative', mt: -6, display: 'flex', justifyContent: 'center' }}>
        <Avatar
          src={profileImg}
          sx={{ width: 80, height: 80, border: '3px solid white' }}
        />
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 'calc(50% - 40px)',
            background: '#fff',
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Name and Role */}
      <Box textAlign="center" mt={1}>
        <Typography fontWeight={600}>Veer Pratap Singh</Typography>
        <Typography variant="body2" color="text.secondary">
          Television • Cameraman
        </Typography>
      </Box>

      {/* Skip Biography */}
      <Box textAlign="right" mt={2}>
        <Button onClick={handleSkip} size="small" variant="text">
          Skip
        </Button>
      </Box>

      {/* Biography */}
      <Box mt={1}>
        <Typography fontWeight={500}>Biography</Typography>
        <TextField
          placeholder="Describe yourself..."
          multiline
          minRows={4}
          fullWidth
          variant="outlined"
          inputProps={{ maxLength: 160 }}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          sx={{ mt: 1 }}
        />
        <Typography variant="caption" display="block" textAlign="right">
          {bio.length}/160
        </Typography>
      </Box>

      {/* Date of Birth and Other Inputs */}
      <Box mt={3}>
        <label style={styles.label}>Date of Birth</label>
        <input
          type="text"
          placeholder="DD-MM-YYYY"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={styles.input}
        />

        <div style={styles.row}>
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.row}>
          <input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.rowNote}>
         
        </div>

        <div style={styles.row}>
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.checkboxContainer}>
          <div
            style={{
              ...styles.checkboxBox,
              ...(isChecked ? styles.checkboxBoxChecked : {}),
            }}
            onClick={() => setChecked(!isChecked)}
          >
            {isChecked && <span style={styles.checkmark}>✓</span>}
          </div>
          <label style={styles.checkboxLabel}>
            I am currently working in this role
          </label>
        </div>

        <button type="submit" style={styles.button}>
          Continue
        </button>
      </Box>
    </Container>
  );
};

export default ProfileStep;
