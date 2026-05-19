import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import aboutBanner from "../assets/images/about-banner.jpg";

import certificate from "../assets/images/certificate.png";
import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png";
import award3 from "../assets/images/award3.png";
import award4 from "../assets/images/award4.png";
import award5 from "../assets/images/award5.png";
import award6 from "../assets/images/award6.png";
import award7 from "../assets/images/award7.png";
import award8 from "../assets/images/award8.png";
import award9 from "../assets/images/award9.png";
import award10 from "../assets/images/award10.png";
import award11 from "../assets/images/award11.png";
import award12 from "../assets/images/award12.png";
import award13 from "../assets/images/award13.png";
import award14 from "../assets/images/award14.png";
import award15 from "../assets/images/award15.png";
import award16 from "../assets/images/award16.png";
import award17 from "../assets/images/award17.png";

const awardData = [
  {
    image: certificate,
    title: "Certified Excellence in Global Logistics",
    desc: "JCTRANS Membership Certificate – SSS Sai Shipping Services Pvt. Ltd.",
  },
  {
    image: award1,
    title: "Excellence in Logistics",
    desc: "Honored for outstanding contributions to the logistics and supply chain industry.",
  },
  {
    image: award2,
    title: "Innovation in Freight Solutions",
    desc: "Recognized for pioneering advancements in freight and transportation services.",
  },
  {
    image: award3,
    title: "Customer Trust Award",
    desc: "Awarded for exceptional service and reliability in global logistics.",
  },
  {
    image: award4,
    title: "Industry Leadership",
    desc: "Celebrated for setting benchmarks in logistics excellence and leadership.",
  },
  {
    image: award5,
    title: "Sustainability in Transport",
    desc: "Recognized for implementing eco-friendly logistics solutions.",
  },
  {
    image: award6,
    title: "CONCOR EXIM Star Award – 2019",
    desc: "Honored for outstanding performance in CHA Export, securing the 2nd position in the Northern Region.",
  },
  {
    image: award7,
    title: "International Customs Day – 2022 Recognition",
    desc: "Awarded for commendable contribution and outstanding performance in the customs sector.",
  },
  {
    image: award8,
    title: "CONCOR Awards – 2012-2013",
    desc: "Secured 1st position in CHA Exports for the Northern Region and Enhanced Performance in the North Central Region.",
  },
  {
    image: award9,
    title: "Best Customs Broker of the Year – Gujarat Star Awards",
    desc: "Recognized as the top-performing customs broker for excellence in logistics and shipping services.",
  },
  {
    image: award10,
    title: "Excellence in Logistics Sector",
    desc: "Recognized for outstanding performance and contribution to the logistics industry.",
  },
  {
    image: award11,
    title: "Best Customs Broker of the Year – Gujarat Star Awards",
    desc: "Recognized as the top-performing customs broker for excellence in logistics and shipping services.",
  },
  {
    image: award12,
    title: "Support and Dedication",
    desc: "Acknowledged for unwavering support and dedication to the team and industry.",
  },
  {
    image: award13,
    title: "Allcargo Processed to 3D",
    desc: "Innovative approach in logistics and cargo processing recognized by the industry.",
  },
  {
    image: award14,
    title: "CEO Roundtable & Awards 2017",
    desc: "Participated in the CEO Roundtable and Awards focusing on cargo, ports, and logistics.",
  },
  {
    image: award15,
    title: "Corporation of India Limited",
    desc: "Recognized by the Government of India for excellence in maritime and logistics services.",
  },
  {
    image: award16,
    title: "Pioneering Logistics Solutions",
    desc: "Recognized for exceptional efforts in advancing the logistics and supply chain sector.",
  },
  {
    image: award17,
    title: "Pioneering Logistics Solutions",
    desc: "Recognized for exceptional efforts in advancing the logistics and supply chain sector.",
  },
];

function AchievementsRewards() {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 280, sm: 350, md: 500 },
        }}
      >
        <Box
          component="img"
          src={aboutBanner}
          alt="Banner"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ED6637",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: 14, md: 22 },
              fontFamily: "Times New Roman",
            }}
          >
            Trusted by Leading Businesses Worldwide
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 40, md: 70 },
              fontWeight: 800,
              color: "#000",
              fontFamily: "Times New Roman",
            }}
          >
            Achievements & Rewards
          </Typography>
        </Box>
      </Box>

      {/* CARDS GRID (STRICT 3 COLUMN LIKE INDUSTRY PAGE) */}
      <Box sx={{ backgroundColor: "#f7f9fc", pb: 10 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 400px)",
              },
              gap: "30px",
              minHeight: 500,
              alignItems: "stretch",
              px: { xs: 2, md: 3 },
            }}
          >
            {awardData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    width: "100%",
                    height: "500px",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    backgroundColor: "#c3bfbf",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 3,
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                    onClick={() => setOpenImage(item.image)} 
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <Box
                  sx={{
                    p: 2.5,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 22 },
                      fontWeight: 700,
                      color: "#222",
                      fontFamily: "Times New Roman",
                      lineHeight: 1.4,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      color: "#555",
                      fontFamily: "Times New Roman",
                      lineHeight: 1.6,
                      maxWidth: "90%",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AchievementsRewards;
