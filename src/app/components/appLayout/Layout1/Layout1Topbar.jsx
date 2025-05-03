import {
  Alert,
  Avatar,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  Slide,
  Snackbar,
  Tooltip,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Typography,
  Tab,
 Tabs, 
} from "@mui/material";
import { Badge } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, styled, useTheme } from "@mui/material";
import { AppMenu } from "app/components";
import { themeShadows } from "../../baseTheme/themeColors";
// import { NotificationProvider } from 'app/contexts/NotificationContext';
import useAuth from "app/hooks/useAuth";
import useSettings from "app/hooks/useSettings";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Span } from "../Typography"
import { Span } from "app/components/Typography";
// import NotificationBar from '../../NotificationBar/NotificationBar';
// import ShoppingCart from '../../ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";
import AppSearchBox from "app/components/AppSearchBox";
import Swal from "sweetalert2";
import { topBarHeight } from "app/utils/constant";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: "all 0.3s ease",
  boxShadow: themeShadows[8],
  height: 200,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px",
  paddingLeft: 18,
  paddingRight: 20,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: 14,
    paddingRight: 16,
  },
}));

const UserMenu = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: 24,
  padding: 4,
  "& span": { margin: "0 8px" },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 185,
  "& a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  "& span": { marginRight: "10px", color: theme.palette.text.primary },
}));

const IconBox = styled("div")(({ theme }) => ({
  display: "inherit",
  // [theme.breakpoints.down("md")]: { display: "none !important" },
}));

const Layout1Topbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    updateSidebarMode({ mode });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {

    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);

    Swal.fire({
      title: "Favourite Added Successfully",
      // text: "You clicked the button!",
      icon: "success"
    });
  };
  return (
    <TopbarRoot>
      <TopbarContainer flexDirection="column">
        
        {/* First Row */}
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          {/* Left Side */}
          <Box display="flex" alignItems="center">
            <StyledIconButton onClick={handleSidebarToggle}>
              <Icon>menu</Icon>
            </StyledIconButton>
          </Box>
  
          {/* Center */}
          <Box display="flex" alignItems="center" justifyContent="center" flexGrow={1}>
            <img src="" alt="Artizt Network Logo" style={{ height: 40 }} />
          </Box>
  
          {/* Right Side */}
          <Box display="flex" alignItems="center">
            <StyledIconButton
              sx={{
                backgroundColor: "#fff",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                padding: "8px",
              }}
            >
              <Badge color="error" variant="dot">
                <Icon sx={{ color: "#1A3B5D" }}>notifications</Icon>
              </Badge>
            </StyledIconButton>
          </Box>
        </Box>
  
        {/* Second Row (New Box) */}
        {/* Second Row (New Box) */}
<Box display="flex" alignItems="center" justifyContent="center" width="100%" mt={1}>
  <Tabs centered value={0} sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
    <Tab
      label={
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <StarBorderIcon sx={{ fontSize: 30 }} />
          <Typography variant="caption" fontWeight="bold" color="primary">Opportunities</Typography>
        </Box>
      }
    />
    <Tab
      label={
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <PeopleAltIcon sx={{ fontSize: 30 }} />
          <Typography variant="caption" color="textSecondary">Network</Typography>
        </Box>
      }
    />
    <Tab
      label={
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <PersonAddIcon sx={{ fontSize: 30 }} />
          <Typography variant="caption" color="textSecondary">Collab</Typography>
        </Box>
      }
    />
  </Tabs>
</Box>

  
      </TopbarContainer>
    </TopbarRoot>
  );
  
  // return (
  //   <TopbarRoot>
  //     <TopbarContainer>
  //       <Box display="flex">
  //         <StyledIconButton onClick={handleSidebarToggle}>
  //           <Icon>menu</Icon>
  //         </StyledIconButton>

  //         {/* <IconBox>
  //           <StyledIconButton onClick={handleClick}>
  //             <Tooltip title="Add Favourite">
  //               {!open ? (
  //                 <Icon>star_outline</Icon>
  //               ) : (
  //                 <Icon color="warning">star</Icon>
  //               )}
  //             </Tooltip>
  //           </StyledIconButton>
  //         </IconBox> */}
  //       </Box>

  //       <Box display="flex" alignItems="center">
  //         {/* <AppSearchBox /> */}

  //         <AppMenu
  //           menuButton={
  //             <UserMenu>
  //               <Hidden xsDown>
  //                 {/* <Span>
  //                   Hi <strong>{user.name}</strong>-{user.company}
  //                 </Span> */}
  //               </Hidden>
  //               <Avatar src={user.avatar} sx={{ cursor: "pointer" }} />
  //             </UserMenu>
  //           }
  //         >
  //           <StyledItem>
  //             <Link to="/home">
  //               <Icon> home </Icon>
  //               <Span> Home </Span>
  //             </Link>
  //           </StyledItem>

  //           <StyledItem>
  //             <Link to="/user-profile">
  //               <Icon> person </Icon>
  //               <Span> Profile </Span>
  //             </Link>
  //           </StyledItem>

  //           {user.role == 'ADMIN'&&<StyledItem
  //             onClick={() => {
  //               navigate("/profile/setting");

  //             }}>
  //             <Link to="/user-settings">
  //               <Icon> settings </Icon>
  //               <Span> Settings </Span>
  //             </Link>
  //           </StyledItem>}

  //           <StyledItem
  //             onClick={() => {
  //               navigate("/session/signin");
  //               logout();
  //             }}
  //           >
  //             <Icon> power_settings_new </Icon>
  //             <Span> Logout </Span>
  //           </StyledItem>
  //         </AppMenu>
        
            
  //       </Box>
  //     </TopbarContainer>
  //   </TopbarRoot>
  // );
};

export default React.memo(Layout1Topbar);
