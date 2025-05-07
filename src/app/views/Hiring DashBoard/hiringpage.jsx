// HomePage.jsx
import React, { useState } from 'react';
import {
  Typography, Box, Fab, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';

const options = [
  { label: 'Add Internship', path: '/hiring-dash-board/add-internship' },
  { label: 'Add Apprenticeship', path: '/hiring-dash-board/add-apprenticeship' },
  { label: 'Add Project', path: '/hiring-dash-board/project/add-project' },
  { label: 'Add Casting Call', path: '/hiring-dash-board/add-casting-call' },
  { label: 'Add Post Feed', path: '/hiring-dash-board/add-post-feed' },
  { label: 'Add Gigwork', path: '/hiring-dash-board/add-gigwork' },
];

export default function HiringPage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
<Box sx={{ width: '100%', mx: 'auto', p: 2, pb: 8 }}>
      <Typography variant="h6" fontFamily="monospace">
        Hello shyam ganesh 👋
      </Typography>

      <Typography variant="h4" fontWeight="bold">
        Find Your Right <span style={{ color: 'orange', fontStyle: 'italic' }}>Talent</span>
      </Typography>

      {['Casting Calls', 'Gig Works', 'Internship', 'Apprenticeship'].map((title) => (
        <Box key={title} mt={4}>
          <Typography variant="h6" fontFamily="monospace">{title}</Typography>
          <Typography color="gray">No data found</Typography>
        </Box>
      ))}

      {/* Floating Action Button */}
      <Box mt={4} display="flex" justifyContent="flex-end">
  <Fab
    color="primary"
    onClick={() => setOpen(true)}
    sx={{ zIndex: 0 }}
  >
    <AddIcon />
  </Fab>
</Box>

      {/* Dialog Box */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Select an Option</DialogTitle>
        <DialogContent>
          <List>
            {options.map(({ label, path }) => (
              <ListItem button key={label} onClick={() => handleClick(path)}>
                <ListItemIcon><WorkIcon /></ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

// export default hiringPage;
