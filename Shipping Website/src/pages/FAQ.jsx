import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";

import aboutBanner from "../assets/images/about-banner.jpg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import BoltIcon from "@mui/icons-material/Bolt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MemoryIcon from "@mui/icons-material/Memory";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const faqs = [
  {
    question: "What is a Free Trade Warehousing Zone (FTWZ)?",
    answer:
      "FTWZ is a designated area within a country that provides infrastructure and facilities for storing, handling, and distributing goods with ease of customs clearance. It aims to promote international trade and facilitate export-import operations.",
  },
  {
    question: "What is the genesis of FTWZ in India?",
    answer:
      "The concept of FTWZ in India was introduced as part of the Foreign Trade Policy (FTP) to enhance trade competitiveness and attract foreign investment. It is a strategic initiative to boost export-oriented industries and improve India's position in the global supply chain.",
  },
  {
    question: "What is the primary concept behind FTWZ?",
    answer:
      "The main concept behind FTWZ is to create an integrated facility that offers value-added services, efficient logistics, and customs-related benefits to businesses engaged in international trade. It aims to provide a one-stop solution for trading activities, thereby reducing transaction costs and improving supply chain efficiencies.",
  },
  {
    question: "What are the objectives of establishing FTWZ in India?",
    answer: `
    • Promoting and facilitating global trade
    • Attracting foreign direct investment (FDI)
    • Simplifying customs procedures and reducing bureaucratic hurdles
    • Enhancing the ease of doing business
    • Encouraging export-oriented industries and manufacturing activities
  `,
  },
  {
    question: "What are the envisaged benefits of FTWZ for trade in India?",
    answer: `
    • Duty deferment and exemption on re-exported goods, promoting export-led growth
    • Consolidation and deconsolidation of cargo, optimizing logistics and reducing costs
    • Efficient customs clearance and reduced documentation requirements
    • Centralized storage and distribution facilities, improving inventory management
    • Integration with global supply chains, increasing India's competitiveness
    • Attracting foreign investment and boosting economic growth
  `,
  },
  {
    question:
      "Are there any eligibility criteria for businesses to operate within FTWZ?",
    answer:
      "Yes, businesses must meet certain criteria to operate within FTWZ. These may include being engaged in export-import activities, complying with customs regulations, and adhering to the guidelines specified by the relevant authorities.",
  },
  {
    question: "How does FTWZ contribute to India's economic growth?",
    answer:
      "FTWZ plays a crucial role in India's economic growth by attracting foreign investment, encouraging export-oriented industries, and improving the overall efficiency of international trade. It enhances India's competitiveness in the global market and strengthens its position in the global supply chain.",
  },
  {
    question: "Can domestic businesses also benefit from FTWZ facilities?",
    answer:
      "Yes, domestic businesses can also benefit from FTWZ facilities. They can use FTWZ for storing and processing goods meant for export or import while taking advantage of customs-related benefits and improved logistics services.",
  },
  {
    question:
      "How does FTWZ contribute to the ease of doing business in India?",
    answer:
      "FTWZ simplifies customs procedures, reduces paperwork, and offers a single-window clearance system, making it easier for businesses to engage in international trade. This streamlined process significantly contributes to the ease of doing business in India.",
  },
  {
    question:
      "Are there any specific industries that benefit the most from FTWZ?",
    answer:
      "Various industries can benefit from FTWZ, including manufacturing, pharmaceuticals, textiles, automotive, electronics, and consumer goods. Export-oriented industries that require efficient logistics and customs facilitation can particularly benefit from FTWZ services.",
  },
  {
    question: "What role does FTWZ play in promoting India's exports?",
    answer:
      "FTWZ plays a significant role in promoting India's exports by offering duty deferment and exemption on re-exported goods. It enables businesses to optimize their supply chain, reduce costs, and access international markets more effectively.",
  },
  {
    question: "How does FTWZ contribute to foreign investment in India?",
    answer:
      "FTWZ attracts foreign investment by providing a favorable business environment, efficient logistics, and customs facilitation. Its seamless integration with global supply chains makes India an attractive destination for foreign companies looking to expand their operations in the region.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    trackingId: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputStyle = {
    flex: 1,
    padding: isMobile ? "18px 16px" : "28px 24px",
    fontSize: isMobile ? "15px" : "18px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    backgroundColor: "#f3f4f6",
    outline: "none",
    fontFamily: "'Georgia', serif",
    minWidth: isMobile ? "100%" : isTablet ? "280px" : "320px",
    width: "100%",
    boxSizing: "border-box",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
    setSubmitted(true);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 280, sm: 350, md: 500 },
        }}
      >
        <Box
          component="img"
          src={aboutBanner}
          alt="Banner"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ED6637",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: 14, md: 22 },
              fontFamily: "Times New Roman",
            }}
          >
            International Logistics
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 40, md: 90 },
              fontWeight: 800,
              color: "#000",
              fontFamily: "Times New Roman",
            }}
          >
            FAQ
          </Typography>
        </Box>
      </Box>

      {/* ✅ FAQ SECTION — equal padding both sides */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          mt: { xs: 4, md: 10 },
          backgroundColor: "#fff",
          px: { xs: 3, sm: 5, md: 8, lg: 12 }, // ✅ same left & right padding
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 6, md: 10 },
            alignItems: "flex-start",
            maxWidth: "1400px",
            mx: "auto", // ✅ center the whole block
          }}
        >
          {/* ✅ LEFT SIDE — same padding as right */}
          <Box
            sx={{
              width: { xs: "100%", lg: "520px" },
              flexShrink: 0,
            }}
          >
            {/* SMALL TITLE */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "6px", mb: 2 }}
            >
              <BoltIcon sx={{ color: "#FF7236", fontSize: "20px" }} />
              <Typography
                sx={{
                  color: "#FF7236",
                  fontWeight: 700,
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: "30px",
                  letterSpacing: "1.2px",
                  fontFamily: "serif",
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                FAQs
              </Typography>
            </Box>

            {/* HEADING */}
            <Typography
              sx={{
                fontSize: { xs: "32px", sm: "38px", md: "46px" },
                lineHeight: 1.08,
                fontWeight: 800,
                color: "#111827",
                fontFamily: '"Times New Roman", serif',
                mb: 3,
              }}
            >
              Have Questions?
              <br />
              We've Got Answers!
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                color: "#6B7280",
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: 1.9,
                mb: 5,
                fontFamily: '"Times New Roman", serif',
              }}
            >
              Let's Find the answers to the basics of Shipping and logistics
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: 2,
                }}
              >
                <AccountTreeIcon sx={{ color: "#FF7236", fontSize: "20px" }} />
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: { xs: "15px", md: "18px" },
                    fontWeight: 400,
                    letterSpacing: "1.2px",
                    fontFamily: "'Times New Roman', serif",
                  }}
                >
                  We provide customer support around the clock
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <AccountTreeIcon sx={{ color: "#FF7236", fontSize: "20px" }} />
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: { xs: "15px", md: "18px" },
                    fontWeight: 400,
                    letterSpacing: "1.2px",
                    fontFamily: "'Times New Roman', serif",
                  }}
                >
                  Coverage protecting goods during transport
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, md: 4 },
                flexWrap: "wrap",
                mt: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MemoryIcon sx={{ color: "#FF7236", fontSize: "36px" }} />
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: { xs: "18px", md: "22px" },
                    fontWeight: 700,
                    fontFamily: "'Times New Roman', serif",
                  }}
                >
                  Domestic & Service
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MemoryIcon sx={{ color: "#FF7236", fontSize: "36px" }} />
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: { xs: "18px", md: "22px" },
                    fontWeight: 700,
                    fontFamily: "'Times New Roman', serif",
                  }}
                >
                  Intermodal Shipping
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ✅ RIGHT SIDE FAQ — naturally fills remaining space */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {faqs.map((faq, index) => (
              <Box
                key={index}
                sx={{
                  border: "1px solid #ececec",
                  borderRadius: "10px",
                  mb: 2.5,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <Box
                  onClick={() => toggleFAQ(index)}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: { xs: 2.5, md: 4 },
                    py: { xs: 2.5, md: 3.5 },
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "16px", md: "20px" },
                      fontWeight: 700,
                      color: "#111827",
                      fontFamily: '"Times New Roman", serif',
                      lineHeight: 1.5,
                      pr: 2,
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: 36, md: 48 },
                      height: { xs: 36, md: 48 },
                      minWidth: { xs: 36, md: 48 },
                      borderRadius: "8px",
                      backgroundColor:
                        openIndex === index ? "#ED6637" : "#0B2D3B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {openIndex === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </Box>
                </Box>

                {openIndex === index && (
                  <Box
                    sx={{
                      px: { xs: 2.5, md: 4 },
                      pb: 4,
                      borderTop: "1px solid #f3f4f6",
                    }}
                  >
                    <Typography
                      sx={{
                        mt: 3,
                        color: "#6B7280",
                        lineHeight: 1.9,
                        fontSize: { xs: "14px", sm: "15px", md: "18px" },
                        fontFamily: '"Times New Roman", serif',
                        whiteSpace: "pre-line",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* FORM SECTION — ✅ same px as FAQ section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          px: { xs: 3, sm: 5, md: 8, lg: 12 }, // ✅ matches FAQ section
          py: { xs: 5, md: 8 },
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* Row 1 */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            mb: "26px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </Box>

        {/* Row 2 */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            mb: "26px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <input
            type="text"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="trackingId"
            placeholder="Enter your tracking id"
            value={formData.trackingId}
            onChange={handleChange}
            style={inputStyle}
          />
        </Box>

        {/* Message */}
        <Box sx={{ mb: "28px" }}>
          <textarea
            name="message"
            placeholder="Write Message"
            value={formData.message}
            onChange={handleChange}
            rows={isMobile ? 6 : 9}
            style={{
              ...inputStyle,
              resize: "vertical",
              display: "block",
              width: "100%",
            }}
          />
        </Box>

        {/* Submit Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#0D3944",
              color: "#fff",
              fontWeight: 600,
              fontFamily: "'Times New Roman', serif",
              textTransform: "none",
              fontSize: { xs: "16px", md: "20px" },
              padding: { xs: "16px 28px", md: "22px 40px" },
              display: "flex",
              alignItems: "center",
              gap: "8px",
              "&:hover": { backgroundColor: "#FF7236" },
            }}
          >
            Send Us Message
            <ArrowForwardIosIcon
              sx={{ fontSize: { xs: "14px", md: "18px" } }}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default FAQ;
