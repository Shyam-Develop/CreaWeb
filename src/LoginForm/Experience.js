import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
    const [title, setTitle] = useState("");
    const [workType, setWorkType] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const navigate = useNavigate();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];
    const years = Array.from({ length: 50 }, (_, i) => `${1975 + i}`);

    const handleContinue = () => {
        navigate("/education");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Add Relevant Experience</h2>

            <label style={styles.label}>Title*</label>
            <input
                style={styles.input}
                placeholder="Ex: Director"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label style={styles.label}>Work Type*</label>
            <select
                style={styles.input}
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
            >
                <option value="">Select Work Type</option>
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
            </select>

            <label style={styles.label}>Company Name*</label>
            <input
                style={styles.input}
                placeholder="Ex: Google"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
            />

            <div style={styles.checkboxContainer}>
                <div
                    style={{
                        ...styles.checkboxBox,
                        ...(currentlyWorking ? styles.checkboxBoxChecked : {}),
                    }}
                    onClick={() => setCurrentlyWorking(!currentlyWorking)}
                >
                    {currentlyWorking && <span style={styles.checkmark}>✓</span>}
                </div>
                <span style={styles.checkBoxLabel}>I am currently working in this role</span>
            </div>

            <label style={styles.label}>Start Date*</label>
            <div style={styles.row}>
                <select
                    style={styles.input}
                    value={startMonth}
                    onChange={(e) => setStartMonth(e.target.value)}
                >
                    <option value="">Select Month</option>
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <select
                    style={styles.input}
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <label style={styles.label}>End Date</label>
            <div style={styles.row}>
                <select
                    style={styles.input}
                    value={endMonth}
                    onChange={(e) => setEndMonth(e.target.value)}
                    disabled={currentlyWorking}
                >
                    <option value="">Select Month</option>
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <select
                    style={styles.input}
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                    disabled={currentlyWorking}
                >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <button style={styles.button} onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "480px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
    },
    header: {
        fontSize: "22px",
        fontWeight: "700",
        textAlign: "center",
        marginTop: "10px",
    },
    label: {
        fontWeight: "600",
        marginTop: "20px",
        display: "block",
        marginBottom: "8px",
    },
    input: {
        width: "100%",
        padding: "12px",
        marginBottom: "16px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        backgroundColor: "#f5fefc",
    },
    checkboxContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "12px",
        cursor: "pointer",
    },
    checkboxBox: {
        width: "20px",
        height: "20px",
        border: "2px solid #ccc",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxBoxChecked: {
        backgroundColor: "#007aff",
        borderColor: "#007aff",
    },
    checkmark: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
    },
    checkBoxLabel: {
        marginLeft: "8px",
        fontSize: "14px",
        color: "#333",
    },
    row: {
        display: "flex",
        gap: "10px",
        marginBottom: "16px",
    },
    button: {
        marginTop: "28px",
        backgroundColor: "#007aff",
        padding: "16px",
        borderRadius: "12px",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        cursor: "pointer",
    },
};

export default Experience;
