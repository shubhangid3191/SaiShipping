import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

/* =========================================================
   TABS
========================================================= */

const tabs = [
  "Insurance",
  "Transport",
  "Consultant",
];

/* =========================================================
   DATA
========================================================= */

const additionalServicesData = {
  Insurance: {
    heroTitle:
      "Insurance Services – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      "https://saishipping.com/images/insurance-1.jpg",

    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide comprehensive cargo insurance solutions to safeguard your shipments against unforeseen risks. With our extensive industry knowledge and reliable coverage options, we ensure financial protection and peace of mind for businesses across industries.Cargo insurance is more than just a safeguard—it’s about mitigating risks, preventing losses, and ensuring business continuity. Our team of experts offers tailored policies, covering damages, theft, and other liabilities during transit. Whether you need coverage for air, sea, road, or multimodal shipments, we have the right insurance solution for your cargo.",


    midGroups: [
      {
        points: [
        ],
      },
    ],

    bottomTitle:
      "Comprehensive Protection for Your Shipments",

    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are dedicated to providing seamless and hassle-free insurance coverage. From policy selection to claims processing, our team ensures transparency, efficiency, and expert guidance. Our robust insurance network and strategic partnerships allow us to minimize financial exposure, enhance risk management, and provide fast claim settlements. We understand that every shipment is valuable, which is why we offer customized coverage, dedicated support, and 24/7 assistance. Whether it’s a single consignment or large-scale cargo, we ensure your goods are protected against potential risks. Your cargo, our commitment—ensuring security beyond expectations.",

    bottomPoints: [
      "Tailored Insurance Plans for Diverse Needs",
      "Seamless Claims Process with Expert Assistance",
      "24/7 Support for Complete Peace of Mind",
      "Ensuring Risk-Free Shipments with Trusted Expertise",
    ],

    bottomImg1:
      "https://saishipping.com/images/insurance-2.jpg",

    bottomImg2:
      "https://saishipping.com/images/insurance-3.jpg",

    faqTitle:
      "Helping You Understand Insurance Services",

    faqs: [
      {
        q: "Why is cargo insurance important?",
        a: "Cargo insurance protects goods against damage, theft, and other transit-related risks, ensuring businesses avoid financial losses and maintain supply chain stability.",
      },

      {
        q: "What types of shipments can be insured?",
        a: "We offer insurance coverage for various shipments, including general cargo, fragile items, perishables, high-value goods, and specialized equipment across all transportation modes.",
      },
      {
        q:"How does SSS Sai Shipping Services simplify the insurance claim process?",
        a:"Our team ensures a smooth claims process with transparent documentation, quick assessments, and seamless coordination with insurance providers for timely settlements."
      },
      {
        q:"Can businesses customize their cargo insurance coverage?",
        a:"Yes, we provide flexible insurance options, allowing businesses to tailor policies based on shipment type, value, and specific risk factors for optimal protection.",
      }
    ],
  },

  Transport: {
    heroTitle:
      "Transport Services – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      "https://saishipping.com/images/transport-1.jpg",

    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide reliable transport solutions to ensure seamless cargo movement across domestic and international routes. With our extensive logistics network and expertise, we handle every aspect of transportation, from scheduling to final delivery, ensuring efficiency and security.Transportation is more than just moving goods—it’s about optimizing supply chains, reducing transit times, and ensuring cost-effective solutions. Our expert team manages everything from freight scheduling to real-time tracking, offering tailored services for businesses across industries. Whether you need road, rail, air, or sea transport, we have the right solution to meet your needs.",

   

    midGroups: [
      {
        points: [
        ],
      },
    ],

    bottomTitle:
      "A Dependable Transport Partner",

    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are dedicated to providing hassle-free and efficient transport services. From the moment you book with us, our team ensures smooth coordination with advanced tracking and operational efficiency. Our modern fleet and logistics technology help streamline transport processes, reduce delays, and improve cost-effectiveness. Every shipment is critical, which is why we offer personalized solutions, expert guidance, and 24/7 support. Whether you need to move small parcels or bulk cargo, we ensure your goods reach their destination safely and on time. Your logistics, our commitment—delivering beyond expectations.",

    bottomPoints: [
      "Global Expertise, Local Efficiency",
      "Seamless Coordination from Start to Finish",
      "Innovative Solutions for Complex Logistics",
      "Dedicated Support Every Step of the Way",
    ],

    bottomImg1:
      "https://saishipping.com/images/transport-2.jpg",

    bottomImg2:
      "https://saishipping.com/images/transport-3.jpg",

    faqTitle:
      "Helping You Understand Transport Services",

    faqs: [
      {
        q: "How do you ensure timely deliveries?",
        a: "We use advanced tracking systems, optimized route planning, and a dedicated logistics team to minimize delays and ensure reliable, on-time deliveries.",
      },
      {
        q:"Can you handle large or specialized cargo?",
        a:"Yes, we offer customized transport solutions for oversized, heavy, fragile, and temperature-sensitive cargo, ensuring safe and compliant transportation."
      },
      {
        q:"How can I track my shipment in real time?",
        a:"Our tracking system allows you to monitor your shipment’s status in real time, providing updates and ensuring complete visibility throughout the transportation process."
      },
      {
        q:"How do you ensure timely deliveries?",
        a:"We use advanced tracking systems, optimized route planning, and a dedicated logistics team to minimize delays and ensure reliable, on-time deliveries."
      }
    ],
  },

  Consultant: {
    heroTitle:
      "Consultant Services – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      "https://saishipping.com/images/consultant-1.jpg",

    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we offer expert consultancy services to streamline your logistics and supply chain operations. Our team of seasoned professionals provides strategic guidance, ensuring efficiency, cost savings, and compliance with global trade regulations.Effective logistics management requires more than just transportation—it demands insight, planning, and adaptability. We analyze your shipping needs, optimize routes, and recommend best practices to enhance operational efficiency. Whether you need assistance with regulatory compliance, customs procedures, or supply chain optimization, our tailored solutions help you navigate complex logistics challenges with ease.",

    

    midGroups: [
      {
     

        points: [
        ],
      },
    ],

    bottomTitle:
      "Comprehensive Consulting for Smarter Logistics",

    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we simplify logistics decision-making with expert advisory services. Our team ensures a seamless experience from planning to execution, offering strategic insights, risk assessments, and performance optimization. With deep industry knowledge and a commitment to excellence, we empower businesses to make informed logistics choices and achieve sustainable growth.",

    bottomPoints: [
      "Tailored Solutions for Every Business Need",
      "Regulatory Compliance & Trade Advisory",
      "Optimized Logistics for Maximum Efficiency",
      "End-to-End Support for Seamless Operations",
    ],

    bottomImg1:
      "https://saishipping.com/images/consultant-2.jpg",

    bottomImg2:
      "https://saishipping.com/images/consultant-3.jpg",

    faqTitle:
      "Helping You Understand Consultant Services",

    faqs: [
      {
        q: "What consulting services do you offer?",
        a: "We offer logistics consulting, supply chain optimization, freight management strategies, and compliance guidance to improve your business operations..",
      },
      {
        q:"How can consulting help my business?",
        a:"Our consulting services help businesses reduce costs, enhance efficiency, streamline logistics, and ensure compliance with global trade regulations."
      },
        {
        q:"Do you provide industry-specific consulting?",
        a:"Yes, we offer tailored consulting services for various industries, including retail, manufacturing, pharmaceuticals, and automotive logistics."
      },
    {
        q:"How do I get started with your consulting services?",
        a:"You can contact us to schedule a consultation where we assess your needs and develop a customized logistics strategy for your business."
      }
    ],
  },
};

