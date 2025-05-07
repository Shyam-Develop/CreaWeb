import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    IconButton,
    Stack,
    Tab,
    Tabs,
    Tooltip,
    Typography,
  } from '@mui/material';
  import { Add, Group, Link as LinkIcon, School } from '@mui/icons-material';
  import VerifiedIcon from '@mui/icons-material/Verified';
  import QrCodeIcon from '@mui/icons-material/QrCode2';
  import React, { useState } from 'react';
  import nodata from '../../../assets/noData.avif'
import { useNavigate } from 'react-router-dom';
  export default function MyProfile() {
    const [tab, setTab] = useState(0);
  
    const handleTabChange = (event, newValue) => {
      setTab(newValue);
    };
    const navigate=useNavigate();
  
    return (
      <Box sx={{ width: '100%', mx: 'auto', p: 2, pb: 8 }}>
        {/* Banner and Profile Image */}
        <Box sx={{ position: 'relative', height: 150, bgcolor: 'grey.300' }}>
          {/* Banner placeholder */}
          <Box sx={{ width: '100%', height: '100%', backgroundColor: '#ccc' }} />
          {/* Profile picture */}
          <Avatar
            sx={{
              width: 80,
              height: 80,
              position: 'absolute',
              bottom: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              border: '3px solid white',
              bgcolor: 'grey.400',
            }}
          />
        </Box>
  
        {/* Progress */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" color="textSecondary">
            35%
          </Typography>
        </Box>
  
        {/* Name and Verified Badge */}
        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <Typography variant="h6" fontWeight="bold" display="inline">
            shyam ganesh
          </Typography>
          <VerifiedIcon sx={{ color: 'primary.main', fontSize: 20, ml: 0.5, verticalAlign: 'middle' }} />
          <Typography variant="body2" color="textSecondary">
            Music • Actors
          </Typography>
        </Box>
  
        {/* Profile Stats */}
        <Stack direction="row" justifyContent="space-around" sx={{ mt: 2 }}>
          {['Profile views', 'Followers', 'Following'].map((label) => (
            <Box key={label} textAlign="center">
              <Typography fontWeight="bold">0</Typography>
              <Typography variant="body2" color="textSecondary">
                {label}
              </Typography>
            </Box>
          ))}
        </Stack>
  
        <Divider sx={{ my: 2 }} />
  
        {/* Tabs */}
        <Tabs value={tab} onChange={handleTabChange} centered sx={{ mb: 2 }}>
          <Tab label="About" />
          <Tab label="Media" />
        </Tabs>
  
        {/* Quick Actions */}
        <Stack direction="row" justifyContent="center" spacing={2} flexWrap="wrap" mb={2}>
          <Tooltip title="Group">
            <IconButton color="primary">
              <Group />
            </IconButton>
          </Tooltip>
          <Tooltip title="School">
            <IconButton color="primary">
              <School />
            </IconButton>
          </Tooltip>
          <Tooltip title="Link">
            <IconButton color="primary">
              <LinkIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="QR Code">
            <IconButton color="primary">
              <QrCodeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add">
            <IconButton color="primary">
              <Add />
            </IconButton>
          </Tooltip>
        </Stack>
  
        {/* Biography Section */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="h6">Biography</Typography>
              <Button size="small"
              onClick={()=>{
                navigate("/account/my-profile/biodata/e")
              }}>Edit</Button>
            </Box>
            <Typography
              color="text.secondary"
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              No bio added
            </Typography>
          </CardContent>
        </Card>
  
        {/* Experience Section */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="h6">Experience</Typography>
              <Button onClick={()=>{
                navigate("/account/my-profile/Experience")
              }} startIcon={<Add />} sx={{ color: 'orange.main' }}>
                Add
              </Button>
            </Box>
  
            {/* Placeholder Image */}
             <Box display="flex" justifyContent="center" mb={2}>
  <Box
    component="img"
    src={nodata}
    alt="No Experience"
    sx={{ width: 100, height: 100 }}
  />
</Box>
  
            {/* No Experience Text */}
            <Typography align="center" fontWeight="bold">
              No Experience added
            </Typography>
          </CardContent>
        </Card>
  
        {/* Skill Section */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="h6">Skill</Typography>
              <Button size="small">Edit</Button>
            </Box>
  
            {/* Skill Chip */}
            <Box mt={1}>
              <Box
                sx={{
                  display: 'inline-block',
                  bgcolor: 'black',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}
              >
                Actors
              </Box>
            </Box>
          </CardContent>
        </Card>
  
        {/* Artography Section */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>              <Typography variant="h6">Artography</Typography>
              <Button startIcon={<Add />} onClick={()=>{
                navigate("/account/my-profile/Arthography")
              }} sx={{ color: 'orange.main' }}>
                Add
              </Button>
            </Box>
               {/* Placeholder Image */}
             <Box display="flex" justifyContent="center" mb={2}>
  <Box
    component="img"
    src={nodata}
    alt="No Experience"
    sx={{ width: 100, height: 100 }}
  />
</Box>
  
            {/* No Experience Text */}
            <Typography align="center" fontWeight="bold">
              No Arthography Data
            </Typography>

          </CardContent>
        </Card>
  
        {/* Credits Section */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6">Credits</Typography>
            </Box>
              {/* Placeholder Image */}
               <Box display="flex" justifyContent="center" mb={2}>
  <Box
    component="img"
    src={nodata}
    alt="No Experience"
    sx={{ width: 100, height: 100 }}
  />
</Box>
  
            {/* No Experience Text */}
            <Typography align="center" fontWeight="bold">
              No Credits Data
            </Typography>
          </CardContent>
        </Card>
  
      </Box>
    );
  }
  