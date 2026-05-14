import React, { useState } from "react";
import {
  Box, Container, Grid, Typography,
  Modal, IconButton, Fade, Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "../components/layout/Header"; // your actual file name

const projects = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: `https://saishipping.com/images/project${i + 1}.jpg`,
  alt: `Project ${i + 1}`,
}));

function PageBanner() {
  return (
    <Box sx={{
      position: "relative", bgcolor: "#fff", overflow: "hidden",
      minHeight: { xs: 260, sm: 340, md: 420 },
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Airplane left */}
      <Box component="img" src="https://saishipping.com/images/plane-bg.png"
        onError={(e) => (e.target.style.display = "none")}
        sx={{ position: "absolute", left: { xs: -60, md: 0 }, bottom: 0,
          height: { xs: 180, sm: 260, md: 360 }, objectFit: "contain",
          opacity: 0.85, pointerEvents: "none", zIndex: 0 }} />

      {/* Ship right */}
      <Box component="img" src="https://saishipping.com/images/ship-bg.png"
        onError={(e) => (e.target.style.display = "none")}
        sx={{ position: "absolute", right: { xs: -60, md: 0 }, bottom: 0,
          height: { xs: 180, sm: 260, md: 360 }, objectFit: "contain",
          opacity: 0.85, pointerEvents: "none", zIndex: 0 }} />

      {/* Center text */}
      <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", px: 2 }}>
        <Typography sx={{
          fontSize: { xs: "0.85rem", md: "1rem" }, color: "#e8730d",
          fontWeight: 600, fontStyle: "italic", mb: 1.5,
        }}>
          International Logistics
        </Typography>
        <Typography sx={{
          fontWeight: 900, fontSize: { xs: "2.8rem", sm: "3.5rem", md: "5rem" },
          color: "#111", lineHeight: 1.1, fontFamily: "Georgia, serif",
        }}>
          Projects
        </Typography>
      </Box>
    </Box>
  );
}

function CTABanner() {
  return (
    <Box sx={{
      bgcolor: "#0b1526", py: { xs: 5, md: 6 }, textAlign: "center",
      position: "relative", overflow: "hidden",
      "&::before": { content: '""', position: "absolute", inset: 0,
        backgroundImage: "url(https://saishipping.com/images/footer-bg-s2.jpg)",
        backgroundSize: "cover", opacity: 0.12, zIndex: 0 },
    }}>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography sx={{ fontSize: "0.8rem", color: "#e8730d", fontWeight: 600,
          letterSpacing: "0.14em", textTransform: "uppercase", mb: 1.5 }}>
          Trusted transport service
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff",
          fontSize: { xs: "1.3rem", md: "1.7rem" }, mb: 3 }}>
          Transport & Logistics projects that we provide
        </Typography>
        <Box component="a" href="/contact" sx={{
          display: "inline-block", px: 3.5, py: 1.3, bgcolor: "#e8730d",
          color: "#fff", fontWeight: 600, fontSize: "0.9rem", borderRadius: "4px",
          textDecoration: "none", transition: "background 0.2s, transform 0.18s",
          "&:hover": { bgcolor: "#c55e08", transform: "translateY(-2px)" },
        }}>
          Contact support
        </Box>
      </Box>
    </Box>
  );
}

function Lightbox({ open, index, onClose, onPrev, onNext }) {
  if (!open) return null;
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 300, sx: { bgcolor: "rgba(0,0,0,0.92)" } } }}>
      <Fade in={open}>
        <Box sx={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", outline: "none",
          width: { xs: "95vw", sm: "82vw", md: "68vw" },
          display: "flex", flexDirection: "column", alignItems: "center",
        }}>
          <IconButton onClick={onClose} sx={{ position: "absolute", top: -44,
            right: 0, color: "#fff", "&:hover": { color: "#e8730d" } }}>
            <CloseIcon />
          </IconButton>
          <Box component="img" src={projects[index].src} alt={projects[index].alt}
            sx={{ width: "100%", maxHeight: "82vh", objectFit: "contain", borderRadius: 2 }} />
          <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", mt: 1.5 }}>
            {index + 1} / {projects.length}
          </Typography>
          <IconButton onClick={onPrev} sx={{ position: "absolute",
            left: { xs: -38, sm: -54 }, top: "50%", transform: "translateY(-50%)",
            color: "#fff", bgcolor: "rgba(232,115,13,0.75)", "&:hover": { bgcolor: "#e8730d" } }}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={onNext} sx={{ position: "absolute",
            right: { xs: -38, sm: -54 }, top: "50%", transform: "translateY(-50%)",
            color: "#fff", bgcolor: "rgba(232,115,13,0.75)", "&:hover": { bgcolor: "#e8730d" } }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Fade>
    </Modal>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));
  const prevImage = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + projects.length) % projects.length }));
  const nextImage = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % projects.length }));

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Header />
      <PageBanner />

      <Box sx={{ bgcolor: "#fff", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography sx={{ fontSize: "0.82rem", color: "#e8730d", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", mb: 1 }}>
              Work Gallery
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#1a2535",
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.1rem" },
              fontFamily: "Georgia, serif" }}>
              Our Work Gallery That We Do!
            </Typography>
            <Box sx={{ width: 52, height: 3, bgcolor: "#e8730d",
              borderRadius: 1, mx: "auto", mt: 1.5 }} />
          </Box>

          {/* 3-col grid, equal height, rounded, lift on hover */}
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Box onClick={() => openLightbox(index)} sx={{
                  overflow: "hidden", borderRadius: "16px", cursor: "pointer",
                  height: { xs: 240, sm: 230, md: 280 }, width: "100%",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                  "&:hover": { boxShadow: "0 8px 28px rgba(0,0,0,0.18)", transform: "translateY(-4px)" },
                  "&:hover img": { transform: "scale(1.05)" },
                }}>
                  <Box component="img" src={project.src} alt={project.alt}
                    loading="lazy" sx={{ width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center",
                      display: "block", transition: "transform 0.45s ease" }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTABanner />
      <Lightbox open={lightbox.open} index={lightbox.index}
        onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
    </Box>
  );
}