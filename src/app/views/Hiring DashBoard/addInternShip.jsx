import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    InputAdornment,
    Checkbox,
    FormControlLabel,
    MenuItem,
    Stepper,
    Step,
    StepLabel,
    Autocomplete,
    Typography, IconButton, useMediaQuery, Stack
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const internshipTypes = ["Full-time", "Part-time", "Remote"];
const genders = ["Male", "Female", "Other"];
const steps = ['Personal Details', 'Organization Details'];
const stepOneValidation = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    designation: Yup.string().required("Designation is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
        .required("Phone number is required"),
});

const stepTwoValidation = Yup.object({
    // Organization/Individual Name
    orgName: Yup.string().required("This field is required"),

    // Internship Profile
    profile: Yup.string().required("Internship Profile is required"),

    // Skills / Roles Required
    skills: Yup.array()
        .of(Yup.string().required("Each skill must be selected"))
        .min(1, "At least one skill is required")
        .required("Skills are required"),

    // Internship Type
    internshipType: Yup.string().required("Select an internship type"),

    // Gender
    gender: Yup.string().required("Select gender"),

    // Start Date
    startDate: Yup.date().required("Start date is required"),

    // End Date
    endDate: Yup.date().required("End date is required"),

    // Age
    age: Yup.number().required("Age is required"),

    // Languages Known (For multiple selections)
    languages: Yup.array()
        .of(Yup.string().required("Each language must be selected"))
        .min(1, "At least one language is required")
        .required("Languages are required"),

    // State (The state should be required)
    state: Yup.string().required("State is required"),

    // City (The city should be required when state is selected)
    city: Yup.string().required("City is required"),

    // Duration
    duration: Yup.string().required("Duration is required"),

    // Salary
    salary: Yup.number().required("Salary is required"),

    // Education
    education: Yup.string().required("Education is required"),

    // Job Responsibilities
    jobResponsibilities: Yup.string().required("Job responsibilities are required"),

    // Status
    status: Yup.string().required("Status is required"),
});

const UploadBox = ({ label }) => {
    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h6" gutterBottom>{label}</Typography>
            <label htmlFor="upload-input">
                <Box
                    sx={{
                        border: '2px dashed #ccc',
                        borderRadius: 2,
                        p: 4,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s ease',
                        '&:hover': { borderColor: 'primary.main' },
                    }}
                >
                    <IconButton component="span" size="large">
                        <UploadFileIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
                    </IconButton>
                    <Typography>
                        <strong style={{ color: '#1976d2' }}>Choose</strong> file to upload
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Select image in jpeg, PNG
                    </Typography>
                </Box>
            </label>
            <input
                id="upload-input"
                type="file"
                accept="image/jpeg, image/png"
                style={{ display: 'none' }}
            />
        </Box>
    );
};

