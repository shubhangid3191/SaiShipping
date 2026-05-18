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

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */

export default function Footer() {
  return (
    <>
      {/* ───────────────── CTA CARD ───────────────── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 20,

          mb: {
            xs: "-70px",
            md: "-85px",
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1180px",
            mx: "auto",

            px: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",

              borderRadius: "26px",

              minHeight: {
                xs: "220px",
                md: "250px",
              },

              display: "flex",
              alignItems: "center",

              px: {
                xs: 3,
                md: 7,
              },

              py: {
                xs: 4,
                md: 4,
              },

              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(0,18,42,0.97) 0%,
                  rgba(0,18,42,0.92) 34%,
                  rgba(0,18,42,0.22) 100%
                ),
                url("https://saishipping.com/images/cta-bg.jpg")
              `,

              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",

              boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
            }}
          >
            {/* CONTENT */}
            <Box
              sx={{
                position: "relative",
                zIndex: 5,

                maxWidth: {
                  xs: "100%",
                  md: "480px",
                },
              }}
            >
              {/* SMALL TITLE */}
              <Typography
                sx={{
                  color: "#ff7b2f",
                  fontWeight: 700,

                  fontSize: {
                    xs: "12px",
                    md: "15px",
                  },

                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",

                  mb: 1.5,
                }}
              >
                ✦ Trusted Transport Service
              </Typography>

              {/* MAIN TITLE */}
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",

                  fontSize: {
                    xs: "1.9rem",
                    sm: "2.4rem",
                    md: "3.2rem",
                  },

                  lineHeight: {
                    xs: 1.2,
                    md: 1.08,
                  },

                  mb: 3,
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

                  px: {
                    xs: 3,
                    md: 4,
                  },

                  py: {
                    xs: 1.2,
                    md: 1.4,
                  },

                  borderRadius: "8px",

                  fontSize: {
                    xs: "13px",
                    md: "14px",
                  },

                  fontWeight: 700,
                  fontFamily: "Georgia, serif",

                  textTransform: "uppercase",

                  boxShadow: "none",

                  "&:hover": {
                    bgcolor: "#ff8f45",
                    boxShadow: "none",
                  },
                }}
              >
                Contact Support
              </Button>
            </Box>

            {/* OVERLAY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,

                background:
                  "linear-gradient(90deg, rgba(0,18,42,0.12) 0%, rgba(0,18,42,0.02) 100%)",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ───────────────── FOOTER ───────────────── */}
      <Box
        component="footer"
        sx={{
          position: "relative",
          overflow: "hidden",

          background:
            "linear-gradient(90deg, rgba(4,44,68,1) 0%, rgba(5,18,82,1) 100%)",

          color: "#fff",

          pt: {
            xs: "110px",
            md: "130px",
          },
        }}
      >
        {/* BG IMAGE */}
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

        {/* MAIN CONTENT */}
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 2,

            maxWidth: "1400px",

            mx: "auto",

            px: {
              xs: 3,
              md: 5,
            },
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              fontSize: {
                xs: "46px",
                md: "76px",
              },

              fontWeight: 700,

              mb: {
                xs: 6,
                md: 8,
              },

              fontFamily: "Georgia, serif",

              lineHeight: 1,
            }}
          >
            Branches
          </Typography>

          {/* BRANCHES */}
          <Grid
            container
            columnSpacing={{
              xs: 3,
              md: 10,
            }}
            rowSpacing={{
              xs: 5,
              md: 7,
            }}
          >
            {branches.map((branch) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={branch.title}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "24px",
                      md: "30px",
                    },

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
                      fontSize: {
                        xs: "17px",
                        md: "18px",
                      },

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

          {/* LOWER SECTION */}
          <Grid
            container
            spacing={{
              xs: 5,
              md: 8,
            }}
            sx={{
              mt: {
                xs: 6,
                md: 8,
              },

              pb: {
                xs: 7,
                md: 8,
              },
            }}
          >
            {/* SERVICES */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                  mb: 3,
                  fontFamily: "Georgia, serif",
                }}
              >
                Services
              </Typography>

              <Stack spacing={2}>
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

            {/* COMPANY */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                  mb: 3,
                  fontFamily: "Georgia, serif",
                }}
              >
                Company
              </Typography>

              <Stack spacing={2}>
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

            {/* CONNECT */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-end",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "380px",

                  background: "rgba(255,255,255,0.04)",

                  border:
                    "1px solid rgba(255,255,255,0.05)",

                  backdropFilter: "blur(5px)",

                  p: {
                    xs: 4,
                    md: 5,
                  },

                  borderRadius: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "28px",
                      md: "34px",
                    },

                    fontWeight: 700,

                    mb: 4,

                    fontFamily: "Georgia, serif",
                  }}
                >
                  Connect With Us
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                >
                  {socials.map(
                    (social, index) => (
                      <IconButton
                        key={index}
                        href={social.link}
                        target="_blank"
                        sx={{
                          width: 56,
                          height: 56,

                          bgcolor: "#ff7b2f",
                          color: "#fff",

                          transition: "0.3s",

                          "&:hover": {
                            bgcolor: "#ff934d",
                            transform:
                              "translateY(-4px)",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    )
                  )}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}