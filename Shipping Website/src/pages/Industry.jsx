import React from "react";
import { Box, Typography, Container } from "@mui/material";

// Images
import aboutBanner from "../assets/images/about-banner.jpg";

import industry1 from "../assets/images/industry-1.jpg";
import industry2 from "../assets/images/industry-2.jpg";
import industry3 from "../assets/images/industry-3.jpg";
import industry4 from "../assets/images/industry-4.jpg";

import automobile from "../assets/images/automobile.jpg";
import itites from "../assets/images/it-ites.jpg";
import liquor from "../assets/images/liquor.jpg";
import chemical from "../assets/images/chemical.jpg";
import food from "../assets/images/food.jpg";
import pharmaceutical from "../assets/images/pharmaceutical.jpg";
import hospitality from "../assets/images/hospitality.jpg";
import electronics from "../assets/images/electronics.jpg";
import agricultural from "../assets/images/agricultural.jpg";
import machinery from "../assets/images/machinery.jpg";
import paper from "../assets/images/paper.jpg";
import steel from "../assets/images/steel.jpg";
import textile from "../assets/images/textile.jpg";
import sportsEquipment from "../assets/images/sports-equipment.jpg";

function Industry() {
  const industryImages = [
    { img: industry1, title: "Community Park" },
    { img: industry2, title: "Modern Architecture" },
    { img: industry3, title: "Playground Area" },
    { img: industry4, title: "Green Spaces" },
  ];

  const industries = [
    {
      img: automobile,
      title: "AUTOMOBILE",
      desc: "SSS Sai Shipping Services offers seamless logistics for the automobile industry, managing vehicle transportation, spare parts supply chain, and global freight forwarding. Our expertise ensures timely delivery, customs clearance, and warehousing solutions, supporting manufacturers, dealers, and suppliers with cost-effective, secure, and efficient shipping services for vehicles and components worldwide.",
    },
    {
      img: itites,
      title: "IT/ITES",
      desc: "We provide specialized logistics for IT/ITES, ensuring the safe transport of hardware, servers, and networking equipment. Our solutions include secure packaging, temperature-controlled storage, and rapid delivery to data centers, offices, and technology hubs. With end-to-end supply chain management, we support seamless global operations for IT companies and service providers.",
      featured: true,
    },
    {
      img: liquor,
      title: "LIQUOR",
      desc: "Handling liquor logistics requires precision, compliance, and safety. We specialize in temperature-controlled shipping, customs clearance, and legal compliance for alcohol transportation. Whether for breweries, distilleries, or retailers, our efficient supply chain solutions ensure timely delivery of wines, spirits, and beverages while adhering to international trade regulations.",
    },
    {
      img: chemical,
      title: "CHEMICAL",
      desc: "Handling chemical logistics requires precision, compliance, and safety. We specialize in the transportation of hazardous and non-hazardous chemicals, ensuring proper handling, temperature control, and regulatory compliance. From industrial solvents to specialty chemicals, our efficient supply chain solutions guarantee secure and timely delivery while adhering to international safety and environmental regulations.",
    },
    {
      img: food,
      title: "FOOD",
      desc: "SSS Sai Shipping Services ensures safety of the food shipments with temperature-controlled logistics, cold storage facilities, and efficient distribution networks. From raw material to packaged food, we manage every aspect of the supply chain, ensuring timely delivery while maintaining quality and regulatory compliance across domestic and international markets.",
    },
    {
      img: pharmaceutical,
      title: "PHARMACEUTICAL",
      desc: "We provide specialized pharmaceutical logistics, including temperature-sensitive shipping, secure packaging, and regulatory compliance. From raw materials to finished medicines, we ensure timely and safe delivery with GDP-compliant processes, cold chain solutions, and strict quality control, supporting pharmaceutical manufacturers, distributors, and healthcare providers globally.",
    },
    {
      img: hospitality,
      title: "HOSPITALITY",
      desc: "Supporting the hospitality sector, we offer logistics solutions for hotels, resorts, and restaurants. Our services include the transportation of furniture, kitchen equipment, linens, and supplies. With seamless inventory management, warehousing, and timely delivery, we help businesses maintain uninterrupted operations and exceptional guest experiences.",
    },
    {
      img: electronics,
      title: "ELECTRONICS",
      desc: "Our electronics logistics services ensure safe transportation of consumer electronics, industrial equipment, and fragile components. With specialized packaging, secure handling, and global freight forwarding, we help manufacturers and retailers distribute products efficiently while preventing damage and ensuring compliance with international shipping regulations.",
    },
    {
      img: agricultural,
      title: "AGRICULTURAL",
      desc: "We offer comprehensive agricultural logistics, ensuring the timely transportation of farm produce, fertilizers, and machinery. Our services include cold storage, bulk cargo handling, and export solutions, supporting farmers and agribusinesses in reaching domestic and global markets with fresh and high-quality products.",
    },
    {
      img: machinery,
      title: "MACHINERY",
      desc: "Efficient machinery logistics demands precision, safety, and expertise. We specialize in transporting heavy equipment, industrial machinery, and components with secure handling, route optimization, and compliance. From manufacturing units to construction sites, our end-to-end solutions ensure timely delivery, minimizing downtime and maximizing efficiency for seamless operations.",
    },
    {
      img: paper,
      title: "PAPER",
      desc: "SSS Sai Shipping Services specializes in paper logistics, Managing clearance and bulk transportation of Raw Pulp and starch and finished product of paper, tissue and other With secure warehousing, optimized shipping routes, and cost-effective solutions, we help manufacturers and publishers distribute paper products efficiently while ensuring sustainability and minimal transit damage.",
    },
    {
      img: steel,
      title: "STEEL",
      desc: "We offer specialized logistics for steel products, including raw materials, sheets, coils, and finished structures. Our heavy-duty cargo handling, multimodal transportation, and warehousing solutions ensure smooth supply chain operations, helping manufacturers and construction companies meet demand efficiently and cost-effectively.",
    },
    {
      img: textile,
      title: "TEXTILE",
      desc: "Our textile logistics services support manufacturers, exporters, and retailers in transporting fabrics, garments, and raw materials. We provide warehousing, inventory management, and efficient freight forwarding solutions, ensuring timely deliveries while maintaining product quality and meeting international trade regulations.",
    },
    {
      img: sportsEquipment,
      title: "SPORTS EQUIPMENT",
      desc: "We ensure the safe and efficient transportation of sports equipment, apparel, and accessories for manufacturers, retailers, and event organizers. Our customized logistics solutions include secure packaging, global distribution, and warehousing, ensuring timely and damage-free delivery for the sports industry.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f7f9fc" }}>
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
          alt="Industry Banner"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 14, md: 22 },
              color: "#ED6637",
              fontWeight: 700,
              fontFamily: '"Times New Roman", serif',
              letterSpacing: 2,
            }}
          >
            Trusted by Leading Businesses Worldwide
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 28, sm: 45, md: 90 },
              fontWeight: 900,
              color: "#000",
              fontFamily: '"Times New Roman", serif',
              lineHeight: 1.1,
              mt: 1,
            }}
          >
            Industry We Offer
          </Typography>
        </Box>
      </Box>

      {/* CONTENT SECTION */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8 }, py: 10 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* LEFT TEXT */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 26, md: 40 },
                fontWeight: 800,
                color: "#0b1b3a",
                textTransform: "uppercase", 
                fontFamily: 'serif',
                mb: 3,
              }}
            >
              Services we offer to various industries
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 15, md: 18 },
                color: "#555",
                lineHeight: 2,
                textAlign: "justify",
                mb: 3,
                fontFamily: '"Georgia", serif',
              }}
            >
              At SSS Sai Shipping Services Pvt Ltd., we provide comprehensive
              logistics solutions tailored to diverse industries. From
              manufacturing and automotive to retail, energy, and beyond, our
              expertise ensures seamless supply chain management. With a
              commitment to efficiency, reliability, and global reach, we cater
              to businesses of all scales, delivering customized shipping
              solutions that drive success.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 15, md: 18 },
                color: "#555",
                lineHeight: 2,
                textAlign: "justify",
                fontFamily: '"Georgia", serif',
              }}
            >
              With a strong global network and industry-specific expertise, Sai
              Shipping Services Private Ltd. offers end-to-end logistics
              solutions that adapt to the unique challenges of each sector.
              Whether it's handling bulk shipments, time-sensitive deliveries,
              or specialized freight, our innovative approach ensures smooth
              operations, cost efficiency, and uninterrupted supply chain flow
              for our clients worldwide.
            </Typography>
          </Box>

          {/* RIGHT IMAGES */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            {industryImages.map((item, i) => (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  height: { xs: 160, sm: 200, md: 260 },
                  cursor: "pointer",
                  "&:hover img": { transform: "scale(1.1)" },
                  "&:hover .overlay": { opacity: 1 },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.4s ease",
                  }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "#ED6637",
                    textAlign: "center",
                    py: 1.5,
                    opacity: 0,
                    transition: "0.4s ease",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: 12, md: 16 },
                      fontWeight: 700,
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* INDUSTRY CARDS */}
      <Container maxWidth="xl" sx={{ pb: { xs: 4, md: 6 }, mb: 10, }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 400px)", // fixed the small width cards all
            },
            justifyContent: "center",
            alignItems: "stretch",
            gap: "30px",
            rowGap: "30px",
          }}
        >
          {industries.map((item) => (
            <Box
              key={item.title}
              sx={{
                background: "#fff",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                height: "100%", 
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 14px 35px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center", 
                    display: "block",
                    transition: "transform 0.4s ease",

                    "&:hover": {
                      transform: "scale(1.06)",
                    },
                  }}
                />
              </Box>
              <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 24 },
                    fontWeight: 800,
                    color: "#333",
                    mb: 1.5,
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    color: "#555",
                    lineHeight: 1.7,
                    textAlign: "justify",
                    fontFamily: '"Georgia", serif',
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
  );
}

export default Industry;
