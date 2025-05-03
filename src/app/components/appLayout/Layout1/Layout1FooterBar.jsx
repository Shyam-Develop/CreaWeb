import React from "react";
import { Box, useTheme, useMediaQuery, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import useSettings from "app/hooks/useSettings";
import useAuth from "app/hooks/useAuth";
import { topBarHeight, sideNavWidth, sidenavCompactWidth } from "app/utils/constant";
import Swal from "sweetalert2";

const BottomBarRoot = styled("div")(({ theme, sidebarwidth }) => ({
  position: "fixed",
  bottom: 0,
  left: sidebarwidth,
  right: 0,
  zIndex: 96,
  transition: "all 0.3s ease",
  height: topBarHeight,
}));

const Layout1SecondaryBottomBar = () => {
  const { settings, updateSettings } = useSettings();
  const { layout1Settings } = settings;
  const { logout, user } = useAuth();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const sidenavMode = layout1Settings?.leftSidebar?.mode || "full";

  const sideNavWidth = 130;          // full sidebar width = 260px
  const sidenavCompactWidth = 0;    // compact sidebar width = 80px
  
  const getSidenavWidth = () => {
    switch (sidenavMode) {
      case "full":
        return sideNavWidth;
      case "compact":
        return sidenavCompactWidth;
      default:
        return 0;
    }
  };
  const sidenavWidth = layout1Settings?.leftSidebar?.show ? getSidenavWidth() : 0;

  const handleSearchClick = () => {
    console.log("Search Clicked");
    Swal.fire({
      title: "Search Clicked",
      icon: "info",
    });
  };

  return (
    <BottomBarRoot sidebarwidth={sidenavWidth}>
      <Paper
        sx={{
          width: `calc(100% - ${sidenavWidth}px)`,
          marginLeft: `${sidenavWidth}px`,
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "#fff",
          zIndex: 10,
          height: topBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{ justifyContent: "space-around", alignItems: "center", width: "100%" }}
        >
          <BottomNavigationAction icon={<HomeIcon sx={{ color: "#1c3a46" }} />} />
          <BottomNavigationAction
            icon={<SearchIcon sx={{ color: "#1c3a46" }} />}
            onClick={handleSearchClick}
          />
          <Fab
            size="small"
            sx={{
              bgcolor: "#fff",
              border: "1px solid #eee",
              boxShadow: 3,
              mt: -4,
            }}
          >
            <AddCircleIcon sx={{ color: "#f35b1c", fontSize: 28 }} />
          </Fab>
          <BottomNavigationAction icon={<AddCircleIcon sx={{ color: "#1c3a46" }} />} />
          <BottomNavigationAction icon={<ChatBubbleIcon sx={{ color: "#1c3a46" }} />} />
        </BottomNavigation>
      </Paper>
    </BottomBarRoot>
  );
};

export default React.memo(Layout1SecondaryBottomBar);
