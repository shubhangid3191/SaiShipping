import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Card,
  IconButton,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DescriptionIcon from "@mui/icons-material/Description";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoltIcon from "@mui/icons-material/Bolt";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";

// ───────────────── IMAGES ─────────────────

const heroBg =
  "https://saishipping.com/images/about-banner.jpg";

const airplaneImg =
  "https://saishipping.com/images/airoplane.png";

const shipImg =
  "https://saishipping.com/images/ship.png";

const serv1 =
  "https://saishipping.com/images/serv-1.png";

const serv2 =
  "https://saishipping.com/images/serv-2.png";

const serv3 =
  "https://saishipping.com/images/serv-3.png";

const serv4 =
  "https://saishipping.com/images/serv-4.png";

const portImg =
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80";

const deliveryManImg =
  "https://saishipping.com/images/ab7.png";

// ───────────────── SERVICES DATA ─────────────────

const services = [
  {
    title: "FREIGHT FORWARDING",
    image: serv1,
    icon: <LocalShippingIcon sx={{ fontSize: 18 }} />,
    path: "/freight-forwarding",
    desc:
      "Freight forwarding involves the efficient transportation of goods from one location to another through various modes such as air, sea, and land. A freight forwarder manages logistics, handles documentation, and ensures smooth customs clearance.",
  },

  {
    title: "CUSTOM CLEARANCE",
    image: serv2,
    icon: <DescriptionIcon sx={{ fontSize: 18 }} />,
    path: "/custom-clearance-import",
    desc:
      "Customs clearance is the process of preparing and submitting required documents to facilitate the import or export of goods across international borders including duties, taxes and shipment compliance regulations.",
  },

  {
    title: "WAREHOUSES",
    image: serv3,
    icon: <WarehouseIcon sx={{ fontSize: 18 }} />,
    path: "/warehouses",
    desc:
      "Warehousing services provide secure storage solutions for goods before distribution including inventory management, order fulfillment and temperature-controlled logistics support.",
  },

  {
    title: "ADDITIONAL SERVICES",
    image: serv4,
    icon: <SettingsIcon sx={{ fontSize: 18 }} />,
    path: "/additional-services",
    desc:
      "Additional logistics services include cargo insurance, packaging, labeling, reverse logistics and trade consulting for better freight management and supply chain efficiency.",
  },
];

// ───────────────── FEATURES DATA ─────────────────

const features = [
  {
    icon: <HomeRepairServiceIcon sx={{ fontSize: 28, color: "#ef7f1a" }} />,
    title: "Warehouse",
    desc: "Warehouse hub for storage distribution and logistics.",
  },

  {
    icon: <SupportAgentIcon sx={{ fontSize: 28, color: "#ef7f1a" }} />,
    title: "Support 24/7",
    desc: "Reliable logistics support available all the time.",
  },

  {
    icon: <SecurityIcon sx={{ fontSize: 28, color: "#ef7f1a" }} />,
    title: "Cargo Insurance",
    desc: "Secure protection for cargo transportation globally.",
  },
];

// ───────────────── SERVICE CARD ─────────────────

