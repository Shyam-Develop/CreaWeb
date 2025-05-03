import React from 'react';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Discover = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/session/crea-explore');
    };

    return (
        <Container
           disableGutters
           sx={{
               width: '100%',
               maxWidth: 400, 
               mx: 'auto', 
               backgroundImage: 'url("/background.jpg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               minHeight: '100vh',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
               position: 'relative',
               color: '#fff',
               px: 2,
           }}
       >
            <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <span style={{ color: '#fff', fontSize: 14, cursor: 'pointer' }}>
                    Skip
                </span>
            </div>

            <div style={{ flex: 1 }} />

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
                <Button
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
                </Button>
            </div>
        </Container>
    );
};

export default Discover;
