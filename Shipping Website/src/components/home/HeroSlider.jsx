import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// Images
const slide1 = "https://saishipping.com/images/slide-1.png";
const slide2 = "https://saishipping.com/images/slide-2.png";
const slide3 = "https://saishipping.com/images/slide-3.png";

const slides = [
  {
    image: slide1,
    smallTitle: "Efficient Shipping",
    title1: "Efficient In Custom",
    title2: "Clearance",
    description:
      "We rely on the principle for efficient, reliable, trustworthy and problem free custom clearance processes, with proper hand to hand solutions between the Customs and Importer and Exporters with proper compliance.",
  },
  {
    image: slide2,
    smallTitle: "Fast Logistics",
    title1: "Reliable Freight",
    title2: "Forwarding",
    description:
      "We provide trusted freight forwarding solutions through air, sea and road transport with complete logistics management.",
  },
  {
    image: slide3,
    smallTitle: "Global Transport",
    title1: "Worldwide Cargo",
    title2: "Solutions",
    description:
      "Professional shipping and transportation services with secure handling and on-time delivery across the globe.",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[active];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        bgcolor: "#f7f7f7",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 2 },
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              width: { xs: "100%", md: "42%" },
              pl: { xs: 0, md: 6 },
              zIndex: 2,
            }}
          >
            {/* Small Heading */}
            <Typography
              sx={{
                color: "#ff6b2c",
                fontSize: { xs: "18px", md: "22px" },
                mb: 3,
                fontWeight: 400,
                fontFamily: `"Times New Roman", serif`,
              }}
            >
              {slide.smallTitle}
            </Typography>

            {/* Main Heading */}
            <Typography
              sx={{
                fontSize: {
                  xs: "42px",
                  sm: "56px",
                  md: "78px",
                },
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.1,
                fontFamily: `"Playfair Display", serif`,
              }}
            >
              {slide.title1}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "42px",
                  sm: "56px",
                  md: "78px",
                },
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.1,
                mt: 1,
                fontFamily: `"Playfair Display", serif`,
              }}
            >
              {slide.title2}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                mt: 5,
                color: "#333",
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: 2,
                maxWidth: "700px",
                fontFamily: `"Times New Roman", serif`,
              }}
            >
              {slide.description}
            </Typography>

            {/* Buttons */}
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              flexWrap="wrap"
              sx={{
                mt: 6,
                rowGap: 3,
              }}
            >
              {/* Services Button */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff6b2c",
                  px: 6,
                  py: 2.2,
                  borderRadius: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  boxShadow: "none",
                  minWidth: "230px",
                  "&:hover": {
                    bgcolor: "#e85b1f",
                    boxShadow: "none",
                  },
                }}
              >
                ALL SERVICES
              </Button>

              {/* Call Section */}
              <Stack direction="row" spacing={3} alignItems="center">
                <Box
                  sx={{
                    width: 74,
                    height: 74,
                    borderRadius: "50%",
                    bgcolor: "#003b49",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <LocalPhoneIcon
                    sx={{
                      color: "#fff",
                      fontSize: 34,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#222",
                      fontSize: "22px",
                      mb: 0.5,
                      fontFamily: `"Times New Roman", serif`,
                    }}
                  >
                    Call Us Now
                  </Typography>

                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 700,
                      fontSize: { xs: "24px", md: "36px" },
                      fontFamily: `"Playfair Display", serif`,
                      lineHeight: 1.2,
                    }}
                  >
                    +91 022 42008400
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              width: { xs: "100%", md: "58%" },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={slide.image}
              alt="shipping"
              sx={{
                width: {
                  xs: "100%",
                  md: "1100px",
                },
                maxWidth: "none",
                height: {
                  xs: "auto",
                  md: "820px",
                },
                objectFit: "contain",
                display: "block",
                mr: { md: -10 },
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Bottom Navigation */}
      <Stack
        direction="row"
        spacing={3}
        sx={{
          position: "absolute",
          bottom: 35,
          right: 40,
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={prevSlide}
          sx={{
            width: 70,
            height: 70,
            bgcolor: "#ff6b2c",
            color: "#fff",
            "&:hover": {
              bgcolor: "#e85b1f",
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            width: 70,
            height: 70,
            bgcolor: "#ff6b2c",
            color: "#fff",
            "&:hover": {
              bgcolor: "#e85b1f",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}