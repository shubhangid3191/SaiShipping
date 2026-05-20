import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  "FREIGHT FORWARDING",
  "CUSTOM CLEARANCE",
  "WAREHOUSES",
  "ADDITIONAL SERVICES",
];

export default function GetFreeQuote() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const errs = {};

    // FULL NAME
    if (!form.fullName.trim()) {
      errs.fullName = "Full name is required";
    }

    // EMAIL
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Enter valid email";
    }

    // PHONE
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    }

    // SERVICE
    if (!form.service) {
      errs.service = "Please select service";
    }

    // MESSAGE
    if (!form.message.trim()) {
      errs.message = "Message is required";
    }

    // IF ERRORS
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setSubmitted(false);
      return;
    }

    // SUCCESS
    setErrors({});
    setSubmitted(true);

    // RESET FORM
    setForm({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          pb: {
            xs: "180px",
            md: "140px",
          },
          bgcolor: "#fff",

          /* MAIN CONTAINER */
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 8 },
          fontFamily: '"Times New Roman", serif',
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            textAlign: "center",
            mb: 5,
          }}
        >
          <Box
            component="h1"
            sx={{
              fontSize: { xs: "34px", md: "46px" },
              fontWeight: 700,
              color: "#1a2340",
              mb: 1,
              fontFamily: '"Times New Roman", serif',
            }}
          >
            Get a Free Quote
          </Box>

          <Box
            component="p"
            sx={{
              color: "#6b7694",
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: '"Times New Roman", serif',
            }}
          >
            Fill in the details and our team will get back to you shortly.
          </Box>
        </Box>

        {/* FORM */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: "30px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* FULL NAME */}
          <Box>
            <Box
              component="input"
              required
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              sx={{
                width: "100%",
                p: "28px",
                background: "#f4f5f7",
                border: errors.fullName
                  ? "2px solid #e24b4a"
                  : "2px solid #dcdfe6",
                fontSize: "18px",
                fontFamily: '"Times New Roman", serif',
                outline: "none",
                boxSizing: "border-box",

                "&:focus": {
                  border: "2px solid orange",
                  background: "#fff",
                },
              }}
            />

            {errors.fullName && (
              <Box
                component="small"
                sx={{ color: "#e24b4a", fontSize: "13px" }}
              >
                {errors.fullName}
              </Box>
            )}
          </Box>

          {/* EMAIL */}
          <Box>
            <Box
              component="input"
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              sx={{
                width: "100%",
                p: "28px",
                background: "#f4f5f7",
                border: errors.email
                  ? "2px solid #e24b4a"
                  : "2px solid #dcdfe6",
                fontSize: "18px",
                fontFamily: '"Times New Roman", serif',
                outline: "none",
                boxSizing: "border-box",

                "&:focus": {
                  border: "2px solid orange",
                  background: "#fff",
                },
              }}
            />

            {errors.email && (
              <Box
                component="small"
                sx={{ color: "#e24b4a", fontSize: "13px" }}
              >
                {errors.email}
              </Box>
            )}
          </Box>

          {/* PHONE */}
          <Box
            component="input"
            required
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            sx={{
              width: "100%",
              p: "28px",
              background: "#f4f5f7",
              border: errors.phone ? "2px solid #e24b4a" : "2px solid #dcdfe6",
              fontSize: "18px",
              fontFamily: '"Times New Roman", serif',
              outline: "none",
              boxSizing: "border-box",

              "&:focus": {
                border: "2px solid orange",
                background: "#fff",
              },
            }}
          />

          {/* SERVICE */}
          <Box
            component="select"
            required
            name="service"
            value={form.service}
            onChange={handleChange}
            sx={{
              width: "100%",
              p: "28px",
              background: "#f4f5f7",
              border: errors.phone ? "2px solid #e24b4a" : "2px solid #dcdfe6",
              fontSize: "18px",
              fontFamily: '"Times New Roman", serif',
              outline: "none",
              boxSizing: "border-box",

              "&:focus": {
                border: "2px solid orange",
                background: "#fff",
              },
            }}
          >
            <option value="" disabled>
              Select Service
            </option>

            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Box>

          {/* MESSAGE */}
          <Box
            component="textarea"
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            sx={{
              gridColumn: { xs: "auto", md: "1 / -1" },
              width: "100%",
              p: "28px",
              background: "#f4f5f7",
              border: "2px solid #dcdfe6",
              fontSize: "18px",
              fontFamily: '"Times New Roman", serif',
              outline: "none",
              resize: "vertical",
              boxSizing: "border-box",

              "&:focus": {
                border: "2px solid orange",
                background: "#fff",
              },
            }}
          />
        </Box>

        {/* BUTTON */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            textAlign: "center",
            mt: 4,
          }}
        >
          <Button
            type="submit"
            onClick={handleSubmit}
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontFamily: '"Times New Roman", serif',
              backgroundColor: "#0d3944",
              color: "#fff",
              px: 5,
              py: 2,
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "uppercase",
              transition: "0.3s",

              "&:hover": {
                backgroundColor: "#FF7236",
              },

              "& .MuiButton-endIcon": {
                transition: "0.3s",
              },

              "&:hover .MuiButton-endIcon": {
                transform: "translateX(4px)",
              },
            }}
          >
            Send Message
          </Button>

          {submitted && (
            <Box
              sx={{
                mt: 2,
                color: "#27ae60",
                fontSize: "14px",
                fontFamily: '"Times New Roman", serif',
              }}
            >
              ✓ Message sent! We'll be in touch soon.
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
