import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailScreen = () => {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState({ dd: "", mm: "", yyyy: "" });
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/session/experience");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleContinue} style={styles.form}>
        <h2 style={styles.header}>MAHENDRAN</h2>

        <label style={styles.label}>Biography*</label>
        <textarea
          placeholder="Describe yourself..."
          maxLength={150}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={styles.textArea}
        />
        <p style={styles.charCount}>{bio.length}/150</p>

        <label style={styles.label}>Date of Birth</label>
        <div style={styles.row}>
          <input
            type="text"
            placeholder="DD"
            value={dob.dd}
            onChange={(e) => setDob({ ...dob, dd: e.target.value })}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="MM"
            value={dob.mm}
            onChange={(e) => setDob({ ...dob, mm: e.target.value })}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="YYYY"
            value={dob.yyyy}
            onChange={(e) => setDob({ ...dob, yyyy: e.target.value })}
            style={styles.input}
          />
        </div>
        <p style={styles.optional}>Optional</p>

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
        <div style={styles.rowNote}>
          <span style={styles.mandatory}>Mandatory</span>
          <span style={styles.mandatory}>Mandatory</span>
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
          <span style={styles.optional}>Optional</span>
          <span style={styles.optional}>Optional</span>
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
        <p style={styles.mandatory}>Mandatory</p>

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
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  form: {
    padding: "30px 0",
    width: "100%",
    maxWidth: "480px",
  },
  header: {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "22px",
    fontWeight: "700",
  },
  label: {
    display: "block",
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "600",
  },
  textArea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    resize: "none",
    marginTop: "8px",
    fontSize: "14px",
  },
  charCount: {
    textAlign: "right",
    fontSize: "12px",
    color: "#888",
    marginBottom: "8px",
  },
  row: {
    display: "flex",
    gap: "8px",
    marginTop: "12px",
  },
  rowNote: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    marginTop: "4px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontSize: "14px",
  },
  optional: {
    fontSize: "12px",
    color: "#888",
    marginTop: "4px",
  },
  mandatory: {
    fontSize: "12px",
    color: "#444",
    fontWeight: "500",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
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
  checkboxLabel: {
    marginLeft: "8px",
    fontSize: "14px",
    color: "#333",
  },
  button: {
    marginTop: "28px",
    backgroundColor: "#007aff",
    color: "#fff",
    fontSize: "16px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    width: "100%",
    cursor: "pointer",
  },
};

export default DetailScreen;
