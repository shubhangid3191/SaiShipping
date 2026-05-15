import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert, Snackbar } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import shipImage from "../assets/images/get-touch.jpg";
import mapImage from "../assets/images/sai-shipping-map.png";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const [successOpen, setSuccessOpen] = useState(false);

    const TNR = "'Times New Roman', Times, serif";

    const validate = () => {
        let newErrors = { name: "", number: "", email: "", message: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }
        if (!formData.number.trim()) {
            newErrors.number = "Phone number is required.";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.number.trim())) {
            newErrors.number = "Enter a valid 10-digit number.";
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Enter a valid email address.";
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccessOpen(true);
            setFormData({ name: "", number: "", email: "", message: "" });
            setErrors({ name: "", number: "", email: "", message: "" });
        }
    };

    const inputSx = (hasError) => ({
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5",
            borderRadius: "4px",
            minHeight: "58px",
            "& fieldset": {
                border: hasError ? "1px solid #d32f2f" : "none",
            },
            "&:hover fieldset": {
                border: hasError ? "1px solid #d32f2f" : "none",
            },
            "&.Mui-focused fieldset": {
                border: hasError ? "1px solid #d32f2f" : "1px solid #ccc",
            },
        },
        "& .MuiInputBase-input": {
            color: "#333",
            fontSize: "17px",
            padding: "18px 20px",
            fontFamily: TNR,
        },
        "& .MuiInputBase-input::placeholder": {
            color: "#555",
            opacity: 1,
            fontFamily: TNR,
        },
    });

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    minHeight: { xs: "auto", md: "720px" },
                    flexDirection: { xs: "column", md: "row" },
                    gap: 0,
                }}
            >
                {/* Left — Grayscale Ship Image */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "38%" },
                        height: { xs: "300px", md: "auto" },
                        minHeight: { xs: "300px", md: "720px" },
                        overflow: "hidden",
                        flexShrink: 0,
                    }}
                >
                    <Box
                        component="img"
                        src={shipImage}
                        alt="Shipping"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            display: "block",
                            filter: "grayscale(100%)",
                        }}
                    />
                </Box>

                {/* Right — Contact Form */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        px: { xs: 3, md: 7 },
                        py: { xs: 4, md: 8 },
                        backgroundColor: "#fff",
                    }}
                >
                    <Box sx={{ width: "100%", maxWidth: "760px" }}>

                        {/* Tag line — icon and text together centered */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 0.5,
                                mb: 1.5,
                            }}
                        >
                            <FlashOnIcon sx={{ color: "#e07b20", fontSize: "18px" }} />
                            <Typography
                                sx={{
                                    color: "#e07b20",
                                    fontWeight: 600,
                                    fontSize: "18px",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                    textDecoration: "underline",
                                    textUnderlineOffset: "1px",
                                    fontFamily: TNR,
                                }}
                            >
                                Get In Touch
                            </Typography>
                        </Box>

                        {/* Heading */}
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: "34px", md: "50px" },
                                color: "#1a1a2e",
                                textAlign: "center",
                                mb: 2,
                                lineHeight: 1.2,
                                fontFamily: TNR,
                            }}
                        >
                            Let's Work Together
                        </Typography>

                        {/* Subtext */}
                        <Typography
                            sx={{
                                color: "#777",
                                fontSize: "18px",
                                fontFamily: TNR,
                                textAlign: "center",
                                lineHeight: 1.8,
                                mb: 4,
                                maxWidth: "640px",
                                mx: "auto",
                            }}
                        >
                            Have questions about our shipping solutions? Our experts are here to
                            assist you with freight forwarding, customs clearance, and global
                            logistics. Connect with us today for reliable and efficient services
                            tailored to your needs.
                        </Typography>

                        {/* Form */}
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>

                            {/* Row: Name + Number */}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2.5,
                                    mb: 2.5,
                                    flexDirection: { xs: "column", sm: "row" },
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        sx={inputSx(!!errors.name)}
                                    />
                                    {errors.name && (
                                        <Typography sx={{ color: "#d32f2f", fontSize: "13px", fontFamily: TNR, mt: 0.5, ml: 1 }}>
                                            {errors.name}
                                        </Typography>
                                    )}
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Your Number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        sx={inputSx(!!errors.number)}
                                    />
                                    {errors.number && (
                                        <Typography sx={{ color: "#d32f2f", fontSize: "13px", fontFamily: TNR, mt: 0.5, ml: 1 }}>
                                            {errors.number}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>

                            {/* Email */}
                            <Box sx={{ mb: 2.5 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    sx={inputSx(!!errors.email)}
                                />
                                {errors.email && (
                                    <Typography sx={{ color: "#d32f2f", fontSize: "13px", fontFamily: TNR, mt: 0.5, ml: 1 }}>
                                        {errors.email}
                                    </Typography>
                                )}
                            </Box>

                            {/* Message */}
                            <Box sx={{ mb: 3.5 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Write Message"
                                    name="message"
                                    multiline
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    sx={{
                                        ...inputSx(!!errors.message),
                                        "& .MuiInputBase-input": {
                                            color: "#333",
                                            fontSize: "17px",
                                            padding: "14px 20px",
                                            fontFamily: TNR,
                                        },
                                    }}
                                />
                                {errors.message && (
                                    <Typography sx={{ color: "#d32f2f", fontSize: "13px", fontFamily: TNR, mt: 0.5, ml: 1 }}>
                                        {errors.message}
                                    </Typography>
                                )}
                            </Box>

                            {/* Submit Button */}
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    endIcon={<ChevronRightIcon sx={{ fontSize: "22px" }} />}
                                    sx={{
                                        backgroundColor: "#0D3944",
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        fontFamily: TNR,
                                        px: 7,
                                        py: 1.8,
                                        borderRadius: "4px",
                                        textTransform: "capitalize",
                                        letterSpacing: "1px",
                                        "&:hover": { backgroundColor: "#c96a10" },
                                    }}
                                >
                                    Send us Message
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Success Snackbar */}
                <Snackbar
                    open={successOpen}
                    autoHideDuration={4000}
                    onClose={() => setSuccessOpen(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert
                        onClose={() => setSuccessOpen(false)}
                        severity="success"
                        sx={{ width: "100%", fontWeight: 600, fontFamily: TNR }}
                    >
                        Message sent successfully! We'll get back to you soon.
                    </Alert>
                </Snackbar>
            </Box>
            {/* Map Image */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 6,
                    backgroundColor: "#fff",
                }}
            >
                <Box
                    component="img"
                    src={mapImage}
                    alt="Sai Shipping Map"
                    sx={{
                        width: { xs: "90%", md: "70%" },
                        height: "auto",
                        display: "block",
                    }}
                />
            </Box>

            {/* Live Google Map */}
            <Box sx={{ width: "100%", lineHeight: 0 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3!2d73.7362!3d18.5929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb00e3f7a5c3%3A0x1234567890!2sHinjawadi+Phase+II%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="500"
                    style={{ border: "none", display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Box>
        </>
    );
}

export default ContactForm;