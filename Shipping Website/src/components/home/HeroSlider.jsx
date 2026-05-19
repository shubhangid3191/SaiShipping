import { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// ─────────────────────────────────────────────
// SLIDE IMAGES (direct from live site)
// ─────────────────────────────────────────────
const slide1 = "https://saishipping.com/images/slide-1.png";
const slide2 = "https://saishipping.com/images/slide-2.png";
const slide3 = "https://saishipping.com/images/slide-3.png";

// ─────────────────────────────────────────────
// SLIDES DATA  — matched to live site
// ─────────────────────────────────────────────
const slides = [
  {
    image: slide2,
    tag: "Shipping",
    heading: "Streamlined Logistics Across\nLand, Sea And Air",
    description:
      "Leverage the power of intermodal transport to optimize your logistics. Our integrated solutions across land, sea, and rail ensure efficient, cost-effective, and timely delivery, regardless of the distance or complexity of your shipment.",
  },
  {
    image: slide3,
    tag: "Efficient Shipping",
    heading: "Efficient In Custom\nClearance",
    description:
      "We rely on the principle for efficient, reliable, trustworthy and problem free custom clearance processes, with proper hand to hand solutions between the Customs and Importer and Exporters with proper compliance.",
  },
  {
    image: slide1,
    tag: "Hot Shot Trucking",
    heading: "Fast, On-Demand\nDelivery",
    description:
      "When time is critical, our hot shot trucking services provide fast, reliable, and on-demand transportation. We ensure that your urgent shipments are handled with care and delivered to their destination on schedule, no matter the size or urgency.",
  },
];

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((index + slides.length) % slides.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo(active + 1);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [active]);

  const slide = slides[active];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        bgcolor: "#fff",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* ── MAIN ROW ── */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          minHeight: { md: "100vh" },
        }}
      >
        {/* ══ LEFT: TEXT CONTENT ══ */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: { xs: 3, sm: 5, md: 8, lg: 12 },
            pr: { xs: 3, sm: 5, md: 6 },
            py: { xs: 6, md: 0 },
            zIndex: 2,
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* TAG LINE */}
          <Typography
            sx={{
              color: "#e8601c",
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              fontWeight: 500,
              fontFamily: `"Georgia", serif`,
              fontStyle: "italic",
              mb: 1.5,
              letterSpacing: "0.02em",
            }}
          >
            {slide.tag}
          </Typography>

          {/* HEADING */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "30px", sm: "42px", md: "50px", lg: "58px" },
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.12,
              fontFamily: `"Georgia", "Times New Roman", serif`,
              whiteSpace: "pre-line",
              mb: { xs: 3, md: 3.5 },
            }}
          >
            {slide.heading}
          </Typography>

          {/* ORANGE DIVIDER */}
          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: "#e8601c",
              mb: { xs: 3, md: 3.5 },
              display: { xs: "none", md: "block" },
            }}
          />

          {/* DESCRIPTION */}
          <Typography
            sx={{
              color: "#555",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              lineHeight: 1.85,
              maxWidth: { xs: "100%", md: "500px" },
              fontFamily: `"Times New Roman", serif`,
              mb: { xs: 4, md: 5 },
            }}
          >
            {slide.description}
          </Typography>

          {/* CTA ROW */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2.5, sm: 3 }}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            {/* ALL SERVICES BUTTON */}
            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: "#e8601c",
                color: "#fff",
                borderRadius: 0,
                px: { xs: 4, md: 5 },
                py: 1.75,
                fontSize: { xs: "13px", md: "14px" },
                fontWeight: 700,
                fontFamily: `"Georgia", serif`,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                minWidth: 200,
                border: "2px solid #e8601c",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "#e8601c",
                  border: "2px solid #e8601c",
                },
              }}
            >
              All Services
            </Button>

            {/* CALL US */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: { xs: 54, md: 60 },
                  height: { xs: 54, md: 60 },
                  borderRadius: "50%",
                  bgcolor: "#003b49",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.08)" },
                  cursor: "pointer",
                }}
              >
                <LocalPhoneIcon sx={{ color: "#fff", fontSize: { xs: 22, md: 26 } }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#888",
                    fontSize: "13px",
                    mb: 0.25,
                    fontFamily: `"Times New Roman", serif`,
                  }}
                >
                  Call Us Now
                </Typography>
                <Typography
                  sx={{
                    color: "#111",
                    fontWeight: 700,
                    fontSize: { xs: "17px", sm: "19px", md: "21px" },
                    fontFamily: `"Georgia", serif`,
                    lineHeight: 1.1,
                    letterSpacing: "0.01em",
                  }}
                >
                  +91 022 42008400
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        {/* ══ RIGHT: IMAGE ══ */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            flexShrink: 0,
            height: { xs: "300px", sm: "420px", md: "auto" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            // Light grey tint background so sketch images look natural
            bgcolor: "#f8f7f5",
          }}
        >
          <Box
            component="img"
            src={slide.image}
            alt={slide.tag}
            sx={{
              // Contain the full illustration — never crop
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center center",
              display: "block",
              opacity: animating ? 0 : 1,
              transform: animating ? "scale(0.97)" : "scale(1)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
              // Subtle right padding so image doesn't hug the edge
              p: { xs: 2, md: 4 },
            }}
          />
        </Box>
      </Box>

      {/* ── SLIDE DOTS ── */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: { xs: 72, md: 36 },
          left: { xs: "50%", md: "25%" },
          transform: { xs: "translateX(-50%)", md: "translateX(-50%)" },
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => goTo(i)}
            sx={{
              width: i === active ? 28 : 8,
              height: 8,
              borderRadius: 4,
              bgcolor: i === active ? "#e8601c" : "#ccc",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Stack>

      {/* ── NAV ARROWS ── */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          position: "absolute",
          bottom: { xs: 16, md: 30 },
          right: { xs: "50%", md: 40 },
          transform: { xs: "translateX(50%)", md: "none" },
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={() => goTo(active - 1)}
          sx={{
            width: { xs: 46, md: 52 },
            height: { xs: 46, md: 52 },
            bgcolor: "#e8601c",
            color: "#fff",
            borderRadius: "50%",
            border: "2px solid #e8601c",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "transparent",
              color: "#e8601c",
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: 15, md: 18 } }} />
        </IconButton>

        <IconButton
          onClick={() => goTo(active + 1)}
          sx={{
            width: { xs: 46, md: 52 },
            height: { xs: 46, md: 52 },
            bgcolor: "#e8601c",
            color: "#fff",
            borderRadius: "50%",
            border: "2px solid #e8601c",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "transparent",
              color: "#e8601c",
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 15, md: 18 } }} />
        </IconButton>
      </Stack>
    </Box>
  );
}
