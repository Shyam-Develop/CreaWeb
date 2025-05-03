// import {
//   Button,
//   Fab,
//   IconButton,
//   Stack,
//   TextField,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import { Box, styled } from "@mui/material";
// import { useEffect, useState } from "react";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { SiMicrosoftexcel } from "react-icons/si";
// import { FaFilePdf } from "react-icons/fa6";
// import { IoIosMailOpen } from "react-icons/io";
// import { IoMdPrint } from "react-icons/io";
// import useSettings from "app/hooks/useSettings";
// import { useTheme } from "@emotion/react";
// import useAuth from "app/hooks/useAuth";
// import { Navigate, useNavigate } from "react-router-dom";

// // STYLED COMPONENTS
// const Container = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
//   },
// }));

// const CustomIconButton = styled(IconButton)(({ theme, bgcolor }) => ({
//   backgroundColor: bgcolor,
//   color: "white",
//   margin: theme.spacing(1),
//   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
//   "&:hover": {
//     backgroundColor: bgcolor,
//   },
// }));

// const IMG = styled("img")(() => ({
//   width: "100%",
//   overflow: "hidden",
// }));

// function downloadPdfUsingFetch(url) {
//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.blob(); // Convert response to Blob
//     })
//     .then(blob => {
//       const blobUrl = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.setAttribute('download', 'file.pdf'); // Suggest a file name
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(blobUrl); // Clean up
//     })
//     .catch(error => console.error('There was an error downloading the PDF:', error));
// }

// const HomePage = () => {
//   const [dateRange, setDateRange] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [showFields, setShowFields] = useState(false);

//   const theme = useTheme()

//   useEffect(() => {
//     const formatDate = (date) => {
//       const year = date.getFullYear();
//       const month = String(date.getMonth() + 1).padStart(2, "0");
//       const day = String(date.getDate()).padStart(2, "0");
//       return `${month}/${day}/${year}`;
//     };

//     const fromDateInit = new Date();
//     const toDateInit = new Date();
//     toDateInit.setDate(fromDateInit.getDate() + 6);

//     const formattedFromDate = formatFromDate(fromDateInit);
//     const formattedToDate = formatToDate(toDateInit);

//     const initialDateRange = `Pricing Week ${formattedFromDate} - ${formattedToDate}`;
//     setDateRange(initialDateRange);
//     setFromDate(formattedFromDate);
//     setToDate(formattedToDate);
//   }, []);

//   const handleDateChange = (newDate) => {
//     const selectedDate = new Date(newDate + "T00:00:00");

//     const formattedFromDate = formatFromDate(selectedDate);
//     setFromDate(newDate);

//     const newToDate = new Date(selectedDate);
//     newToDate.setDate(selectedDate.getDate() + 6);
//     const formattedToDate = formatToDate(newToDate);
//     setToDate(newDate);

//     const updatedDateRange = `Pricing Week ${formattedFromDate} - ${formattedToDate}`;
//     setDateRange(updatedDateRange);

//     // Close the TextField
//     setShowFields(false);
//   };

//   const formatFromDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${month}/${day}`;
//   };
//   const formatToDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${month}/${day}/${year}`;
//   };

//   const { settings, updateSettings } = useSettings();
//   const toggle = () => {
//     updateSettings({ secondarySidebar: { open: !settings.secondarySidebar.open } });
//   };
//   const navigate=useNavigate();
// const handleNavigate=()=>{
//   navigate('/pages/Price-PDF')
// }
// const handleMailNavigate=()=>{
//   navigate('/sent-mail')
// }
//   const handleOpenType = (type) => {
//     if (type === "PDF") {
//       // URL of the PDF file
//       const pdfUrl = "https://plymouth.beyondexs.com/uploads/Custom%20Price%20List%20Claus%20Meats.pdf";
//       // Open the PDF in a new tab
//       window.open(pdfUrl, "_blank");
//     }

//     if (type === "EXCEL") {
//       // URL of the PDF file
//       const pdfUrl = "https://plymouth.beyondexs.com/uploads/Custom Price List Claus Meats.xlsx";
//       // Open the PDF in a new tab
//       window.open(pdfUrl, "_blank");
//     }
//     if (type === "PRINT") {
//       // URL of the PDF file
//       const pdfUrl = "https://example.com/your-pdf-file.pdf";
//       // Open the PDF in a new tab
//       window.open(pdfUrl, "_blank");
//     }
//     if (type === "MAIL") {
//       // URL of the PDF file
//       const pdfUrl = "https://example.com/your-pdf-file.pdf";
//       // Open the PDF in a new tab
//       window.open(pdfUrl, "_blank");
//     }
//     if (type === "seepricebook") {
//       // URL of the PDF file
//       const pdfUrl = "https://plymouth.beyondexs.com/uploads/Price%20List%20Wholesale%20Pricelist.pdf";
//       // Open the PDF in a new tab
//       window.open(pdfUrl, "_blank");
//     }
//   };

//   const {user } = useAuth()
//   return (
//     <Container>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           alignItems: "center",
//           height: "80vh",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <Typography align="center" sx={{ ml: 3 }}>
//             {dateRange}{" "}
//             <IconButton
//               color="success"
//               onClick={() => setShowFields((prev) => !prev)}
//             >
//               <ArrowDropDownIcon />
//             </IconButton>
//           </Typography>

//           {showFields && (
//             <TextField
//               name="date"
//               type="date"
//               id="date"
//               label="Date"
//               value={fromDate}
//               onChange={(e) => handleDateChange(e.target.value)}
//               sx={{ width: 300 }}
//             />
//           )}
//           <Button
//             onClick={() => handleOpenType("seepricebook")}
//             variant="contained" // Use "contained" to apply background color
//             sx={{
//               backgroundColor: "#164D50",
//               color: "white",
//               borderRadius: "25px", // Adjust the border-radius as needed
//               padding: "8px 20px", // Optional: Adjust padding for better appearance
//               fontWeight: "bold", // Optional: Make text bold
//               "&:hover": {
//                 backgroundColor: "#164D50", // Optional: Add a hover effect
//               },
//             }}
//           >
//             See Full PriceBook
//           </Button>
//         </Box>
//         <Box sx={{ height: "250px" }}>

//           <IMG alt={user.company} src={user.company == "Plymouth" ?"/assets/images/plylogo.png":""} width={"100%"} height={"100%"} />
//         </Box>
//         <Stack direction="row" >
       
//             <Tooltip title="PDF" placement="top">
//   <CustomIconButton
//     // onClick={() =>
//     //   downloadPdfUsingFetch(
//     //     "https://plymouth.beyondexs.com/uploads/Custom%20Price%20List%20Claus%20Meats.pdf"
//     //   )
//     // }
//     onClick={handleNavigate}
//     sx={{
//       bgcolor: theme.palette.primary.main, // Use sx for styling
//       color: "white", // Ensure icon button text color is visible
//       "&:hover": {
//         bgcolor: theme.palette.primary.dark, // Darken color on hover
//       },
//     }}
//     aria-label="pdf"
//   >
//     <FaFilePdf style={{ fontSize: "21px" }} />
//   </CustomIconButton>
// </Tooltip>

//           <Tooltip title="Excel" placement="top">
//             <CustomIconButton
//               bgcolor={theme.palette.success.main}
//               aria-label="excel"
//               onClick={() => handleOpenType("EXCEL")}
//             >
//               <SiMicrosoftexcel style={{ fontSize: "21px" }} />
//             </CustomIconButton>
//           </Tooltip>
//           <Tooltip title="Print" placement="top">
//             <CustomIconButton
//               bgcolor={theme.palette.warning.main}
//               aria-label="print"
//               onClick={() => handleOpenType("PDF")}
//             >
//               <IoMdPrint style={{ fontSize: "21px" }} />
//             </CustomIconButton>
//           </Tooltip>
//           <Tooltip title="Mail" placement="top">
//             <CustomIconButton
//               bgcolor={theme.palette.error.main}
//               aria-label="mail"
//               onClick={handleMailNavigate}
//             >
//               <IoIosMailOpen style={{ fontSize: "21px" }} />
//             </CustomIconButton>
//           </Tooltip>
//         </Stack>
//       </Box>
//     </Container>
//   );
// };

// export default HomePage;
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
