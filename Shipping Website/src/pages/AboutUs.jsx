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

import certificate1 from "../assets/images/certificate-1.jpg";
import certificate2 from "../assets/images/certificate-2.jpg";
import certificate3 from "../assets/images/certificate-3.jpg";
import certificate4 from "../assets/images/certificate-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* CLIENT LOGOS IMPORTS */
import client1 from "../assets/images/cl-logo-1.png";
import client2 from "../assets/images/cl-logo-2.png";
import client3 from "../assets/images/cl-logo-3.png";
import client4 from "../assets/images/cl-logo-4.png";
import client5 from "../assets/images/cl-logo-5.png";
import client6 from "../assets/images/cl-logo-6.png";
import client7 from "../assets/images/cl-logo-7.png";
import client8 from "../assets/images/cl-logo-8.png";
import client9 from "../assets/images/cl-logo-9.png";
import client10 from "../assets/images/cl-logo-10.png";
import client11 from "../assets/images/cl-logo-11.png";
import client12 from "../assets/images/cl-logo-12.png";
import client13 from "../assets/images/cl-logo-13.png";
import client14 from "../assets/images/cl-logo-14.png";
import client15 from "../assets/images/cl-logo-15.png";
import client16 from "../assets/images/cl-logo-16.png";
import client17 from "../assets/images/cl-logo-17.png";
import client18 from "../assets/images/cl-logo-18.png";
import client19 from "../assets/images/cl-logo-19.png";
import client20 from "../assets/images/cl-logo-20.png";

import worldMap from "../assets/images/world-map.png";

/* ARRAY */
const clientLogos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
];

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

