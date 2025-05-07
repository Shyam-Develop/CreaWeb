import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Autocomplete,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import nodata from '../../../assets/noData.avif';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; // Optional for validation
import education from '../../../assets/education.jpg'
const Experience=()=> {
  const [open, setOpen] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);
  const [currentWorking, setCurrentWorking] = useState(false);
  const [currentStuding, setCurrentStuding] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEduOpen = () => setEduOpen(true);
  const handleEduClose = () => setEduOpen(false);
  const initialValues = {
    title: '',
    workType: '',
    companyName: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    currentWorking: false,
  };
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  const languagesList = [
    "English", "Spanish", "Mandarin", "Hindi", "Arabic", "Portuguese", "Bengali", 
    "Russian", "Japanese", "Punjabi", "German", "Javanese", "Korean", "French", "Telugu"
    // you can extend with a full list later!
  ];
  const years = Array.from({ length: 30 }, (_, i) => 2025 - i);

  return (
    <Box sx={{ width: '100%', mx: 'auto', p: 2, pb: 8 }}>
          <Typography variant="h6" sx={{display:"flex",justifyContent:"center",alignContent:"center"}}>Detail Settings</Typography>
      <Divider sx={{ my: 2 }} />

      {/* ================= EXPERIENCE SECTION ================== */}
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6">Experience</Typography>
            <Button startIcon={<Add />} onClick={handleOpen} sx={{ color: 'orange.main' }}>
              Add
            </Button>
          </Box>

          {/* Placeholder Image and Text */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src={nodata}
              alt="No Experience"
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography align="center" fontWeight="bold">
            No Experience added
          </Typography>
        </CardContent>
      </Card>

      {/* ================= SKILL SECTION ================== */}
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6">Skill</Typography>
            <Button size="small">Edit</Button>
          </Box>
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
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6">Languages</Typography>
            <Button size="small" onClick={handleOpenDialog}>Edit</Button>
          </Box>
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src={education}
              alt="No Education"
              sx={{ width: 100, height: 100 }}
            />

          </Box>
          <Typography align="center" fontWeight="bold">
            {selectedLanguages.length > 0
              ? selectedLanguages.join(', ')
              : "No Language added"}
          </Typography>
        </CardContent>
      </Card>
      {/* ================= Education SECTION ================== */}
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6">Education</Typography>
            <Button startIcon={<Add />} onClick={handleEduOpen} sx={{ color: 'orange.main' }}>
              Add
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src={education}
              alt="No Education"
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography align="center" fontWeight="bold">
            No Education added
          </Typography>
        </CardContent>
      </Card>

     
      {/* ================= DIALOG ================== */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Relevant Experience</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values); // You can send to API here
            handleClose();
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form>
              <Box noValidate sx={{ mt: 1 }}>
                <TextField
                  fullWidth
                  label="Title"
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Ex: Director"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />

                <TextField
                  select
                  fullWidth
                  label="Work Type"
                  id="workType"
                  name="workType"
                  value={values.workType}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  size="small"
                >
                  <MenuItem value="Full Time">Full Time</MenuItem>
                  <MenuItem value="Part Time">Part Time</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                  <MenuItem value="Freelance">Freelance</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  label="Company Name"
                  id="companyName"
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                  placeholder="Ex: Google"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="currentWorking"
                      checked={values.currentWorking}
                      onChange={(e) => setFieldValue('currentWorking', e.target.checked)}
                    />
                  }
                  label="I am currently working in this role"
                  sx={{ my: 2 }}
                />

                {/* Start Date */}
                <Typography variant="subtitle1" mt={2}>
                  Start Date
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      select
                      fullWidth
                      label="Select Month"
                      id="startMonth"
                      name="startMonth"
                      value={values.startMonth}
                      onChange={handleChange}
                      size="small"
                    >
                      {months.map((month) => (
                        <MenuItem key={month} value={month}>
                          {month}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      select
                      fullWidth
                      label="Select Year"
                      id="startYear"
                      name="startYear"
                      value={values.startYear}
                      onChange={handleChange}
                      size="small"
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>

                {/* End Date */}
                {!values.currentWorking && (
                  <>
                    <Typography variant="subtitle1" mt={3}>
                      End Date
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField
                          select
                          fullWidth
                          label="Select Month"
                          id="endMonth"
                          name="endMonth"
                          value={values.endMonth}
                          onChange={handleChange}
                          size="small"
                        >
                          {months.map((month) => (
                            <MenuItem key={month} value={month}>
                              {month}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          select
                          fullWidth
                          label="Select Year"
                          id="endYear"
                          name="endYear"
                          value={values.endYear}
                          onChange={handleChange}
                          size="small"
                        >
                          {years.map((year) => (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </>
                )}

                {/* Submit Button */}
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{
                    mt: 3,
                    backgroundColor: '#000',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#333' },
                  }}
                >
                  Add Now
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  {/* ================= Education Dialog ================== */}
    <Dialog open={eduOpen} onClose={handleEduClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Education</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            institution: '',
            degree: '',
            fieldOfStudy: '',
            currentStudying: false,
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            handleEduClose();
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form>
              <Box noValidate sx={{ mt: 1 }}>
                <TextField
                  fullWidth
                  label="Institution"
                  id="institution"
                  name="institution"
                  value={values.institution}
                  onChange={handleChange}
                  placeholder="Ex: Harvard University"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />

                <TextField
                  fullWidth
                  label="Degree"
                  id="degree"
                  name="degree"
                  value={values.degree}
                  onChange={handleChange}
                  placeholder="Ex: Bachelor of Science"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />

                <TextField
                  fullWidth
                  label="Field of Study"
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={values.fieldOfStudy}
                  onChange={handleChange}
                  placeholder="Ex: Computer Science"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="currentStudying"
                      checked={values.currentStudying}
                      onChange={(e) => setFieldValue('currentStudying', e.target.checked)}
                    />
                  }
                  label="I am currently pursuing"
                  sx={{ my: 2 }}
                />

                {/* Start Date */}
                <Typography variant="subtitle1" mt={2}>
                  Start Date
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      select
                      fullWidth
                      label="Select Month"
                      id="startMonth"
                      name="startMonth"
                      value={values.startMonth}
                      onChange={handleChange}
                      size="small"
                    >
                      {months.map((month) => (
                        <MenuItem key={month} value={month}>
                          {month}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      select
                      fullWidth
                      label="Select Year"
                      id="startYear"
                      name="startYear"
                      value={values.startYear}
                      onChange={handleChange}
                      size="small"
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>

                {/* End Date */}
                {!values.currentStudying && (
                  <>
                    <Typography variant="subtitle1" mt={3}>
                      End Date
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField
                          select
                          fullWidth
                          label="Select Month"
                          id="endMonth"
                          name="endMonth"
                          value={values.endMonth}
                          onChange={handleChange}
                          size="small"
                        >
                          {months.map((month) => (
                            <MenuItem key={month} value={month}>
                              {month}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          select
                          fullWidth
                          label="Select Year"
                          id="endYear"
                          name="endYear"
                          value={values.endYear}
                          onChange={handleChange}
                          size="small"
                        >
                          {years.map((year) => (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </>
                )}

                {/* Submit Button */}
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{
                    mt: 3,
                    backgroundColor: '#000',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#333' },
                  }}
                >
                  Add Now
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
    {/* LANGUAGE DIALOG BOX */}
    <Dialog open={dialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Select Languages</DialogTitle>
        <DialogContent>
          <Autocomplete
            multiple
            options={languagesList}
            value={selectedLanguages}
            onChange={(event, newValue) => setSelectedLanguages(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Languages"
                placeholder="Select languages"
                margin="normal"
              />
            )}
          />
          <Box textAlign="right" mt={2}>
            <Button onClick={handleCloseDialog} variant="contained" sx={{ backgroundColor: '#000', color: '#fff', '&:hover': { backgroundColor: '#333' } }}>
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default Experience;
