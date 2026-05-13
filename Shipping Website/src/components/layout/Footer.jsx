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

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

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
      "Adani Port Road, Mundra, Kutch 370 421, Gujarat",
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
  { label: "Freight Forwarding", href: "/" },
  { label: "Custom Clearance", href: "/" },
  { label: "Warehouses", href: "/" },
  { label: "Additional Services", href: "/" },
];

const companyLinks = [
  { label: "About Us", href: "/" },
  { label: "Industry We Offer", href: "/" },
  { label: "Clients", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Achievements & Rewards", href: "/" },
  { label: "Projects", href: "/" },
  { label: "Contact Us", href: "/" },
];

const socials = [
  {
    icon: <FacebookIcon sx={{ fontSize: 22 }} />,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: <XIcon sx={{ fontSize: 22 }} />,
    href: "https://x.com",
    label: "X",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 22 }} />,
    href: "https://instagram.com",
    label: "Instagram",
  },
];

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(90deg, rgba(2,38,63,0.98) 0%, rgba(1,20,76,0.98) 100%)",
        color: "#fff",
        pt: { xs: 7, md: 9 },
      }}
    >
      {/* Background Image */}
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

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 3, md: 10 },
        }}
      >
        {/* ───────── BRANCHES TITLE ───────── */}
        <Typography
          sx={{
            fontSize: { xs: "48px", md: "64px" },
            fontWeight: 700,
            mb: 7,
            fontFamily: "Georgia, serif",
          }}
        >
          Branches
        </Typography>

        {/* ───────── BRANCHES GRID ───────── */}
        <Grid container spacing={8}>
          {branches.map((branch) => (
            <Grid item xs={12} sm={6} md={4} key={branch.title}>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "26px" },
                  fontWeight: 700,
                  mb: 2,
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
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.92)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* ───────────────── SERVICES / COMPANY / CONNECT ───────────────── */}

        <Grid
          container
          sx={{
            mt: 8,
            pb: 6,
            justifyContent: "space-between",
          }}
        >

          {/* SERVICES */}
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#fff",
                mb: 3,
                fontFamily: "Georgia, serif",
              }}
            >
              Services
            </Typography>

            <Stack spacing={2.5}>
              {services.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    lineHeight: 1.5,
                    fontFamily: "Georgia, serif",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#ff7b2f",
                    },
                  }}
                >
                  {s.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* COMPANY */}
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#fff",
                mb: 3,
                fontFamily: "Georgia, serif",
              }}
            >
              Company
            </Typography>

            <Stack spacing={2.5}>
              {companyLinks.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    lineHeight: 1.5,
                    fontFamily: "Georgia, serif",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#ff7b2f",
                    },
                  }}
                >
                  {c.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CONNECT WITH US */}
          <Grid
            item
            xs={12}
            md={3.3}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "380px",
                minHeight: "230px",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255,255,255,0.03)",
                p: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#fff",
                  mb: 4,
                  fontFamily: "Georgia, serif",
                }}
              >
                Connect With Us
              </Typography>

              <Stack direction="row" spacing={2}>
                {socials.map(({ icon, href, label }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "#ff7b2f",
                      color: "#fff",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#ff934d",
                      },
                    }}
                  >
                    {icon}
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
          minHeight: "180px",
          overflow: "hidden",
        }}
      >
        {/* Teal Shape */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: {
              xs: "0 0 180px 220px",
              md: "0 0 180px 300px",
            },
            borderColor: "transparent transparent #0c4c5f transparent",
          }}
        />

        {/* Orange Shape */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: {
              xs: "0 0 180px 120px",
              md: "0 0 180px 170px",
            },
            borderColor: "transparent transparent #ff7b2f transparent",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 3, md: 10 },
            minHeight: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* LOGO */}
          <Box
            component="img"
            src="https://saishipping.com/images/logo.png"
            alt="SSS Sai Shipping"
            sx={{
              height: { xs: 100, md: 150 },
              objectFit: "contain",
              ml: { xs: 1, md: 4 },
            }}
          />

          {/* COPYRIGHT */}
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "22px" },
              color: "#fff",
              textAlign: { xs: "center", md: "right" },
              lineHeight: 1.7,
              fontFamily: "Georgia, serif",
            }}
          >
            © 2026{" "}
            <Link
              href="https://hitechenterprise.in/"
              underline="hover"
              target="_blank"
              sx={{
                color: "#ff7b2f",
                fontWeight: 700,
              }}
            >
              Hi Tech Enterprises
            </Link>{" "}
            - Providing solutions for SSS Sai Shipping Services Pvt. Ltd.
            All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}