import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import aboutBanner from "../assets/images/about-banner.jpg";
import aboutImage from "../assets/images/founder1.jpeg";

function AboutUs() {
  return (
    <Box sx={{ backgroundColor: "#f7f9fc" }}>

      {/* HERO SECTION */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: "280px",
                  sm: "350px",
                  md: "500px",
                },
                overflow: "hidden",
              }}
            >
              {/* Banner Image */}
              <Box
                component="img"
                src={aboutBanner}
                alt="Contact Banner"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            px: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "20px" },
              color: "#ffb347",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            International Logistics
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "40px", md: "80px" },
              fontWeight: 900,
              color: "#fff",
              fontFamily: "serif",
              lineHeight: 1.1,
              mt: 1,
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 },  mt: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
            gap: { xs: 5, md: 10 },
            alignItems: "center",
          }}
        >

          {/* LEFT IMAGE CARD */}
          <Paper
            elevation={6}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              transform: { md: "translateY(-20px)" },
            }}
          >
            <Box
              component="img"
              src={aboutImage}
              alt="Founder"
              sx={{
                width: "100%",
                height: { xs: "340px", md: "560px" },
                objectFit: "cover",
              }}
            />
            <Box sx={{ p: 2, backgroundColor: "#0b1b3a" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Founder - Mr. Haresh A Dhakan
              </Typography>
              <Typography sx={{ color: "#ffb347", fontSize: "13px" }}>
                Customs & Logistics Expert
              </Typography>
            </Box>
          </Paper>

          {/* RIGHT CONTENT */}
          <Box>
            <Typography
              sx={{
                color: "#ff7a00",
                fontWeight: 700,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              ABOUT OUR COMPANY
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "28px", md: "44px" },
                fontWeight: 900,
                color: "#0b1b3a",
                fontFamily: "serif",
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Trusted Logistics & Customs Clearance Partner Since 1988
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 2,
                mb: 2,
              }}
            >
              Founded by Mr. Haresh A Dhakan in 1988, our organization began as a small
              Licensed Customs House Agent (CHA) firm and has now grown into a
              nationwide logistics network with 12+ branches and global associates.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 2,
                mb: 2,
              }}
            >
              With decades of experience, we have successfully handled over 50,000+
              TEUs of sea freight and 500+ tons of air cargo annually, ensuring smooth
              and efficient customs clearance and freight forwarding services.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 2,
              }}
            >
              Backed by 300+ skilled professionals and retired government experts, we
              deliver reliable logistics solutions with precision, compliance, and trust.
            </Typography>

            {/* HIGHLIGHT BOX */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                backgroundColor: "#0b1b3a",
                borderRadius: 2,
              }}
            >
              <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                ✔ 35+ Years Experience & Global Network
              </Typography>
              <Typography sx={{ color: "#ffb347", fontSize: "14px", mt: 1 }}>
                Efficient, secure & compliant logistics solutions worldwide
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;