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
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";

// ── IMAGES ────────────────────────────────────────────────────────────────────
const serv1 = "https://saishipping.com/images/serv-1.png";
const serv2 = "https://saishipping.com/images/serv-2.png";
const serv3 = "https://saishipping.com/images/serv-3.png";
const serv4 = "https://saishipping.com/images/serv-4.png";

// ── DATA ──────────────────────────────────────────────────────────────────────
const services = [
  {
    title: "FREIGHT FORWARDING",
    desc: "Freight forwarding services manage the shipment of goods across international borders, handling documentation, customs clearance, and coordinating with carriers to ensure timely and cost-effective delivery.",
    image: serv1,
    icon: <LocalShippingIcon sx={{ fontSize: 26 }} />,
    path: "/freight-forwarding",
  },
  {
    title: "CUSTOM CLEARANCE",
    desc: "Custom clearance services handle the documentation, tariffs, and regulations required to import or export goods, ensuring compliance with local laws and minimizing delays at borders.",
    image: serv2,
    icon: <DescriptionIcon sx={{ fontSize: 26 }} />,
    path: "/custom-clearance-import",
  },
  {
    title: "WAREHOUSES",
    desc: "Warehousing services provide secure storage solutions for goods before distribution. This includes bonded and non-bonded warehouses, temperature-controlled storage, inventory management, order fulfillment, and distribution hubs to streamline supply chain operations.",
    image: serv3,
    icon: <WarehouseIcon sx={{ fontSize: 26 }} />,
    path: "/warehouses",
  },
  {
    title: "ADDITIONAL SERVICES",
    desc: "Additional services enhance logistics, including cargo insurance, packaging, labeling, and reverse logistics. Door-to-door delivery, project cargo handling, and trade consulting ensure smooth freight management. These services help businesses reduce risks, improve efficiency, and comply with global shipping regulations.",
    image: serv4,
    icon: <SettingsIcon sx={{ fontSize: 26 }} />,
    path: "/additional-services",
  },
];

const features = [
  {
    icon: <HomeRepairServiceIcon sx={{ fontSize: 34, color: "#ef7f1a" }} />,
    title: "Warehouse",
    desc: "Warehouse: hub for storage, distribution, and logistics.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 34, color: "#ef7f1a" }} />,
    title: "Support 24/7",
    desc: "Warehouse: hub for storage, distribution, and logistics.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 34, color: "#ef7f1a" }} />,
    title: "Cargo Insurance",
    desc: "Warehouse: hub for storage, distribution, and logistics.",
  },
];

