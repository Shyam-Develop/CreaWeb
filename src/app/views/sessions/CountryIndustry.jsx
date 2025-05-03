import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // Import the search icon

const Countryindustry = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm) {
      alert(`Search term: ${searchTerm}. Account verified successfully!`);
      navigate("/home");
    } else {
      alert("Please enter a search term to continue.");
    }
  };

  const handleSkip = () => {
    navigate("/your-skills");
  };

  const circleImages = [
    { id: 1, src: "/assets/image.jpg", name: "Industry 1" },
    { id: 2, src: "/assets/image.jpg", name: "Industry 2" },
    { id: 3, src: "/assets/image.jpg", name: "Industry 3" },
    { id: 4, src: "/assets/image.jpg", name: "Industry 4" },
    { id: 5, src: "/assets/image.jpg", name: "Industry 5" },
    { id: 6, src: "/assets/image.jpg", name: "Industry 6" },
  ];

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

      <h2 style={styles.uploadIdTitle}>Choose your industry</h2>

      <div style={styles.searchWrapper}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your industry"
          style={styles.searchInput}
        />
        <FiSearch
          style={styles.searchIcon}
          onClick={handleSearch}
        />
      </div>



      <div style={styles.circleImagesWrapper}>
        {circleImages.map((item) => (
          <div key={item.id} style={styles.circleImageContainer}>
            <img src={item.src} alt={item.name} style={styles.circleImage} />
            <span style={styles.imageName}>{item.name}</span>
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
    marginBottom: "24px",
    marginTop: "28px",
    marginBottom: "50px",
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
    marginBottom: "12px",
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
    border: "1px solid #ccc",
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
  },
  circleImagesWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "40px",
  },
  circleImageContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  circleImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  imageName: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#333",
  },
};

export default Countryindustry;
