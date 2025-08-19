import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
} from "@mui/material";
import projectimage from '../../../assets/flim.jpg'

export default function PastProjectCard() {
  return (
   <Card
  sx={{
    maxWidth: 380,
    borderRadius: 3,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <CardContent>
    {/* Image + Project Name + Year in one row */}
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Image */}
      <CardMedia
        component="img"
        image={projectimage}
        alt="Project"
        sx={{
          width: 60,
          height: 60,
          borderRadius: "30%",
          objectFit: "cover",
        }}
      />

      {/* Project Name & Year */}
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Project Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1998
        </Typography>
      </Box>
    </Box>
        {/* Role & Industry */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            The role
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Industry
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{ mt: 1, color: "text.secondary" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Typography>

        {/* Links */}
        <Typography
          variant="body2"
          sx={{ mt: 1, fontWeight: "bold" }}
        >
          Links
        </Typography>
        <Link
          href="#"
          underline="hover"
          sx={{ display: "block", fontSize: 14 }}
        >
          IMDb
        </Link>
        <Link
          href="#"
          underline="hover"
          sx={{ display: "block", fontSize: 14 }}
        >
          Instagram
        </Link>
      </CardContent>
    </Card>
  );
}
