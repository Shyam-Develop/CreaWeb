import React from 'react';
import { Container, Button,Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../../assets/pict.jpg';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Discover = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/session/crea-explore');
    };

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                width: '100%',
                height: '100vh', // Full screen height
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                color: '#fff',
                px: 2,
            }}
        >
            {/* Skip link */}
            <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <span style={{ color: '#fff', fontSize: 14, cursor: 'pointer' }}
                        onClick={() => navigate('/session/crea-explore')} // same as Next
>
                    Skip
                </span>
            </div>

            <div style={{ flex: 1 }} />

            {/* Bottom Content */}
            <div
                style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                    paddingBottom: 40,
                    paddingTop: 80,
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
                    Discover Inspiring Content & Talent
                </h2>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: -12 }}>
                    Use artificial intelligence techniques
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: -12 }}>
                    to enhance, manipulate, and modify
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: -1 }}>
                    photos in various ways
                </p>

                {/* Dot Indicators */}
                <div style={{ marginBottom: 24 }}>
                    {[0, 1, 2].map((index) => (
                        <span
                            key={index}
                            style={{
                                display: 'inline-block',
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                opacity: index === 1 ? 1 : 0.3,
                                margin: '0 5px',
                            }}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // pushes to the right
    cursor: "pointer",
    gap: 1, // space between text and icon
  }}
  onClick={handleNext}
>
  <Typography
    sx={{
      color: "white",
      fontWeight: 900,
      fontSize: 14,
    }}
  >
    Swipe
  </Typography>
  <ArrowForwardIcon sx={{ color: "white", fontWeight: 900, fontSize: 18 }} />
</Box>
                {/* <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: '#2B6CB0',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        py: 1.2,
                    }}
                    onClick={handleNext}
                >
                    Next
                </Button> */}
            </div>
        </Container>
    );
};

export default Discover;
