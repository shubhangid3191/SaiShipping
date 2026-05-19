import React, { useState } from "react";
import {
  Box,
  Container,
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
        height: { xs: "300px", sm: "420px", md: "520px" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(https://saishipping.com/images/about-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 2 }}>
        <Box
          sx={{
            color: "#e8730d",
            fontWeight: 700,
            letterSpacing: "1px",
            fontSize: { xs: "1rem", md: "1.2rem" },
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
            fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
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
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 300, sx: { bgcolor: "rgba(0,0,0,0.95)" } },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95vw", sm: "85vw", md: "70vw" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: -50, right: 0, color: "#fff", zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

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

          <IconButton
            onClick={onPrev}
            sx={{
              position: "absolute",
              left: { xs: 10, md: -70 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              bgcolor: "rgba(232,115,13,0.9)",
              "&:hover": { bgcolor: "#e8730d" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={onNext}
            sx={{
              position: "absolute",
              right: { xs: 10, md: -70 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              bgcolor: "rgba(232,115,13,0.9)",
              "&:hover": { bgcolor: "#e8730d" },
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
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (i) => setLightbox({ open: true, index: i });
  const closeLightbox = () => setLightbox((p) => ({ ...p, open: false }));
  const prevImage = () =>
    setLightbox((p) => ({
      ...p,
      index: (p.index - 1 + projects.length) % projects.length,
    }));
  const nextImage = () =>
    setLightbox((p) => ({
      ...p,
      index: (p.index + 1) % projects.length,
    }));

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: { xs: "140px", md: "120px" } }}>

      {/* BANNER */}
      <PageBanner />

      {/* GRID */}
      <Box sx={{ py: { xs: 5, md: 8 } }}>
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
              gap: "24px",
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={project.id}
                onClick={() => openLightbox(index)}
                sx={{
                  width: "100%",
                  height: { xs: 240, sm: 260, md: 280 }, // ← fixed height
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  backgroundColor: "#ddd",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
                  },
                  "&:hover .proj-img": { transform: "scale(1.07)" },
                  "&:hover .proj-overlay": { opacity: 1 },
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
                    width: "100%",       // ← fills card width
                    height: "100%",      // ← fills card height
                    objectFit: "cover",  // ← crops to fit, no distortion
                    objectPosition: "center",
                    display: "block",
                    transition: "transform 0.45s ease",
                  }}
                />

                {/* HOVER OVERLAY */}
                <Box
                  className="proj-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(232,115,13,0.4), transparent)",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                  }}
                />
              </Box>
            ))}
          </Box>
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