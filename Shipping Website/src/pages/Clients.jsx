import React from "react";
import { Box, Typography, Container } from "@mui/material";
import aboutBanner from "../assets/images/about-banner.jpg";

import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.png";
import logo3 from "../assets/images/logo-3.png";
import logo4 from "../assets/images/logo-4.png";
import logo5 from "../assets/images/logo-5.png";
import logo6 from "../assets/images/logo-6.png";
import logo7 from "../assets/images/logo-7.png";
import logo8 from "../assets/images/logo-8.png";
import logo9 from "../assets/images/logo-9.png";
import logo10 from "../assets/images/logo-10.png";

import logo11 from "../assets/images/logo-11.png";
import logo12 from "../assets/images/logo-12.png";
import logo13 from "../assets/images/logo-13.png";
import logo14 from "../assets/images/logo-14.png";
import logo15 from "../assets/images/logo-15.png";
import logo16 from "../assets/images/logo-16.png";
import logo17 from "../assets/images/logo-17.png";
import logo18 from "../assets/images/logo-18.png";
import logo19 from "../assets/images/logo-19.png";
import logo20 from "../assets/images/logo-20.png";

import logo21 from "../assets/images/logo-21.png";
import logo22 from "../assets/images/logo-22.png";
import logo23 from "../assets/images/logo-23.png";
import logo24 from "../assets/images/logo-24.png";
import logo25 from "../assets/images/logo-25.png";
import logo26 from "../assets/images/logo-26.png";
import logo27 from "../assets/images/logo-27.png";
import logo28 from "../assets/images/logo-28.png";
import logo29 from "../assets/images/logo-29.png";
import logo30 from "../assets/images/logo-30.png";

import logo31 from "../assets/images/logo-31.png";
import logo32 from "../assets/images/logo-32.png";
import logo33 from "../assets/images/logo-33.png";
import logo34 from "../assets/images/logo-34.png";
import logo35 from "../assets/images/logo-35.png";
import logo36 from "../assets/images/logo-36.png";
import logo37 from "../assets/images/logo-37.png";
import logo38 from "../assets/images/logo-38.png";
import logo39 from "../assets/images/logo-39.png";
import logo40 from "../assets/images/logo-40.png";

import logo41 from "../assets/images/logo-41.png";
import logo42 from "../assets/images/logo-42.png";
import logo43 from "../assets/images/logo-43.png";
import logo44 from "../assets/images/logo-44.png";
import logo45 from "../assets/images/logo-45.png";
import logo46 from "../assets/images/logo-46.png";
import logo47 from "../assets/images/logo-47.png";
import logo48 from "../assets/images/logo-48.png";
import logo49 from "../assets/images/logo-49.png";
import logo50 from "../assets/images/logo-50.png";

import logo51 from "../assets/images/logo-51.png";
import logo52 from "../assets/images/logo-52.png";
import logo53 from "../assets/images/logo-53.png";
import logo54 from "../assets/images/logo-54.png";
import logo55 from "../assets/images/logo-55.png";
import logo56 from "../assets/images/logo-56.png";
import logo57 from "../assets/images/logo-57.png";
import logo58 from "../assets/images/logo-58.png";
import logo59 from "../assets/images/logo-59.png";
import logo60 from "../assets/images/logo-60.png";

import logo61 from "../assets/images/logo-61.png";
import logo62 from "../assets/images/logo-62.png";
import logo63 from "../assets/images/logo-63.png";
import logo64 from "../assets/images/logo-64.png";
import logo65 from "../assets/images/logo-65.png";
import logo66 from "../assets/images/logo-66.png";
import logo67 from "../assets/images/logo-67.png";
import logo68 from "../assets/images/logo-68.png";
import logo69 from "../assets/images/logo-69.png";
import logo70 from "../assets/images/logo-70.png";

import logo71 from "../assets/images/logo-71.png";
import logo72 from "../assets/images/logo-72.png";
import logo73 from "../assets/images/logo-73.png";

const clients = [
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
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
  logo33,
  logo34,
  logo35,
  logo36,
  logo37,
  logo38,
  logo39,
  logo40,
  logo41,
  logo42,
  logo43,
  logo44,
  logo45,
  logo46,
  logo47,
  logo48,
  logo49,
  logo50,
  logo51,
  logo52,
  logo53,
  logo54,
  logo55,
  logo56,
  logo57,
  logo58,
  logo59,
  logo60,
  logo61,
  logo62,
  logo63,
  logo64,
  logo65,
  logo66,
  logo67,
  logo68,
  logo69,
  logo70,
  logo71,
  logo72,
  logo73,
];

function Clients() {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 280, sm: 350, md: 500 },
        }}
      >
        <Box
          component="img"
          src={aboutBanner}
          alt="Industry Banner"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 14, md: 22 },
              color: "#ED6637",
              fontWeight: 700,
              fontFamily: '"Times New Roman", serif',
              letterSpacing: 2,
            }}
          >
            Trusted by Leading Businesses Worldwide
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 28, sm: 45, md: 90 },
              fontWeight: 900,
              color: "#000",
              fontFamily: '"Times New Roman", serif',
              lineHeight: 1.1,
              mt: 1,
            }}
          >
            Clientele
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 5, mb: 20, background: "#fff" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 6,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {clients.map((item, index) => (
            <Box
              key={index}
              component="img"
              src={item}
              alt={`client-${index + 1}`}
              sx={{
                width: "100%",
                maxWidth: 180,
                height: "auto",
                objectFit: "contain",
                transition: "0.5s",
                "&:hover": {
                    background:"#fff",
                  transform: "scale(1.05)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default Clients;