// ── SERVICE CARD ──────────────────────────────────────────────────────────────
function ServiceCard({ item }) {
  const navigate = useNavigate();
  return (
    <Card
      elevation={0}
      onClick={() => navigate(item.path)}
      sx={{
        width: "100%",
        borderRadius: 0,
        background: "transparent",
        overflow: "visible",
        boxShadow: "none",
        cursor: "pointer",
        "&:hover .bottom-card": { backgroundColor: "#ef7f1a" },
        "&:hover .card-title": { color: "#fff" },
        "&:hover .card-desc": { color: "rgba(255,255,255,0.92)" },
        "&:hover .read-more-text": { color: "#fff" },
        "&:hover .card-line": { backgroundColor: "rgba(255,255,255,0.3)" },
        "&:hover .arrow-btn": { backgroundColor: "#fff", color: "#ef7f1a" },
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: "relative", zIndex: 5 }}>
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "100%",
            height: { xs: 260, md: 310 },
            objectFit: "cover",
          }}
        />
        {/* ICON BADGE */}
        <Box
          sx={{
            position: "absolute",
            right: 20,
            bottom: -30,
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "#fff",
            border: "4px solid #ef7f1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            color: "#333",
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
          px: 3,
          pt: 6,
          pb: 3,
          transition: "background-color 0.35s ease",
          minHeight: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            className="card-title"
            sx={{
              fontSize: "17px",
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.3,
              mb: 2,
              transition: "color 0.35s ease",
              fontFamily: `"Playfair Display", serif`,
              letterSpacing: 0.5,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            className="card-desc"
            sx={{
              color: "#555",
              fontSize: "14px",
              lineHeight: 1.85,
              transition: "color 0.35s ease",
              fontFamily: `"Times New Roman", serif`,
            }}
          >
            {item.desc}
          </Typography>
        </Box>

        <Box>
          <Box
            className="card-line"
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#e0e0e0",
              my: 2.5,
              transition: "background-color 0.35s ease",
            }}
          />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography
              className="read-more-text"
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#111",
                textTransform: "uppercase",
                letterSpacing: 1,
                transition: "color 0.35s ease",
                fontFamily: `"Playfair Display", serif`,
              }}
            >
              READ MORE
            </Typography>
            <IconButton
              className="arrow-btn"
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "#ef7f1a",
                color: "#fff",
                borderRadius: "50%",
                transition: "all 0.35s ease",
                "&:hover": { backgroundColor: "#fff", color: "#ef7f1a" },
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function Services() {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#fff" }}>

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════ */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 320, md: 520 },
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Airplane — left */}
        <Box
          component="img"
          src="https://saishipping.com/images/about-banner.jpg"
          alt=""
          onError={(e) => { e.target.style.display = "none"; }}
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: { xs: 160, sm: 260, md: 380 },
            objectFit: "contain",
            pointerEvents: "none",
          }}
        />

        {/* Ship — right */}
        <Box
          component="img"
          src="https://saishipping.com/images/ship.png"
          alt=""
          onError={(e) => { e.target.style.display = "none"; }}
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: { xs: 180, sm: 280, md: 440 },
            objectFit: "contain",
            pointerEvents: "none",
          }}
        />

        {/* Get A Quote — top right circle */}
        <Box
          onClick={() => navigate("/get-free-quote")}
          sx={{
            position: "absolute",
            top: { xs: 16, md: 24 },
            right: { xs: 16, md: 30 },
            width: { xs: 90, md: 120 },
            height: { xs: 90, md: 120 },
            borderRadius: "50%",
            backgroundColor: "#ef7f1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 6px 24px rgba(239,127,26,0.45)",
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.06)" },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "12px", md: "15px" },
              textAlign: "center",
              lineHeight: 1.3,
              fontFamily: `"Playfair Display", serif`,
            }}
          >
            Get A<br />Quote
          </Typography>
          <ArrowForwardIcon sx={{ color: "#fff", fontSize: { xs: 14, md: 18 }, mt: 0.5 }} />
        </Box>

        {/* Center text */}
        <Box sx={{ textAlign: "center", zIndex: 5, px: 2 }}>
          <Typography
            sx={{
              color: "#ef7f1a",
              fontSize: { xs: "14px", md: "18px" },
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
              fontSize: { xs: "56px", sm: "80px", md: "110px" },
              fontWeight: 900,
              color: "#111",
              lineHeight: 1,
              fontFamily: `"Playfair Display", serif`,
            }}
          >
            Services
          </Typography>
        </Box>
      </Box>

      {/* ══════════════════════════════════════════════
          SECTION 2 — SERVICE CARDS
      ══════════════════════════════════════════════ */}
      <Box
        sx={{
          background: "linear-gradient(to right, #f5ede6 70%, #eacfba 30%)",
          py: { xs: 8, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={0.8}
              sx={{ mb: 1.5 }}
            >
              <BoltIcon sx={{ color: "#ef7f1a", fontSize: 20 }} />
              <Typography
                sx={{
                  color: "#ef7f1a",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  fontFamily: `"Times New Roman", serif`,
                }}
              >
                TRUSTED TRANSPORT SERVICE
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "40px", md: "58px" },
                fontWeight: 800,
                color: "#111",
                lineHeight: 1.15,
                fontFamily: `"Playfair Display", serif`,
                mb: 3,
              }}
            >
              Comprehensive Logistics &amp; Transport Solutions
            </Typography>

            <Typography
              sx={{
                color: "#555",
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: 1.9,
                maxWidth: "860px",
                mx: "auto",
                fontFamily: `"Times New Roman", serif`,
              }}
            >
              At SSS Sai Shipping Services Pvt. Ltd., we offer a wide range of logistics
              solutions tailored to meet your business needs. From intermodal shipping and
              cold chain logistics to fast-tracked hot shot trucking, we ensure seamless
              transportation, efficient warehousing, and smooth customs clearance. Our
              expertise guarantees reliable, cost-effective, and timely deliveries across
              global markets.
            </Typography>
          </Box>

          {/* 2×2 grid */}
          <Grid container spacing={3}>
            {services.map((item, index) => (
              <Grid item xs={12} sm={6} key={index} sx={{ display: "flex" }}>
                <ServiceCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════
          SECTION 3 — CASE STUDY
      ══════════════════════════════════════════════ */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">

            {/* LEFT image */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                  alt="Cargo Port"
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 500 },
                    objectFit: "cover",
                  }}
                />
                {/* Orange badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: "36%",
                    backgroundColor: "#ef7f1a",
                    px: 3,
                    py: 2.5,
                    minWidth: 140,
                    clipPath:
                      "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "30px",
                      lineHeight: 1,
                      fontFamily: `"Playfair Display", serif`,
                    }}
                  >
                    20k+
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      fontFamily: `"Times New Roman", serif`,
                      lineHeight: 1.4,
                      mt: 0.5,
                    }}
                  >
                    Disability<br />People
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT text */}
            <Grid item xs={12} md={6}>
              <Stack direction="row" alignItems="center" spacing={0.8} sx={{ mb: 1.5 }}>
                <BoltIcon sx={{ color: "#ef7f1a", fontSize: 20 }} />
                <Typography
                  sx={{
                    color: "#ef7f1a",
                    fontSize: "14px",
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
                  fontSize: { xs: "30px", md: "46px" },
                  fontWeight: 800,
                  color: "#111",
                  lineHeight: 1.2,
                  fontFamily: `"Playfair Display", serif`,
                  mb: 3,
                }}
              >
                Enhancing Freight<br />Efficiency
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: "15px",
                  lineHeight: 1.95,
                  fontFamily: `"Times New Roman", serif`,
                  mb: 2.5,
                }}
              >
                A leading manufacturing company was struggling with inefficiencies in
                its global shipping operations. High transit costs, frequent customs
                delays, and a lack of real-time shipment tracking were causing
                disruptions in the supply chain. These challenges led to increased
                operational expenses and delays in deliveries, affecting overall
                business performance.
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: "15px",
                  lineHeight: 1.95,
                  fontFamily: `"Times New Roman", serif`,
                }}
              >
                To overcome these issues, SSS Sai Shipping Services Pvt Ltd. developed
                a customized logistics solution. By optimizing freight scheduling,
                streamlining customs clearance procedures, and integrating real-time
                shipment tracking, we improved visibility and efficiency in their supply
                chain. Our expertise in global logistics ensured seamless coordination
                between suppliers, carriers, and regulatory authorities.
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════
          SECTION 4 — FEATURES BANNER
      ══════════════════════════════════════════════ */}
      <Box>
        {/* Banner */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 200, md: 260 },
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: "#b85a14",
            backgroundImage:
              "url(https://saishipping.com/images/features-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(165, 65, 10, 0.80)",
            },
          }}
        >
          <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12} md={7}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12px",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    mb: 1.2,
                    fontFamily: `"Times New Roman", serif`,
                  }}
                >
                  ⚡ LOGISTICS SOLUTIONS
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "26px", md: "40px" },
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.25,
                    fontFamily: `"Playfair Display", serif`,
                  }}
                >
                  Logistics Features That We<br />Can Providing
                </Typography>
              </Grid>

              <Grid item xs={12} md={5} sx={{ textAlign: { md: "right" } }}>
                <Button
                  onClick={() => navigate("/contact")}
                  sx={{
                    backgroundColor: "#ef7f1a",
                    color: "#fff",
                    px: { xs: 4, md: 6 },
                    py: 1.8,
                    borderRadius: 0,
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: 2,
                    fontFamily: `"Playfair Display", serif`,
                    "&:hover": { backgroundColor: "#d4700f" },
                  }}
                >
                  CONTACT US
                </Button>
              </Grid>
            </Grid>
          </Container>

          {/* Delivery man */}
          <Box
            component="img"
            src="https://saishipping.com/images/delivery-man.png"
            alt=""
            onError={(e) => { e.target.style.display = "none"; }}
            sx={{
              position: "absolute",
              right: { xs: 0, md: 100 },
              bottom: 0,
              height: { xs: 100, md: 200 },
              objectFit: "contain",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
        </Box>

        {/* 3 feature tiles */}
        <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl">
            <Grid container spacing={4} justifyContent="center">
              {features.map((f, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Stack direction="row" spacing={2.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        backgroundColor: "#fdf0e6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {f.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "18px",
                          color: "#111",
                          mb: 0.8,
                          fontFamily: `"Playfair Display", serif`,
                        }}
                      >
                        {f.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#666",
                          fontSize: "14px",
                          lineHeight: 1.75,
                          fontFamily: `"Times New Roman", serif`,
                        }}
                      >
                        {f.desc}
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