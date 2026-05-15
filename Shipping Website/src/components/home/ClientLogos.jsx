import { Box, Container, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

// CLIENT LOGOS
const logos = [
  "https://saishipping.com/images/cl-logo-2.png",
  "https://saishipping.com/images/cl-logo-1.png",
  "https://saishipping.com/images/cl-logo-3.png",
  "https://saishipping.com/images/cl-logo-5.png",
  "https://saishipping.com/images/cl-logo-6.png",
  "https://saishipping.com/images/cl-logo-7.png",
  "https://saishipping.com/images/cl-logo-8.png",
  "https://saishipping.com/images/cl-logo-9.png",
  "https://saishipping.com/images/cl-logo-10.png",
  "https://saishipping.com/images/cl-logo-11.png",
  "https://saishipping.com/images/cl-logo-12.png",
  "https://saishipping.com/images/cl-logo-13.png",
  "https://saishipping.com/images/cl-logo-14.png",
  "https://saishipping.com/images/cl-logo-16.png",
  "https://saishipping.com/images/cl-logo-17.png",
  "https://saishipping.com/images/cl-logo-18.png",
  "https://saishipping.com/images/cl-logo-19.png",
  "https://saishipping.com/images/cl-logo-20.png",
  "https://saishipping.com/images/cl-logo-21.png",
  "https://saishipping.com/images/cl-logo-22.png",
  "https://saishipping.com/images/cl-logo-23.png",
  "https://saishipping.com/images/cl-logo-24.png",
  "https://saishipping.com/images/cl-logo-25.png",
];

// SMOOTH MARQUEE
const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
`;

export default function ClientLogos() {
  // DUPLICATE FOR PERFECT LOOP
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#f5f5f5",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* HEADING */}
        <Typography
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#8a8a8a",
          }}
        >
          Trusted By Leading Companies Across Industries
        </Typography>
      </Container>

      {/* MAIN SLIDER */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* LEFT GRADIENT */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 80, md: 180 },
            zIndex: 5,
            background:
              "linear-gradient(to right, #f5f5f5 0%, rgba(245,245,245,0) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* RIGHT GRADIENT */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: 80, md: 180 },
            zIndex: 5,
            background:
              "linear-gradient(to left, #f5f5f5 0%, rgba(245,245,245,0) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* LOGOS TRACK */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: { xs: 8, md: 14 },
            animation: `${marquee} 45s linear infinite`,
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <Box
              key={index}
              component="img"
              src={logo}
              alt={`client-${index}`}
              sx={{
                width: "auto",
                height: { xs: 55, sm: 70, md: 90 },
                objectFit: "contain",
                flexShrink: 0,

                // CLEAN LOOK LIKE SCREENSHOT
                filter: "grayscale(100%)",
                opacity: 0.75,

                transition: "all 0.4s ease",

                "&:hover": {
                  filter: "grayscale(0%)",
                  opacity: 1,
                  transform: "scale(1.08)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}