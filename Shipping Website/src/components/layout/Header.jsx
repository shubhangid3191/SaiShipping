import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

import Topbar from "./Topbar";

const logo = "https://saishipping.com/images/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Company", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  return (
    <>
      <Topbar />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#fff",

          boxShadow: "0 -5px 15px rgba(8,106,216,0.12)",

          py: { xs: 2, md: 2, lg: 2.5 },

          /* IMPORTANT FIX */
          zIndex: 1200,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: "90px", md: "115px" },

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* MOBILE MENU ICON */}
            <IconButton
              onClick={() => setOpenMenu(true)}
              sx={{
                display: { xs: "flex", md: "none" },

                color: "#fff",

                background: "#eb7e27",

                mr: 1,

                "&:hover": {
                  background: "#d86f1f",
                },
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            {/* LOGO */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={logo}
                alt="Sai Shipping"
                sx={{
                  width: {
                    xs: "140px",
                    sm: "120px",
                    md: "180px",
                    lg: "160px",
                  },

                  height: "auto",

                  cursor: "pointer",

                  ml: { xs: 2, md: 6, lg: 10 },
                }}
              />
            </Link>

            {/* DESKTOP NAV ITEMS */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },

                alignItems: "center",

                gap: { md: 7, lg: 9 },

                ml: { md: 10, lg: 12 },

                flexGrow: 1,
              }}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        position: "relative",

                        color: isActive ? "#ff7236" : "#eb7e27",

                        fontWeight: 700,

                        fontSize: {
                          md: "18px",
                          lg: "20px",
                        },

                        cursor: "pointer",

                        fontFamily: '"Times New Roman", serif',

                        transition: "0.3s",

                        "&:hover": {
                          color: "#ff7236",
                        },

                        "&::after": {
                          content: '""',

                          position: "absolute",

                          width: isActive ? "100%" : "0%",

                          height: "2px",

                          left: 0,
                          bottom: -6,

                          backgroundColor: "#ff7236",

                          transition: "0.3s",
                        },

                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Box>

            {/* DESKTOP BUTTON */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },

                alignItems: "center",

                flexShrink: 0,
              }}
            >
              <Link
                to="/get-a-free-quote"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#eb7e27",

                    color: "#fff",

                    borderRadius: "50px",

                    px: { md: 5, lg: 6 },

                    py: 1.8,

                    fontSize: {
                      md: "16px",
                      lg: "18px",
                    },

                    fontWeight: 700,

                    textTransform: "capitalize",

                    boxShadow: "none",

                    display: "flex",

                    alignItems: "center",

                    gap: 2,

                    "&:hover": {
                      backgroundColor: "#d86f1f",

                      boxShadow: "none",
                    },
                  }}
                >
                  Get A Quote

                  <Box
                    sx={{
                      border: "2px solid #fff",

                      borderRadius: "50%",

                      width: 36,
                      height: 36,

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: 20,
                        color: "#fff",
                      }}
                    />
                  </Box>
                </Button>
              </Link>
            </Box>

            {/* MOBILE BUTTON */}
            <Link
              to="/get-a-free-quote"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  display: { xs: "flex", md: "none" },

                  backgroundColor: "#eb7e27",

                  color: "#fff",

                  borderRadius: "50%",

                  minWidth: "75px",

                  width: "75px",

                  height: "75px",

                  fontSize: "10px",

                  fontWeight: 700,

                  lineHeight: 1.2,

                  textAlign: "center",

                  textTransform: "uppercase",

                  flexDirection: "column",

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
            </Link>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box
          sx={{
            width: 300,

            height: "100%",

            backgroundColor: "#eb7e27",

            color: "#fff",

            p: 3,
          }}
        >
          {/* CLOSE BUTTON */}
          <Box
            sx={{
              display: "flex",

              justifyContent: "flex-end",

              mb: 5,
            }}
          >
            <IconButton
              onClick={() => setOpenMenu(false)}
              sx={{
                color: "#fff",

                border: "1px solid #fff",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* NAV ITEMS */}
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.label}
                disablePadding
                sx={{ mb: 3 }}
                onClick={() => setOpenMenu(false)}
              >
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: "20px",

                      fontWeight: 600,

                      color: "#fff",

                      sx: {
                        cursor: "pointer",

                        transition: "0.3s",

                        "&:hover": {
                          textDecoration: "underline",
                        },
                      },
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;