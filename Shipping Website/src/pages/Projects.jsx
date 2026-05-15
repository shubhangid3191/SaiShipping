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
      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
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
            color: "#070707",
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
            bgcolor: "rgba(0,0,0,0.95)",
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
          {/* CLOSE BUTTON */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: -50,
              right: 0,
              color: "#fff",
              zIndex: 10,
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
              borderRadius: "14px",
            }}
          />

          {/* PREV BUTTON */}
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
              bgcolor: "rgba(232,115,13,0.9)",

              "&:hover": {
                bgcolor: "#e8730d",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* NEXT BUTTON */}
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
              bgcolor: "rgba(232,115,13,0.9)",

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
// MAIN COMPONENT
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
        overflow: "hidden",

        pb: {
          xs: "140px",
          md: "120px",
        },
      }}
    >
      {/* BANNER */}
      <PageBanner />

      {/* PROJECT GRID */}
      <Box
        sx={{
          py: {
            xs: 5,
            md: 8,
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                {/* SAME SHAPE CARD */}
                <Box
                  onClick={() => openLightbox(index)}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 260,
                      sm: 280,
                      md: 300,
                    },

                    borderRadius: "24px",

                    overflow: "hidden",

                    position: "relative",

                    cursor: "pointer",

                    backgroundColor: "#f5f5f5",

                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

                    transition: "all 0.4s ease",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
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

                      /* THIS MAKES ALL IMAGES SAME SIZE */
                      objectFit: "cover",

                      objectPosition: "center",

                      transition: "transform 0.5s ease",

                      display: "block",
                    }}
                  />

                  {/* OVERLAY */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,

                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",

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