/* =========================================================
   CHECK GRID
========================================================= */

function CheckGrid({ points }) {
  return (
    <Grid container spacing={2}>
      {points.map((pt, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1.2,
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "#eb7a12",
                fontSize: 18,
                mt: 0.2,
              }}
            />

            <Typography
              sx={{
                color: "#667085",
                lineHeight: 1.9,
                fontSize: "0.95rem",
              }}
            >
              {pt}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

/* =========================================================
   PAGE BANNER
========================================================= */

function PageBanner({ activeTab }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: {
          xs: 320,
          md: 650,
        },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f7f7f7",
      }}
    >
      <Box
        component="img"
        src="https://saishipping.com/images/about-banner.jpg"
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        component="img"
        src="https://saishipping.com/images/plane-bg.png"
        alt=""
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: {
            xs: "60%",
            md: "36%",
          },
          objectFit: "contain",
        }}
      />

      <Box
        component="img"
        src="https://saishipping.com/images/ship-bg.png"
        alt=""
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: {
            xs: "60%",
            md: "36%",
          },
          objectFit: "contain",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#eb7a12",
            fontWeight: 700,
            mb: 1,
            fontSize: {
              xs: "1rem",
              md: "1.2rem",
            },
          }}
        >
          Additional Services
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "3rem",
              md: "7rem",
            },
            fontWeight: 900,
            lineHeight: 1,
            color: "#000",
            fontFamily: "Georgia, serif",
            textTransform: "uppercase",
          }}
        >
          {activeTab}
        </Typography>
      </Box>
    </Box>
  );
}