function ServiceCard({ item }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      onClick={() => navigate(item.path)}
      sx={{
        width: "100%",
        maxWidth: 550,
        mx: "auto",

        borderRadius: 0,
        overflow: "hidden",
        background: "#fff",
        cursor: "pointer",
        boxShadow: "none",
        border: "1px solid #ececec",

        transition: "0.35s ease",

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

        "&:hover .divider": {
          backgroundColor: "rgba(255,255,255,0.25)",
        },

        "&:hover .arrow-btn": {
          backgroundColor: "#fff",
          color: "#ef7f1a",
        },
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={item.image}
          alt=""
          sx={{
            width: "100%",
            height: { xs: 180, md: 400 },
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* ICON */}
        <Box
          sx={{
            position: "absolute",
            right: 14,
            bottom: -22,

            width: 48,
            height: 48,

            borderRadius: "50%",
            backgroundColor: "#fff",
            border: "4px solid #ef7f1a",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            zIndex: 10,
          }}
        >
          {item.icon}
        </Box>
      </Box>

      {/* CONTENT */}
      <Box
        className="bottom-card"
        sx={{
          backgroundColor: "#fff",

          pt: 4,
          pb: 2,
          px: 2.2,

          transition: "0.35s ease",

          minHeight: 270,

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            className="card-title"
            sx={{
              fontSize: "14px",
              fontWeight: 800,
              color: "#111",
              mb: 1.2,
              lineHeight: 1.4,
              transition: "0.35s",
              fontFamily: `"Playfair Display", serif`,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            className="card-desc"
            sx={{
              fontSize: "13px",
              color: "#5c6770",
              lineHeight: 1.8,
              transition: "0.35s",
              fontFamily: `"Times New Roman", serif`,
            }}
          >
            {item.desc}
          </Typography>
        </Box>

        <Box>
          <Box
            className="divider"
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#ececec",
              my: 1.8,
              transition: "0.35s",
            }}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              className="read-more"
              sx={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: 1,
                transition: "0.35s",
                fontFamily: `"Playfair Display", serif`,
              }}
            >
              READ MORE
            </Typography>

            <IconButton
              className="arrow-btn"
              sx={{
                width: 28,
                height: 28,
                backgroundColor: "#ef7f1a",
                color: "#fff",

                transition: "0.35s",

                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#ef7f1a",
                },
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}

// ───────────────── MAIN PAGE ─────────────────

export default function Services() {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#fff" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", sm: "420px", md: "520px" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          overflow: "hidden",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* AIRPLANE */}
        <Box
          component="img"
          src={airplaneImg}
          alt=""
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: { xs: 180, sm: 280, md: 450 },
            zIndex: 2,
          }}
        />

        {/* SHIP */}
        <Box
          component="img"
          src={shipImg}
          alt=""
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: { xs: 240, sm: 350, md: 560 },
            zIndex: 2,
          }}
        />

        {/* TEXT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ef7f1a",
              fontSize: { xs: "15px", md: "20px" },
              fontWeight: 600,
              fontStyle: "italic",
              mb: 1,
              fontFamily: `"Times New Roman", serif`,
            }}
          >
            International Logistics
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "62px", sm: "90px", md: "125px" },
              fontWeight: 900,
              lineHeight: 1,
              color: "#111",
              fontFamily: `"Playfair Display", serif`,
            }}
          >
            Services
          </Typography>
        </Box>
      </Box>

      {/* SERVICES SECTION */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 7, md: 9 },

          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(242,228,215,0.92)",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* TITLE */}
          <Box sx={{ textAlign: "center", mb: 1.5  }}>
            <Stack
              direction="row"
              spacing={0.7}
              alignItems="center"
            >
              <BoltIcon
                sx={{
                  color: "#ef7f1a",
                  fontSize: 16,
                }}
              />

              <Typography
                sx={{
                  color: "#ef7f1a",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  fontFamily: `"Times New Roman", serif`,
                  textAlign: "center",
                }}
              >
                TRUSTED TRANSPORT SERVICE
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "38px", md: "48px" },
                fontWeight: 800,
                lineHeight: 1.18,
                color: "#111",
                mb: 2,
                fontFamily: `"Playfair Display", serif`,
              }}
            >
              Logistics Features That
              <br />
              We Can Providing
            </Typography>
          </Box>

          {/* CARDS */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
          >
            {services.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={index}
                sx={{
                  display: "flex",
                }}
              >
                <ServiceCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CASE STUDY SECTION */}
      <Box
        sx={{
          backgroundColor: "#fff",
          py: { xs: 6, md: 7 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            alignItems="center"
          >
            {/* LEFT IMAGE */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "680px",
                  mx: "auto",
                }}
              >
                <Box
                  component="img"
                  src={portImg}
                  alt=""
                  sx={{
                    width: "100%",
                    height: {
                      xs: 320,
                      md: 800,
                    },
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* ORANGE BOX */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: { xs: "50%", md: "52%" },
                    transform: "translateX(-50%)",

                    backgroundColor: "#ef7f1a",

                    px: { xs: 2.2, md: 2.8 },
                    py: { xs: 1.8, md: 2.2 },

                    width: { xs: 120, md: 150 },

                    clipPath:
                      "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%)",

                    zIndex: 5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "28px", md: "38px" },
                      fontWeight: 800,
                      lineHeight: 1,
                      fontFamily: `"Playfair Display", serif`,
                    }}
                  >
                    20k+
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                      mt: 0.8,
                      lineHeight: 1.45,
                      fontSize: { xs: "12px", md: "15px" },
                      fontFamily: `"Times New Roman", serif`,
                    }}
                  >
                    Disability
                    <br />
                    People
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT CONTENT */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: "580px",
                  mx: "auto",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",

                  height: "100%",
                }}
              >
                <Stack
                  direction="row"
                  spacing={0.8}
                  alignItems="center"
                  sx={{ mb: 1.5 }}
                >
                  <BoltIcon
                    sx={{
                      color: "#ef7f1a",
                      fontSize: 17,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#ef7f1a",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                      fontFamily: `"Times New Roman", serif`,
                    }}
                  >
                    OUR CASE STUDY
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "34px",
                      sm: "44px",
                      md: "56px",
                      lg: "62px",
                    },

                    fontWeight: 800,

                    lineHeight: {
                      xs: 1.12,
                      md: 1.08,
                    },

                    color: "#111",

                    mb: 2.5,

                    fontFamily: `"Playfair Display", serif`,
                  }}
                >
                  Enhancing Freight
                  <br />
                  Efficiency
                </Typography>

                <Typography
                  sx={{
                    color: "#555",

                    lineHeight: 1.95,

                    mb: 2.2,

                    fontSize: {
                      xs: "14px",
                      md: "20px",
                    },

                    textAlign: "justify",

                    fontFamily: `"Times New Roman", serif`,
                  }}
                >
                  A leading manufacturing company was struggling with inefficiencies in its global shipping operations. High transit costs, frequent customs delays, and a lack of real-time shipment tracking were causing disruptions in the supply chain. These challenges led to increased operational expenses and delays in deliveries, affecting overall business performance.
                </Typography>

                <Typography
                  sx={{
                    color: "#555",

                    lineHeight: 1.95,

                    fontSize: {
                      xs: "14px",
                      md: "20px",
                    },

                    textAlign: "justify",

                    fontFamily: `"Times New Roman", serif`,
                  }}
                >
                 To overcome these issues, SSS Sai Shipping Services Pvt Ltd. 
                 developed a customized logistics solution. By optimizing freight 
                 scheduling, streamlining customs clearance procedures, and integrating
                  real-time shipment tracking, we improved visibility and efficiency in 
                  their supply chain. Our expertise in global logistics ensured seamless 
                  coordination between suppliers, carriers, and regulatory authorities.


                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* DELIVERY MAN */}
        <Box
          component="img"
          src={deliveryManImg}
          alt=""
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,

            height: {
              xs: 100,
              sm: 150,
              md: 220,
            },

            objectFit: "contain",

            zIndex: 5,
          }}
        />
      </Box>

      {/* FEATURES SECTION */}
      <Box>
        {/* TOP BANNER */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 220, md: 280 },

            display: "flex",
            alignItems: "center",

            overflow: "hidden",

            backgroundImage:
              "url(https://saishipping.com/images/features-bg.jpg)",

            backgroundSize: "cover",
            backgroundPosition: "center",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(139,55,5,0.88)",
            },
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Grid container alignItems="center" spacing={3}>
              {/* LEFT TEXT */}
              <Grid item xs={12} md={7}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12px",
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    mb: 1.5,
                    fontFamily: `"Times New Roman", serif`,
                  }}
                >
                  ⚡ LOGISTICS SOLUTIONS
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "28px", md: "44px" },
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.25,
                    fontFamily: `"Playfair Display", serif`,
                  }}
                >
                  Logistics Features That
                  <br />
                  We Can Providing
                </Typography>
              </Grid>

              {/* BUTTON */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  textAlign: {
                    xs: "left",
                    md: "right",
                  },
                }}
              >
                <Button
                  onClick={() => navigate("/contact")}
                  sx={{
                    backgroundColor: "#ef7f1a",
                    color: "#fff",

                    px: 5,
                    py: 2,

                    borderRadius: 0,

                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: 2,

                    fontFamily: `"Playfair Display", serif`,

                    "&:hover": {
                      backgroundColor: "#d66f0e",
                    },
                  }}
                >
                  CONTACT US
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* FEATURES BOTTOM */}
        <Box
          sx={{
            py: { xs: 6, md: 7 },
            backgroundColor: "#fff",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              {features.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Stack direction="row" spacing={2.2}>
                    {/* ICON */}
                    <Box
                      sx={{
                        width: 65,
                        height: 65,
                        borderRadius: "50%",
                        backgroundColor: "#fff3e9",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* TEXT */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#111",
                          mb: 1,
                          fontFamily: `"Playfair Display", serif`,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#666",
                          lineHeight: 1.9,
                          fontSize: "14px",
                          fontFamily: `"Times New Roman", serif`,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}