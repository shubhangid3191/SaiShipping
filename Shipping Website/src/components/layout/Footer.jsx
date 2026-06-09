import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import footer1 from "../../assets/images/footer1.jpg";
import footer2 from "../../assets/images/footer2.png";
import footer3 from "../../assets/images/footer3.jpg";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

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
  { label: "Freight Forwarding", path: "/freight-forwarding" },
  { label: "Custom Clearance (Import)", path: "/import" },
  { label: "Custom Clearance (Export)", path: "/export" },
  { label: "Warehouses", path: "/warehouses" },
  { label: "Additional Services", path: "/additional-services" },
];

const companyLinks = [
  { label: "About Us", path: "/about-us" },
  { label: "Industry We Offer", path: "/industry" },
  { label: "Clients", path: "/clients" },
  { label: "FAQ", path: "/faq" },
  { label: "Achievements & Rewards", path: "/achievements" },
  { label: "Projects", path: "/projects" },
  { label: "Contact Us", path: "/contact" },
];

const socials = [
  {
    icon: <FacebookIcon sx={{ fontSize: 20 }} />,
    link: "https://www.facebook.com/profile.php?id=61574220553833",
  },
  {
    icon: <XIcon sx={{ fontSize: 20 }} />,
    link: "https://x.com/sss_shipping",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 20 }} />,
    link: "https://www.instagram.com/sss.saishipping/",
  },
];

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */

export default function Footer() {
  return (
    <>
      {/* ───────────────── CTA CARD ───────────────── */}
      <Box sx={{ position: "relative", zIndex: 20, mb: { xs: "-70px", md: "-90px" } }}>
        <Container maxWidth={false} sx={{ maxWidth: "1220px", mx: "auto", px: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              minHeight: { xs: "210px", md: "240px" },
              display: "flex",
              alignItems: "center",
              px: { xs: 3, md: 7 },
              py: { xs: 4, md: 4 },
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(0,18,42,0.97) 0%,
                  rgba(0,18,42,0.92) 34%,
                  rgba(0,18,42,0.18) 100%
                ),
                url(${footer1})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: "0 18px 50px rgba(0,0,0,0.25)",
            }}
          >
            <Box sx={{ position: "relative", zIndex: 5, maxWidth: { xs: "100%", md: "520px" } }}>
              <Typography
                sx={{
                  color: "#ff7b2f",
                  fontWeight: 700,
                  fontSize: { xs: "12px", md: "14px" },
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                  mb: 1.5,
                }}
              >
                ✦ Trusted Transport Service
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "2.4rem" },
                  lineHeight: { xs: 1.2, md: 1.05 },
                  mb: 3,
                }}
              >
                Transport & Logistics Projects That We Provide
              </Typography>

              <Link to="/contact" style={{ textDecoration: "none" }}>
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
                    "&:hover": { bgcolor: "#ff8f45", boxShadow: "none" },
                  }}
                >
                  Contact Support
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ───────────────── FOOTER ───────────────── */}
      <Box
        component="footer"
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(90deg, rgba(4,44,68,1) 0%, rgba(5,18,82,1) 100%)",
          color: "#fff",
          pt: { xs: "120px", md: "150px" },
        }}
      >
        {/* BG IMAGE */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${footer3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />

        {/* MAIN CONTENT */}
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1420px",
            mx: "auto",
            px: { xs: 3, md: 5 },
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "82px" },
              fontWeight: 700,
              mb: { xs: 6, md: 8 },
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            Branches
          </Typography>

          {/* ───────────── BRANCHES GRID ───────────── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              columnGap: { xs: "40px", md: "100px" },
              rowGap: { xs: "50px", md: "75px" },
            }}
          >
            {branches.map((branch) => (
              <Box key={branch.title}>
                <Typography
                  sx={{
                    fontSize: { xs: "28px", md: "30px" },
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1.2,
                  }}
                >
                  {branch.title}
                </Typography>
                <Stack spacing={0.5}>
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
                </Stack>
              </Box>
            ))}
          </Box>

          {/* ───────────── LOWER SECTION ───────────── */}
          <Box sx={{ mt: { xs: 8, md: 10 }, pb: { xs: 7, md: 8 } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1.2fr" },
                gap: { xs: "50px", md: "120px" },
                alignItems: "start",
              }}
            >
              {/* SERVICES */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "28px", md: "32px" },
                    fontWeight: 700,
                    mb: 3.5,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Services
                </Typography>
                <Stack spacing={2.5}>
                  {services.map((item) => (
                    <Link key={item.label} to={item.path} style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: { xs: "17px", md: "18px" },
                          fontFamily: "Georgia, serif",
                          transition: "0.3s",
                          width: "fit-content",
                          lineHeight: 1.6,
                          "&:hover": { color: "#ff7b2f", transform: "translateX(5px)" },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Box>

              {/* COMPANY */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "28px", md: "32px" },
                    fontWeight: 700,
                    mb: 3.5,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Company
                </Typography>
                <Stack spacing={2.5}>
                  {companyLinks.map((item) => (
                    <Link key={item.label} to={item.path} style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: { xs: "17px", md: "18px" },
                          fontFamily: "Georgia, serif",
                          transition: "0.3s",
                          width: "fit-content",
                          lineHeight: 1.6,
                          "&:hover": { color: "#ff7b2f", transform: "translateX(5px)" },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Box>

              {/* CONNECT */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", md: "360px" },
                    minHeight: "235px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    backdropFilter: "blur(5px)",
                    borderRadius: "4px",
                    px: { xs: 4, md: 5 },
                    py: { xs: 4, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "29px", md: "35px" },
                      fontWeight: 700,
                      mb: 4,
                      lineHeight: 1.1,
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
                        rel="noopener noreferrer"
                        sx={{
                          width: 56,
                          height: 56,
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
              </Box>
            </Box>
          </Box>

          {/* FOOTER BOTTOM */}
          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              pt: { xs: 4, md: 5 },
              pb: { xs: 4, md: 5 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* LEFT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "90px",
                  height: "120px",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "10px",
                    height: "120px",
                    bgcolor: "#fff",
                    transform: "skew(-30deg)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 20,
                    top: 0,
                    width: "32px",
                    height: "60px",
                    bgcolor: "#ff7b2f",
                    transform: "skew(-30deg)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 28,
                    bottom: 0,
                    width: "42px",
                    height: "70px",
                    bgcolor: "#0f5d73",
                    transform: "skew(-30deg)",
                  }}
                />
              </Box>

              <Box
                component="img"
                src={footer2}
                alt="SSS Sai Shipping"
                sx={{ width: { xs: "180px", md: "250px" }, objectFit: "contain" }}
              />
            </Box>

            {/* COPYRIGHT */}
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "14px", md: "14px" },
                fontFamily: "Georgia, serif",
                textAlign: { xs: "left", md: "right" },
                lineHeight: 1.8,
                maxWidth: "700px",
              }}
            >
              © 2026{" "}
              <Box component="span" sx={{ color: "#ff7b2f" }}>
                Hi Tech Enterprises
              </Box>{" "}
              - Providing solutions for SSS Sai Shipping Services Pvt. Ltd. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}