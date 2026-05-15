import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Modal,
  Fade,
 Backdrop,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


// ─────────────────────────────────────────────
// PROJECT IMAGES
// ─────────────────────────────────────────────

const projects = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: `https://saishipping.com/images/project${i + 1}.jpg`,
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
      {/* SIDE DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background: `
            linear-gradient(
              to right,
              rgba(0,0,0,0.70) 0%,
              rgba(0,0,0,0.45) 18%,
              rgba(0,0,0,0.08) 40%,
              rgba(0,0,0,0.08) 60%,
              rgba(0,0,0,0.45) 82%,
              rgba(0,0,0,0.70) 100%
            )
          `,

          zIndex: 1,
        }}
      />

      {/* CENTER CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          textAlign: "center",

          px: 2,
        }}
      >
        <Box
          sx={{
            color: "#e8730d",

            fontWeight: 700,

            letterSpacing: "1px",

            fontSize: {
              xs: "1rem",
              md: "1.2rem",
            },

            mb: 2,
          }}
        >
          International Logistics
        </Box>

        <Box
          sx={{
            color: "#fff",

            fontWeight: 900,

            fontFamily: "Georgia, serif",

            lineHeight: 1.1,

            textShadow: "0 4px 14px rgba(0,0,0,0.45)",

            fontSize: {
              xs: "3rem",
              sm: "4rem",
              md: "6rem",
            },
          }}
        >
          Projects
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
            justifyContent: "center",
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

              zIndex: 20,

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
            alt=""
            sx={{
              width: "100%",
              maxHeight: "85vh",

              objectFit: "contain",

              borderRadius: "12px",
            }}
          />

          {/* PREV */}
          <IconButton
            onClick={onPrev}
            sx={{
              position: "absolute",

              left: {
                xs: 10,
                md: -70,
              },

              top: "50%",

              transform: "translateY(-50%)",

              color: "#fff",

              bgcolor: "rgba(232,115,13,0.85)",

              zIndex: 20,

              "&:hover": {
                bgcolor: "#e8730d",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* NEXT */}
          <IconButton
            onClick={onNext}
            sx={{
              position: "absolute",

              right: {
                xs: 10,
                md: -70,
              },

              top: "50%",

              transform: "translateY(-50%)",

              color: "#fff",

              bgcolor: "rgba(232,115,13,0.85)",

              zIndex: 20,

              "&:hover": {
                bgcolor: "#e8730d",
              },
            }}
          >
            <ArrowForwardIosIcon />
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

  const openLightbox = (index) => {
    setLightbox({
      open: true,
      index,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + projects.length) % projects.length,
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % projects.length,
    }));
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",

        /* IMPORTANT FIX */
        position: "relative",
        zIndex: 1,
        overflow: "hidden",

        /* SPACE BEFORE FOOTER CTA */
        pb: {
          xs: "180px",
          md: "140px",
        },
      }}
    >


      <PageBanner />

      {/* PROJECT GRID */}
      <Box
        sx={{
          py: {
            xs: 5,
            md: 8,
          },

          bgcolor: "#fff",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                <Box
                  onClick={() => openLightbox(index)}
                  sx={{
                    position: "relative",

                    width: "100%",

                    height: {
                      xs: 250,
                      sm: 260,
                      md: 280,
                    },

                    overflow: "hidden",

                    borderRadius: "20px",

                    cursor: "pointer",

                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

                    transition: "all 0.35s ease",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.20)",
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
                    component="img"
                    src={project.src}
                    alt={`Project ${project.id}`}
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

                  {/* HOVER OVERLAY */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,

                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",

                      opacity: 0,

                      transition: "0.35s ease",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* LIGHTBOX */}
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