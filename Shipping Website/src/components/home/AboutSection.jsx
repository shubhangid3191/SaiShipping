import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const mainImage = "https://saishipping.com/images/shipping.png";
const smallImage = "https://saishipping.com/images/shipping-1.png";

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#f7f7f5",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">

        {/* ── FLEX ROW instead of MUI Grid ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 4 },
          }}
        >

          {/* ═══════════════════════════════
              LEFT — IMAGE BLOCK  50%
          ═══════════════════════════════ */}
          <Box
            sx={{
              flex: "0 0 50%",
              width: { xs: "100%", md: "50%" },
              position: "relative",
              height: { xs: 480, md: 680 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Teal chevrons — top left */}
            <Stack
              spacing={-2.5}
              sx={{
                position: "absolute",
                top: { xs: 20, md: 40 },
                left: { xs: 10, md: 20 },
                zIndex: 10,
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <KeyboardDoubleArrowRightIcon
                  key={i}
                  sx={{
                    color: "#008b8b",
                    fontSize: { xs: 50, md: 62 },
                    transform: "rotate(90deg)",
                    display: "block",
                  }}
                />
              ))}
            </Stack>

            {/* Main image */}
            <Box
              component="img"
              src={mainImage}
              alt="Shipping crane"
              sx={{
                width: "80%",
                height: { xs: 340, md: 560 },
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
                ml: { xs: 0, md: 4 },
              }}
            />

            {/* Small bottom-right image */}
            <Box
              component="img"
              src={smallImage}
              alt="Ship worker"
              sx={{
                position: "absolute",
                bottom: { xs: 10, md: 20 },
                right: { xs: 10, md: 20 },
                width: { xs: 150, md: 250 },
                height: { xs: 150, md: 250 },
                objectFit: "contain",
                zIndex: 4,
              }}
            />

            {/* Orange badge */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                bottom: { xs: 20, md: 40 },
                backgroundColor: "#f47b14",
                color: "#fff",
                zIndex: 5,
                px: { xs: 3, md: 4 },
                py: { xs: 2, md: 2.5 },
                minWidth: { xs: 150, md: 210 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.8rem" },
                  fontWeight: 600,
                  lineHeight: 1.3,
                  fontFamily: "Georgia, serif",
                }}
              >
                Since from
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2.8rem", md: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                  letterSpacing: "-2px",
                }}
              >
                1988
              </Typography>
            </Box>
          </Box>

          {/* ═══════════════════════════════
              RIGHT — TEXT BLOCK  50%
          ═══════════════════════════════ */}
          <Box
            sx={{
              flex: "0 0 50%",
              width: { xs: "100%", md: "50%" },
              pl: { xs: 2, md: 5 },
              pr: { xs: 2, md: 2 },
              boxSizing: "border-box",
            }}
          >
            {/* About Us label */}
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <BoltIcon sx={{ color: "#f47b14", fontSize: 20 }} />
              <Typography
                sx={{
                  color: "#f47b14",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "Georgia, serif",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                About Us
              </Typography>
            </Stack>

            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: {
                  xs: "2.2rem",
                  sm: "2.8rem",
                  md: "3rem",
                  lg: "3.6rem",
                },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#071c3d",
                mb: 3.5,
              }}
            >
              Driving Success
              <br />
              Beyond Borders With
              <br />
              Expert Shipping
              <br />
              Solutions
            </Typography>

            {/* Orange left-border paragraph */}
            <Box
              sx={{
                borderLeft: "3px solid #f47b14",
                pl: 3,
                mb: 3.5,
              }}
            >
              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 2,
                  fontFamily: "Georgia, serif",
                }}
              >
                Welcome to SSS Sai Shipping Services Pvt Ltd., where we
                understand that logistics is the backbone of global trade.
                With a strong global presence, we provide exceptional
                shipping services across the world, connecting businesses
                and driving success beyond borders. Through strategic
                partnerships and extensive industry knowledge, we offer
                customized solutions to businesses of all sizes and
                industries.
              </Typography>
            </Box>

            {/* Bullet list */}
            <Stack spacing={1.5} sx={{ mb: 4 }}>
              {[
                "Supply Chain Management with Logistic Solutions",
                "Efficient Customs Clearance",
                "Express Delivery Services",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      color: "#f47b14",
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#f47b14",
                      fontSize: "1rem",
                      fontFamily: "Georgia, serif",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* Bottom divider text */}
            <Box sx={{ borderTop: "1px solid #d8d8d8", pt: 3.5 }}>
              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.97rem", md: "1.05rem" },
                  lineHeight: 1.9,
                  fontFamily: "Georgia, serif",
                }}
              >
                SSS Sai Shipping Services Pvt. Ltd. delivers reliable,
                efficient logistics solutions for businesses worldwide.
              </Typography>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}