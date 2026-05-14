import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "../../styles/GetFreeQuote.css";

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

    if (!form.fullName.trim()) {
      errs.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      errs.email = "Email is required";
    }

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <>
      <Header />

      {/* IMPORTANT FIX */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",

          /* SPACE FOR CTA FOOTER */
          pb: {
            xs: "180px",
            md: "140px",
          },

          bgcolor: "#fff",
        }}
      >
        <div className="quote-container">
          {/* Title */}
          <div className="quote-header">
            <h1>Get a Free Quote</h1>

            <p>
              Fill in the details and our team will get back to you shortly.
            </p>
          </div>

          {/* Form Fields */}
          <div className="quote-form">
            {/* FULL NAME */}
            <div>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className={errors.fullName ? "error" : ""}
              />

              {errors.fullName && <small>{errors.fullName}</small>}
            </div>

            {/* EMAIL */}
            <div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={errors.email ? "error" : ""}
              />

              {errors.email && <small>{errors.email}</small>}
            </div>

            {/* PHONE */}
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />

            {/* SERVICE */}
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Service
              </option>

              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
            />
          </div>

          {/* BUTTON */}
          <div className="quote-button">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="theme-btn"
            >
              Send Message
            </Button>

            {submitted && (
              <p className="success-msg">
                ✓ Message sent! We'll be in touch soon.
              </p>
            )}
          </div>
        </div>
      </Box>

      <Footer />
    </>
  );
}