const certificates = [certificate1, certificate2, certificate3, certificate4];

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
                color: "#ED6637",
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
                fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Founder - Mr. Haresh A Dhakan
                </Typography>
                <Typography
                  sx={{
                    color: "#ffb347",
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
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
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                ABOUT OUR COMPANY
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "44px" },
                  fontWeight: 900,
                  color: "#0b1b3a",
                  lineHeight: 1.2,
                  mb: 3,
                  fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "Poppins, sans-serif",
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
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  ✔ 35+ Years Experience & Global Network
                </Typography>
                <Typography
                  sx={{
                    color: "#ffb347",
                    fontSize: "14px",
                    mt: 1,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
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
                    fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
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
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Our Vision
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "50px" },
              fontWeight: 700,
              color: "#0b1b3a",
              textAlign: "center",
              fontFamily: "Poppins, sans-serif",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Shaping The Future Of Global Logistics
          </Typography>

          {/* Subtext */}
          <Typography
            sx={{
              fontSize: "18px",
              color: "#505479",
              textAlign: "center",
              fontWeight: 400,
              maxWidth: "1300px",
              mx: "auto",
              mb: 7,
              fontFamily: "Poppins, sans-serif",
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
                  textAlign: "justify",
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
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#0b1b3a",
                    fontFamily: "Poppins, sans-serif",
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
                    fontSize: "18px",
                    color: "#666",
                    fontFamily: "Poppins, sans-serif",
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
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", md: "36%" },
            height: { xs: "280px", md: "850px" },
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
            clipPath: {
              md: "polygon(0 0, 82% 0, 65% 100%, 0% 100%)",
            },
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
              filter: "grayscale(100%)",
              display: "block",
            }}
          />
        </Box>

        {/* RIGHT CONTENT */}
        <Box
          sx={{
            flex: 1,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            pl: {
              xs: 3,
              sm: 5,
              md: 8,
              lg: 10,
            },

            pr: {
              xs: 3,
              sm: 5,
              md: 6,
              lg: 8,
            },

            py: {
              xs: 5,
              md: 8,
            },

            textAlign: "left",
          }}
        >
          {/* TOP TAG */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <FlashOnIcon
              sx={{
                color: "#eb7e27",
                fontSize: "16px",
              }}
            />

            <Typography
              sx={{
                color: "#eb7e27",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Our Mission
            </Typography>
          </Box>

          {/* HEADING */}
          <Typography
            sx={{
              fontSize: {
                xs: "34px",
                sm: "48px",
                md: "68px",
              },

              fontWeight: 700,
              color: "#071c4d",

              fontFamily: "Poppins, sans-serif",
              fontStyle: "italic",

              lineHeight: 1.15,

              maxWidth: "620px",

              mb: 4,
            }}
          >
            Delivering Excellence In Global Logistics
          </Typography>

          {/* PARAGRAPHS */}
          {[
            "At SSS Sai Shipping Services Pvt Ltd.,",
            "Our Mission is to provide innovative, practical and top quality logistic services that improve business solutions, in an environment of fairness, honesty and courtesy towards our clients, vendors, employees and society at large.",
            "Our Vision is to provide all the logistic services under one roof and become the leading firm in the country with cutting edge technology.",
            "We strive to provide reliable, efficient, and innovative shipping solutions with precision and care.",
            "We believe in maintaining transparency, fostering trust, and continually improving our services.",
            "We define success as an ongoing process achieved with your trust, assistance & integrity.",
          ].map((text, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: {
                  xs: "16px",
                  md: "18px",
                },

                color: "#042127",
                fontFamily: "Poppins, sans-serif",
                fontStyle: "italic",
                lineHeight: 2,
                maxWidth: "900px",
                mb: 2,
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
          {certificates.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`certificate-${index + 1}`}
              sx={{
                width: {
                  xs: "100%",
                  sm: "45%",
                  md: "20%",
                },
                height: "480px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #999", // thin border

                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                transition: "all 0.4s ease",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          ))}
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={5}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 5,
            },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: "170px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.4s ease",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="client-logo"
                  sx={{
                    width: "75%",
                    height: "75%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Our Global Network */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: "#f7f9fc",
          mt: { xs: 3, md: 8 }, // ← add this
        }}
      >
        {/* Map Wrapper */}
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {/* World Map */}
          <Box
            component="img"
            src={worldMap}
            alt="World Map"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
              maxHeight: {
                xs: "550px",
                sm: "850px",
                md: "1300px",
              },
            }}
          />

          {/* TEXT OVER IMAGE */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "8%", md: "10%" },
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              width: "100%",
              px: 2,
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "32px", md: "46px" },
                fontWeight: 700,
                color: "#000",
                fontFamily: "Poppins, sans-serif",
                lineHeight: 1,
                mb: 1,
              }}
            >
              Our Global Network
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                color: "#444",
                fontFamily: "Poppins, sans-serif",
                maxWidth: "1000px",
                mx: "auto",
                lineHeight: 2.7,
              }}
            >
              We have a strong presence across the globe, connecting businesses
              worldwide through our reliable shipping solutions.
            </Typography>
          </Box>

          {/* Location Pins */}
          {[
            { label: "USA", left: "17%", top: "37%" },
            { label: "South America", left: "30%", top: "71%" },
            { label: "Europe", left: "53%", top: "37%" },
            { label: "Africa", left: "51%", top: "57%" },
            { label: "Asia", left: "63%", top: "40%" },
            { label: "Asia-Pacific", left: "80%", top: "50%" },
            { label: "Australia", left: "83%", top: "69%" },
          ].map(({ label, left, top }) => (
            <Box
              key={label}
              sx={{
                position: "absolute",
                left,
                top,
                transform: "translate(-50%, -100%)",
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",

                "&:hover .pin-svg": {
                  transform: "scale(1.15)",
                },
              }}
            >
              {/* Pin */}
              <Box
                className="pin-svg"
                component="svg"
                width="28"
                height="36"
                viewBox="0 0 28 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  transition: "0.3s ease",
                  filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))",
                }}
              >
                <path
                  d="M14 0C6.268 0 0 6.268 0 14c0 9.5 14 22 14 22S28 23.5 28 14C28 6.268 21.732 0 14 0z"
                  fill="#e87c20"
                />
                <circle cx="14" cy="13" r="5.5" fill="white" />
              </Box>

              {/* Label */}
              <Typography
                sx={{
                  mt: "5px",
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#000",
                  background: "rgba(255,255,255,0.95)",
                  px: 1,
                  py: "2px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
