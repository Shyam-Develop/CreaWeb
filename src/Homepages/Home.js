import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import crea from '/MAHE/crea-mobile-app/login/src/assets/logo.jpg'; 

const HomeScreen = () => {
    const navigate = useNavigate(); // Declare the navigate function

    // Function to handle the search icon click
    const handleSearchClick = () => {
        navigate('/search'); // Navigate to the Searchscreen
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <MenuIcon style={{ color: "#1c3a46" }} />
                <img src={crea} alt="CREA Logo" style={styles.logo} /> 
                <div style={styles.bellWrapper}>
                    <NotificationsIcon />
                    <span style={styles.notificationDot}></span>
                </div>
            </div>

            <div style={styles.tabs}>
                <div style={styles.tabItemActive}>
                    <StarBorderIcon style={styles.tabIcon} />
                    <span style={styles.tabTextActive}>Opportunites</span>
                    <div style={styles.activeUnderline}></div>
                </div>
                <div style={styles.tabItem}>
                    <PeopleAltIcon style={styles.tabIcon} />
                    <span>Network</span>
                </div>
                <div style={styles.tabItem}>
                    <PersonAddIcon style={styles.tabIcon} />
                    <span>Collab</span>
                </div>
            </div>

            <div style={styles.profileBox}>
                <div style={styles.statusCircle}>
                    <div style={styles.statusText}>
                        <span style={styles.statusLabel}>status</span>
                        <strong>0 of 4</strong>
                    </div>
                </div>
                <div style={styles.profileText}>
                    <h4 style={{ margin: 0, color: "#4f55e1" }}>Complete your profile</h4>
                    <p style={{ margin: "4px 0 0", color: "#555" }}>
                        Completing your profile will help you to get better opportunities and give more visibility.
                    </p>
                </div>
            </div>

            <div style={styles.emptyData}>
                No data found
            </div>

            <div style={styles.bottomNav}>
                <HomeIcon style={styles.navIcon} />
                <SearchIcon style={styles.navIcon} onClick={handleSearchClick} /> {/* Add click handler */}
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
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#fff",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: "40px",
    },
    bellWrapper: {
        position: "relative",
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
    tabs: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        borderBottom: "1px solid #eee",
        paddingBottom: "10px",
    },
    tabItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "12px",
        color: "#888",
    },
    tabItemActive: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "12px",
        color: "#000",
        position: "relative",
    },
    tabIcon: {
        fontSize: "20px",
        marginBottom: "4px",
    },
    tabTextActive: {
        color: "#000",
        fontWeight: "500",
    },
    activeUnderline: {
        position: "absolute",
        bottom: "-10px",
        width: "100%",
        height: "3px",
        backgroundColor: "#f35b1c",
        borderRadius: "2px",
    },
    profileBox: {
        display: "flex",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "16px",
        marginTop: "20px",
    },
    statusCircle: {
        width: "60px",
        height: "60px",
        borderRadius: "30px",
        backgroundColor: "#e0f0ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px",
    },
    statusText: {
        textAlign: "center",
        fontSize: "12px",
    },
    statusLabel: {
        display: "block",
        color: "#777",
        fontSize: "10px",
    },
    profileText: {
        flex: 1,
    },
    emptyData: {
        textAlign: "center",
        color: "#888",
        marginTop: "40px",
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
    },
    fab: {
        backgroundColor: "#fff",
        border: "1px solid #eee",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        transform: "translateY(-20%)",
    },
};

export default HomeScreen;
