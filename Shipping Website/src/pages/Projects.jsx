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
import aboutBanner from "../assets/images/about-banner.jpg";

// ─────────────────────────────────────────────
// IMPORT YOUR PROJECT IMAGES HERE
// ─────────────────────────────────────────────
import img1 from "../assets/images/project1.jpg";
import img2 from "../assets/images/project2.jpg";
import img3 from "../assets/images/project3.jpg";
import img4 from "../assets/images/project4.jpg";
import img5 from "../assets/images/project5.jpg";
import img6 from "../assets/images/project6.jpg";
import img7 from "../assets/images/project7.jpg";
import img8 from "../assets/images/project8.jpg";
import img9 from "../assets/images/project9.jpg";
import img10 from "../assets/images/project10.jpg";
import img11 from "../assets/images/project11.jpg";
import img12 from "../assets/images/project12.jpg";
import img13 from "../assets/images/project13.jpg";
import img14 from "../assets/images/project14.jpg";
import img15 from "../assets/images/project15.jpg";
import img16 from "../assets/images/project16.jpg";
import img17 from "../assets/images/project17.jpg";
import img18 from "../assets/images/project18.jpg";
import img19 from "../assets/images/project19.jpg";
import img20 from "../assets/images/project20.jpg";
import img21 from "../assets/images/project21.jpg";
import img22 from "../assets/images/project22.jpg";
import img23 from "../assets/images/project23.jpg";
import img24 from "../assets/images/project24.jpg";
import img25 from "../assets/images/project25.jpg";
import img26 from "../assets/images/project26.jpg";
import img27 from "../assets/images/project27.jpg";
import img28 from "../assets/images/project28.jpg";
import img29 from "../assets/images/project29.jpg";
import img30 from "../assets/images/project30.jpg";
import img31 from "../assets/images/project31.jpg";
import img32 from "../assets/images/project32.jpg";
import img33 from "../assets/images/project33.jpg";
import img34 from "../assets/images/project34.jpg";
import img35 from "../assets/images/project35.jpg";
import img36 from "../assets/images/project36.jpg";
import img37 from "../assets/images/project37.jpg";
import img38 from "../assets/images/project38.jpg";
import img39 from "../assets/images/project39.jpg";
import img40 from "../assets/images/project40.jpg";
import img41 from "../assets/images/project41.jpg";
import img42 from "../assets/images/project42.jpg";
// ... add as many as you need

// ─────────────────────────────────────────────
// PROJECT LIST — add/remove entries to match your imports
// ─────────────────────────────────────────────
const projects = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
  { id: 17, src: img17 },
  { id: 18, src: img18 },
  { id: 19, src: img19 },
  { id: 20, src: img20 },
  { id: 21, src: img21 },
  { id: 22, src: img22 },
  { id: 23, src: img23 },
  { id: 24, src: img24 },
  { id: 25, src: img25 },
  { id: 26, src: img26 },
  { id: 27, src: img27 },
  { id: 28, src: img28 },
  { id: 29, src: img29 },
  { id: 30, src: img30 },
  { id: 31, src: img31 },
  { id: 32, src: img32 },
  { id: 33, src: img33 },
  { id: 34, src: img34 },
  { id: 35, src: img35 },
  { id: 36, src: img36 },
  { id: 37, src: img37 },
  { id: 38, src: img38 },
  { id: 39, src: img39 },
  { id: 40, src: img40 },
  { id: 41, src: img41 },
  { id: 42, src: img42 },
];

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
        backgroundImage: `url(${aboutBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
      }}
    >
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
            color: "#111",
            fontWeight: 900,
            fontFamily: "Georgia, serif",
            lineHeight: 1.1,
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
                  height: { xs: 240, sm: 260, md: 280 },
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
                    objectPosition: "center",
                    display: "block",
                    transition: "transform 0.45s ease",
                  }}
                />
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