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

// ─────────────────────────────────────────────
// IMAGES
// ─────────────────────────────────────────────

const slide1 = "https://saishipping.com/images/slide-1.png";
const slide2 = "https://saishipping.com/images/slide-2.png";
const slide3 = "https://saishipping.com/images/slide-3.png";

// ─────────────────────────────────────────────
// SLIDES DATA
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // NEXT
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  // PREVIOUS
  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[active];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          xs: "auto",
          md: "100vh",
        },

        bgcolor: "#f7f7f7",

        position: "relative",

        overflow: "hidden",

        display: "flex",

        alignItems: "center",

        py: {
          xs: 8,
          sm: 10,
          md: 0,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",

            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },

            alignItems: "center",

            justifyContent: "space-between",

            gap: {
              xs: 6,
              md: 2,
            },
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "45%",
              },

              textAlign: {
                xs: "center",
                md: "left",
              },

              pl: {
                xs: 0,
                md: 4,
                lg: 6,
              },

              zIndex: 2,
            }}
          >
            {/* SMALL TITLE */}
            <Typography
              sx={{
                color: "#ff6b2c",

                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "22px",
                },

                mb: 2,

                fontWeight: 500,

                fontFamily: `"Times New Roman", serif`,
              }}
            >
              {slide.smallTitle}
            </Typography>

            {/* MAIN TITLE 1 */}
            <Typography
              sx={{
                fontSize: {
                  xs: "38px",
                  sm: "55px",
                  md: "72px",
                  lg: "82px",
                },

                fontWeight: 700,

                color: "#000",

                lineHeight: 1.05,

                fontFamily: `"Playfair Display", serif`,
              }}
            >
              {slide.title1}
            </Typography>

            {/* MAIN TITLE 2 */}
            <Typography
              sx={{
                fontSize: {
                  xs: "38px",
                  sm: "55px",
                  md: "72px",
                  lg: "82px",
                },

                fontWeight: 700,

                color: "#000",

                lineHeight: 1.05,

                mt: 1,

                fontFamily: `"Playfair Display", serif`,
              }}
            >
              {slide.title2}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                mt: {
                  xs: 3,
                  md: 5,
                },

                color: "#333",

                fontSize: {
                  xs: "15px",
                  sm: "17px",
                  md: "19px",
                },

                lineHeight: {
                  xs: 1.8,
                  md: 2,
                },

                maxWidth: {
                  xs: "100%",
                  md: "700px",
                },

                mx: {
                  xs: "auto",
                  md: 0,
                },

                fontFamily: `"Times New Roman", serif`,
              }}
            >
              {slide.description}
            </Typography>

            {/* BUTTONS */}
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={4}
              alignItems="center"
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
              sx={{
                mt: {
                  xs: 5,
                  md: 6,
                },
              }}
            >
              {/* SERVICES BUTTON */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff6b2c",

                  px: {
                    xs: 4,
                    sm: 5,
                    md: 6,
                  },

                  py: 2,

                  borderRadius: 0,

                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                  },

                  fontWeight: 700,

                  textTransform: "uppercase",

                  boxShadow: "none",

                  minWidth: {
                    xs: "220px",
                    sm: "240px",
                  },

                  "&:hover": {
                    bgcolor: "#e85b1f",
                    boxShadow: "none",
                  },
                }}
              >
                ALL SERVICES
              </Button>

              {/* CALL SECTION */}
              <Stack
                direction="row"
                spacing={2.5}
                alignItems="center"
              >
                {/* PHONE ICON */}
                <Box
                  sx={{
                    width: {
                      xs: 64,
                      md: 74,
                    },

                    height: {
                      xs: 64,
                      md: 74,
                    },

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

                      fontSize: {
                        xs: 28,
                        md: 34,
                      },
                    }}
                  />
                </Box>

                {/* PHONE TEXT */}
                <Box
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",

                      fontSize: {
                        xs: "18px",
                        md: "22px",
                      },

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

                      fontSize: {
                        xs: "20px",
                        sm: "22px",
                        md: "24px",
                      },

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
              width: {
                xs: "100%",
                md: "55%",
              },

              display: "flex",

              justifyContent: "center",

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
                  sm: "90%",
                  md: "100%",
                },

                maxWidth: {
                  xs: "420px",
                  sm: "600px",
                  md: "900px",
                  lg: "1100px",
                },

                height: "auto",

                objectFit: "contain",

                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* NAVIGATION BUTTONS */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: "absolute",

          bottom: {
            xs: 20,
            md: 35,
          },

          right: {
            xs: "50%",
            md: 40,
          },

          transform: {
            xs: "translateX(50%)",
            md: "none",
          },

          zIndex: 10,
        }}
      >
        {/* PREV */}
        <IconButton
          onClick={prevSlide}
          sx={{
            width: {
              xs: 52,
              md: 70,
            },

            height: {
              xs: 52,
              md: 70,
            },

            bgcolor: "#ff6b2c",

            color: "#fff",

            "&:hover": {
              bgcolor: "#e85b1f",
            },
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              fontSize: {
                xs: 18,
                md: 24,
              },
            }}
          />
        </IconButton>

        {/* NEXT */}
        <IconButton
          onClick={nextSlide}
          sx={{
            width: {
              xs: 52,
              md: 70,
            },

            height: {
              xs: 52,
              md: 70,
            },

            bgcolor: "#ff6b2c",

            color: "#fff",

            "&:hover": {
              bgcolor: "#e85b1f",
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: {
                xs: 18,
                md: 24,
              },
            }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}