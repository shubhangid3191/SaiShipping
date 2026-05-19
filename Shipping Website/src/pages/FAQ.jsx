import React, { useState, useEffect} from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import aboutBanner from "../assets/images/about-banner.jpg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

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
    • Centralized storage and distribution facilities, improving inventory managemet
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setSubmitted(true);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      
    </div>
  )
}

export default FAQ;