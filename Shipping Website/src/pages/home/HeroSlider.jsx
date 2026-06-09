import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
// ─────────────────────────────────────────────
// IMAGES
// ─────────────────────────────────────────────

const slide1 = hero1;
const slide2 = hero2;
const slide3 = hero3;

// ─────────────────────────────────────────────
// SLIDES DATA
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// ANIMATION KEYFRAMES
// ─────────────────────────────────────────────

const keyframes = `
  @keyframes imgFadeIn {
    0%   { opacity: 0; transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1);    }
  }

  @keyframes overlayFadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes textSlideUp {
    0%   { opacity: 0; transform: translateY(36px); }
    100% { opacity: 1; transform: translateY(0);    }
  }

  @keyframes smallTitleFade {
    0%   { opacity: 0; transform: translateX(-20px); }
    100% { opacity: 1; transform: translateX(0);     }
  }

  @keyframes btnFadeIn {
    0%   { opacity: 0; transform: translateY(16px); }
    100% { opacity: 1; transform: translateY(0);    }
  }
`;

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function HeroSlider() {

  const navigate = useNavigate();
  const [active, setActive]   = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef              = useRef(null);

  const goTo = (idx) => {
    setActive(idx);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const nextSlide = () => {
    clearInterval(timerRef.current);
    goTo((active + 1) % slides.length);
  };
  const prevSlide = () => {
    clearInterval(timerRef.current);
    goTo((active - 1 + slides.length) % slides.length);
  };

  const slide = slides[active];

  return (
    <>
      <style>{keyframes}</style>

      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "100vh" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* ── STEP 1: IMAGE — animates first (0s delay) ── */}
        <Box
          key={`img-${animKey}`}
          component="img"
          src={slide.image}
          alt="shipping background"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center right",
            display: "block",
            zIndex: 0,
            animation: "imgFadeIn 0.9s ease forwards",
          }}
        />

        {/* ── STEP 2: WHITE OVERLAY — fades in at 0.3s ── */}
        <Box
          key={`overlay-${animKey}`}
          sx={{
            position: "absolute",
            inset: 0,
            background: {
              xs: "rgba(255,255,255,0.82)",
              md: "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 40%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0) 100%)",
            },
            zIndex: 1,
            opacity: 0,
            animation: "overlayFadeIn 0.7s ease 0.3s forwards",
          }}
        />

        {/* ── STEP 3: TEXT CONTENT — animates after image ── */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            py: { xs: 12, sm: 14, md: 0 },
            minHeight: { md: "100vh" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "55%", lg: "50%" },
              pl: { xs: 3, sm: 5, md: 8, lg: 12 },
              pr: { xs: 3, sm: 5, md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* SMALL TITLE — delay 0.7s */}
            <Typography
              key={`small-${animKey}`}
              sx={{
                color: "#ff6b2c",
                fontSize: { xs: "15px", sm: "17px", md: "18px" },
                mb: { xs: 1.5, md: 2 },
                fontWeight: 500,
                fontFamily: `"Times New Roman", serif`,
                letterSpacing: "0.01em",
                opacity: 0,
                animation: "smallTitleFade 0.6s ease 0.7s forwards",
              }}
            >
              {slide.smallTitle}
            </Typography>

            {/* HEADING — delay 0.9s */}
            <Typography
              key={`heading-${animKey}`}
              sx={{
                fontSize: { xs: "32px", sm: "44px", md: "52px", lg: "45px" },
                fontWeight: 600,
                color: "#000",
                lineHeight: 1.15,
                fontFamily: `"Georgia", "Times New Roman", serif`,
                whiteSpace: "pre-line",
                opacity: 0,
                animation: "textSlideUp 0.7s ease 0.9s forwards",
              }}
            >
              {slide.heading}
            </Typography>

            {/* DESCRIPTION — delay 1.1s */}
            <Typography
              key={`desc-${animKey}`}
              sx={{
                mt: { xs: 3, md: 4 },
                color: "#333",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: { xs: 1.8, md: 1.9 },
                maxWidth: { xs: "100%", md: "560px" },
                mx: { xs: "auto", md: 0 },
                fontFamily: `"Times New Roman", serif`,
                opacity: 0,
                animation: "textSlideUp 0.7s ease 1.1s forwards",
              }}
            >
              {slide.description}
            </Typography>

            {/* BUTTONS — delay 1.35s */}
            <Stack
              key={`btn-${animKey}`}
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{
                mt: { xs: 4, md: 5 },
                opacity: 0,
                animation: "btnFadeIn 0.6s ease 1.35s forwards",
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/services")}
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
    </>
  );
}