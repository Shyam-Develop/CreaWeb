import React from "react";
import { Container, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../../assets/pict.jpg'

const Explore = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                width: '100%',
                height: '100vh',
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
<div style={{ position: "absolute", top: 16, right: 16 }}>
    <span
        style={{ color: "#FFFFFF", fontSize: 14, cursor: "pointer" }}
        onClick={() => navigate('/session/signin')} 
    >
        Skip
    </span>
</div>

            <div style={{ flex: 1 }} />

            <div
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    paddingBottom: 40,
                    paddingTop: 80,
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <h2 style={{ fontSize: 50, fontWeight: "bold", marginBottom: 8 }}>
                    Explore Opportunities
                </h2>

                <p style={{ fontSize: 20, lineHeight: 1.6, marginBottom: -12 }}>
                    Use artificial intelligence techniques
                </p>
                <p style={{ fontSize: 20, lineHeight: 1.6, marginBottom: -12 }}>
                    to enhance, manipulate, and modify
                </p>
                <p style={{ fontSize: 20, lineHeight: 1.6, marginBottom: -1 }}>
                    photos in various ways
                </p>

                <div style={{ marginBottom: 24 }}>
                    {[0, 1, 2].map((index) => (
                        <span
                            key={index}
                            style={{
                                display: "inline-block",
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                opacity: index === 2 ? 1 : 0.3,
                                margin: "0 5px",
                            }}
                        />
                    ))}
                </div>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        width: "200px",
                        bgcolor: "#2B6CB0",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: "bold",
                        py: 1.2,
                    }}
                    onClick={handleGetStarted}
                >
                    Get Started
                </Button>
            </div>
        </Container>
    );
};

export default Explore;
