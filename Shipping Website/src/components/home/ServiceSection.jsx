import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Card,
  IconButton,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DescriptionIcon from "@mui/icons-material/Description";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// IMAGES
const serv1 = "https://saishipping.com/images/serv-1.png";
const serv2 = "https://saishipping.com/images/serv-2.png";
const serv3 = "https://saishipping.com/images/serv-3.png";
const serv4 = "https://saishipping.com/images/serv-4.png";

const services = [
  {
    title: "FREIGHT FORWARDING",
    desc: "Comprehensive Freight Forwarding Solutions for Seamless Global Logistics.",
    image: serv1,
    icon: <LocalShippingIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "CUSTOM CLEARANCE",
    desc: "Hassle-free import and export clearance with expert compliance handling.",
    image: serv2,
    icon: <DescriptionIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "WAREHOUSES",
    desc: "Secure & Efficient Warehousing Solutions for Streamlined Supply Chain Management.",
    image: serv3,
    icon: <WarehouseIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "ADDITIONAL SERVICES",
    desc: "Value-added logistics support including packaging and consulting.",
    image: serv4,
    icon: <SettingsIcon sx={{ fontSize: 22 }} />,
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background:
          "linear-gradient(to right, #f8f4f1 70%, #efd7c7 30%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BG IMAGE */}
      <Box
        component="img"
        src="https://saishipping.com/images/truck-bg.png"
        alt=""
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: { xs: 120, md: 280 },
          opacity: 0.2,
        }}
      />

      <Container maxWidth="xl">
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "1300px",
            mx: "auto",
            mb: { xs: 6, md: 7 },
          }}
        >
          <Typography
            sx={{
              color: "#ef7f1a",
              fontSize: { xs: "13px", md: "17px" },
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              mb: 2,
              fontFamily: `"Times New Roman", serif`,
            }}
          >
            ⚡ TRUSTED TRANSPORT SERVICE
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "34px",
                sm: "48px",
                md: "64px",
              },

              lineHeight: 1.15,
              fontWeight: 700,
              color: "#062533",

              fontFamily: `"Playfair Display", serif`,
            }}
          >
            Comprehensive Logistics & Transport Solutions
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "#667085",

              fontSize: {
                xs: "15px",
                md: "18px",
              },

              lineHeight: 2,
              maxWidth: "1200px",
              mx: "auto",

              fontFamily: `"Times New Roman", serif`,
            }}
          >
            At SSS Sai Shipping Services Pvt. Ltd., we offer a wide range of logistics solutions tailored to meet your business needs. From intermodal shipping and cold chain logistics to fast-tracked hot shot trucking, we ensure seamless transportation, efficient warehousing, and smooth customs clearance. Our expertise guarantees reliable, cost-effective, and timely deliveries across global markets.At SSS Sai Shipping Services Pvt. Ltd., we offer a wide range of logistics solutions tailored to meet your business needs. From intermodal shipping and cold chain logistics to fast-tracked hot shot trucking, we ensure seamless transportation, efficient warehousing, and smooth customs clearance. Our expertise guarantees reliable, cost-effective, and timely deliveries across global markets.
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid
          container
          spacing={2.5}
          justifyContent="center"
          sx={{
            flexWrap: {
              xs: "wrap",
              lg: "nowrap",
            },
          }}
        >
          {services.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={index}
              sx={{
                display: "flex",
              }}
            >
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  borderRadius: 0,
                  background: "transparent",
                  overflow: "visible",
                  boxShadow: "none",

                  "&:hover .bottom-card": {
                    backgroundColor: "#ef7f1a",
                  },

                  "&:hover .card-title": {
                    color: "#fff",
                  },

                  "&:hover .card-desc": {
                    color: "rgba(255,255,255,0.92)",
                  },

                  "&:hover .read-more": {
                    color: "#fff",
                  },

                  "&:hover .card-line": {
                    backgroundColor: "rgba(255,255,255,0.3)",
                  },

                  "&:hover .arrow-btn": {
                    backgroundColor: "#fff",
                    color: "#ef7f1a",
                  },
                }}
              >
                {/* TOP IMAGE */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 5,
                    px: 2.5,
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",

                      height: {
                        xs: 220,
                        sm: 210,
                        md: 190,
                      },

                      objectFit: "cover",
                    }}
                  />

                  {/* ICON */}
                  <Box
                    sx={{
                      position: "absolute",
                      right: 22,
                      bottom: -32,

                      width: 66,
                      height: 66,

                      borderRadius: "50%",
                      backgroundColor: "#fff",

                      border: "5px solid #ef7f1a",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      zIndex: 10,
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>

                {/* BOTTOM CONTENT */}
                <Box
                  className="bottom-card"
                  sx={{
                    backgroundColor: "#fff",

                    px: 2.5,
                    pt: 6,
                    pb: 3,

                    mt: -2,

                    transition: "0.35s ease",

                    minHeight: {
                      xs: "auto",
                      lg: 290,
                    },

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    {/* TITLE */}
                    <Typography
                      className="card-title"
                      sx={{
                        fontSize: {
                          xs: "24px",
                          md: "16px",
                          lg: "15px",
                        },

                        fontWeight: 700,

                        color: "#102542",

                        lineHeight: 1.4,

                        minHeight: {
                          lg: 45,
                        },

                        transition: "0.35s ease",

                        fontFamily: `"Playfair Display", serif`,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* DESCRIPTION */}
                    <Typography
                      className="card-desc"
                      sx={{
                        mt: 2,

                        color: "#6b7280",

                        fontSize: {
                          xs: "15px",
                          md: "14px",
                        },

                        lineHeight: 1.8,

                        minHeight: {
                          lg: 100,
                        },

                        transition: "0.35s ease",

                        fontFamily: `"Times New Roman", serif`,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>

                  <Box>
                    {/* LINE */}
                    <Box
                      className="card-line"
                      sx={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "#ddd",
                        my: 2.5,
                        transition: "0.35s ease",
                      }}
                    />

                    {/* FOOTER */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography
                        className="read-more"
                        sx={{
                          fontSize: {
                            xs: "15px",
                            md: "13px",
                          },

                          fontWeight: 700,

                          color: "#102542",

                          textTransform: "uppercase",

                          transition: "0.35s ease",

                          fontFamily: `"Playfair Display", serif`,
                        }}
                      >
                        READ MORE
                      </Typography>

                      <IconButton
                        className="arrow-btn"
                        sx={{
                          width: 34,
                          height: 34,

                          backgroundColor: "#ef7f1a",
                          color: "#fff",

                          transition: "0.35s ease",

                          "&:hover": {
                            backgroundColor: "#fff",
                            color: "#ef7f1a",
                          },
                        }}
                      >
                        <ArrowForwardIcon sx={{ fontSize: 17 }} />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}