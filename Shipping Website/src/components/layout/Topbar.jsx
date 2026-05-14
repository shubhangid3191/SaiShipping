import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function Topbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#EBEBEB",
        px: { xs: 2, md: 5, lg: 12 },
        py: { xs: 0.5, md: 0.3, lg: 0.5 },
        fontFamily: '"Times New Roman", serif',
        fontSize: "14px",
      }}
    >
      {/* Parent flex container: space-between pushes left and right apart */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // 👈 left content on left, right content on right
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, md: 3 },
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* EMAIL */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ color: "#ED6637", fontSize: 18 }} />
            <Typography sx={{ fontSize: "14px", color: "#000" }}>
              info@saishipping.com
            </Typography>
          </Box>

          {/* PHONE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CallIcon sx={{ color: "#ED6637", fontSize: 18 }} />
            <Typography sx={{ fontSize: "14px", color: "#000" }}>
              +91 9876543210
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Follow Us:</Typography>

          <IconButton sx={{ color: "#000", "&:hover": { color: "#ED6637" } }}>
            <FacebookIcon sx={{ fontSize: 18 }} />
          </IconButton>

          <IconButton sx={{ color: "#000", "&:hover": { color: "#ED6637" } }}>
            <InstagramIcon sx={{ fontSize: 18 }} />
          </IconButton>

          <IconButton sx={{ color: "#000", "&:hover": { color: "#ED6637" } }}>
            <LinkedInIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbar;
