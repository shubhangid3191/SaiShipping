import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
  Container,
} from "@mui/material";

import Topbar from "./Topbar";

const logo = "https://saishipping.com/images/logo.png";

const companyDropdown = [
  { label: "About", path: "/about-us" },
  { label: "Industry We Offer", path: "/industry" },
  { label: "Clients", path: "/clients" },
  { label: "FAQ", path: "/faq" },
  { label: "Achievements & Rewards", path: "/achievements" },
];

const servicesDropdown = [
  { label: "Freight Forwarding", path: "/freight-forwarding" },

  // Custom Clearance with submenu
  {
    label: "Custom Clearance",
    path: "/custom-clearance",
    subMenu: [
      { label: "Import", path: "/import" },
      { label: "Export", path: "/export" },
    ],
  },

  { label: "Warehouses", path: "/warehouses" },
  { label: "Additional Services", path: "/additional-services" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "Company", path: "/about-us", dropdown: companyDropdown },
  { label: "Services", path: "/services", dropdown: servicesDropdown },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [companyHover, setCompanyHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  // ✅ Fixed — moved out of map()
  const [companyMobileOpen, setCompanyMobileOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);

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
                "&:hover": { background: "#d86f1f" },
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
                  width: { xs: "140px", sm: "120px", md: "180px", lg: "160px" },
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
                const isHovered =
                  item.label === "Company" ? companyHover : servicesHover;
                const setHovered =
                  item.label === "Company" ? setCompanyHover : setServicesHover;

                if (item.dropdown) {
                  return (
                    <Box
                      key={item.label}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      sx={{ position: "relative" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.3,
                          cursor: "pointer",
                        }}
                      >
                        <Typography
                          sx={{
                            position: "relative",
                            color: isActive || isHovered ? "#ff7236" : "#eb7e27",
                            fontWeight: 700,
                            fontSize: { md: "18px", lg: "20px" },
                            fontFamily: '"Times New Roman", serif',
                            transition: "0.3s",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              width: isActive || isHovered ? "100%" : "0%",
                              height: "2px",
                              left: 0,
                              bottom: -6,
                              backgroundColor: "#ff7236",
                              transition: "0.3s",
                            },
                          }}
                        >
                          {item.label}
                        </Typography>
                        <KeyboardArrowDownIcon
                          sx={{
                            color: isHovered ? "#ff7236" : "#eb7e27",
                            fontSize: "20px",
                            transition: "0.3s",
                            transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </Box>

                      {/* Dropdown */}
                      {isHovered && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: "100%",        // ← starts right at nav item, no gap
                            left: 0,
                            pt: "14px",         // ← padding creates visual gap but mouse stays inside
                            zIndex: 9999,
                            minWidth: "220px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "#fff",
                              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                              borderTop: "3px solid #eb7e27",
                              borderRadius: "0 0 6px 6px",
                              py: 1,
                            }}
                          >
                            {item.dropdown.map((drop) => (
  <Box
    key={drop.label}
    sx={{
      position: "relative",
      "&:hover .submenu": {
        display: "block",
      },
    }}
  >
    {/* Main Item */}
    <Link
      to={drop.path}
      style={{ textDecoration: "none" }}
      onClick={() => setHovered(false)}
    >
      <Typography
        sx={{
          px: 3,
          py: 1.5,
          fontSize: "16px",
          fontWeight: 500,
          color: "#333",
          fontFamily: '"Times New Roman", serif',
          transition: "0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          "&:hover": {
            color: "#eb7e27",
            backgroundColor: "#fff8f3",
          },
        }}
      >
        {drop.label}

        {drop.subMenu && (
          <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
        )}
      </Typography>
    </Link>

    {/* HOVER SUBMENU */}
    {drop.subMenu && (
      <Box
        className="submenu"
        sx={{
          display: "none",
          position: "absolute",
          top: 0,
          left: "100%",
          minWidth: "180px",
          backgroundColor: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
          borderRadius: "6px",
          py: 1,
          zIndex: 999,
        }}
      >
        {drop.subMenu.map((sub) => (
          <Link
            key={sub.label}
            to={sub.path}
            style={{ textDecoration: "none" }}
            onClick={() => setHovered(false)}
          >
            <Typography
              sx={{
                px: 3,
                py: 1.2,
                fontSize: "15px",
                color: "#333",
                fontFamily: '"Times New Roman", serif',

                "&:hover": {
                  backgroundColor: "#fff8f3",
                  color: "#eb7e27",
                },
              }}
            >
              {sub.label}
            </Typography>
          </Link>
        ))}
      </Box>
    )}
  </Box>
))}
                          </Box>
                        </Box>
                      )}
                    </Box>
                  );
                }

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
                        fontSize: { md: "18px", lg: "20px" },
                        cursor: "pointer",
                        fontFamily: '"Times New Roman", serif',
                        transition: "0.3s",
                        "&:hover": { color: "#ff7236" },
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
                        "&:hover::after": { width: "100%" },
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
              <Link to="/get-a-free-quote" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#eb7e27",
                    color: "#fff",
                    borderRadius: "50px",
                    px: { md: 5, lg: 6 },
                    py: 1.8,
                    fontSize: { md: "16px", lg: "18px" },
                    fontWeight: 700,
                    textTransform: "capitalize",
                    boxShadow: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    "&:hover": { backgroundColor: "#d86f1f", boxShadow: "none" },
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
                    <ArrowForwardIcon sx={{ fontSize: 20, color: "#fff" }} />
                  </Box>
                </Button>
              </Link>
            </Box>

            {/* MOBILE BUTTON */}
            <Link to="/get-a-free-quote" style={{ textDecoration: "none" }}>
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
                  "&:hover": { backgroundColor: "#d86f1f" },
                }}
              >
                Get A<br />Free<br />Quote
              </Button>
            </Link>
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
            overflowY: "auto",
          }}
        >
          {/* CLOSE BUTTON */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
            <IconButton
              onClick={() => setOpenMenu(false)}
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MOBILE NAV ITEMS */}
          <List disablePadding>
            {navItems.map((item) => {
              // ✅ Fixed — use pre-declared states instead of useState inside map
              const mobileOpen =
                item.label === "Company" ? companyMobileOpen : servicesMobileOpen;
              const setMobileOpen =
                item.label === "Company" ? setCompanyMobileOpen : setServicesMobileOpen;

              return (
                <Box key={item.label}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    {item.dropdown ? (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          cursor: "pointer",
                          py: 1,
                        }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                      >
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "#fff",
                            fontFamily: '"Times New Roman", serif',
                          }}
                        >
                          {item.label}
                        </Typography>
                        <KeyboardArrowDownIcon
                          sx={{
                            color: "#fff",
                            transition: "0.3s",
                            transform: mobileOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </Box>
                    ) : (
                      <Link
                        to={item.path}
                        style={{ textDecoration: "none", width: "100%" }}
                        onClick={() => setOpenMenu(false)}
                      >
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "#fff",
                            fontFamily: '"Times New Roman", serif',
                            py: 1,
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Link>
                    )}
                  </ListItem>

                  {/* Dropdown Sub Items */}
                  {item.dropdown && mobileOpen && (
                    <Box sx={{ pl: 2, mb: 1 }}>
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.label}
                          to={drop.path}
                          style={{ textDecoration: "none" }}
                          onClick={() => setOpenMenu(false)}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: 500,
                              color: "#fff",
                              fontFamily: '"Times New Roman", serif',
                              py: 1,
                              pl: 1,
                              borderLeft: "2px solid #fff",
                              mb: 0.5,
                              opacity: 0.9,
                              "&:hover": { opacity: 1 },
                            }}
                          >
                            {drop.label}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  )}

                  {/* Divider */}
                  <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.2)", mb: 1 }} />
                </Box>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;