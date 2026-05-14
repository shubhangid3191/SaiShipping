import { useState } from "react";

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
    padding: "14px 16px", borderRadius: "8px",
    background: "#F4F5F7", width: "100%", boxSizing: "border-box",
    border: hasErr ? "2px solid #E24B4A" : "2px solid transparent",
    fontSize: "14px", outline: "none", fontFamily: "inherit",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f0f2f7",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 16px", fontFamily: "'DM Sans', sans-serif" }}>

      <div style={{ background: "#fff", borderRadius: "16px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.10)", padding: "48px 44px",
        width: "100%", maxWidth: "780px", position: "relative" }}>

        <div style={{ position: "absolute", top: 0, left: 44, right: 44,
          height: "3px", background: "linear-gradient(90deg,#1a2340,#E8713C)" }} />

        <h1 style={{ fontSize: "32px", fontWeight: 700,
          color: "#1a2340", margin: "0 0 6px" }}>
          Get a Free Quote
        </h1>
        <p style={{ color: "#6b7694", fontSize: "14px", margin: "0 0 32px" }}>
          Fill in the details and our team will get back to you shortly.
        </p>

        <div style={{ display: "grid",
          gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

          <input name="fullName" value={form.fullName}
            onChange={handleChange} placeholder="Full Name"
            style={inp(errors.fullName)} />

          <input name="email" type="email" value={form.email}
            onChange={handleChange} placeholder="Email"
            style={inp(errors.email)} />

          <input name="phone" type="tel" value={form.phone}
            onChange={handleChange} placeholder="Phone Number"
            style={inp()} />

          <select name="service" value={form.service}
            onChange={handleChange}
            style={{ ...inp(),
              color: form.service ? "#1a2340" : "#9aa3b2",
              appearance: "none", cursor: "pointer" }}>
            <option value="" disabled>Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <textarea name="message" value={form.message}
            onChange={handleChange} placeholder="Your Message" rows={6}
            style={{ ...inp(), gridColumn: "1 / -1", resize: "vertical" }} />

        </div>

        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <button onClick={handleSubmit} style={{
            background: "#1a2340", color: "#fff", border: "none",
            padding: "14px 48px", borderRadius: "8px",
            fontSize: "15px", fontWeight: 600, cursor: "pointer",
          }}>
            Send Message ›
          </button>

          {submitted && (
            <p style={{ marginTop: "16px",
              color: "#27ae60", fontSize: "14px" }}>
              ✓ Message sent! We'll be in touch soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}