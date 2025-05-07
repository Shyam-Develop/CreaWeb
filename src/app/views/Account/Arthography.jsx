import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  Stack,
  MenuItem,
  Autocomplete, styled,
  Grid,
  InputAdornment,FormControl,Chip,InputLabel,IconButton
, Dialog,
DialogTitle,
DialogContent,
DialogActions,Select} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const steps = ['Project Details', 'Film Details', 'Finalize'];

const initialValues = {
  projectTitle: '',
  projectTagLine: '',
  filmName: '',
  filmRole: '',
  status: '',
  percentage: '',
  projectType: '',
};
const validationSchemas = [
  Yup.object({
    projectTitle: Yup.string().required('Project Title is required'),
    projectTagLine: Yup.string().required('Project Tag Line is required'),
  }),
  Yup.object({
    nof: Yup.string().required('Name of the Film is required'),
    rof: Yup.string().required('Role of the Film is required'),
  }),
  Yup.object({
    status: Yup.string().required('Status is required'),
    percentage: Yup.number()
      .required('Percentage is required')
      .min(1, 'Minimum 1%')
      .max(100, 'Maximum 100%'),
    primaryEmail: Yup.string()
      .email('Invalid email format')
      .required('Primary Email is required'),
    secondaryEmail: Yup.string()
      .email('Invalid email format')
      .required('Secondary Email is required'),
    projectType: Yup.string().required('Project Type is required'),
    Description: Yup.string().required('Description is required'),
    languages: Yup.array().min(1, 'Select at least one language'),
  }),
];
const UploadBox = styled(Box)(({ theme }) => ({
  border: '2px dashed #ccc',
  borderRadius: '12px',
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));


export default function CreateProjectForm() {
  // const [hashtags, setHashtags] = useState([]);
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [newHashtag, setNewHashtag] = useState("");
  // const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hashtags, setHashtags] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newHashtag, setNewHashtag] = useState("")
  const handleAddHashtag = () => {
    if (newHashtag.trim() !== "") {
      setHashtags([...hashtags, newHashtag.trim()]);
      setNewHashtag("");
      setDialogOpen(false);
    }
  };
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      if (type === 'profile') {
        setProfileImage(file);
      } else {
        setCoverImage(file);
      }
    } else {
      alert('Please select a valid JPEG or PNG image.');
    }
  };
  const handleSubmit = () => {
    if (profileImage && coverImage) {
      // You can handle uploading to server here if needed
      navigate('/success'); // Redirect to success page
    } else {
      alert('Please upload both Profile and Cover images.');
    }
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = async (values, actions) => {
    try {
      await validationSchemas[activeStep].validate(values, { abortEarly: false });
      if (activeStep === steps.length - 1) {
        // Submit final form
        console.log('Saving Project:', values);
      } else {
        setActiveStep((prev) => prev + 1);
      }
    } catch (errors) {
      const validationErrors = {};

      // Make sure errors.inner exists and is an array
      if (errors.inner && Array.isArray(errors.inner)) {
        errors.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
      } else {
        // Handle case where errors.inner is not an array (e.g., single error object)
        Object.keys(errors).forEach((key) => {
          validationErrors[key] = errors[key];
        });
      }

      actions.setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const languagesList = [
    "English", "Spanish", "Mandarin", "Hindi", "Arabic", "Portuguese", "Bengali",
    "Russian", "Japanese", "Punjabi", "German", "Javanese", "Korean", "French", "Telugu"
    // you can extend with a full list later!
  ];
  return (
    <Box sx={{ width: '100%', mx: 'auto', p: 2, pb: 8 }}>
      <Formik initialValues={initialValues}
        validationSchema={validationSchemas[activeStep]}
        onSubmit={() => { }}>
        {({ values, handleChange, errors, touched, setFieldTouched, handleBlur, setFieldValue }) => (
          <Form>
            {/* Stepper */}
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={index < activeStep}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box mt={4}>
              {/* Form Content Based on Active Step */}
              {activeStep === 0 && (
                <>
                  <Box
                    display="grid"
                    gap="20px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                      padding: "10px",
                    }}
                  >
                    <Stack
                      sx={{ gridColumn: "span 2" }}
                      gap={"20px"}
                      direction={"column"}
                    >
                      <TextField
                      variant="standard"
                        required
                        fullWidth
                        focused
                        size='small'
                        margin="normal"
                        label="Project Title"
                        name="projectTitle"
                        value={values.projectTitle}
                        onChange={handleChange}
                        error={touched.projectTitle && Boolean(errors.projectTitle)}
                        helperText={touched.projectTitle && errors.projectTitle}
                      />
                      <TextField
                      variant="standard"
                        required
                        fullWidth
                        focused
                        size='small'
                        margin="normal"
                        label="Name of the Film"
                        name="nof"
                        id='nof'
                        value={values.nof}
                        onChange={handleChange}
                        error={touched.nof && Boolean(errors.nof)}
                        helperText={touched.nof && errors.nof}
                      />
                      <Stack
                        sx={{ gridColumn: "span 2" }}
                        gap={"20px"}
                        direction={"row"}
                      >
                        <TextField
                        variant="standard"
                          fullWidth
                          required
                          select
                          focused
                          size="small"
                          margin="normal"
                          label="Status"
                          name="status"
                          id="status"
                          value={values.status}
                          onChange={handleChange}
                          error={touched.status && Boolean(errors.status)}
                          helperText={touched.status && errors.status}
                        >
                          <MenuItem value="Started">Started</MenuItem>
                          <MenuItem value="Ongoing">Ongoing</MenuItem>
                          <MenuItem value="Completed">Completed</MenuItem>
                        </TextField>

                        <Autocomplete
                          fullWidth
                          options={Array.from({ length: 100 }, (_, i) => i + 1)} // [1, 2, ..., 100]
                          value={values.percentage || null}
                          onChange={(e, newValue) => setFieldValue('percentage', newValue)}
                          onBlur={handleBlur}
                          renderInput={(params) => (
                            <TextField
                            variant="standard"
                              {...params}
                              required
                              label="Percentage"
                              name="percentage"
                              id="percentage"
                              margin="normal"
                              size="small"
                              fullWidth
                              focused
                              error={touched.percentage && Boolean(errors.percentage)}
                              helperText={touched.percentage && errors.percentage}
                            />
                          )}
                        />
                      </Stack>
                      <Autocomplete
                        multiple
                        focused
                        fullWidth
                        size='small'
                        options={languagesList}
                        value={selectedLanguages}
                        onChange={(event, newValue) => setSelectedLanguages(newValue)}
                        renderInput={(params) => (
                          <TextField
                          variant="standard"
                            required
                            focused
                            {...params}
                            label="Languages"
                            placeholder="Select languages"
                            margin="normal"
                          />
                        )}
                      />
                      <Stack
                        sx={{ gridColumn: "span 2" }}
                        gap={"20px"}
                        direction={"row"}
                      >
                        <TextField
                        variant="standard"
                          focused
                          fullWidth
                          size='small'
                          margin="normal"
                          label="Primary Email Address"
                          name="primaryEmail"
                          value={values.primaryEmail}
                          onChange={handleChange}
                          error={touched.primaryEmail && Boolean(errors.primaryEmail)}
                          helperText={touched.primaryEmail && errors.primaryEmail}
                          required />
                        <TextField
                        variant="standard"
                          focused
                          fullWidth
                          size='small'
                          margin="normal"
                          label="Secondary Email Address"
                          name="secondaryEmail"
                          value={values.secondaryEmail}
                          onChange={handleChange}
                          error={touched.secondaryEmail && Boolean(errors.secondaryEmail)}
                          helperText={touched.secondaryEmail && errors.secondaryEmail}
                          required />
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{ gridColumn: "span 2" }}
                      gap={"20px"}
                      direction={"column"}
                    >

                      <TextField
                      variant="standard"
                        focused
                        fullWidth
                        size='small'
                        margin="normal"
                        label="Project Tag Line"
                        name="projectTagLine"
                        value={values.projectTagLine}
                        onChange={handleChange}
                        error={touched.projectTagLine && Boolean(errors.projectTagLine)}
                        helperText={touched.projectTagLine && errors.projectTagLine}
                        required />
                      <TextField
                      variant="standard"
                        focused
                        fullWidth
                        size='small'
                        margin="normal"
                        label="Role of the Film"
                        name="rof"
                        id='rof'
                        value={values.rof}
                        onChange={handleChange}
                        error={touched.rof && Boolean(errors.rof)}
                        helperText={touched.rof && errors.rof}
                        required />
                      <TextField
                      variant="standard"
                        focused
                        fullWidth
                        size='small'
                        margin="normal"
                        label="Project Type"
                        name="projectType"
                        value={values.projectType}
                        onChange={handleChange}
                        error={touched.projectType && Boolean(errors.projectType)}
                        helperText={touched.projectType && errors.projectType}
                        required />
                      <TextField
                      variant="standard"
                        name="Description"
                        type="text"
                        id="Description"
                        label="Description"
                        multiline
                        rows={6}
                        fullWidth
                        focused
                        required
                        value={values.Description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!!touched.Description && !!errors.Description}
                        helperText={touched.Description && errors.Description}
                      />
                    </Stack>
                  </Box>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <Box sx={{ p: { xs: 2, md: 5 }, maxWidth: '800px', mx: 'auto' }}>
                    <Grid container spacing={4}>
                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold" mb={1}>
                          Upload Profile Image
                        </Typography>
                        <UploadBox onClick={() => document.getElementById('profile-upload').click()}>
                          {profileImage ? (
                            <Typography>{profileImage.name}</Typography>
                          ) : (
                            <>
                              <Typography variant="body1" color="textSecondary">
                                Click to upload Profile Image
                              </Typography>
                              <Typography variant="caption" color="textSecondary">
                                Only JPEG or PNG
                              </Typography>
                            </>
                          )}
                          <input
                            id="profile-upload"
                            type="file"
                            hidden
                            accept="image/jpeg, image/png"
                            onChange={(e) => handleFileChange(e, 'profile')}
                          />
                        </UploadBox>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold" mb={1}>
                          Upload Cover Image
                        </Typography>
                        <UploadBox onClick={() => document.getElementById('cover-upload').click()}>
                          {coverImage ? (
                            <Typography>{coverImage.name}</Typography>
                          ) : (
                            <>
                              <Typography variant="body1" color="textSecondary">
                                Click to upload Cover Image
                              </Typography>
                              <Typography variant="caption" color="textSecondary">
                                Only JPEG or PNG
                              </Typography>
                            </>
                          )}
                          <input
                            id="cover-upload"
                            type="file"
                            hidden
                            accept="image/jpeg, image/png"
                            onChange={(e) => handleFileChange(e, 'cover')}
                          />
                        </UploadBox>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )}
              {activeStep === 2 && (
                <> 
                <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
                {/* Title */}
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  Press Release Upload Photos
                </Typography>
        
                {/* Upload Photo Box */}
                <Box
                  sx={{
                    border: "2px dashed #ccc",
                    borderRadius: 4,
                    p: 4,
                    textAlign: "center",
                    mb: 3,
                  }}
                >
                  <UploadBox sx={{ fontSize: 50, mb: 1 }} />
                  <Typography>
                    <strong>Choose</strong> file to upload
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Select image in JPEG, PNG
                  </Typography>
                </Box>
        
                {/* Genre Select */}
                <FormControl fullWidth mb={3}>
                  <InputLabel>Genre</InputLabel>
                  <Select
                    value={selectedGenre}
                    label="Genre"
                    onChange={(e) => setSelectedGenre(e.target.value)}
                  >
                    <MenuItem value="News">News</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                  </Select>
                </FormControl>
        
                {/* Media Upload Section */}
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  Media Release Upload Video
                </Typography>
        
                {/* Upload Video Box */}
                <Box
                  sx={{
                    border: "2px dashed #ccc",
                    borderRadius: 4,
                    p: 4,
                    textAlign: "center",
                    mb: 3,
                  }}
                >
                  <UploadBox sx={{ fontSize: 50, mb: 1 }} />
                  <Typography>
                    <strong>Choose</strong> file to upload
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Select Video in MP4
                  </Typography>
                </Box>
        
                {/* Date Pickers */}
                <Grid container spacing={2} mb={3}>
  <Grid item xs={12} sm={6}>
    <TextField
    variant="standard"
      label="Start Date"
      type="date"
      value={startDate}
      onChange={(e) => setStartDate(e.target.value)}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
    variant="standard"
      label="End Date"
      type="date"
      value={endDate}
      onChange={(e) => setEndDate(e.target.value)}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
    />
  </Grid>
</Grid>
        
                {/* Connect Socials */}
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  Connect Socials
                </Typography>
        
                <Grid container spacing={2} mb={3}>
                  <Grid item xs={12}>
                    <TextField
                    variant="standard"
                      fullWidth
                      placeholder="Facebook Link"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FacebookIcon sx={{ color: "#4267B2" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
        
                  <Grid item xs={12}>
                    <TextField
                    variant="standard"
                      fullWidth
                      placeholder="LinkedIn Link"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LinkedInIcon sx={{ color: "#0077b5" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
        
                  <Grid item xs={12}>
                    <TextField
                    variant="standard"
                      fullWidth
                      placeholder="Instagram Link"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InstagramIcon sx={{ color: "#E1306C" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
        
                  <Grid item xs={12}>
                    <TextField
                    variant="standard"
                      fullWidth
                      placeholder="Twitter/X Link"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <TwitterIcon sx={{ color: "black" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
        
                {/* Add Hashtags */}
                <Typography variant="h5" fontWeight="bold" mb={1}>
          Add Hashtags
        </Typography>

        <Box mb={2}>
          {/* When user clicks -> Open Dialog */}
          <TextField
          variant="standard"
            fullWidth
            label="Click to Add Hashtag"
            onClick={() => setDialogOpen(true)}
            InputProps={{
              readOnly: true, // So user must click to open
            }}
          />
        </Box>

        {/* Display hashtags */}
        <Box sx={{ mb: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
          {hashtags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() =>
                setHashtags(hashtags.filter((_, i) => i !== index))
              }
            />
          ))}
                      {/* Dialog Box for Adding Hashtag */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Add Social Media and Link</DialogTitle>
          <DialogContent sx={{ mt: 1 }}>
            <TextField
            variant="standard"
              autoFocus
              margin="dense"
              label="Enter Hashtag"
              fullWidth
              value={newHashtag}
              onChange={(e) => setNewHashtag(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleAddHashtag}>
              Add Hashtag
            </Button>
          </DialogActions>
        </Dialog>
                </Box>
        
              
              </Box>
                 

                </>
              )}
            </Box>

            {/* Action Buttons */}
            <Box mt={4} display="flex" justifyContent="space-between">
              {activeStep > 0 && (
                <Button variant="outlined" onClick={handleBack}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => handleNext(values, { setErrors: () => { } })}
                >
                  Save Project
                </Button>
              ) : (
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => handleNext(values, { setErrors: () => { } })}
                >
                  →
                </Button>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