export default function MultiStepForm() {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [activeStep, setactiveStep] = useState(1);
    const [isIndividual, setIsIndividual] = useState(false);
    const [cityOptions, setCityOptions] = useState([]);

    // When state is selected, update city options
    const handleStateChange = (e, value) => {
        // setFieldValue('state', value); // Set the selected state in Formik
        const cities = stateCityMap[value] || []; // Get cities based on selected state
        setCityOptions(cities); // Update the available city options
    };
    const initialValues = {
        // Step 1
        fullName: "",
        designation: "",
        email: "",
        phone: "",

        // Step 2
        orgName: "",
        profile: "",
        skills: "",
        internshipType: "",
        gender: "",
        startDate: "",
        endDate: "",
        age: "",
    };

    const currentValidation = activeStep === 1 ? stepOneValidation : stepTwoValidation;
    const languageOptions = ['Tamil', 'English', 'Hindi', 'Malayalam', 'Kannada', 'Telugu'];
    const stateOptions = Object.keys(stateCityMap);
    const statusOptions = ['Opening', 'Closing'];
    const [cities, setCities] = useState([]);
    //   const handleStateChange = (event, value) => {
    //    setFieldValue('state', value);
    //     setFieldValue('city', ''); // reset city
    //     setCities(stateCityMap[value] || []);
    //   };
    return (
        <Box sx={{ width: '100%', mx: 'auto', p: 2, pb: 8 }}>
            <Formik
                initialValues={initialValues}
                validationSchema={currentValidation}
                onSubmit={(values) => {
                    if (activeStep === 1) {
                        setactiveStep(2); // move to next step
                    } else {
                        console.log("Final Submitted Data:", values);
                        alert("Form Submitted!");
                    }
                }}
            >
                {({ values, errors, touched, handleChange, setFieldValue, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>

                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                            <Stepper activeStep={activeStep} sx={{ width: "100%", maxWidth: 600 }}>
                                {steps.map((label, index) => (
                                    <Step key={label} completed={index < activeStep}>
                                        <StepLabel
                                            sx={{
                                                "& .MuiStepLabel-label": {
                                                    fontSize: "1.1rem", // Increase label font size
                                                    fontWeight: "bold",
                                                },
                                                "& .MuiStepIcon-root": {
                                                    fontSize: "2rem", // Increase icon size
                                                },
                                            }}
                                        >
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>

                        {/* Step 1 */}
                        {activeStep === 1 && (
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
                                            name="fullName"
                                            label="Full Name"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.fullName && Boolean(errors.fullName)}
                                            helperText={touched.fullName && errors.fullName}
                                            fullWidth
                                            variant="standard"
                                        />
 <TextField
                                            name="email"
                                            label="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                            fullWidth variant="standard"
                                        />
                                       
                                    </Stack>
                                    <Stack
                                        sx={{ gridColumn: "span 2" }}
                                        gap={"20px"}
                                        direction={"column"}
                                    >
                                         <TextField
                                            name="designation"
                                            label="Designation"
                                            value={values.designation}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.designation && Boolean(errors.designation)}
                                            helperText={touched.designation && errors.designation}
                                            fullWidth variant="standard"
                                        />
                                       

                                        <TextField
                                            name="phone"
                                            label="Phone Number"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.phone && Boolean(errors.phone)}
                                            helperText={touched.phone && errors.phone}
                                            fullWidth 
                                            variant="standard"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                            }}
                                        />
                                    </Stack>
                                    <Button type="submit" variant="contained">
                                        Next
                                    </Button>
                                </Box>
                            </>
                        )}

                        {/* Step 2 */}
                        {activeStep === 2 && (
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
                                    name="orgName"
                                    label={isIndividual ? "Individual Name" : "Organization Name"}
                                    value={values.orgName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.orgName && Boolean(errors.orgName)}
                                    helperText={touched.orgName && errors.orgName}
                                    fullWidth
                                    size='small'
                                    variant="standard" />
<TextField
                                    name="profile"
                                    label="Internship Profile"
                                    placeholder="E.g Musician"
                                    value={values.profile}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.profile && Boolean(errors.profile)}
                                    helperText={touched.profile && errors.profile}
                                    fullWidth
                                    size='small'
                                    variant="standard" />
                                      <Stack
                                        sx={{ gridColumn: "span 2" }}
                                        gap={"20px"}
                                        direction={"row"}
                                    >
 <TextField
 variant="standard"
                                        name="internshipType"
                                        select
                                        label="Internship Type"
                                        value={values.internshipType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        error={touched.internshipType && Boolean(errors.internshipType)}
                                        helperText={touched.internshipType && errors.internshipType}
                                        size='small'>
                                        {internshipTypes.map((type) => (
                                            <MenuItem key={type} value={type}>
                                                {type}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                    variant="standard"
                                        name="gender"
                                        select
                                        label="Gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        error={touched.gender && Boolean(errors.gender)}
                                        helperText={touched.gender && errors.gender}
                                        size='small'>
                                        {genders.map((g) => (
                                            <MenuItem key={g} value={g}>
                                                {g}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    </Stack>
                                    <UploadBox label="Upload profile Image" />
                                    <TextField
                                    variant="standard"
                                    name="age"
                                    label="Age"
                                    type="number"
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.age && Boolean(errors.age)}
                                    helperText={touched.age && errors.age}
                                    size='small' />
                                    <Autocomplete
                                    options={stateOptions} // List of states, this should be predefined
                                    value={values.state} // Formik value for state
                                    onChange={handleStateChange} // Handle state change
                                    onBlur={handleBlur}
                                    renderInput={(params) => (
                                        <TextField
                                        variant="standard"
                                            {...params}
                                            name="state"
                                            label="State"
                                            fullWidth
                                            error={touched.state && Boolean(errors.state)}
                                            helperText={touched.state && errors.state}
                                            size='small' />
                                    )}
                                />
                                <TextField
                                variant="standard"
                                    name="duration"
                                    label="Duration"
                                    value={values.duration}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.duration && Boolean(errors.duration)}
                                    helperText={touched.duration && errors.duration}
                                    size='small' />
                                    <TextField
                                    variant="standard"
                                    name="education"
                                    label="Education"
                                    value={values.education}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.education && Boolean(errors.education)}
                                    helperText={touched.education && errors.education}
                                    size='small' />
                                    <Autocomplete
                                    options={statusOptions} // List of status options
                                    value={values.status} // Formik value for status
                                    onChange={(e, value) => setFieldValue('status', value)} // Update formik value on change
                                    onBlur={handleBlur} // Handle blur event to trigger touched state
                                    renderInput={(params) => (
                                        <TextField
                                        variant="standard"
                                            {...params}
                                            name="status" // Name of the field in Formik
                                            label="Status" // Label for the input field
                                            fullWidth // Make the input take the full width of the parent container
                                            error={touched.status && Boolean(errors.status)} // Show error if touched and error exists
                                            helperText={touched.status && errors.status} // Display error message if touched and error exists
                                            size='small' />
                                    )}
                                />
                                    
                               </Stack>
                               <Stack
                                        sx={{ gridColumn: "span 2" }}
                                        gap={"20px"}
                                        direction={"column"}
                                    >
                                      <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isIndividual}
                                            onChange={() => setIsIndividual(!isIndividual)}
                                        />
                                    }
                                    label="I am an independent practitioner hiring for myself and NOT on behalf of a company."
                                />  
                                <Autocomplete
                                    multiple
                                    freeSolo
                                    options={cinemaOptions}
                                    value={values.skills || []}
                                    onChange={(event, newValue) => {
                                        setFieldValue('skills', newValue);
                                    }}
                                    onBlur={handleBlur}
                                    renderInput={(params) => (
                                        <TextField
                                        variant="standard"
                                            {...params}
                                            label="Skills / Roles Required"
                                            name="skills"
                                            error={touched.skills && Boolean(errors.skills)}
                                            helperText={touched.skills && errors.skills}
                                            fullWidth
                                            size='small' />
                                    )}
                                />
 <Stack
                                        sx={{ gridColumn: "span 2" }}
                                        gap={"20px"}
                                        direction={"row"}
                                    >
 <TextField
 variant="standard"
                                        name="startDate"
                                        label="Start Date"
                                        type="date"
                                        value={values.startDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        error={touched.startDate && Boolean(errors.startDate)}
                                        helperText={touched.startDate && errors.startDate}
                                        size='small' />
                                    <TextField
                                    variant="standard"
                                        name="endDate"
                                        label="End Date"
                                        type="date"
                                        value={values.endDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        error={touched.endDate && Boolean(errors.endDate)}
                                        helperText={touched.endDate && errors.endDate}
                                        size='small' />
{/* <Box sx={{ maxWidth: 400, mx: 'auto' }}> */}
                                {/* </Box> */}
                                    </Stack>
                                    <UploadBox label="Upload Cover Image" />
                                    <Autocomplete
                                    multiple
                                    options={languageOptions} // Options for languages
                                    value={values.languages} // Formik value for languages
                                    onChange={(e, value) => setFieldValue('languages', value)} // Update formik value on change
                                    onBlur={handleBlur} // Handle blur event to trigger touched state
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            name="languages" // Name of the field in Formik
                                            label="Languages Known" // Label for the input field
                                            fullWidth // Make the input take the full width of the parent container
                                            error={touched.languages && Boolean(errors.languages)} // Show error if touched and error exists
                                            helperText={touched.languages && errors.languages} // Display error message if touched and error exists
                                            size='small' />
                                    )}
                                />
                                <Autocomplete
                                    options={cityOptions} // City options are dynamically updated based on the selected state
                                    value={values.city} // Formik value for city
                                    onChange={(e, value) => setFieldValue('city', value)} // Set selected city in Formik
                                    onBlur={handleBlur}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            error={touched.city && Boolean(errors.city)}
                                            helperText={touched.city && errors.city}
                                            size='small' />
                                    )}
                                />
                                 <TextField
                                    name="salary"
                                    label="Salary"
                                    variant="standard"
                                    value={values.salary}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.salary && Boolean(errors.salary)}
                                    helperText={touched.salary && errors.salary}
                                    size='small' />
<TextField
                                   variant="standard"
                                   name="jobResponsibilities"
                                    label="Job Responsibilities"
                                    value={values.jobResponsibilities}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    error={touched.jobResponsibilities && Boolean(errors.jobResponsibilities)}
                                    helperText={touched.jobResponsibilities && errors.jobResponsibilities}
                                    size='small' />
                               </Stack>
</Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                                    <Button variant="outlined" 
                                    // onClick={() => setStep(1)}
                                    >
                                        Back
                                    </Button>
                                    <Button type="submit" variant="contained">
                                        Submit
                                    </Button>
                                </Box>

                            </>
                        )}

                    </Form>
                )}
            </Formik>
        </Box>
    );
}
const cinemaOptions = [
    'Acting',
    'Directing',
    'Screenwriting',
    'Cinematography',
    'Editing',
    'Sound Design',
    'Makeup Artist',
    'Production Design',
    'Stunt Coordination',
    'Lighting',
    'Casting',
    'Color Grading',
    // Character types
    'Hero',
    'Heroine',
    'Villain',
    'Comedian',
    'Supporting Actor',
    'Child Artist',
    'Character Artist',
    'Dancer',
    'Singer',
    'Extra/Background Artist'
];


const stateCityMap = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Durg"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala"],
    "Himachal Pradesh": ["Shimla", "Dharamshala", "Mandi", "Solan"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"],
    "Meghalaya": ["Shillong", "Tura", "Nongpoh", "Jowai"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Haldwani", "Roorkee"],
    "West Bengal": ["Kolkata", "Asansol", "Siliguri", "Durgapur"]
};
