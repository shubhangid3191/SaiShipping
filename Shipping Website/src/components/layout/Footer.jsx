import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const branches = [
  {
    title: "Mumbai (HQ) Office",
    address: [
      "A-304, Classique Centre, Mahal Industrial Estate,",
      "Off Mahakali Cave Road, Andheri-East,",
      "Near Paper Box, Mumbai 400093, Maharashtra",
    ],
  },
  {
    title: "Nagpur",
    address: [
      "122, 3rd Floor, Lendra Park, Near CAMS AMC,",
      "Ramdaspeth, Nagpur 440010, Maharashtra",
    ],
  },
  {
    title: "Jaipur",
    address: [
      "D-110, Near B.S.N.L. Office,",
      "Amrapali Circle, Vaishali Nagar,",
      "Jaipur 302021, Rajasthan",
    ],
  },
  {
    title: "Mumbai Airport",
    address: [
      "B-309, 119-Business Point, Near Air Cargo Complex,",
      "Sahar Road, Andheri East,",
      "Mumbai 400099, Maharashtra",
    ],
  },
  {
    title: "Mundra",
    address: [
      "M-5 Ratnakala Arcade, OPP. Shubham Petroleum,",
      "Adani Port Road, Mundra, Kutch 370421, Gujarat",
    ],
  },
  {
    title: "Jodhpur",
    address: [
      "W/4 & 5, Basni, 2nd Phase,",
      "Near I.c.d Jodhpur - 342005, Rajasthan",
    ],
  },
  {
    title: "Indore",
    address: [
      "Office No.-105, First Floor, Industry House A.B Road,",
      "Indore 452001, Madhya Pradesh",
    ],
  },
];

const services = [
  "Freight Forwarding",
  "Custom Clearance",
  "Warehouses",
  "Additional Services",
];

const companyLinks = [
  "About Us",
  "Industry We Offer",
  "Clients",
  "FAQ",
  "Achievements & Rewards",
  "Projects",
  "Contact Us",
];

const socials = [
  {
    icon: <FacebookIcon sx={{ fontSize: 20 }} />,
    link: "#",
  },
  {
    icon: <XIcon sx={{ fontSize: 20 }} />,
    link: "#",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 20 }} />,
    link: "#",
  },
];

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(90deg, rgba(4,44,68,0.98) 0%, rgba(5,18,82,0.98) 100%)",
        color: "#fff",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://saishipping.com/images/footer-bg-s2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      {/* Main content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          pt: { xs: 7, md: 10 },
          px: { xs: 3, sm: 5, md: 8, lg: 12 },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: "42px", sm: "52px", md: "66px" },
            fontWeight: 700,
            mb: { xs: 6, md: 8 },
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          Branches
        </Typography>

        {/* Branches grid */}
        <Grid
          container
          columnSpacing={{ xs: 3, md: 10 }}
          rowSpacing={{ xs: 5, md: 7 }}
        >
          {branches.map((branch) => (
            <Grid item xs={12} sm={6} md={4} key={branch.title}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px" },
                  fontWeight: 700,
                  mb: 1.5,
                  fontFamily: "Georgia, serif",
                }}
              >
                {branch.title}
              </Typography>

              {branch.address.map((line, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: { xs: "17px", md: "18px" },
                    color: "rgba(255,255,255,0.95)",
                    lineHeight: 1.8,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Services / Company / Social */}
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          sx={{
            mt: { xs: 6, md: 8 },
            pb: { xs: 7, md: 8 },
            alignItems: "flex-start",
          }}
        >
          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: 700,
                mb: 3,
                fontFamily: "Georgia, serif",
              }}
            >
              Services
            </Typography>

            <Stack spacing={2.2}>
              {services.map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontFamily: "Georgia, serif",
                    transition: "0.3s",
                    width: "fit-content",
                    "&:hover": {
                      color: "#ff7b2f",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: 700,
                mb: 3,
                fontFamily: "Georgia, serif",
              }}
            >
              Company
            </Typography>

            <Stack spacing={2.2}>
              {companyLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontFamily: "Georgia, serif",
                    transition: "0.3s",
                    width: "fit-content",
                    "&:hover": {
                      color: "#ff7b2f",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Connect box */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "360px",
                minHeight: "230px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.04)",
                backdropFilter: "blur(5px)",
                p: { xs: 4, md: 5 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "32px" },
                  fontWeight: 700,
                  mb: 4,
                  fontFamily: "Georgia, serif",
                }}
              >
                Connect With Us
              </Typography>

              <Stack direction="row" spacing={2}>
                {socials.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.link}
                    target="_blank"
                    sx={{
                      width: 54,
                      height: 54,
                      bgcolor: "#ff7b2f",
                      color: "#fff",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#ff934d",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ───────────────── BOTTOM BAR ───────────────── */}

      <Box
        sx={{
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          minHeight: { xs: "240px", md: "220px" },
          overflow: "hidden",
        }}
      >
        {/* ORANGE TRIANGLE */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: {
              xs: "0 0 220px 180px",
              md: "0 0 220px 240px",
            },
            borderColor: "transparent transparent #ff7b2f transparent",
            zIndex: 1,
          }}
        />

        {/* WHITE LINE */}
        <Box
          sx={{
            position: "absolute",
            left: 28,
            bottom: 0,
            width: "7px",
            height: "220px",
            bgcolor: "#fff",
            transform: "skew(-30deg)",
            zIndex: 2,
          }}
        />

        {/* TEAL SHAPE */}
        <Box
          sx={{
            position: "absolute",
            left: 75,
            bottom: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: {
              xs: "0 0 220px 140px",
              md: "0 0 220px 180px",
            },
            borderColor: "transparent transparent #0d5062 transparent",
            zIndex: 1,
          }}
        />

        {/* Bottom content */}
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 5,
            minHeight: { xs: "240px", md: "220px" },
            px: { xs: 3, sm: 5, md: 8, lg: 12 },
            py: { xs: 4, md: 0 },

            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "240px", md: "340px" },
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="https://saishipping.com/images/logo.png"
              alt="Sai Shipping"
              sx={{
                width: "100%",
                maxWidth: { xs: "230px", md: "200px" },
                objectFit: "contain",
                position: "relative",
                zIndex: 10,
              }}
            />
          </Box>

          {/* Copyright */}
          <Typography
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "right" },
              fontSize: { xs: "16px", md: "15px" },
              lineHeight: 1.8,
              fontFamily: "Georgia, serif",
              color: "#fff",

              maxWidth: { xs: "100%", md: "900px" },

              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            <Box component="span">© 2026</Box>

            <Link
              href="https://hitechenterprise.in/"
              target="_blank"
              underline="hover"
              sx={{
                color: "#ff7b2f",
                fontWeight: 700,
                fontSize: { xs: "16px", md: "21px" },
              }}
            >
              Hi Tech Enterprises
            </Link>

            <Box component="span">
              - Providing solutions for SSS Sai Shipping Services Pvt. Ltd.
              All rights reserved.
            </Box>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}