/* =========================================================
   HELP ICON
========================================================= */

function HelpIcon() {
  return (
    <Box
      sx={{
        width: 70,
        height: 70,
        mb: 2,
        mx: "auto",
      }}
    >
      <svg
        width="70"
        height="70"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />

        <path
          d="M10 20C10 17.2 12.2 15 15 15H42C44.8 15 47 17.2 47 20V34C47 36.8 44.8 39 42 39H32L24 46V39H15C12.2 39 10 36.8 10 34V20Z"
          fill="white"
          fillOpacity="0.9"
        />

        <path
          d="M30 34C30 31.8 31.8 30 34 30H50C52.2 30 54 31.8 54 34V44C54 46.2 52.2 48 50 48H46V53L41 48H34C31.8 48 30 46.2 30 44V34Z"
          fill="white"
          fillOpacity="0.55"
        />

        <text
          x="27"
          y="33"
          fill="#eb7a12"
          fontSize="15"
          fontWeight="900"
          fontFamily="Georgia, serif"
          textAnchor="middle"
        >
          ?
        </text>
      </svg>
    </Box>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar({
  activeTab,
  setActiveTab,
}) {
  return (
    <Box
      sx={{
        position: {
          md: "sticky",
        },
        top: 30,
      }}
    >
      <Box
        sx={{
          border: "1px solid #e5e7eb",
          borderRadius: "30px",
          overflow: "hidden",
          bgcolor: "#fff",
          mb: 4,
        }}
      >
        <Typography
          sx={{
            px: 4,
            pt: 4,
            pb: 3,
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#111827",
            fontFamily: "Georgia, serif",
          }}
        >
          Included Services
        </Typography>

        {tabs.map((tab) => {
          const active =
            activeTab === tab;

          return (
            <Box
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              sx={{
                px: 4,
                py: 2.5,
                borderTop:
                  "1px solid #f1f1f1",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "space-between",
                cursor: "pointer",
                transition: "0.3s",

                "&:hover": {
                  bgcolor:
                    "#fff8f2",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize:
                    "1rem",
                  fontFamily:
                    "Georgia, serif",
                  fontWeight:
                    active
                      ? 700
                      : 400,
                  color: active
                    ? "#eb7a12"
                    : "#475467",
                }}
              >
                {tab}
              </Typography>

              <OpenInNewIcon
                sx={{
                  fontSize: 18,
                  color: active
                    ? "#eb7a12"
                    : "#adb5bd",
                }}
              />
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          bgcolor: "#eb7a12",
          borderRadius: "30px",
          p: {
            xs: 4,
            md: "40px 32px",
          },
          textAlign: "center",
        }}
      >
        <HelpIcon />

        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "2.3rem",
              md: "2.8rem",
            },
            fontWeight: 700,
            lineHeight: 1.1,
            fontFamily:
              "Georgia, serif",
            mb: 2,
          }}
        >
          Need Help ?
        </Typography>

        <Typography
          sx={{
            color:
              "rgba(255,255,255,0.95)",
            lineHeight: 1.9,
            fontSize: "0.95rem",
            mb: 3,
          }}
        >
          Schedule your initial
          consultation today and
          start your journey
          towards seamless,
          stress-free logistics
          services.
        </Typography>

        <Box
          component="a"
          href="/contact"
          sx={{
            display:
              "inline-flex",
            alignItems:
              "center",
            justifyContent:
              "center",
            px: 4,
            py: 1.2,
            borderRadius:
              "50px",
            bgcolor: "#fff",
            color: "#eb7a12",
            textDecoration:
              "none",
            fontWeight: 700,
            transition: "0.3s",

            "&:hover": {
              bgcolor:
                "#111827",
              color: "#fff",
            },
          }}
        >
          Contact Us
        </Box>
      </Box>
    </Box>
  );
}

/* =========================================================
   FAQ
========================================================= */

function FAQSection({
  faqTitle,
  faqs,
}) {
  const [expanded, setExpanded] =
    useState(0);

  return (
    <Box sx={{ mt: 8 }}>
      <Typography
        sx={{
          color: "#eb7a12",
          fontWeight: 700,
          mb: 1,
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "2rem",
            md: "2.7rem",
          },
          fontWeight: 700,
          fontFamily:
            "Georgia, serif",
          color: "#111827",
          mb: 4,
        }}
      >
        {faqTitle}
      </Typography>

      {faqs.map((faq, i) => {
        const open =
          expanded === i;

        return (
          <Box
            key={i}
            sx={{
              borderBottom:
                "1px solid #ececec",
            }}
          >
            <Box
              onClick={() =>
                setExpanded(
                  open ? -1 : i
                )
              }
              sx={{
                py: 2.5,
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "space-between",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: open
                    ? "#eb7a12"
                    : "#111827",
                }}
              >
                {faq.q}
              </Typography>

              {open ? (
                <ExpandLessIcon
                  sx={{
                    color:
                      "#eb7a12",
                  }}
                />
              ) : (
                <ExpandMoreIcon />
              )}
            </Box>

            {open && (
              <Typography
                sx={{
                  pb: 3,
                  color:
                    "#667085",
                  lineHeight: 2,
                }}
              >
                {faq.a}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AdditionalServices() {
  const [activeTab, setActiveTab] =
    useState("Insurance");

  const data =
    additionalServicesData[
      activeTab
    ];

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <PageBanner activeTab={activeTab} />

      <Box
        sx={{
          py: {
            xs: 6,
            md: 9,
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1450px",
            mx: "auto",
            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",

              flexDirection: {
                xs: "column",
                md: "row",
              },

              alignItems: "flex-start",

              gap: {
                xs: 5,
                md: 6,
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "340px",
                },
                flexShrink: 0,
              }}
            >
              <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
                width: "100%",
                minWidth: 0,
              }}
            >
              <Box
                component="img"
                src={data.heroImg}
                alt=""
                sx={{
                  width: "100%",

                  height: {
                    xs: 260,
                    md: 500,
                  },

                  objectFit: "contain",

                  objectPosition:
                    "center",

                  display: "block",

                  mb: 5,
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },

                  fontWeight: 700,

                  lineHeight: 1.3,

                  color: "#000",

                  fontFamily:
                    "Georgia, serif",

                  mb: 3,
                }}
              >
                {data.heroTitle}
              </Typography>

              <Typography
                sx={{
                  color: "#667085",

                  lineHeight: 2.1,

                  fontSize: "1rem",

                  mb: 6,
                }}
              >
                {data.heroText}
              </Typography>

              {data.midGroups.length >
                0 && (
                <>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        md: "2.7rem",
                      },

                      fontWeight: 700,

                      color: "#111827",

                      fontFamily:
                        "Georgia, serif",

                      mb: 4,
                    }}
                  >
                    {data.midTitle}
                  </Typography>

                  {data.midGroups.map(
                    (
                      group,
                      i
                    ) => (
                      <Box
                        key={i}
                        sx={{
                          mb: 5,
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              "#667085",

                            fontWeight: 700,

                            textTransform:
                              "uppercase",

                            mb: 2,
                          }}
                        >
                          {
                            group.heading
                          }
                        </Typography>

                        <CheckGrid
                          points={
                            group.points
                          }
                        />
                      </Box>
                    )
                  )}
                </>
              )}

              <Box sx={{ mt: 6 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      md: "2.7rem",
                    },

                    fontWeight: 700,

                    color: "#111827",

                    fontFamily:
                      "Georgia, serif",

                    mb: 3,
                  }}
                >
                  {data.bottomTitle}
                </Typography>

                <Typography
                  sx={{
                    color: "#667085",
                    lineHeight: 2,
                    mb: 4,
                  }}
                >
                  {data.bottomText}
                </Typography>

                <CheckGrid
                  points={
                    data.bottomPoints
                  }
                />

                <Box
                  sx={{
                    display: "grid",

                    gridTemplateColumns:
                      {
                        xs: "1fr",
                        md: "1fr 1fr",
                      },

                    gap: 3,
                    mt: 4,
                  }}
                >
                  <Box
                    component="img"
                    src={
                      data.bottomImg1
                    }
                    alt=""
                    sx={{
                      width: "100%",

                      height: {
                        xs: 260,
                        md: 320,
                      },

                      objectFit:
                        "cover",

                      borderRadius:
                        "14px",
                    }}
                  />

                  <Box
                    component="img"
                    src={
                      data.bottomImg2
                    }
                    alt=""
                    sx={{
                      width: "100%",

                      height: {
                        xs: 260,
                        md: 320,
                      },

                      objectFit:
                        "cover",

                      borderRadius:
                        "14px",
                    }}
                  />
                </Box>
              </Box>

              <FAQSection
                faqTitle={
                  data.faqTitle
                }
                faqs={data.faqs}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}