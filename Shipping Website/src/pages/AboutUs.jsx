import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import aboutBanner from "../assets/images/about-banner.jpg";
import aboutImage from "../assets/images/founder1.jpeg";
import "../styles/aboutus.css";

import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublicIcon from "@mui/icons-material/Public";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

import FlashOnIcon from "@mui/icons-material/FlashOn";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import shipImage from "../assets/images/get-touch.jpg";

const stats = [
  {
    icon: <WarehouseIcon sx={{ fontSize: "55px", color: "#fff" }} />,
    number: "20",
    label: "Warehouses",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: "55px", color: "#fff" }} />,
    number: "99%",
    label: "Supply Consignment",
  },
  {
    icon: <PublicIcon sx={{ fontSize: "55px", color: "#fff" }} />,
    number: "150+",
    label: "Countries Covered",
  },
  {
    icon: (
      <MiscellaneousServicesIcon sx={{ fontSize: "55px", color: "#fff" }} />
    ),
    number: "3m+",
    label: "Total Services",
  },
];

function AboutUs() {
  return (
    <>
      <Box sx={{ backgroundColor: "#f7f9fc" }}>
        {/* HERO SECTION */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: "280px",
              sm: "350px",
              md: "500px",
            },
            overflow: "hidden",
          }}
        >
          {/* Banner Image */}
          <Box
            component="img"
            src={aboutBanner}
            alt="Contact Banner"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Center Text */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
              px: 2,
              zIndex: 1, // ← above overlay
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "20px" },
                color: "#ffb347",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "capitalize",
                "& *": { textTransform: "capitalize" },
              }}
            >
              International Logistics
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "40px", md: "80px" },
                fontWeight: 900,
                color: "#000",
                fontFamily: "serif",
                lineHeight: 1.1,
                mt: 1,
              }}
            >
              About Us
            </Typography>
          </Box>
        </Box>
        {/* MAIN CONTENT */}
        <Container
          maxWidth="lg"
          sx={{ py: { xs: 6, md: 12 }, mt: { xs: 3, md: 6 } }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
              gap: { xs: 5, md: 10 },
              alignItems: "center",
            }}
          >
            {/* LEFT IMAGE CARD */}
            <Paper
              elevation={6}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                transform: { md: "translateY(-20px)" },
              }}
            >
              <Box
                component="img"
                src={aboutImage}
                alt="Founder"
                sx={{
                  width: "100%",
                  height: { xs: "340px", md: "560px" },
                  objectFit: "cover",
                }}
              />
              <Box sx={{ p: 2, backgroundColor: "#0b1b3a" }}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  Founder - Mr. Haresh A Dhakan
                </Typography>
                <Typography sx={{ color: "#ffb347", fontSize: "13px" }}>
                  Customs & Logistics Expert
                </Typography>
              </Box>
            </Paper>

            {/* RIGHT CONTENT */}
            <Box>
              <Typography
                sx={{
                  color: "#ff7a00",
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 1,
                }}
              >
                ABOUT OUR COMPANY
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "44px" },
                  fontWeight: 900,
                  color: "#0b1b3a",
                  fontFamily: "serif",
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Trusted Logistics & Customs Clearance Partner Since 1988
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 2,
                  mb: 2,
                }}
              >
                Founded by Mr. Haresh A Dhakan in 1988, our organization began
                as a small Licensed Customs House Agent (CHA) firm and has now
                grown into a nationwide logistics network with 12+ branches and
                global associates.
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 2,
                  mb: 2,
                }}
              >
                With decades of experience, we have successfully handled over
                50,000+ TEUs of sea freight and 500+ tons of air cargo annually,
                ensuring smooth and efficient customs clearance and freight
                forwarding services.
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 2,
                }}
              >
                Backed by 300+ skilled professionals and retired government
                experts, we deliver reliable logistics solutions with precision,
                compliance, and trust.
              </Typography>

              {/* HIGHLIGHT BOX */}
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  backgroundColor: "#0b1b3a",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                  ✔ 35+ Years Experience & Global Network
                </Typography>
                <Typography sx={{ color: "#ffb347", fontSize: "14px", mt: 1 }}>
                  Efficient, secure & compliant logistics solutions worldwide
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="marquee-wrapper">
        <Box className="marquee-inner">
          <Box component="span" className="text-slider">
            * Shipping * Freight Forwarding * Transportation * Customs Clearance
            * Warehousing * Logistics Solutions *
          </Box>
          <Box component="span" className="text-slider">
            * Shipping * Freight Forwarding * Transportation * Customs Clearance
            * Warehousing * Logistics Solutions *
          </Box>
          <Box component="span" className="text-slider">
            * Shipping * Freight Forwarding * Transportation * Customs Clearance
            * Warehousing * Logistics Solutions *
          </Box>
          <Box component="span" className="text-slider">
            * Shipping * Freight Forwarding * Transportation * Customs Clearance
            * Warehousing * Logistics Solutions *
          </Box>
        </Box>
      </Box>

      {/* STATS BOX */}
      <Box
        sx={{
          mx: "auto",
          maxWidth: "1200px",
          my: 4,
          borderRadius: "10px",
          backgroundColor: "#eb7e27",
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  py: { xs: 2, sm: 0 },
                }}
              >
                <Box sx={{ mb: 1.5 }}>{stat.icon}</Box>
                <Typography
                  sx={{
                    fontSize: { xs: "32px", md: "42px" },
                    fontWeight: 900,
                    color: "#fff",
                    fontFamily: '"Times New Roman", Times, serif',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
                    color: "#fff",
                    fontFamily: '"Times New Roman", Times, serif',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>

              {/* Divider */}
              {index < stats.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: "1px",
                    height: "70px",
                    backgroundColor: "rgba(255,255,255,0.4)",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* OUR VISION SECTION */}
      <Box
        sx={{
          backgroundColor: "#fff",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: "1500px", mx: "auto" }}>
          {/* Tag */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
              mb: 1.5,
            }}
          >
            <FlashOnIcon sx={{ color: "#eb7e27", fontSize: "18px" }} />
            <Typography
              sx={{
                color: "#eb7e27",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Our Vision
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "60px" },
              fontWeight: 900,
              color: "#0b1b3a",
              textAlign: "center",
              fontFamily: '"Times New Roman", Times, serif',
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Shaping The Future Of Global Logistics
          </Typography>

          {/* Subtext */}
          <Typography
            sx={{
              fontSize: "20px",
              color: "#505479",
              textAlign: "center",
              fontWeight: 500,
              maxWidth: "1300px",
              mx: "auto",
              mb: 7,
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            To provide all the logistic services under one roof and become the
            leading firm in the country with cutting edge technology so that our
            esteemed members feel a complete satisfaction, which reflect on
            their recurring confidence to route their cargo through us.
          </Typography>

          {/* 3 Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
              gap: 6,
            }}
          >
            {[
              {
                title: "Seamless Global Connectivity",
                text: "We aim to bridge international trade gaps by providing reliable, efficient, and cost-effective shipping solutions. Our extensive global network ensures smooth transportation across borders, enabling businesses to expand effortlessly.",
              },
              {
                title: "Innovative Logistics Solutions",
                text: "Technology is at the heart of our operations. From real-time tracking to AI-driven logistics optimization, we leverage cutting-edge innovations to give customers control over their shipments.",
              },
              {
                title: "Sustainable Growth",
                text: "We are committed to eco-friendly and responsible logistics practices. By optimizing routes, reducing carbon footprints, and implementing sustainable shipping methods, we contribute to a greener future while ensuring operational excellence.",
              },
            ].map((card) => (
              <Box
                key={card.title}
                sx={{
                  p: 4,
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    "& .card-title": {
                      color: "#eb7e27", // ← orange on hover
                    },
                  },
                }}
              >
                {/* Check Icon */}
                <Typography
                  sx={{
                    fontSize: "80px",
                    color: "#0b1b3a",
                    lineHeight: 1,
                    mb: 2,
                    fontWeight: 900,
                    textAlign: "center",
                  }}
                >
                  ✓
                </Typography>

                {/* Title */}
                <Typography
                  className="card-title"
                  sx={{
                    fontSize: "25px",
                    fontWeight: 800,
                    color: "#0b1b3a",
                    fontFamily: '"Times New Roman", Times, serif',
                    mb: 2,
                    transition: "color 0.3s",
                    textAlign: "center", // ← add this
                  }}
                >
                  {card.title}
                </Typography>

                {/* Text */}
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#666",
                    fontFamily: '"Times New Roman", Times, serif',
                    textAlign: "center", // ← add this
                  }}
                >
                  {card.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>



      {/* IMAGE + TEXT SIDE BY SIDE SECTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          minHeight: { xs: "auto", md: "700px" },
        }}
      >
        {/* Left — Grayscale Ship Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "38%" },
            minHeight: { xs: "300px", md: "800px" },
            flexShrink: 0,
            overflow: "hidden",
            alignItems: "flex-start",
          }}
        >
          <Box
            component="img"
            src={shipImage}
            alt="Ship"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              filter: "grayscale(100%)",
            }}
          />
        </Box>

        {/* Right — Text Content */}
        <Box
          sx={{
            flex: 1,
            pl: { xs: "20px", md: "60px" },   // ← small left padding (close to image)
    pr: { xs: "20px", md: "160px" },   // ← large right padding (pushes content left)
            display: "flex",
            flexDirection: "column",
             justifyContent: "flex-start",
            backgroundColor: "#fff",
          }}
        >
          {/* Tag */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1.5 }}
          >
            <FlashOnIcon sx={{ color: "#eb7e27", fontSize: "16px" }} />
            <Typography
              sx={{
                color: "#eb7e27",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Our Mission
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "300px", md: "56px" },
              fontWeight: 700,
              color: "#0b1b3a",
              fontFamily: '"Times New Roman", Times, serif',
              fontStyle: "italic",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Delivering Excellence In Global Logistics
          </Typography>

          {/* Paragraphs */}
          {[
            "At SSS Sai Shipping Services Pvt Ltd.,",
            "Our Mission is to provide innovative, practical and top quality logistic services that improve business solutions, in an environment of fairness, honesty and courtesy towards our clients, vendors, employees and society at large.",
            "Our Vision is to provide all the logistic services under one roof and become the leading firm in the country with cutting edge technology so that our esteemed members feel a complete satisfaction, which reflect on their recurring confidence to route their cargo through us.",
            "We strive to provide reliable, efficient, and innovative shipping solutions, our mission is centered around ensuring that every shipment, no matter its size or destination, is handled with precision and care and committed to offering services that are timely, cost-effective, and tailored to the unique needs of each client.",
            "We believe in maintaining transparency, fostering trust, and continually improving our services to meet the ever-changing demands of the industry.",
            "We define success as an ongoing process achieved with your trust, assistance & our sense of ethics and integrity.",
          ].map((text, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                color: "#666",
                fontFamily:  "var(--bs-font-monospace)" ,
                fontStyle: "italic",
                lineHeight: 2,
                mb: 1.5,
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
