import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Yourskills = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const skillRefs = useRef({});

    const skills = [
        "Actors", "Actress", "Hero", "Heroine", "Comedian", "Modelling", "Side Actress",
        "Villain", "Character Artist", "Junior Artist", "Child Artist Body",
        "Double Street Actors", "Theatre Actors", "Film Actors", "Comedians", "Mimicry",
        "Serial Actors", "Serial Actress", "Negative Role", "Junior Actors",
        "Senior Actors", "Music composer", "Musician", "Lyricist", "Classical Music"
    ];

    const handleSearch = () => {
        if (searchTerm) {
            const match = skills.find((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (match && skillRefs.current[match]) {
                skillRefs.current[match].scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                alert("Skill not found.");
            }
        } else {
            alert("Please enter a search term to continue.");
        }
    };

    const handleSkip = () => {
        navigate("/detail-screen");
    };

    return (
        <div style={styles.container}>
            <div style={styles.skipWrapper}>
                <span style={styles.skip} onClick={handleSkip}>
                    Skip
                </span>
            </div>

            <div style={styles.stepsContainer}>
                {["I am", "Self", "Experience", "Education"].map((label, index) => (
                    <div key={index} style={styles.stepWrapper}>
                        <span style={styles.stepLabel}>{label}</span>
                        <div style={styles.stepDot} />
                        <div style={styles.stepLine} />
                    </div>
                ))}
            </div>

            <h2 style={styles.uploadIdTitle}>Select your skills from the</h2>
            <h2 style={styles.uploadIdTitle}>following...</h2>

            <div style={styles.searchWrapper}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search skillsets"
                    style={styles.searchInput}
                />
                <FiSearch
                    style={styles.searchIcon}
                    onClick={handleSearch}
                />
            </div>

            <div style={styles.skillsWrapper}>
                {skills.map((skill) => (
                    <div
                        key={skill}
                        ref={(el) => (skillRefs.current[skill] = el)}
                        style={styles.skillChip}
                    >
                        {skill}
                    </div>
                ))}
            </div>

            <button style={styles.continueButton} onClick={handleSearch}>
                Continue
            </button>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "sans-serif",
        maxWidth: "480px",
        margin: "0 auto",
        position: "relative",
    },
    skipWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "8px",
    },
    skip: {
        fontSize: "16px",
        color: "#666",
        cursor: "pointer",
    },
    stepsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "relative",
        marginBottom: "50px",
        marginTop: "28px",
    },
    stepWrapper: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        position: "relative",
    },
    stepLabel: {
        fontSize: "13px",
        color: "#333",
        marginBottom: "4px",
        display: "block",
    },
    stepDot: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "#4285F4",
        margin: "0 auto",
    },
    stepLine: {
        position: "absolute",
        top: "35px",
        left: "-30%",
        width: "80%",
        height: "3px",
        backgroundColor: "#d6e2fa",
        zIndex: -1,
        transform: "translateX(50%)",
    },
    uploadIdTitle: {
        fontSize: "28px",
        fontWeight: "bold",
        marginTop: "-20px",
        textAlign: "center",
    },
    searchWrapper: {
        position: "relative",
        marginBottom: "16px",
    },
    searchInput: {
        width: "80%",
        padding: "12px 40px 12px 16px",
        fontSize: "16px",
        borderRadius: "12px",
        border: "none",
        outline: "none",
        backgroundColor: "#f9f9f9",
    },
    searchIcon: {
        position: "absolute",
        top: "50%",
        right: "52px",
        transform: "translateY(-50%)",
        color: "orange",
        fontSize: "20px",
        cursor: "pointer",
    },
    skillsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        maxHeight: "220px",
        overflowY: "auto",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#f5f5f5",
    },
    skillChip: {
        padding: "10px 16px",
        borderRadius: "20px",
        backgroundColor: "#e0ecff",
        color: "#0056d2",
        fontSize: "14px",
        cursor: "pointer",
        userSelect: "none",
    },
    continueButton: {
        width: "70%",
        padding: "14px",
        backgroundColor: "#4285F4",
        color: "#fff",
        fontSize: "16px",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        marginTop: "30px",
        marginLeft: "50px",
        display: "flex",
        justifyContent: "center",
    },
};

export default Yourskills;
