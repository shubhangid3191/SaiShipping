import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import logo1 from "../../assets/images/cl-logo-1.png";
import logo2 from "../../assets/images/cl-logo-2.png";
import logo3 from "../../assets/images/cl-logo-3.png";
import logo4 from "../../assets/images/cl-logo-4.png";
import logo5 from "../../assets/images/cl-logo-5.png";
import logo6 from "../../assets/images/cl-logo-6.png";
import logo7 from "../../assets/images/cl-logo-7.png";
import logo8 from "../../assets/images/cl-logo-8.png";
import logo9 from "../../assets/images/cl-logo-9.png";
import logo10 from "../../assets/images/cl-logo-10.png";
import logo11 from "../../assets/images/cl-logo-11.png";
import logo12 from "../../assets/images/cl-logo-12.png";
import logo13 from "../../assets/images/cl-logo-13.png";
import logo14 from "../../assets/images/cl-logo-14.png";
import logo15 from "../../assets/images/cl-logo-15.png";
import logo16 from "../../assets/images/cl-logo-16.png";
import logo17 from "../../assets/images/cl-logo-17.png";
import logo18 from "../../assets/images/cl-logo-18.png";
import logo19 from "../../assets/images/cl-logo-19.png";
import logo20 from "../../assets/images/cl-logo-12.png";
// ─────────────────────────────────────────────
// CLIENT LOGOS
// ─────────────────────────────────────────────

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
];

// ─────────────────────────────────────────────
// SMOOTH MARQUEE ANIMATION
// ─────────────────────────────────────────────

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
`;

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function ClientLogos() {

  // DUPLICATE FOR SMOOTH LOOP
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Box
      sx={{
        py: {
          xs: 5,
          md: 7,
        },

        bgcolor: "#fff", // CHANGED TO WHITE

        overflow: "hidden",

        position: "relative",
      }}
    >
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

            width: {
              xs: 70,
              md: 180,
            },

            zIndex: 5,

            background:
              "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)",

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

            width: {
              xs: 70,
              md: 180,
            },

            zIndex: 5,

            background:
              "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",

            pointerEvents: "none",
          }}
        />

        {/* LOGOS TRACK */}
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            width: "max-content",

            gap: {
              xs: 6,
              sm: 8,
              md: 12,
            },

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

                height: {
                  xs: 45,
                  sm: 60,
                  md: 85,
                },

                objectFit: "contain",

                flexShrink: 0,

                opacity: 1,

                transition: "all 0.4s ease",

                "&:hover": {
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