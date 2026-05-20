import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const tabs = ["Air & Sea", "FSSAI", "CDSCO", "Jewellery & Stone Clearance"];

const exportData = {
  "Air & Sea": {
    heroTitle: "Air & Sea – SSS Sai Shipping Services Pvt Ltd.",
    heroImg: "https://saishipping.com/images/air-export-1.jpg",
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
    bottomImg1: "https://saishipping.com/images/air-export-2.jpg",
    bottomImg2: "https://saishipping.com/images/air-export-3.jpg",
    faqTitle: "Helping You Understand Air & Sea Services",
    faqs: [
      { q: "What types of transport services do you offer?", a: "We provide a full range of transport solutions, including road, rail, sea, and air freight, ensuring flexible and efficient cargo movement based on your business needs." },
      { q: "How do you ensure timely deliveries?", a: "We use advanced tracking systems, optimized route planning, and a dedicated logistics team to minimize delays and ensure reliable, on-time deliveries." },
      { q: "Can you handle large or specialized cargo?", a: "Yes, we offer customized transport solutions for oversized, heavy, fragile, and temperature-sensitive cargo, ensuring safe and compliant transportation." },
      { q: "How can I track my shipment in real time?", a: "Our tracking system allows you to monitor your shipment's status in real time, providing updates and ensuring complete visibility throughout the transportation process." },
    ],
  },

  FSSAI: {
    heroTitle: "FSSAI Export Clearance – SSS Sai Shipping Services Pvt Ltd.",
    heroImg: "https://saishipping.com/images/fssai-export-1.jpg",
    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide seamless FSSAI export clearance solutions to ensure your food products meet international safety standards and regulations. With our expertise in food compliance and global trade, we manage every aspect of the export process, from documentation to final customs approval.\n\nExporting food products is more than just shipping—it's about ensuring compliance, maintaining quality, and meeting global standards. Our team of specialists handles everything from obtaining FSSAI approvals to coordinating with regulatory authorities, offering tailored solutions for businesses involved in food exports. Whether you're exporting processed foods, organic products, or specialty items like saffron, we ensure a hassle-free clearance process.",
    bottomTitle: "A Trusted Compliance Partner",
    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are dedicated to providing a smooth and efficient FSSAI export clearance experience. From the moment you initiate your export, our team ensures proper documentation, end-to-end compliance checks, and real-time shipment tracking. Our robust infrastructure and advanced logistics technology help minimize delays, reduce risks, and enhance operational efficiency. Every export matters, and that's why we offer personalized compliance solutions, expert consultation, and 24/7 assistance. Whether it's a small food consignment or large-scale export, we ensure regulatory adherence and smooth customs clearance. Your exports, our expertise—delivering global standards.",
    bottomPoints: [
      "Comprehensive Compliance for Global Trade",
      "Efficient Handling of FSSAI Approvals & Certifications",
      "Specialized Solutions for Food & Agricultural Exports",
      "Dedicated Support for Hassle-free Clearance",
    ],
    bottomImg1: "https://saishipping.com/images/fssai-export-2.jpg",
    bottomImg2: "https://saishipping.com/images/fssai-export-3.jpg",
    faqTitle: "Helping You Understand FSSAI Services",
    faqs: [
      { q: "What are the FSSAI requirements for food exports?", a: "We manage all necessary FSSAI approvals, health certificates, and compliance documentation to ensure seamless export clearance for food products." },
      { q: "How do you ensure food safety compliance during export?", a: "Our experts handle lab testing, labeling requirements, and regulatory compliance to meet international food safety standards." },
      { q: "Can you assist with FSSAI certification for saffron exports?", a: "Yes, we specialize in saffron export clearance, ensuring compliance with FSSAI regulations, proper documentation, and smooth customs approval." },
      { q: "How can I track my food export shipment?", a: "Our real-time tracking system allows you to monitor your shipment throughout the FSSAI clearance and international delivery process." },
    ],
  },

  CDSCO: {
    heroTitle: "CDSCO Export Clearance – SSS Sai Shipping Services Pvt Ltd.",
    heroImg: "https://saishipping.com/images/cdsco-export-1.jpg",
    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide seamless CDSCO export clearance solutions to ensure that your pharmaceutical and medical products meet regulatory requirements efficiently and securely. With our expertise in handling Central Drugs Standard Control Organization (CDSCO) compliance, we manage every aspect of the export process, from documentation to final approval.\n\nCDSCO clearance is more than just regulatory compliance—it's about ensuring product safety, reducing risks, and facilitating smooth international trade. Our team of experts handles licensing, registration, and regulatory approvals, offering tailored solutions for pharmaceutical, biotechnology, and medical device manufacturers. Whether you require assistance with drug exports, medical equipment clearance, or compliance documentation, we provide the right solution to meet your needs.",
    bottomTitle: "A Reliable Regulatory Partner",
    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are committed to delivering a hassle-free and efficient CDSCO clearance experience. From the moment you engage our services, our team ensures a smooth process with end-to-end coordination and real-time tracking. Our modern infrastructure and deep regulatory knowledge allow us to streamline approvals, minimize delays, and enhance compliance efficiency. We understand the critical nature of medical and pharmaceutical exports, which is why we offer personalized solutions, expert guidance, and 24/7 support. Whether it's a single shipment or ongoing exports, we ensure your products meet CDSCO regulations and international standards.",
    bottomPoints: [
      "Global Expertise, Local Compliance",
      "Seamless Coordination from Start to Finish",
      "Innovative Solutions for Regulatory Approvals",
      "Dedicated Support Every Step of the Way",
    ],
    bottomImg1: "https://saishipping.com/images/cdsco-export-2.jpg",
    bottomImg2: "https://saishipping.com/images/cdsco-export-3.jpg",
    faqTitle: "Helping You Understand CDSCO Services",
    faqs: [
      { q: "What are the CDSCO requirements for pharmaceutical exports?", a: "We handle licensing, regulatory documentation, and product registration to ensure compliance with CDSCO guidelines for international trade." },
      { q: "How do you ensure compliance with medical device exports?", a: "Our experts manage CDSCO certifications, labeling requirements, and quality approvals to meet international regulatory standards." },
      { q: "Can you assist with CDSCO clearance for biotechnology products?", a: "Yes, we specialize in CDSCO regulatory approvals, ensuring smooth export clearance for biotechnology and pharmaceutical products." },
      { q: "How can I track my shipment during the CDSCO clearance process?", a: "Our real-time tracking system allows you to monitor your shipment throughout the regulatory approval and export process." },
    ],
  },

  "Jewellery & Stone Clearance": {
    heroTitle: "Jewellery & Stone Clearance – SSS Sai Shipping Services Pvt Ltd.",
    heroImg: "https://saishipping.com/images/saffron-export-1.jpg",
    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we specialize in seamless clearance solutions for jewellery, gemstones, and saffron exports, ensuring hassle-free international trade. Our team manages all customs regulations, compliance documentation, and quality certifications to ensure a smooth export process.\n\nExporting high-value items like jewellery, precious stones, and saffron requires meticulous handling, strict security measures, and adherence to international trade laws. We provide end-to-end support, from valuation assessments to export licensing and clearance, helping businesses navigate complex regulatory frameworks with ease.",
    bottomTitle: "Trusted Export Clearance Partner",
    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we ensure a fast and secure clearance process for high-value commodities. Our experienced team coordinates with customs authorities, handles required certifications, and ensures smooth transit of your exports. With real-time tracking, stringent security protocols, and personalized support, we guarantee a seamless export experience. Whether it's gold, diamonds, gemstones, or saffron, we offer expert guidance and 24/7 assistance to streamline your supply chain.",
    bottomPoints: [
      "Global Trade Compliance & Documentation",
      "Secure Handling & Customs Coordination",
      "Expertise in High-Value Goods Export",
      "Real-Time Tracking & Dedicated Support",
    ],
    bottomImg1: "https://saishipping.com/images/saffron-export-2.jpg",
    bottomImg2: "https://saishipping.com/images/saffron-export-3.jpg",
    faqTitle: "Helping You Understand Jewellery & Stone Clearance Services",
    faqs: [
      { q: "What are the export requirements for jewellery and gemstones?", a: "We handle valuation, hallmark certification, export licenses, and customs clearance to comply with international trade regulations." },
      { q: "How do you ensure the safety of high-value shipments?", a: "Our secure logistics network, insurance options, and real-time tracking ensure safe and reliable transportation for jewellery and gemstones." },
      { q: "Can you assist with saffron export compliance?", a: "Yes, we manage FSSAI approvals, quality certification, and proper documentation for smooth saffron export clearance." },
      { q: "How can I track my shipment during customs clearance?", a: "Our real-time tracking system allows you to monitor your jewellery, gemstone, and saffron shipments throughout the clearance process." },
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
      <Box component="img" src="https://saishipping.com/images/about-banner.jpg" alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <Box component="img" src="https://saishipping.com/images/plane-bg.png" alt="" sx={{ position: "absolute", left: 0, bottom: 0, width: { xs: "60%", md: "36%" }, objectFit: "contain" }} />
      <Box component="img" src="https://saishipping.com/images/ship-bg.png" alt="" sx={{ position: "absolute", right: 0, bottom: 0, width: { xs: "60%", md: "36%" }, objectFit: "contain" }} />
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <Typography sx={{ color: "#eb7a12", fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}>
          Export / Custom Clearance
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
          Schedule your initial consultation today and start your journey towards seamless, stress-free Export / Custom Clearance. Let us handle your logistics with expertise and efficiency. Contact us now!
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

export default function CustomClearanceExport() {
  const [activeTab, setActiveTab] = useState("Air & Sea");
  const data = exportData[activeTab];
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