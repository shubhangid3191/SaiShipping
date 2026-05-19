import React, { useState } from "react";
import {
  Box,
  Container,
  Modal,
  Fade,
  Backdrop,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/* ─────────────────────────────────────────────
   PROJECT IMAGES
───────────────────────────────────────────── */

const projects = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: `https://saishipping.com/images/project${i + 1}.jpg`,
}));

/* ─────────────────────────────────────────────
   PAGE BANNER
───────────────────────────────────────────── */

function PageBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "320px",
          sm: "420px",
          md: "560px",
        },

        overflow: "hidden",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#f7f7f7",
      }}
    >
      {/* LEFT IMAGE */}
      <Box
        component="img"
        src="https://saishipping.com/images/inner-banner-left.png"
        alt=""
        sx={{
          position: "absolute",

          left: 0,
          bottom: 0,

          width: {
            xs: "55%",
            md: "38%",
          },

          opacity: 0.95,
        }}
      />

      {/* RIGHT IMAGE */}
      <Box
        component="img"
        src="https://saishipping.com/images/inner-banner-right.png"
        alt=""
        sx={{
          position: "absolute",

          right: 0,
          bottom: 0,

          width: {
            xs: "55%",
            md: "38%",
          },

          opacity: 0.95,
        }}
      />

      {/* CENTER TEXT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          textAlign: "center",

          mt: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Typography
          sx={{
            color: "#eb7a1a",

            fontWeight: 700,

            fontSize: {
              xs: "18px",
              md: "20px",
            },

            mb: 2,

            fontFamily: "Georgia, serif",
          }}
        >
          International Logistics
        </Typography>

        <Typography
          sx={{
            color: "#000",

            fontWeight: 700,

            lineHeight: 1,

            fontFamily: "Georgia, serif",

            fontSize: {
              xs: "3.4rem",
              sm: "4.5rem",
              md: "6.5rem",
            },
          }}
        >
          Projects
        </Typography>
      </Box>
    </Box>
  );
}

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */

function Lightbox({ open, index, onClose, onPrev, onNext }) {
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
          {/* CLOSE */}
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
            src={projects[index]?.src}
            alt=""
            sx={{
              width: "100%",
              maxHeight: "85vh",

              objectFit: "contain",

              borderRadius: "14px",
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

              bgcolor: "rgba(232,115,13,0.9)",

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

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Projects() {
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
  });

  const openLightbox = (i) =>
    setLightbox({
      open: true,
      index: i,
    });

  const closeLightbox = () =>
    setLightbox((p) => ({
      ...p,
      open: false,
    }));

  const prevImage = () =>
    setLightbox((p) => ({
      ...p,
      index:
        (p.index - 1 + projects.length) %
        projects.length,
    }));

  const nextImage = () =>
    setLightbox((p) => ({
      ...p,
      index:
        (p.index + 1) % projects.length,
    }));

  return (
    <Box
      sx={{
        bgcolor: "#fff",

        minHeight: "100vh",

        overflow: "hidden",
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
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },

              gap: {
                xs: "20px",
                md: "28px",
              },
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={project.id}
                onClick={() =>
                  openLightbox(index)
                }
                sx={{
                  position: "relative",

                  overflow: "hidden",

                  borderRadius: "22px",

                  cursor: "pointer",

                  height: {
                    xs: 250,
                    sm: 280,
                    md: 300,
                  },

                  backgroundColor: "#ddd",

                  boxShadow:
                    "0 10px 28px rgba(0,0,0,0.10)",

                  transition:
                    "all 0.35s ease",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",

                    boxShadow:
                      "0 18px 40px rgba(0,0,0,0.18)",
                  },

                  "&:hover .proj-img": {
                    transform: "scale(1.08)",
                  },

                  "&:hover .proj-overlay": {
                    opacity: 1,
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  className="proj-img"
                  src={project.src}
                  alt={`Project ${project.id}`}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",

                    display: "block",

                    transition:
                      "transform 0.45s ease",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  className="proj-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,

                    opacity: 0,

                    transition:
                      "opacity 0.35s ease",

                    background:
                      "linear-gradient(to top, rgba(232,115,13,0.45), transparent 60%)",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FOOTER BOTTOM */}
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(4,44,68,1) 0%, rgba(5,18,82,1) 100%)",

          mt: {
            xs: 8,
            md: 10,
          },

          borderTop: "1px solid rgba(255,255,255,0.08)",

          pt: {
            xs: 4,
            md: 5,
          },

          pb: {
            xs: 4,
            md: 5,
          },

          px: {
            xs: 3,
            md: 6,
          },

          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          alignItems: {
            xs: "flex-start",
            md: "center",
          },

          justifyContent: "space-between",

          gap: 4,
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            gap: 3,
          }}
        >
          {/* DESIGN */}
          <Box
            sx={{
              position: "relative",

              width: "90px",
              height: "120px",

              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            {/* WHITE */}
            <Box
              sx={{
                position: "absolute",

                left: 0,
                top: 0,

                width: "10px",
                height: "120px",

                bgcolor: "#fff",

                transform: "skew(-30deg)",
              }}
            />

            {/* ORANGE */}
            <Box
              sx={{
                position: "absolute",

                left: 20,
                top: 0,

                width: "32px",
                height: "60px",

                bgcolor: "#ff7b2f",

                transform: "skew(-30deg)",
              }}
            />

            {/* BLUE */}
            <Box
              sx={{
                position: "absolute",

                left: 28,
                bottom: 0,

                width: "42px",
                height: "70px",

                bgcolor: "#0f5d73",

                transform: "skew(-30deg)",
              }}
            />
          </Box>

          {/* LOGO */}
          <Box
            component="img"
            src="https://saishipping.com/images/logo.png"
            alt="SSS Sai Shipping"

            sx={{
              width: {
                xs: "170px",
                md: "230px",
              },

              objectFit: "contain",
            }}
          />
        </Box>

        {/* COPYRIGHT */}
        <Typography
          sx={{
            color: "#fff",

            fontSize: {
              xs: "14px",
              md: "18px",
            },

            fontFamily: "Georgia, serif",

            textAlign: {
              xs: "left",
              md: "right",
            },

            lineHeight: 1.8,
          }}
        >
          © 2026{" "}
          <Box
            component="span"
            sx={{
              color: "#ff7b2f",
            }}
          >
            Hi Tech Enterprises
          </Box>{" "}
          - Providing solutions for SSS Sai Shipping Services Pvt. Ltd.
          All rights reserved.
        </Typography>
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