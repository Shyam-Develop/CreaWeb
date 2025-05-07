
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Typography,
  Avatar,
  Paper,
  Tabs,
  Tab,
  Fab,
  styled
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <Container>


      {/* Profile Card */}
      <Paper elevation={3} sx={{ display: "flex", alignItems: "center", p: 2, mx: 2, mt: 2, borderRadius: 2 }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            bgcolor: "#e0f0ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          <Box textAlign="center">
            <Typography variant="caption" color="textSecondary">status</Typography>
            <Typography variant="subtitle2" fontWeight="bold">0 of 4</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ color: "#4f55e1", fontWeight: "bold" }}>
            Complete your profile
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Completing your profile will help you get better opportunities and give more visibility.
          </Typography>
        </Box>
      </Paper>

      {/* Empty Data */}
      <Box sx={{ textAlign: "center", color: "text.secondary", mt: 6 }}>
        No data found
      </Box>

      {/* Bottom Navigation */}

    </Container>
  );
};

export default HomePage;
