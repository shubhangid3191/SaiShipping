import React, { useState } from "react";

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

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../assets/images/logo.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = ["Home", "Company", "Services", "Projects", "Contact"];

  return (
    <>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 -5px 15px rgba(8,106,216,0.12)",
          py: {
            xs: 2,
            md: 2,
            lg: 2.5,
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: "90px",
                md: "115px",
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* MOBILE MENU */}
            <IconButton
              onClick={() => setOpenMenu(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                color: "#eb7e27",
                mr: 1,
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            {/* LOGO */}
            <Box
              component="img"
              src={logo}
              alt="Sai Shipping"
              sx={{
                width: {
                  xs: "140px",  // mobile (small screens)
                  sm: "120px",
                  md: "100px",  // desktop smaller if needed
                },
                height: "auto",
                cursor: "pointer",
                ml: {
                  xs: 2,
                  md: 6,
                  lg: 10,
                },
              }}
            />

            {/* DESKTOP NAVIGATION */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",
                gap: {
                  md: 7,
                  lg: 9,
                },

                ml: {
                  md: 10,
                  lg: 12,
                },

                flexGrow: 1,
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    position: "relative",

                    color: "#eb7e27",

                    fontWeight: 700,

                    fontSize: {
                      md: "18px",
                      lg: "20px",
                    },

                    cursor: "pointer",
                    fontFamily: '"Times New Roman", serif',

                    transition: "all 0.3s ease",

                    "&:hover": {
                      color: "#ff7236",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
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
                  {item}
                </Typography>
              ))}
            </Box>

            {/* RIGHT BUTTON */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#eb7e27",

                  color: "#fff",

                  borderRadius: "60px",

                  px: {
                    md: 3,
                    lg: 4,
                  },

                  py: 1.4,

                  fontSize: {
                    md: "15px",
                    lg: "16px",
                  },

                  fontWeight: 700,

                  textTransform: "capitalize",

                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#d86f1f",
                    boxShadow: "none",
                  },
                }}
              >
                Get A Free Quote
              </Button>
            </Box>

            {/* MOBILE ROUND BUTTON */}
            <Button
              variant="contained"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

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
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
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
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MOBILE MENU ITEMS */}
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
                disablePadding
                sx={{
                  mb: 3,
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: "20px",
                    fontWeight: 600,

                    sx: {
                      cursor: "pointer",

                      "&:hover": {
                        textDecoration: "underline",
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
