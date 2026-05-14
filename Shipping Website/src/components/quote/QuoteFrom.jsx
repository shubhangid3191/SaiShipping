import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const services = [
  "Air Freight", "Sea Freight", "Road Transport",
  "Warehousing", "Custom Clearance", "Project Cargo",
];

export default function GetFreeQuote() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "",
    service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = true;
    if (!form.email.trim())    errs.email    = true;
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const inp = (hasErr) => ({
    padding: "14px 16px",
    borderRadius: "8px",
    background: "#F4F5F7",
    width: "100%",
    boxSizing: "border-box",
    border: hasErr ? "2px solid #E24B4A" : "2px solid transparent",
    fontSize: "14px",
    outline: "none",
    fontFamily: "inherit",
  });

  return (
    <>
      <Header />

      <div style={{
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* Title centered */}
        <div style={{ width: "100%", maxWidth: "900px", textAlign: "center" }}>
          <h1 style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#1a2340",
            margin: "0 0 8px",
          }}>
            Get a Free Quote
          </h1>
          <p style={{
            color: "#6b7694",
            fontSize: "15px",
            margin: "0 0 40px",
          }}>
            Fill in the details and our team will get back to you shortly.
          </p>
        </div>

        {/* Fields centered */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          width: "100%",
          maxWidth: "900px",
        }}>

          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            style={inp(errors.fullName)}
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            style={inp(errors.email)}
          />

          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            style={inp()}
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            style={{
              ...inp(),
              color: form.service ? "#1a2340" : "#9aa3b2",
              appearance: "none",
              cursor: "pointer",
            }}
          >
            <option value="" disabled>Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            style={{
              ...inp(),
              gridColumn: "1 / -1",
              resize: "vertical",
            }}
          />

        </div>

        {/* Button centered */}
        <div style={{
          width: "100%",
          maxWidth: "900px",
          textAlign: "center",
          marginTop: "28px",
        }}>
          <button
            onClick={handleSubmit}
            style={{
              background: "#eb7e27",
              color: "#fff",
              border: "none",
              padding: "14px 48px",
              borderRadius: "50px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Send Message ›
          </button>

          {submitted && (
            <p style={{
              marginTop: "16px",
              color: "#27ae60",
              fontSize: "14px",
            }}>
              ✓ Message sent! We'll be in touch soon.
            </p>
          )}
        </div>

      </div>

      <Footer />
    </>
  );
}