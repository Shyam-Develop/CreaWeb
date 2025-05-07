import React, { useState } from "react";
import { Box, Button, TextField, IconButton, Avatar, Typography, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ProfileEdit = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "shyam ganesh",
    bio: "",
    dob: "",
    age: "",
    height: "",
    weight: "",
    location: ""
  });

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <Box sx={{ width: "100%", mx: "auto",  p: 2, pb: 8  }}>
      {/* Cover Image */}
      <Box sx={{ position: "relative", mb: 8 }}>
        <img
          src={coverImage || "https://via.placeholder.com/600x200"}
          alt="Cover"
          style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 8 }}
        />
        <IconButton
          component="label"
          sx={{ position: "absolute", top: 16, right: 16, bgcolor: "white" }}
        >
          <PhotoCamera />
          <input type="file" hidden accept="image/*" onChange={(e) => handleImageChange(e, setCoverImage)} />
        </IconButton>

        {/* Profile Image */}
        <Box sx={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)" }}>
          <Avatar
            src={profileImage || "https://via.placeholder.com/100"}
            sx={{ width: 80, height: 80, border: "3px solid white" }}
          />
          <IconButton
            component="label"
            sx={{ position: "absolute", bottom: 0, right: 0, bgcolor: "white" }}
          >
            <EditIcon fontSize="small" />
            <input type="file" hidden accept="image/*" onChange={(e) => handleImageChange(e, setProfileImage)} />
          </IconButton>
        </Box>
      </Box>

      {/* Form Fields */}
      <Box sx={{ mt: 6 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          margin="normal"
          InputProps={{
            endAdornment: (
              <IconButton size="small">
                <EditIcon fontSize="small" />
              </IconButton>
            )
          }}
        />
        <TextField
          fullWidth
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          margin="normal"
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          margin="normal"
          InputProps={{
            endAdornment: (
              <IconButton size="small">
                <EditIcon fontSize="small" />
              </IconButton>
            )
          }}
        />

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <IconButton size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Height"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <IconButton size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <IconButton size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <IconButton size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                )
              }}
            />
          </Grid>
        </Grid>

        {/* Update Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4, bgcolor: "black", "&:hover": { bgcolor: "black" } }}
        >
          Update Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileEdit;
