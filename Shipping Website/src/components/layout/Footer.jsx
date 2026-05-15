import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Button,
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
  { icon: <FacebookIcon sx={{ fontSize: 20 }} />, link: "#" },
  { icon: <XIcon sx={{ fontSize: 20 }} />, link: "#" },
  { icon: <InstagramIcon sx={{ fontSize: 20 }} />, link: "#" },
];

// ─────────────────────────────────────────────
// CTA BANNER HEIGHT (keep in sync)
// desktop ≈ 180px  →  overlap = 90px each side
// mobile  ≈ 260px  →  overlap = 130px each side
// ─────────────────────────────────────────────
const CTA_OVERLAP = { xs: "130px", md: "90px" };

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────

export default function Footer() {
  return (
    <>
      {/*
        WRAPPER that sits OUTSIDE the footer so
        the CTA card straddles the boundary.
        pb = overlap so page content isn't hidden.
      */}
      <Box sx={{ pb: CTA_OVERLAP, position: "relative", zIndex: 10 }}>
        {/* ── CTA CARD ── */}
        <Container
          maxWidth="xl"
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            px: { xs: 2, md: 5 },
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "30px",
              minHeight: { xs: "260px", md: "180px" },

              display: "flex",
              alignItems: "center",

              px: { xs: 4, md: 8 },
              py: { xs: 3, md: 3 },

              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(0,20,45,0.96) 0%,
                  rgba(0,20,45,0.88) 38%,
                  rgba(0,20,45,0.28) 100%
                ),
                url("https://saishipping.com/images/cta-bg.jpg")
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",

              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            {/* LEFT CONTENT */}
            <Box
              sx={{
                position: "relative",
                zIndex: 5,
                maxWidth: { xs: "100%", md: "560px" },
              }}
            >
              {/* SMALL TITLE */}
              <Typography
                sx={{
                  color: "#ff7b2f",
                  fontWeight: 700,
                  fontSize: { xs: "13px", md: "15px" },
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                  mb: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                ✦ Trusted Transport Service
              </Typography>

              {/* MAIN TITLE */}
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "34px", md: "40px" },
                  lineHeight: { xs: 1.15, md: 1.05 },
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  mb: 2,
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Transport & Logistics Projects That We Provide
              </Typography>

              {/* BUTTON */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff7b2f",
                  color: "#fff",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.2, md: 1.4 },
                  borderRadius: "8px",
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                  textTransform: "uppercase",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#ff8f45",
                    boxShadow: "none",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Contact Support
              </Button>
            </Box>

            {/* EXTRA DARK OVERLAY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(90deg, rgba(0,18,42,0.15) 0%, rgba(0,18,42,0.02) 100%)`,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ─────────────────────────────────────────
          FOOTER — pulled up by the overlap amount
          ───────────────────────────────────────── */}
      <Box
        component="footer"
        sx={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(90deg, rgba(4,44,68,1) 0%, rgba(5,18,82,1) 100%)",
          color: "#fff",
          mt: { xs: "-130px", md: "-90px" },
          pt: { xs: "150px", md: "110px" },
        }}
      >
        {/* BACKGROUND IMAGE */}
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

        {/* ───────────────── MAIN CONTENT ───────────────── */}
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 3, sm: 5, md: 8, lg: 12 },
          }}
        >
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

          {/* BRANCHES GRID */}
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

          {/* SERVICES / COMPANY / CONNECT */}
          <Grid
            container
            spacing={{ xs: 5, md: 8 }}
            sx={{
              mt: { xs: 6, md: 8 },
              pb: { xs: 7, md: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* SERVICES */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{ fontSize: "26px", fontWeight: 700, mb: 3, fontFamily: "Georgia, serif" }}
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
                      "&:hover": { color: "#ff7b2f", transform: "translateX(5px)" },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* COMPANY */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{ fontSize: "26px", fontWeight: 700, mb: 3, fontFamily: "Georgia, serif" }}
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
                      "&:hover": { color: "#ff7b2f", transform: "translateX(5px)" },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* CONNECT BOX */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "360px",
                  minHeight: "230px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(5px)",
                  p: { xs: 4, md: 5 },
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "28px", md: "32px" }, fontWeight: 700, mb: 4, fontFamily: "Georgia, serif" }}
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
                        "&:hover": { bgcolor: "#ff934d", transform: "translateY(-4px)" },
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
              left: 0, bottom: 0,
              width: 0, height: 0,
              borderStyle: "solid",
              borderWidth: { xs: "0 0 220px 180px", md: "0 0 220px 240px" },
              borderColor: "transparent transparent #ff7b2f transparent",
              zIndex: 1,
            }}
          />

          {/* WHITE LINE */}
          <Box
            sx={{
              position: "absolute",
              left: 28, bottom: 0,
              width: "7px", height: "220px",
              bgcolor: "#fff",
              transform: "skew(-30deg)",
              zIndex: 2,
            }}
          />

          {/* TEAL SHAPE */}
          <Box
            sx={{
              position: "absolute",
              left: 75, bottom: 0,
              width: 0, height: 0,
              borderStyle: "solid",
              borderWidth: { xs: "0 0 220px 140px", md: "0 0 220px 180px" },
              borderColor: "transparent transparent #0d5062 transparent",
              zIndex: 1,
            }}
          />

          {/* BOTTOM CONTENT */}
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
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 5, md: 6 },
            }}
          >
            {/* LOGO */}
            <Box
              sx={{
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

            {/* COPYRIGHT */}
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
                sx={{ color: "#ff7b2f", fontWeight: 700, fontSize: { xs: "16px", md: "21px" } }}
              >
                Hi Tech Enterprises
              </Link>
              <Box component="span">
                - Providing solutions for SSS Sai Shipping Services Pvt. Ltd. All rights reserved.
              </Box>
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
}