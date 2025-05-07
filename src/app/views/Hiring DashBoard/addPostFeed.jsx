import React, { useState } from "react";
import {
    Button, Dialog, DialogTitle, DialogContent,
    List, ListItem, ListItemText, TextField, Box, Typography
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UploadFileIcon from '@mui/icons-material/UploadFile';
const stateCityMap = {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Austin", "Dallas"],
    "New York": ["New York City", "Buffalo", "Rochester"]
};

const validationSchema = Yup.object({
    caption: Yup.string().required("Caption is required"),
    location: Yup.string().required("Location is required"),
    file: Yup.mixed()
        .required("File is required")
        .test(
            "fileFormat",
            "Unsupported Format",
            (value) =>
                value && ["image/jpeg", "image/png", "video/mp4"].includes(value.type)
        )
});

export default function CreatePost() {
    const [openStateDialog, setOpenStateDialog] = useState(false);
    const [openCityDialog, setOpenCityDialog] = useState(false);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);

    const handleStateSelect = (state, setFieldValue) => {
        setSelectedState(state);
        setCities(stateCityMap[state]);
        setOpenStateDialog(false);
        setOpenCityDialog(true);
    };

    const handleCitySelect = (city, setFieldValue) => {
        setFieldValue("location", `${city}, ${selectedState}`);
        setOpenCityDialog(false);
    };

    return (
                <Box sx={{ width: '100%', mx: 'auto', p: 2, pb: 8 }}>
        
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 3, fontWeight: 600 }}>
                Create Post
            </Typography>
            <Formik
                initialValues={{ caption: "", location: "", file: null }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("Submitted values:", values);
                    alert("Post submitted!");
                }}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form>
                        {/* File Upload */}
                        <Box
                            sx={{
                                border: "2px dashed #ccc",
                                borderRadius: "8px",
                                textAlign: "center",
                                py: 4,
                                px: 2,
                                mb: 2,
                                cursor: "pointer",
                                color: "#666",
                            }}
                            onClick={() => document.getElementById("fileInput").click()}
                        >
                            <UploadFileIcon sx={{ fontSize: 40, mb: 1 }} />
                            <div style={{ fontWeight: 500 }}>
                                <span style={{ color: "#1976d2", cursor: "pointer" }}>
                                    {values.file ? values.file.name : "Choose"}
                                </span>{" "}
                                file to upload
                            </div>
                            <div style={{ fontSize: "0.875rem", marginTop: 4 }}>
                                Select image in jpeg, PNG or MP4
                            </div>
                            <input
                                id="fileInput"
                                type="file"
                                hidden
                                accept="image/jpeg,image/png,video/mp4"
                                onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
                            />
                        </Box>

                        {touched.file && errors.file && (
                            <div style={{ color: "red", marginBottom: "8px" }}>{errors.file}</div>
                        )}

                        {/* Caption */}
                        <Field
                            as={TextField}
                            fullWidth
                            name="caption"
                            label="Add caption"
                            margin="normal"
                            error={touched.caption && Boolean(errors.caption)}
                            helperText={touched.caption && errors.caption}
                        />

                        {/* Location */}
                        <TextField
                            fullWidth
                            label="Add location"
                            name="location"
                            value={values.location}
                            onClick={() => setOpenStateDialog(true)}
                            InputProps={{ readOnly: true }}
                            margin="normal"
                            error={touched.location && Boolean(errors.location)}
                            helperText={touched.location && errors.location}
                        />

                        {/* Submit */}
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 3, bgcolor: "#f4511e" }}
                        >
                            SAVE AND PUBLISH
                        </Button>

                        {/* State Dialog */}
                        <Dialog open={openStateDialog} onClose={() => setOpenStateDialog(false)}>
                            <DialogTitle>Select State</DialogTitle>
                            <DialogContent>
                                <List>
                                    {Object.keys(stateCityMap).map((state) => (
                                        <ListItem
                                            button
                                            key={state}
                                            onClick={() => handleStateSelect(state, setFieldValue)}
                                        >
                                            <ListItemText primary={state} />
                                        </ListItem>
                                    ))}
                                </List>
                            </DialogContent>
                        </Dialog>

                        {/* City Dialog */}
                        <Dialog open={openCityDialog} onClose={() => setOpenCityDialog(false)}>
                            <DialogTitle>Select City</DialogTitle>
                            <DialogContent>
                                <List>
                                    {cities.map((city) => (
                                        <ListItem
                                            button
                                            key={city}
                                            onClick={() => handleCitySelect(city, setFieldValue)}
                                        >
                                            <ListItemText primary={city} />
                                        </ListItem>
                                    ))}
                                </List>
                            </DialogContent>
                        </Dialog>
                    </Form>
                )}
            </Formik>
        </Box>
        </Box>
    );
}
