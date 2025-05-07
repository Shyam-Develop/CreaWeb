import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBackIcon

const EducationScreen = () => {
    const [institution, setInstitution] = useState('');
    const [degree, setDegree] = useState('');
    const [field, setField] = useState('');
    const [pursuing, setPursuing] = useState(false);
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const navigate = useNavigate();

    const monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const yearOptions = Array.from({ length: 70 }, (_, i) => `${1970 + i}`);

    const renderPicker = (value, setValue, placeholder, options) => (
        <div
            style={styles.picker}
            onClick={() => {
                const next = prompt(`Choose ${placeholder}`, options.join('\n'));
                if (next) setValue(next);
            }}
        >
            <span style={{ ...styles.pickerText, ...(value ? {} : styles.placeholder) }}>
                {value || `Select ${placeholder}`}
            </span>
        </div>
    );

    return (
        <div style={styles.container}>
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
                <IconButton onClick={() => navigate('/previousPage')} sx={{ padding: '8px' }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="caption" fontWeight={500} color="text.secondary">I am</Typography>
                <Typography variant="caption" fontWeight={500} color="primary">Self</Typography>
                <Typography variant="caption" fontWeight={500} color="text.secondary">Experience</Typography>
                <Typography variant="caption" fontWeight={500} color="text.secondary">Education</Typography>
            </Stack>
            <Box mt={1}>
                <LinearProgress variant="determinate" value={85} sx={{ height: 6, borderRadius: 5 }} />
            </Box>
            <h2 style={styles.title}>Add Education</h2>

            <Input
                label="Institution"
                placeholder="Ex: Boston University"
                value={institution}
                onChange={setInstitution}
            />
            <Input
                label="Degree"
                placeholder="Ex: Bachelor's"
                value={degree}
                onChange={setDegree}
            />
            <Input
                label="Field of Study"
                placeholder="Ex: Cinematography"
                value={field}
                onChange={setField}
            />

            <div style={styles.checkboxContainer} onClick={() => setPursuing(!pursuing)}>
                <div style={{ ...styles.checkbox, ...(pursuing ? styles.checkboxChecked : {}) }} />
                <span style={styles.checkLabel}>I am currently pursuing</span>
            </div>

            <h3 style={styles.subhead}>Start Date</h3>
            <div style={styles.row}>
                {renderPicker(startMonth, setStartMonth, 'Month', monthOptions)}
                {renderPicker(startYear, setStartYear, 'Year', yearOptions)}
            </div>

            <h3 style={{ ...styles.subhead, marginTop: 20 }}>End Date</h3>
            <div style={styles.row}>
                {renderPicker(endMonth, setEndMonth, 'Month', monthOptions)}
                {renderPicker(endYear, setEndYear, 'Year', yearOptions)}
            </div>

            <button
                style={styles.cta}
                onClick={() =>
                    navigate('/session/education2', {
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
                    })
                }
            >
                Continue
            </button>
        </div>
    );
};

const Input = ({ label, placeholder, value, onChange }) => (
    <div style={{ marginBottom: 22 }}>
        <label style={styles.label}>{label}</label>
        <input
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

const styles = {
    container: {
        padding: '24px',
        maxWidth: '480px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '26px',
        fontWeight: '600',
        marginBottom: '24px',
        color: '#333',
        textAlign: 'center',
    },
    label: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '6px',
    },
    input: {
        width: '100%',
        padding: '14px',
        backgroundColor: '#f3faf6',
        borderRadius: '6px',
        fontSize: '16px',
        marginBottom: '22px',
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        cursor: 'pointer',
    },
    checkbox: {
        width: '22px',
        height: '22px',
        borderRadius: '11px',
        border: '2px solid #0060ff',
        marginRight: '12px',
    },
    checkboxChecked: {
        backgroundColor: '#0060ff',
    },
    checkLabel: {
        fontSize: '16px',
        color: '#555',
    },
    subhead: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '6px',
    },
    picker: {
        flex: '1',
        border: '1px solid #bbb',
        borderRadius: '6px',
        padding: '12px 10px',
        marginRight: '12px',
        cursor: 'pointer',
    },
    pickerText: {
        fontSize: '16px',
    },
    placeholder: {
        color: '#9aa0a6',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
    },
    cta: {
        backgroundColor: '#0060ff',
        color: '#fff',
        padding: '16px',
        borderRadius: '6px',
        fontWeight: '600',
        fontSize: '18px',
        width: '100%',
        cursor: 'pointer',
        border: 'none',
        marginTop: '40px',
    },
};

export default EducationScreen;
