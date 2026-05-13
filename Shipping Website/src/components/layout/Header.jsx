import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../assets/images/logo.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    "Home",
    "Company",
    "Services",
    "Projects",
    "Contact",
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 -5px 15px rgba(8,106,216,0.12)",
          px: {
            xs: 1,
            md: 6,
            lg: 4,
          },
          py: 3,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: {
              xs: "90px",
              md: "110px",
            },
            width: "100%",
            overflow: "hidden",
            gap: 1,
          }}
        >
          {/* Mobile Menu Icon */}
          <IconButton
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              color: "#eb7e27",
            }}
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Sai Shipping Logo"
            sx={{
              height: {
                xs: 90,
                md: 120,
              },
              width: "auto",
              cursor: "pointer",
            }}
          />

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: {
                md: 3,
                lg: 5,
              },
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  cursor: "pointer",
                  fontWeight: 900,
                  fontSize: "18px",
                  color: "#eb7e27",
                  transition: "0.3s",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Desktop Button */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
          </Box>

          {/* Mobile Quote Button */}
          <Button
            variant="contained"
            sx={{
              display: {
                xs: "90",
                md: "120",
              },

              backgroundColor: "#eb7e27",
              color: "#fff",

              borderRadius: "50%",

              minWidth: "90px",
              width: "90px",
              height: "90px",

              fontSize: "12px",
              fontWeight: 700,

              lineHeight: 1.3,
              textAlign: "center",

              textTransform: "uppercase",

              "&:hover": {
                backgroundColor: "#d86f1f",
              },
            }}
          >
            Get A
            <br />
            Free
            <br />
            Quote
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box
          sx={{
            width: 260,
            height: "100%",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            backgroundColor: "#fff",
          }}
        >
          {/* Close Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={() => setOpenMenu(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu Items */}
          {navItems.map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#eb7e27",
                cursor: "pointer",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {item}
            </Typography>
          ))}

          {/* Mobile Drawer Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#eb7e27",
              borderRadius: "50px",
              textTransform: "capitalize",
              mt: 2,
              py: 0.5,

              "&:hover": {
                backgroundColor: "#d86f1f",
              },
            }}
          >
            Get Quote
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;