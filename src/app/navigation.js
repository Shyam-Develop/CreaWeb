import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { BiSolidContact } from "react-icons/bi";
import { GoFileDirectoryFill } from "react-icons/go";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { authRoles } from './auth/authRoles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export const navigations = [
  { 
    name: 'My Account', 
    path: '/account/my-profile', 
    iconText: 'V', 
    accessID: "TR010", 
    icon: <AccountBoxIcon color="green" fontSize='small'/>,
    role: authRoles.user 
  },
  { 
    name: 'Saved', 
    path: '/pages/build-custom-price-book', 
    iconText: 'B', 
    accessID: null,
    icon: <DescriptionIcon fontSize='small'/>,
    role: authRoles.user 
  },
  { 
    name: 'Community Forum', 
    path: '/pages/run-price-book', 
    iconText: 'C',
    accessID: null, 
    icon: <DescriptionIcon fontSize='small'/>,
    role: authRoles.user 
  },
  {
    name: 'Events',
    icon: <DescriptionIcon fontSize='small'/>,
    path: '/pages/quote',
    role: authRoles.user 
  },
  {
    name: 'Hiring Dashboard',
    icon: <FolderIcon fontSize='small'/>,
    path: '/hiring-dash-board',  // Added a path
    role: authRoles.admin 
  },
  { 
    name: 'Applied Dashboard', 
    path: '/pages/view-directory', 
    icon: <DescriptionIcon fontSize='small'/>,
    accessID: null,
    role: authRoles.user 
  },
  { 
    name: 'Advertisement', 
    path: '/pages/add-new-contact',
    accessID: null,
    icon: <DescriptionIcon fontSize='small' />,
    role: authRoles.user 
  },
  {
    name: 'Settings',
    icon: <DescriptionIcon fontSize='small'/>,
    path: '/pages/edit-price-book',
    role: authRoles.user 
  },
 
];

// Updated renderLevels to include proper checks
const renderLevels = (navItems, userRole) => {
  return navItems.map(item => {
    // Safely check if item.roles exists and is an array before calling .includes
    if (Array.isArray(item.role) && item.role.includes(userRole)) {
      return (
        <div key={item.name}>
          {item.icon}
          <span>{item.name}</span>
        </div>
      );
    }
    
    // If the item has children, render them recursively
    if (item.children) {
      return (
        <div key={item.name}>
          <div>{item.icon} <span>{item.name}</span></div>
          <div>{renderLevels(item.children, userRole)}</div>
        </div>
      );
    }
    
    return null; // If none of the conditions are met, return null
  });
};

// Example of how you might use the renderLevels function in your component
const AppVertivalNav = ({ userRole }) => {
  return (
    <div>
      {renderLevels(navigations, userRole)}
    </div>
  );
};

export default AppVertivalNav;
