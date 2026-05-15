import React from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactForm from "./ContactForm";

import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import aboutBanner from "../assets/images/about-banner.jpg";

const contactData = [
  {
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 50 }} />,
    title: "Address Line",
    lines: [
      "A-304, Classique Centre, Plot No. 26,",
      "Mahal Industrial Estate, off Mahakali",
      "Caves Road, Andheri (E), Mumbai – 400093.",
    ],
  },

  {
    icon: <CallOutlinedIcon sx={{ fontSize: 50 }} />,
    title: "Phone Number",
    lines: ["+91 022 42008400", "+91 022 4200 8401"],
  },

  {
    icon: <MailOutlineOutlinedIcon sx={{ fontSize: 50 }} />,
    title: "Email Address",
    lines: ["admin@saishipping.com"],
  },
];

function Contact() {
  return (
    <>
      <Header />

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
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "42px",
                sm: "60px",
                md: "85px",
              },
              fontWeight: 900,
              color: "#111",
              fontFamily: '"Times New Roman", Times, serif',
              lineHeight: 1.1,
            }}
          >
            Contact Us
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "21px",
              },
              color: "#eb7e27",
              lineHeight: 1.8,
              fontWeight: 800,
              fontFamily: '"Times New Roman", Times, serif',
              mt: 1,
              maxWidth: "850px",
              mx: "auto",
            }}
          >
            We're here to help! Reach out to us for any inquiries, support, or
            collaboration opportunities.
          </Typography>
        </Box>
      </Box>

      {/* CONTACT CARDS */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "#f8f9fb",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              margin: "0 auto",
            }}
          >
            {contactData.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={10}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "380px",

                    minHeight: "240px",

                    background: "#fff",

                    borderRadius: "22px",

                    padding: "35px 28px",

                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,

                    position: "relative",

                    overflow: "hidden",

                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",

                    transition: "0.4s ease",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 18px 40px rgba(235,126,39,0.18)",

                      "& .leftBorder": {
                        height: "100%",
                      },

                      "& .iconBox": {
                        background: "#eb7e27",
                        color: "#fff",
                        transform: "rotate(8deg)",
                      },
                    },
                  }}
                >
                  {/* LEFT ORANGE BORDER */}
                  <Box
                    className="leftBorder"
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,

                      width: "6px",
                      height: "70px",

                      background: "#eb7e27",

                      transition: "0.4s ease",
                    }}
                  />

                  {/* ICON */}
                  <Box
                    className="iconBox"
                    sx={{
                      minWidth: "80px",
                      height: "80px",

                      borderRadius: "18px",

                      background: "#fff4ec",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      color: "#eb7e27",

                      transition: "0.4s ease",
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* CONTENT */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "26px",
                          md: "30px",
                        },

                        fontWeight: 800,

                        color: "#111",

                        mb: 2,

                        lineHeight: 1.2,

                        fontFamily: '"Times New Roman", Times, serif',
                      }}
                    >
                      {item.title}
                    </Typography>

                    {item.lines.map((line, i) => (
                      <Typography
                        key={i}
                        sx={{
                          color: "#666",

                          fontSize: "15px",

                          lineHeight: 1.9,
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <ContactForm />

      <Footer />
    </>
  );
}

export default Contact;
