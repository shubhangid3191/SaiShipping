import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Modal,
  IconButton,
  Fade,
  Backdrop,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Header from "../components/layout/Header";

// ─────────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────────

const projects = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: `https://saishipping.com/images/project${i + 1}.jpg`,
  alt: `Project ${i + 1}`,
}));

// ─────────────────────────────────────────────
// PAGE BANNER
// ─────────────────────────────────────────────

function PageBanner() {
  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",

        height: {
          xs: "300px",
          sm: "420px",
          md: "520px",
        },

        overflow: "hidden",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundImage:
          "url(https://saishipping.com/images/about-banner.jpg)",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* WHITE OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.72))",

          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          textAlign: "center",

          px: 2,
        }}
      >
        <Typography
          sx={{
            color: "#e8730d",

            fontWeight: 700,

            fontSize: {
              xs: "1rem",
              md: "1.2rem",
            },

            mb: 2,
          }}
        >
          International Logistics
        </Typography>

        <Typography
          sx={{
            color: "#111",

            fontWeight: 900,

            fontFamily: "Georgia, serif",

            lineHeight: 1.1,

            fontSize: {
              xs: "3rem",
              sm: "4rem",
              md: "6rem",
            },
          }}
        >
          Projects
        </Typography>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────
// CTA BANNER
// ─────────────────────────────────────────────

function CTABanner() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        bgcolor: "#0b1526",

        py: {
          xs: 6,
          md: 7,
        },

        textAlign: "center",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,

          backgroundImage:
            "url(https://saishipping.com/images/footer-bg-s2.jpg)",

          backgroundSize: "cover",
          backgroundPosition: "center",

          opacity: 0.12,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          sx={{
            color: "#e8730d",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",

            fontSize: "0.85rem",

            mb: 1.5,
          }}
        >
          Trusted transport service
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,

            fontSize: {
              xs: "1.5rem",
              md: "2rem",
            },

            mb: 4,
          }}
        >
          Transport & Logistics projects that we provide
        </Typography>

        <Box
          component="a"
          href="/contact"
          sx={{
            display: "inline-block",

            px: 4,
            py: 1.5,

            bgcolor: "#e8730d",
            color: "#fff",

            fontWeight: 700,

            borderRadius: "5px",

            textDecoration: "none",

            transition: "0.3s",

            "&:hover": {
              bgcolor: "#c55e08",
              transform: "translateY(-3px)",
            },
          }}
        >
          Contact Support
        </Box>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────

function Lightbox({ open, index, onClose, onPrev, onNext }) {
  if (!open) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          sx: {
            bgcolor: "rgba(0,0,0,0.94)",
          },
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",

            top: "50%",
            left: "50%",

            transform: "translate(-50%, -50%)",

            width: {
              xs: "95vw",
              sm: "85vw",
              md: "70vw",
            },

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            outline: "none",
          }}
        >
          {/* CLOSE */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: -50,
              right: 0,

              color: "#fff",

              "&:hover": {
                color: "#e8730d",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* IMAGE */}
          <Box
            component="img"
            src={projects[index].src}
            alt={projects[index].alt}
            sx={{
              width: "100%",
              maxHeight: "84vh",
              objectFit: "contain",
              borderRadius: 3,
            }}
          />

          {/* COUNT */}
          <Typography
            sx={{
              mt: 1.5,
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.85rem",
            }}
          >
            {index + 1} / {projects.length}
          </Typography>

          {/* PREV */}
          <IconButton
            onClick={onPrev}
            sx={{
              position: "absolute",

              left: {
                xs: -20,
                md: -70,
              },

              top: "50%",
              transform: "translateY(-50%)",

              color: "#fff",

              bgcolor: "rgba(232,115,13,0.8)",

              "&:hover": {
                bgcolor: "#e8730d",
              },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          {/* NEXT */}
          <IconButton
            onClick={onNext}
            sx={{
              position: "absolute",

              right: {
                xs: -20,
                md: -70,
              },

              top: "50%",
              transform: "translateY(-50%)",

              color: "#fff",

              bgcolor: "rgba(232,115,13,0.8)",

              "&:hover": {
                bgcolor: "#e8730d",
              },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Fade>
    </Modal>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────

export default function Projects() {
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
  });

  const openLightbox = (index) =>
    setLightbox({
      open: true,
      index,
    });

  const closeLightbox = () =>
    setLightbox((s) => ({
      ...s,
      open: false,
    }));

  const prevImage = () =>
    setLightbox((s) => ({
      ...s,
      index: (s.index - 1 + projects.length) % projects.length,
    }));

  const nextImage = () =>
    setLightbox((s) => ({
      ...s,
      index: (s.index + 1) % projects.length,
    }));

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Header />

      <PageBanner />

      {/* GALLERY */}
      <Box
        sx={{
          py: {
            xs: 6,
            md: 8,
          },

          bgcolor: "#f7f7f7",
        }}
      >
        <Container maxWidth="xl">
          {/* HEADING */}
          <Box
            sx={{
              textAlign: "center",

              mb: {
                xs: 5,
                md: 7,
              },
            }}
          >
            <Typography
              sx={{
                color: "#e8730d",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",

                fontSize: "0.85rem",

                mb: 1.2,
              }}
            >
              Work Gallery
            </Typography>

            <Typography
              sx={{
                color: "#1a2535",
                fontWeight: 700,
                fontFamily: "Georgia, serif",

                fontSize: {
                  xs: "1.8rem",
                  sm: "2.3rem",
                  md: "2.8rem",
                },
              }}
            >
              Our Work Gallery That We Do!
            </Typography>

            <Box
              sx={{
                width: 60,
                height: 4,

                bgcolor: "#e8730d",

                borderRadius: 10,

                mx: "auto",
                mt: 2,
              }}
            />
          </Box>

          {/* IMAGE CARD GRID */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                <Box
                  onClick={() => openLightbox(index)}
                  sx={{
                    borderRadius: "24px",

                    overflow: "hidden",

                    backgroundColor: "#fff",

                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",

                    transition: "all 0.35s ease",

                    cursor: "pointer",

                    height: "100%",

                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 22px 45px rgba(0,0,0,0.18)",
                    },

                    "&:hover img": {
                      transform: "scale(1.08)",
                    },

                    "&:hover .overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Box
                    sx={{
                      position: "relative",

                      width: "100%",

                      height: {
                        xs: 260,
                        sm: 280,
                        md: 300,
                      },

                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={project.src}
                      alt={project.alt}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        height: "100%",

                        objectFit: "cover",
                        objectPosition: "center",

                        display: "block",

                        transition: "transform 0.5s ease",
                      }}
                    />

                    {/* OVERLAY */}
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,

                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",

                        opacity: 0,

                        transition: "0.35s ease",
                      }}
                    />
                  </Box>

                  {/* CONTENT */}
                  <Box
                    sx={{
                      p: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#1a2535",

                        fontSize: "1rem",

                        mb: 0.5,
                      }}
                    >
                      Project {project.id}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#777",
                        fontSize: "0.9rem",
                      }}
                    >
                      Logistics & Transport Service
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTABanner />

      <Lightbox
        open={lightbox.open}
        index={lightbox.index}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </Box>
  );
}