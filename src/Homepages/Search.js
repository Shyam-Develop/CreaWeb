// Searchscreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FilterListIcon from '@mui/icons-material/FilterList';
import crea from '/MAHE/crea-mobile-app/login/src/assets/logo.jpg'; // Adjust path as needed

const Searchscreen = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <MenuIcon style={{ color: "#1c3a46" }} />
                <div style={styles.logoWrapper}>
                    <img src={crea} alt="CREA Logo" style={styles.logo} />
                </div>
                <div style={styles.bellWrapper}>
                    <NotificationsIcon />
                    <span style={styles.notificationDot}></span>
                </div>
            </div>

            {/* Filter & Search */}
            <div style={styles.searchRow}>
                <button style={styles.filterButton}>
                    <FilterListIcon style={{ marginRight: "5px" }} />
                    All
                </button>
                <input style={styles.searchInput} placeholder="Search..." />
            </div>

            {/* Title */}
            <div style={styles.title}>
                <span style={styles.titleBlack}>Search The Right </span>
                <span style={styles.titleOrange}>Talent</span>
            </div>

            {/* Bottom Nav */}
            <div style={styles.bottomNav}>
                <HomeIcon style={styles.navIcon} onClick={() => navigate("/home")} />
                <SearchIcon style={styles.navIcon} />
                <div style={styles.fab}>
                    <AddCircleIcon style={{ color: "#f35b1c", fontSize: "28px" }} />
                </div>
                <AddCircleIcon style={styles.navIcon} />
                <ChatBubbleIcon style={styles.navIcon} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "sans-serif",
        maxWidth: "480px",
        margin: "0 auto",
        padding: "16px",
        backgroundColor: "#fff",
        minHeight: "100vh",
        position: "relative",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
        position: "relative",
    },
    logoWrapper: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
    },
    logo: {
        height: "32px",
    },
    bellWrapper: {
        position: "absolute",
        right: "0",
        display: "flex",
        alignItems: "center",
    },
    notificationDot: {
        position: "absolute",
        top: "-2px",
        right: "-2px",
        width: "8px",
        height: "8px",
        backgroundColor: "red",
        borderRadius: "50%",
    },
    searchRow: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
    },
    filterButton: {
        backgroundColor: "#f35b1c",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        padding: "10px 16px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
    },
    searchInput: {
        flex: 1,
        padding: "10px 12px",
        borderRadius: "10px",
        border: "1px solid #eee",
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: "24px",
        fontWeight: "700",
        marginTop: "40px",
        textAlign: "left",
    },
    titleBlack: {
        color: "#000",
    },
    titleOrange: {
        color: "#f35b1c",
    },
    bottomNav: {
        position: "absolute",
        bottom: "10px",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        borderTop: "1px solid #eee",
        backgroundColor: "#fff",
    },
    navIcon: {
        fontSize: "24px",
        color: "#1c3a46",
        cursor: "pointer",
    },
    fab: {
        backgroundColor: "#fff",
        border: "1px solid #eee",
        borderRadius: "50%",
        padding: "10px",
        fontSize: "20px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        transform: "translateY(-20%)",
    },
};

export default Searchscreen;
