import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const slide1 = "https://saishipping.com/images/slide-1.png";
const slide2 = "https://saishipping.com/images/slide-2.png";
const slide3 = "https://saishipping.com/images/slide-3.png";

const slides = [
  {
    image: slide3,
    smallTitle: "Efficient Shipping",
    heading: "Efficient In Custom\nClearance",
    description:
      "We rely on the principle for efficient, reliable, trustworthy and problem free custom clearance processes, with proper hand to hand solutions between the Customs and Importer and Exporters with proper compliance.",
  },
  {
    image: slide2,
    smallTitle: "Shipping",
    heading: "Streamlined Logistics Across\nLand, Sea And Air",
    description:
      "Leverage the power of intermodal transport to optimize your logistics. Our integrated solutions across land, sea, and rail ensure efficient, cost-effective, and timely delivery, regardless of the distance or complexity of your shipment.",
  },
  {
    image: slide1,
    smallTitle: "Hot Shot Trucking",
    heading: "Fast, On-Demand Delivery",
    description:
      "When time is critical, our hot shot trucking services provide fast, reliable, and on-demand transportation. We ensure that your urgent shipments are handled with care and delivered to their destination on schedule, no matter the size or urgency.",
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

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[active];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden",          // ← clips anything that bleeds out
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* ── FULL-WIDTH FLEX ROW ── */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "stretch",
          minHeight: { md: "100vh" },
        }}
      >
        {/* ── LEFT CONTENT ── */}
        <Box
          sx={{
            width: { xs: "100%", md: "52%" },
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: { xs: 3, sm: 5, md: 8, lg: 10 },
            pr: { xs: 3, sm: 5, md: 5 },
            py: { xs: 6, md: 8 },
            textAlign: { xs: "center", md: "left" },
            zIndex: 2,
          }}
        >
          {/* SMALL TITLE */}
          <Typography
            sx={{
              color: "#ff6b2c",
              fontSize: { xs: "15px", sm: "17px", md: "18px" },
              mb: { xs: 1.5, md: 2 },
              fontWeight: 500,
              fontFamily: `"Times New Roman", serif`,
              letterSpacing: "0.01em",
            }}
          >
            {slide.smallTitle}
          </Typography>

          {/* MAIN HEADING */}
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "44px", md: "48px", lg: "56px" },
              fontWeight: 700,
              color: "#000",
              lineHeight: 1.15,
              fontFamily: `"Georgia", "Times New Roman", serif`,
              whiteSpace: "pre-line",
            }}
          >
            {slide.heading}
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              mt: { xs: 3, md: 4 },
              color: "#333",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              lineHeight: { xs: 1.8, md: 1.9 },
              maxWidth: { xs: "100%", md: "520px" },
              mx: { xs: "auto", md: 0 },
              fontFamily: `"Times New Roman", serif`,
            }}
          >
            {slide.description}
          </Typography>

          {/* BUTTONS */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{ mt: { xs: 4, md: 5 } }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ff6b2c",
                px: { xs: 4, md: 5 },
                py: 1.8,
                borderRadius: 0,
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                boxShadow: "none",
                minWidth: { xs: "200px", sm: "210px" },
                fontFamily: `"Times New Roman", serif`,
                "&:hover": { bgcolor: "#e85b1f", boxShadow: "none" },
              }}
            >
              ALL SERVICES
            </Button>

            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: { xs: 56, md: 62 },
                  height: { xs: 56, md: 62 },
                  borderRadius: "50%",
                  bgcolor: "#003b49",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <LocalPhoneIcon sx={{ color: "#fff", fontSize: { xs: 24, md: 28 } }} />
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    color: "#444",
                    fontSize: { xs: "14px", md: "15px" },
                    mb: 0.3,
                    fontFamily: `"Times New Roman", serif`,
                  }}
                >
                  Call Us Now
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 700,
                    fontSize: { xs: "18px", sm: "20px", md: "22px" },
                    fontFamily: `"Georgia", "Times New Roman", serif`,
                    lineHeight: 1.2,
                  }}
                >
                  +91 022 42008400
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        {/* ── RIGHT IMAGE ── */}
        <Box
          sx={{
            width: { xs: "100%", md: "48%" },   // ← fixed share, won't overflow
            flexShrink: 0,
            height: { xs: "260px", sm: "360px", md: "auto" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={slide.image}
            alt="shipping"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",            // ← contain keeps full image visible
              objectPosition: "center center",
              display: "block",
            }}
          />
        </Box>
      </Box>

      {/* ── NAVIGATION ARROWS ── */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          position: "absolute",
          bottom: { xs: 16, md: 30 },
          right: { xs: "50%", md: 36 },
          transform: { xs: "translateX(50%)", md: "none" },
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={prevSlide}
          sx={{
            width: { xs: 48, md: 56 },
            height: { xs: 48, md: 56 },
            bgcolor: "#ff6b2c",
            color: "#fff",
            borderRadius: "50%",
            "&:hover": { bgcolor: "#e85b1f" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            width: { xs: 48, md: 56 },
            height: { xs: 48, md: 56 },
            bgcolor: "#ff6b2c",
            color: "#fff",
            borderRadius: "50%",
            "&:hover": { bgcolor: "#e85b1f" },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
        </IconButton>
      </Stack>
    </Box>
  );
}