import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.png";


const mainImage = about1;
const smallImage = about2;
const founderPhoto = about3;
const truckImage = about4;

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, md: 8 },
        pb: 0,
        backgroundColor: "#f7f7f5",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">

        {/* ── FLEX ROW ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },  // ← CHANGED
            gap: { xs: 6, md: 4 },
          }}
        >

          {/* ═══════════════════════════════
              LEFT — IMAGE BLOCK
          ═══════════════════════════════ */}
          <Box
            sx={{
              flex: "0 0 50%",
              width: { xs: "100%", md: "50%" },
              position: "relative",
              height: { xs: 480, md: 560 },    // ← REDUCED from 640
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Teal chevrons */}
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
                height: { xs: 340, md: 460 },   // ← REDUCED from 540
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
                ml: { xs: 0, md: 4 },
              }}
            />

            {/* Small image */}
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
                  fontFamily: `"Georgia", "Times New Roman", serif`,
                }}
              >
                Since from
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "2.8rem", md: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: 1,
                  fontFamily: `"Georgia", "Times New Roman", serif`,
                  letterSpacing: "-2px",
                }}
              >
                1988
              </Typography>
            </Box>
          </Box>

          {/* ═══════════════════════════════
              RIGHT — TEXT BLOCK
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
                fontFamily: `"Georgia", "Times New Roman", serif`,
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

            {/* Paragraph */}
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
                  fontFamily: `"Georgia", "Times New Roman", serif`,
                }}
              >
                Welcome to SSS Sai Shipping Services Pvt Ltd., where we
                understand that logistics is the backbone of global trade.
                With a strong global presence, we provide exceptional
                shipping services across the world, connecting businesses
                and driving success beyond borders.
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

            {/* Bottom divider */}
            <Box sx={{ borderTop: "1px solid #d8d8d8", pt: 3.5 }}>
              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.97rem", md: "1.05rem" },
                  lineHeight: 1.9,
                  fontFamily: `"Georgia", "Times New Roman", serif`,
                }}
              >
                SSS Sai Shipping Services Pvt. Ltd. delivers reliable,
                efficient logistics solutions for businesses worldwide.
              </Typography>
            </Box>

            {/* Founder */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mt: 4 }}
            >
              <Box
                component="img"
                src={founderPhoto}
                alt="Founder"
                sx={{
                  width: { xs: 70, md: 80 },
                  height: { xs: 70, md: 80 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  border: "3px solid #f47b14",
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    color: "#888",
                    fontSize: "0.85rem",
                    fontFamily: "Georgia, serif",
                    mb: 0.3,
                  }}
                >
                  founder , Haresh
                </Typography>

                <Typography
                  sx={{
                    color: "#071c3d",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    mb: 0.5,
                  }}
                >
                  Mr. Haresh A Dhakan
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                    fontSize: { xs: "1.6rem", md: "1.9rem" },
                    color: "#333",
                    lineHeight: 1,
                  }}
                >
                  Haresh
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* ═══════════════════════════════════
            BOTTOM ROW — STAR + TRUCK
        ═══════════════════════════════════ */}
        <Box
          sx={{
            mt: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            pointerEvents: "none",
            lineHeight: 0,
          }}
        >
          {/* Star */}
          <Box
            sx={{
              fontSize: { xs: "5rem", md: "8rem" },
              color: "#f47b14",
              lineHeight: 1,
              userSelect: "none",
              flexShrink: 0,
              animation: "starSpin 8s linear infinite",
              "@keyframes starSpin": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            }}
          >
            ✳
          </Box>

          {/* Truck */}
          <Box
            component="img"
            src={truckImage}
            alt="Truck"
            sx={{
              width: { xs: "220px", md: "380px" },
              objectFit: "contain",
              flexShrink: 0,
              display: "block",
              animation: "truckBounce 0.5s ease-in-out infinite alternate",
              "@keyframes truckBounce": {
                "0%": { transform: "translateY(0px)" },
                "100%": { transform: "translateY(-6px)" },
              },
            }}
          />
        </Box>

      </Container>
    </Box>
  );
}