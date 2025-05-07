import React, { useState } from "react";
import {
    Box,
    TextField,
    Autocomplete,
    IconButton,
    Typography,
    MenuItem,
    Stack, useMediaQuery,
    Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Formik } from "formik";
import { Form } from "formik";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as Yup from "yup";

const genders = ["Male", "Female", "Other"];
const skillsOptions = ["React", "Angular", "Vue", "Node.js", "Python"];
const experienceOptions = ["1 year", "2 years", "3 years", "5+ years"];
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
const validationSchema = Yup.object({
    gigWork: Yup.string().required("Gig Work Type is required"),
    workHours: Yup.number()
        .typeError("Work hours must be a number")
        .positive("Must be positive")
        .required("Work hours are required"),
    month: Yup.string().required("Month selection is required"),
    mode: Yup.string().required("Mode is required"),
    description: Yup.string()
        .min(10, "Description must be at least 10 characters")
        .required("Description is required"),
    proName: Yup.string().required("Project Title is required"),
    age: Yup.number()
        .typeError("Age must be a number")
        .min(18, "Minimum age is 18")
        .required("Age is required"),
    status: Yup.string().required("Status is required")
});

export default function SkillsInputDynamic() {
    const [fields, setFields] = useState([{ skill: null, experience: null }]);
    const [error, setError] = useState("");
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleAdd = () => {
        const last = fields[fields.length - 1];
        if (!last.skill || !last.experience) {
            setError("Please enter both skill and experience.");
            return;
        }
        setFields([...fields, { skill: null, experience: null }]);
        setError("");
    };

    const handleChange = (index, key, value) => {
        const updatedFields = [...fields];
        updatedFields[index][key] = value;
        setFields(updatedFields);
    };
    const initialValues = {
        gigWork: "",
        workHours: "",
        month: "",
        mode: "",
        description: "",
        proName: "",
        age: "",
        status: ""
    };

    return (
        <Box sx={{ width: '100%', mx: 'auto', p: 2, pb: 8 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 3, fontWeight: 600 }}>
                            Create Gig Work
                        </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("Form Submitted with values:", values);
                }}
            >
                {({ values, handleChange, errors, touched, setFieldTouched, handleBlur, setFieldValue, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="10px"
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
                                gap={"10px"}
                                direction={"column"}
                            >

                                <TextField
                                    variant="standard"
                                    fullWidth
                                    required
                                    select
                                    focused
                                    size="small"
                                    margin="normal"
                                    placeholder="Select type of work"
                                    label="Gig Work Type"
                                    name="gigWork"
                                    id="gigWork"
                                    value={values.gigWork}
                                    onChange={handleChange}
                                    error={touched.gigWork && Boolean(errors.gigWork)}
                                    helperText={touched.gigWork && errors.gigWork}
                                >
                                    <MenuItem value="Individual">Individual</MenuItem>
                                    <MenuItem value="Project">Project</MenuItem>
                                </TextField>
                                <Stack
                                    sx={{ gridColumn: "span 2" }}
                                    gap={"10px"}
                                    direction={"row"}
                                >
                                    <TextField
                                        variant="standard"
                                        fullWidth
                                        required

                                        focused
                                        size="small"
                                        margin="normal"
                                        placeholder="No.of"
                                        label="Work hours"
                                        name="workHours"
                                        id="workHours"
                                        value={values.workHours}
                                        onChange={handleChange}
                                        error={touched.workHours && Boolean(errors.workHours)}
                                        helperText={touched.workHours && errors.workHours}
                                    />
                                    <TextField
                                        variant="standard"
                                        fullWidth
                                        required
                                        select
                                        focused
                                        size="small"
                                        margin="normal"
                                        //   placeholder="Select type of work"
                                        label="Month"
                                        name="month"
                                        id="month"
                                        value={values.month}
                                        onChange={handleChange}
                                        error={touched.month && Boolean(errors.month)}
                                        helperText={touched.month && errors.month}
                                    >
                                        <MenuItem value="Day">Day</MenuItem>
                                        <MenuItem value="Week">Week</MenuItem>
                                        <MenuItem value="Month">Month</MenuItem>
                                    </TextField>

                                </Stack>
                                <TextField
                                    variant="standard"
                                    name="gender"
                                    focused
                                    select
                                    label="Gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.gender && Boolean(errors.gender)}
                                    helperText={touched.gender && errors.gender}
                                    size='small'>
                                   <MenuItem value="Male">Male</MenuItem>
                                   <MenuItem value="Female">Female</MenuItem>
                                   <MenuItem value="Others">Others</MenuItem>
                                </TextField>
                                <UploadBox label="Upload profile Image" />
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    required
                                    select
                                    focused
                                    size="small"
                                    margin="normal"
                                    placeholder="Select Mode"
                                    label="Mode"
                                    name="mode"
                                    id="mode"
                                    value={values.mode}
                                    onChange={handleChange}
                                    error={touched.mode && Boolean(errors.mode)}
                                    helperText={touched.mode && errors.mode}
                                >
                                    <MenuItem value="Offline">Offline</MenuItem>
                                    <MenuItem value="Online">Online</MenuItem>
                                </TextField>
                                <TextField
                                    variant="standard"
                                    name="description"
                                    label="Short Description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    error={touched.description && Boolean(errors.description)}
                                    helperText={touched.description && errors.description}
                                    size='small' />
                            </Stack>
                            <Stack
                                sx={{ gridColumn: "span 2" }}
                                gap={"10px"}
                                direction={"column"}
                            >
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    required
                                    select
                                    focused
                                    size="small"
                                    margin="normal"
                                    placeholder="Enter Project Name"
                                    label="Title"
                                    name="proName"
                                    id="proName"
                                    value={values.proName}
                                    onChange={handleChange}
                                    error={touched.proName && Boolean(errors.proName)}
                                    helperText={touched.proName && errors.proName}
                                />
                                <Stack
                                    sx={{ gridColumn: "span 2" }}
                                    gap={"10px"}
                                    direction={"row"}
                                >
                                    {fields.map((field, index) => (
                                        <Box
                                            key={index}
                                            display="flex"
                                            alignItems="center"
                                            gap={2}
                                            mt={index === 0 ? 1 : 2}
                                        >
                                            <Autocomplete
                                                options={skillsOptions}
                                                value={field.skill}
                                                onChange={(e, newValue) => handleChange(index, "skill", newValue)}
                                                renderInput={(params) => <TextField variant="standard" focused
                                                    size="small" {...params} label="Select Skill" />}
                                                sx={{ width: 200 }}
                                            />
                                            <Autocomplete
                                                options={experienceOptions}
                                                value={field.experience}
                                                onChange={(e, newValue) => handleChange(index, "experience", newValue)}
                                                renderInput={(params) => <TextField variant="standard" focused
                                                    size="small" {...params} label="Select Experience" />}
                                                sx={{ width: 200 }}
                                            />
                                            {index === fields.length - 1 && (
                                                <IconButton onClick={handleAdd} color="primary">
                                                    <AddCircleIcon fontSize="large" />
                                                </IconButton>
                                            )}
                                        </Box>
                                    ))}
                                    {error && (
                                        <Typography color="error" sx={{ mt: 1 }}>
                                            {error}
                                        </Typography>
                                    )}
                                </Stack>

                                <TextField
                                    variant="standard"
                                    fullWidth
                                    required
                                    focused
                                    size="small"
                                    margin="normal"
                                    // placeholder="Enter Project Name"
                                    label="Age"
                                    name="age"
                                    id="age"
                                    value={values.age}
                                    onChange={handleChange}
                                    error={touched.age && Boolean(errors.age)}
                                    helperText={touched.age && errors.age}
                                />
                                <UploadBox label="Upload profile Image" />
                                <Stack
                                    sx={{ gridColumn: "span 2" }}
                                    gap={"10px"}
                                    direction={"row"}
                                >
                                    <TextField
                                        variant="standard"
                                        name="startDate"
                                        label="Start Date"
                                        type="date"
                                        focused
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

                                        focused error={touched.endDate && Boolean(errors.endDate)}
                                        helperText={touched.endDate && errors.endDate}
                                        size='small' />
                                    {/* <Box sx={{ maxWidth: 400, mx: 'auto' }}> */}
                                    {/* </Box> */}
                                </Stack>
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    required
                                    select
                                    focused
                                    size="small"
                                    margin="normal"
                                    placeholder="Progress Of project"
                                    label="Status"
                                    name="status"
                                    id="status"
                                    value={values.status}
                                    onChange={handleChange}
                                    error={touched.status && Boolean(errors.status)}
                                    helperText={touched.status && errors.status}
                                >
                                    <MenuItem value="Opening">Opening</MenuItem>
                                    <MenuItem value="Closed">Closed</MenuItem>
                                </TextField>
                            </Stack>
                        </Box>
                        

                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignContent: "flex-end", mt: 2 }}>
                                    
                                    <Button type="submit" variant="contained">
                                        Submit
                                    </Button>
                                </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}
