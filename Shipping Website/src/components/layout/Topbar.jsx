import React from "react";

import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

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
        px: {
          xs: 2,
          md: 5,
          lg: 12,
        },
        py: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <EmailIcon
              sx={{
                color: "#ED6637",
                fontSize: 18,
              }}
            />

            <Typography
              sx={{
                fontSize: "15px",
                color: "#000",
              }}
            >
              info@saishipping.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CallIcon
              sx={{
                color: "#ED6637",
                fontSize: 18,
              }}
            />

            <Typography
              sx={{
                fontSize: "15px",
                color: "#000",
              }}
            >
              +91 9876543210
            </Typography>
          </Box>

        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
            <Typography>
                Follow Us:
            </Typography>
          <IconButton>
            <FacebookIcon
              sx={{
                color: "#000",
                "&:hover": {
                  color: "#ED6637",
                },
              }}
            />
          </IconButton>

          <IconButton>
            <InstagramIcon
              sx={{
                color: "#000",
                "&:hover": {
                  color: "#ED6637",
                },
              }}
            />
          </IconButton>

          <IconButton>
            <LinkedInIcon
              sx={{
                color: "#000",
                "&:hover": {
                  color: "#ED6637",
                },
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbar;