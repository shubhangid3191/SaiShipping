import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import aboutBanner from "../assets/images/about-banner.jpg";
import import1 from "../assets/images/import1.jpg";
import import2 from "../assets/images/import2.jpg";
import import3 from "../assets/images/import3.jpg";
import import4 from "../assets/images/import4.jpg";
import import5 from "../assets/images/import5.jpg";
import import6 from "../assets/images/import6.jpg";
import import7 from "../assets/images/import7.jpg";
import import8 from "../assets/images/import8.jpg";
import import9 from "../assets/images/import9.jpg";
import import10 from "../assets/images/import10.jpg";
import import11 from "../assets/images/import11.jpg";
import import12 from "../assets/images/import12.jpg";

const tabs = ["Air & Sea", "FSSAI", "CDSCO", "Jewellery & Stone Clearance"];

const importData = {
  "Air & Sea": {
    heroTitle: "Air & Sea – SSS Sai Shipping Services Pvt Ltd.",
    heroImg: import1,
    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide seamless Air & Sea solutions to ensure your cargo reaches its destination efficiently, securely, and on time. With our global logistics network and expertise, we manage every aspect of your supply chain, from documentation to final delivery.\n\nAir & Sea is more than just transportation—it's about optimizing logistics, reducing costs, and ensuring timely deliveries. Our team of experts handles everything from cargo booking to customs clearance, offering tailored solutions for businesses across industries. Whether you need air, sea, road, or multimodal transport, we have the right solution for your needs.",
    bottomTitle: "A Reliable Logistics Partner",
    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are committed to providing a hassle-free and efficient Air & Sea experience. From the moment you engage our services, our team ensures a smooth process with end-to-end coordination and real-time tracking. Our modern infrastructure and advanced logistics technology allow us to streamline operations, minimize delays, and enhance cost efficiency. We understand that every shipment is crucial, which is why we offer personalized solutions, expert guidance, and 24/7 support. Whether it's a small parcel or large-scale cargo, we ensure your goods reach their destination safely and on time. Your logistics, our expertise—delivering beyond expectations.",
    bottomPoints: [
      "Global Expertise, Local Efficiency",
      "Seamless Coordination from Start to Finish",
      "Innovative Solutions for Complex Logistics",
      "Dedicated Support Every Step of the Way",
    ],
    bottomImg1: import2,
    bottomImg2: import3,
    faqTitle: "Helping You Understand Air & Sea Services",
    faqs: [
      { q: "What types of transport services do you offer?", a: "We provide a full range of transport solutions, including road, rail, sea, and air freight, ensuring flexible and efficient cargo movement based on your business needs." },
      { q: "How do you ensure timely deliveries?", a: "We use advanced tracking systems, optimized route planning, and a dedicated logistics team to minimize delays and ensure reliable, on-time deliveries." },
      { q: "Can you handle large or specialized cargo?", a: "Yes, we offer customized transport solutions for oversized, heavy, fragile, and temperature-sensitive cargo, ensuring safe and compliant transportation." },
      { q: "How can I track my shipment in real time?", a: "Our tracking system allows you to monitor your shipment's status in real time, providing updates and ensuring complete visibility throughout the transportation process." },
    ],
  },

  FSSAI: {
    heroTitle: "FSSAI Compliance & Freight Forwarding – SSS Sai Shipping Services Pvt Ltd.",
    heroImg: import4,
    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide seamless freight forwarding solutions while ensuring FSSAI compliance for food-related shipments. Our services guarantee your cargo reaches its destination efficiently, securely, and on time. With our global logistics network and expertise, we handle every aspect of your supply chain, from documentation to final delivery.\n\nFreight forwarding is more than just transportation—it's about optimizing logistics, reducing costs, and ensuring timely deliveries. Our team of experts manages everything from cargo booking to customs clearance while adhering to FSSAI regulations for food shipments. Whether you need air, sea, road, or multimodal transport, we offer the right solution for your needs.",
    bottomTitle: "A Reliable Logistics Partner",
    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are committed to providing a hassle-free and efficient freight forwarding experience. From the moment you engage our services, our team ensures smooth operations with end-to-end coordination and real-time tracking. Our modern infrastructure and advanced logistics technology streamline operations, minimize delays, and enhance cost efficiency. We understand that every shipment is crucial, which is why we offer personalized solutions, expert guidance, and 24/7 support. Whether it's a small parcel or large-scale cargo, we ensure your goods reach their destination safely and on time. Your logistics, our expertise—delivering beyond expectations.",
    bottomPoints: [
      "Global Expertise, Local Efficiency",
      "Seamless Coordination from Start to Finish",
      "Innovative Solutions for Complex Logistics",
      "Dedicated Support Every Step of the Way",
    ],
    bottomImg1: import5,
    bottomImg2: import6,
    faqTitle: "Helping You Understand FSSAI Services",
    faqs: [
      { q: "What types of transport services do you offer?", a: "We provide a full range of transport solutions, including road, rail, sea, and air freight, ensuring flexible and efficient cargo movement based on your business needs." },
      { q: "How do you ensure timely deliveries?", a: "We use advanced tracking systems, optimized route planning, and a dedicated logistics team to minimize delays and ensure reliable, on-time deliveries." },
      { q: "Can you handle food shipments under FSSAI regulations?", a: "Yes, we specialize in FSSAI-compliant logistics, ensuring proper documentation, storage, and transportation for food and perishable goods." },
      { q: "How can I track my shipment in real time?", a: "Our tracking system allows you to monitor your shipment's status in real time, providing updates and ensuring complete visibility throughout the transportation process." },
    ],
  },

  CDSCO: {
    heroTitle: "CDSCO – SSS Sai Shipping Services Pvt Ltd.",
    heroImg: import7,
    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we specialize in CDSCO-compliant logistics, ensuring the seamless transportation of pharmaceuticals, medical devices, and regulated products. Our expertise in regulatory compliance guarantees that your shipments meet all safety and documentation requirements for hassle-free import and export.\n\nCDSCO-compliant logistics go beyond standard freight forwarding—it's about strict adherence to safety regulations, proper handling, and timely deliveries. Our dedicated team ensures end-to-end coordination, from obtaining necessary approvals to customs clearance. Whether you require air, sea, road, or multimodal transport, we provide tailored solutions for pharmaceutical and healthcare industries.",
    bottomTitle: "A Trusted CDSCO Logistics Partner",
    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we prioritize compliance, security, and efficiency in every shipment. Our robust infrastructure, advanced tracking systems, and expert team ensure smooth operations, minimizing delays and ensuring cost-effectiveness. From small medical shipments to large-scale pharmaceutical consignments, we provide personalized solutions with real-time monitoring and 24/7 support. Your compliance, our expertise—delivering with precision and reliability.",
    bottomPoints: [
      "Global Compliance, Local Expertise",
      "Seamless CDSCO Coordination from Start to Finish",
      "Tailored Solutions for Regulated Shipments",
      "Dedicated Support for Regulatory Logistics",
    ],
    bottomImg1: import8,
    bottomImg2: import9,
    faqTitle: "Helping You Understand CDSCO Services",
    faqs: [
      { q: "What types of products require CDSCO compliance?", a: "Pharmaceuticals, medical devices, cosmetics, and certain food products require CDSCO compliance for import and distribution in India." },
      { q: "How do you ensure regulatory compliance in shipments?", a: "We handle all documentation, approvals, and quality checks, ensuring strict adherence to CDSCO regulations for smooth and hassle-free logistics." },
      { q: "Can you assist with CDSCO import and export clearances?", a: "Yes, we specialize in CDSCO import/export procedures, ensuring timely approvals, proper documentation, and seamless clearance for regulated goods." },
      { q: "How can I track my CDSCO-compliant shipment in real time?", a: "Our advanced tracking system provides real-time updates, ensuring transparency and visibility throughout the shipping process." },
    ],
  },

  "Jewellery & Stone Clearance": {
    heroTitle: "Jewellery & Stone Clearance – SSS Sai Shipping Services Pvt Ltd.",
    heroImg:import10,
    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we specialize in the seamless clearance of jewellery, precious stones, and saffron, ensuring secure, efficient, and timely customs processing. With our deep expertise in handling high-value goods, we manage all regulatory requirements, documentation, and compliance to facilitate smooth imports and exports.\n\nJewellery and saffron clearance involves more than just customs formalities—it's about ensuring compliance, minimizing risks, and delivering goods without delays. Our dedicated team handles valuation, certification, and clearance processes, providing tailored solutions for businesses dealing in luxury items. Whether you need air, sea, or multimodal transport, we offer the right clearance services to meet your needs.",
    bottomTitle: "A Trusted Partner in High-Value Shipments",
    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we ensure a hassle-free experience for the clearance of jewellery, stones, and saffron. From initial assessment to final delivery, our team coordinates each step with precision and transparency. Leveraging advanced tracking systems and strong regulatory knowledge, we streamline operations, mitigate risks, and optimize cost efficiency. Every shipment is valuable, which is why we offer personalized services, expert consultations, and 24/7 support. Whether it's a single package or bulk consignment, we guarantee safe and compliant clearance. Your trust, our expertise—delivering excellence in luxury logistics.",
    bottomPoints: [
      "Global Expertise, Local Compliance",
      "Seamless Coordination for Secure Clearance",
      "Innovative Solutions for High-Value Goods",
      "Dedicated Support from Start to Finish",
    ],
    bottomImg1: import11,
    bottomImg2: import12,
    faqTitle: "Helping You Understand Jewellery & Stone Clearance Services",
    faqs: [
      { q: "What are the customs requirements for jewellery and stone clearance?", a: "We manage all necessary documentation, including valuation certificates, duty payments, and compliance approvals, ensuring a smooth customs clearance process." },
      { q: "How do you ensure the security of high-value shipments?", a: "Our logistics network includes secure handling, real-time tracking, and insurance options to safeguard your valuable shipments from origin to destination." },
      { q: "Can you handle saffron clearance under food regulations?", a: "Yes, we specialize in saffron clearance, ensuring compliance with food safety regulations, proper documentation, and smooth customs approval." },
      { q: "How can I track my shipment during the clearance process?", a: "Our advanced tracking system provides real-time updates, allowing you to monitor your jewellery, stone, or saffron shipment throughout the clearance and delivery process." },
    ],
  },
};

function CheckGrid({ points }) {
  return (
    <Grid container spacing={2}>
      {points.map((pt, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
            <CheckCircleIcon sx={{ color: "#eb7a12", fontSize: 18, mt: 0.2 }} />
            <Typography sx={{ color: "#667085", lineHeight: 1.9, fontSize: "0.95rem" }}>{pt}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

function PageBanner({ activeTab }) {
  return (
    <Box sx={{ position: "relative", height: { xs: "300px", sm: "420px", md: "520px" }, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#f7f7f7" }}>
      <Box component="img" src={aboutBanner} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <Box component="img" src="https://saishipping.com/images/plane-bg.png" alt="" sx={{ position: "absolute", left: 0, bottom: 0, width: { xs: "60%", md: "36%" }, objectFit: "contain" }} />
      <Box component="img" src="https://saishipping.com/images/ship-bg.png" alt="" sx={{ position: "absolute", right: 0, bottom: 0, width: { xs: "60%", md: "36%" }, objectFit: "contain" }} />
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <Typography sx={{ color: "#eb7a12", fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}>
          Import / Custom Clearance
        </Typography>
        <Typography sx={{ fontSize: { xs: "2.2rem", md: "5.5rem" }, fontWeight: 900, lineHeight: 1, color: "#000", fontFamily: "Georgia, serif", textTransform: "uppercase" }}>
          {activeTab}
        </Typography>
      </Box>
    </Box>
  );
}

function HelpIcon() {
  return (
    <Box sx={{ width: 70, height: 70, mb: 2, mx: "auto" }}>
      <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M10 20C10 17.2 12.2 15 15 15H42C44.8 15 47 17.2 47 20V34C47 36.8 44.8 39 42 39H32L24 46V39H15C12.2 39 10 36.8 10 34V20Z" fill="white" fillOpacity="0.9" />
        <path d="M30 34C30 31.8 31.8 30 34 30H50C52.2 30 54 31.8 54 34V44C54 46.2 52.2 48 50 48H46V53L41 48H34C31.8 48 30 46.2 30 44V34Z" fill="white" fillOpacity="0.55" />
        <text x="27" y="33" fill="#eb7a12" fontSize="15" fontWeight="900" fontFamily="Georgia, serif" textAnchor="middle">?</text>
      </svg>
    </Box>
  );
}

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <Box sx={{ position: { md: "sticky" }, top: 30 }}>
      <Box sx={{ border: "1px solid #e5e7eb", borderRadius: "30px", overflow: "hidden", bgcolor: "#fff", mb: 4 }}>
        <Typography sx={{ px: 4, pt: 4, pb: 3, fontSize: "1.2rem", fontWeight: 700, color: "#111827", fontFamily: "Georgia, serif" }}>
          Included Services
        </Typography>
        {tabs.map((tab) => {
          const active = activeTab === tab;
          return (
            <Box key={tab} onClick={() => setActiveTab(tab)} sx={{ px: 4, py: 2.5, borderTop: "1px solid #f1f1f1", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", transition: "0.3s", "&:hover": { bgcolor: "#fff8f2" } }}>
              <Typography sx={{ fontSize: "1rem", fontFamily: "Georgia, serif", fontWeight: active ? 700 : 400, color: active ? "#eb7a12" : "#475467" }}>
                {tab}
              </Typography>
              <OpenInNewIcon sx={{ fontSize: 18, color: active ? "#eb7a12" : "#adb5bd" }} />
            </Box>
          );
        })}
      </Box>
      <Box sx={{ bgcolor: "#eb7a12", borderRadius: "30px", p: { xs: 4, md: "40px 32px" }, textAlign: "center" }}>
        <HelpIcon />
        <Typography sx={{ color: "#fff", fontSize: { xs: "2.3rem", md: "2.8rem" }, fontWeight: 700, lineHeight: 1.1, fontFamily: "Georgia, serif", mb: 2 }}>
          Need Help ?
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.95)", lineHeight: 1.9, fontSize: "0.95rem", mb: 3 }}>
          Schedule your initial consultation today and start your journey towards seamless, stress-free Import / Custom Clearance. Let us handle your logistics with expertise and efficiency. Contact us now!
        </Typography>
        <Box component="a" href="/contact" sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", px: 4, py: 1.2, borderRadius: "50px", bgcolor: "#fff", color: "#eb7a12", textDecoration: "none", fontWeight: 700, transition: "0.3s", "&:hover": { bgcolor: "#111827", color: "#fff" } }}>
          Contact Us
        </Box>
      </Box>
    </Box>
  );
}

function FAQSection({ faqTitle, faqs }) {
  const [expanded, setExpanded] = useState(0);
  return (
    <Box sx={{ mt: 8 }}>
      <Typography sx={{ color: "#eb7a12", fontWeight: 700, mb: 1 }}>Frequently Asked Questions</Typography>
      <Typography sx={{ fontSize: { xs: "2rem", md: "2.7rem" }, fontWeight: 700, fontFamily: "Georgia, serif", color: "#111827", mb: 4 }}>
        {faqTitle}
      </Typography>
      {faqs.map((faq, i) => {
        const open = expanded === i;
        return (
          <Box key={i} sx={{ borderBottom: "1px solid #ececec" }}>
            <Box onClick={() => setExpanded(open ? -1 : i)} sx={{ py: 2.5, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
              <Typography sx={{ fontWeight: 600, color: open ? "#eb7a12" : "#111827" }}>{faq.q}</Typography>
              {open ? <ExpandLessIcon sx={{ color: "#eb7a12" }} /> : <ExpandMoreIcon />}
            </Box>
            {open && <Typography sx={{ pb: 3, color: "#667085", lineHeight: 2 }}>{faq.a}</Typography>}
          </Box>
        );
      })}
    </Box>
  );
}

export default function CustomClearanceImport() {
  const [activeTab, setActiveTab] = useState("Air & Sea");
  const data = importData[activeTab];
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <PageBanner activeTab={activeTab} />
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth={false} sx={{ maxWidth: "1450px", mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "flex-start", gap: { xs: 5, md: 6 } }}>
            <Box sx={{ width: { xs: "100%", md: "340px" }, flexShrink: 0 }}>
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </Box>
            <Box sx={{ flex: 1, width: "100%", minWidth: 0 }}>
              <Box component="img" src={data.heroImg} alt="" sx={{ width: "100%", height: { xs: 260, md: 500 }, objectFit: "cover", objectPosition: "center", display: "block", mb: 5, borderRadius: "14px" }} />
              <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 700, lineHeight: 1.3, color: "#000", fontFamily: "Georgia, serif", mb: 3 }}>
                {data.heroTitle}
              </Typography>
              {data.heroText.split("\n\n").map((para, i) => (
                <Typography key={i} sx={{ color: "#667085", lineHeight: 2.1, fontSize: "1rem", mb: 3 }}>{para}</Typography>
              ))}
              <Box sx={{ mt: 6 }}>
                <Typography sx={{ fontSize: { xs: "2rem", md: "2.7rem" }, fontWeight: 700, color: "#111827", fontFamily: "Georgia, serif", mb: 3 }}>
                  {data.bottomTitle}
                </Typography>
                <Typography sx={{ color: "#667085", lineHeight: 2, mb: 4 }}>{data.bottomText}</Typography>
                <CheckGrid points={data.bottomPoints} />
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mt: 4 }}>
                  <Box component="img" src={data.bottomImg1} alt="" sx={{ width: "100%", height: { xs: 260, md: 320 }, objectFit: "cover", borderRadius: "14px" }} />
                  <Box component="img" src={data.bottomImg2} alt="" sx={{ width: "100%", height: { xs: 260, md: 320 }, objectFit: "cover", borderRadius: "14px" }} />
                </Box>
              </Box>
              <FAQSection faqTitle={data.faqTitle} faqs={data.faqs} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}