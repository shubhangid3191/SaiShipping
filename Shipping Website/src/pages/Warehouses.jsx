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
import aboutBanner from "../assets/images/about-banner.jpg";
import warehouse1 from "../assets/images/warehouse1.jpg";
import warehouse2 from "../assets/images/warehouse2.jpg";
import warehouse3 from "../assets/images/warehouse3.jpg";
import warehouse4 from "../assets/images/warehouse4.jpg";
import warehouse5 from "../assets/images/warehouse5.jpg";
import warehouse6 from "../assets/images/warehouse6.jpg";
import warehouse7 from "../assets/images/warehouse7.jpg";
import warehouse8 from "../assets/images/warehouse8.jpg";
import warehouse9 from "../assets/images/warehouse9.jpg";
import { Link } from "react-router-dom";

/* =========================================================
   TABS
========================================================= */

const tabs = ["Bonded", "General", "FTWZ"];

/* =========================================================
   DATA
========================================================= */

const warehouseData = {
  Bonded: {
    heroTitle:
      "Bonded Warehouses – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      warehouse1,

    heroText:
      "Customs Bonded Warehouse is a facility where imported goods can be stored and further manufacturing as well as associated activities like packing, re-packing, labelling, etc. can be carried out. The customs duty is deferred at the time of import of goods and is payable at a later stage only upon clearance of manufactured goods for home consumption. If goods are exported directly from the warehouse, no Customs duty is payable. The warehouse can be used to store locally procured domestic goods for processing.",

    midTitle: "Custom Bonded Warehouse",

    midGroups: [
      {
        heading:
          "GOODS IMPORTED IN INDIA AND STORED IN BONDED WAREHOUSE",

        points: [
          "Customs Duties Deferred",
          "IGST Deferred",
        ],
      },

      {
        heading:
          "GOODS BONDED FOR THE PURPOSE OF:",

        points: [
          "Storage",
          "Manufacture",
          "Packing",
          "Labelling Etc.",
        ],
      },

      {
        heading:
          "EXPORT OF GOODS FROM THE BONDED WAREHOUSE",

        points: [
          "No customs duty on goods exported without clearance in India.",
          "Refund of IGST payable on export can be availed.",
        ],
      },
      {
        heading:
        "LOCAL PURCHASES OF INPUTS AND CAPITAL GOODS",

        points:
        ["Applicable GST is payable on purchase of local goods."]
      },
      {
        heading:
        "DOMESTIC CLEARANCE OF GOODS MANUFACTURED / WASTE GENERATED",

        points:
        ["Applicable Customs duties payable",
         "Applicable GST is payable"
        ]
        },
        {
            heading:
            "BENEFITS OVER OTHER EXISTING DUTY EXEMPTION SCHEMES",

            points:
            ["Customs Duty deferral resulting in improved cash flows.",
             "Relevant due to phasing out of other schemes under the FTP.",
             "Facility to convert the existing facility to a bonded warehouse.",
             "No time-limit on storage of goods.",
             "No additional conditions such as fixation of SION, actual user condition, value addition or meeting of export obligations etc.",
             "Locally procured goods can also be stored",
            ]
        },
             {
            heading:
            "WHO SHOULD GO FOR IT",

            points:
            ["Companies engaged in high-volume imports and availing benefits under complicated existing schemes which are proposed to be phased out.",
             "Companies engaged in low value added processes.",
             "Companies engaged in import of inputs used for the manufacture of goods which are exported from India.",
             "Companies having a high gestation period in terms of imports and actual supply of manufactured goods.",
             "Deferred Duty Payments",
             "Re-Exporting Goods",
            ]
        }


    ],

    bottomTitle:
      "Efficient and Compliant Storage Solutions",

    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are committed to simplifying bonded warehousing for businesses across industries. From duty suspension benefits to seamless distribution management, our integrated solutions provide a competitive advantage. Our customized warehousing strategies, 24/7 security surveillance, and automated inventory systems help you maximize operational efficiency while ensuring compliance. Whether you need bulk storage, specialized handling, or international transit support, our bonded warehouses offer a trusted and cost-effective solution for your logistics needs.",

    bottomPoints: [
      "Defer Duty Payments with Bonded Storage",
      "Real-Time Tracking for Secure Inventory Management",
      "Seamless Customs Compliance and Clearance",
      "Flexible and Scalable Warehousing Solutions",
    ],

    bottomImg1:
      warehouse2,

    bottomImg2:
      warehouse3,

    faqTitle:
      "Helping You Understand Bonded Warehouses Services",

    faqs: [
      {
        q: "What is a bonded warehouse and how does it work?",
        a: "A bonded warehouse is a facility where imported goods can be stored without paying duties until they are cleared for sale or export. It allows businesses to defer taxes and manage cash flow efficiently.",
      },

      {
        q: "What are the benefits of using a bonded warehouse?",
        a: "Bonded warehouses provide duty deferment, enhanced security, and flexible storage solutions. They help businesses optimize costs by delaying tax payments until goods are sold or shipped.",
      },

      {
        q: "Can I store all types of goods in a bonded warehouse?",
        a: "Most goods can be stored in a bonded warehouse, including general cargo, electronics, and bulk commodities. However, restricted or perishable items may require additional approvals.",
      },
      {
        q:"How long con goods remain in a bonden warehouse?",
        a:"Goods can typically remain in a bonded warehouse for extended periods, subject to customs regulations. The duration varies by country and trade policies."
      }
    ],
  },

  General: {
    heroTitle:
      "General Warehousing – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      warehouse4,

    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we offer reliable and efficient general warehousing solutions to keep your inventory secure, organized, and readily accessible. Our strategically located warehouses are designed to support businesses with optimized storage, seamless inventory management, and cost-effective distribution.General warehousing is not just about storage—it’s about maintaining supply chain efficiency, minimizing handling costs, and ensuring smooth inventory flow. Our facilities are equipped to handle diverse goods with precision, whether you require short-term storage, long-term solutions, or specialized handling. We provide a scalable approach tailored to your unique business needs.",
    midTitle: "",

    midGroups: [],

    bottomTitle:
      "A Reliable Storage Solution",

    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are dedicated to providing seamless warehousing solutions that enhance operational efficiency. Our advanced infrastructure, real-time inventory tracking, and professional handling ensure that your goods are always in the best condition. From small shipments to large-scale inventory management, our expert team ensures your supply chain operates smoothly and efficiently. With customized solutions, cutting-edge security, and round-the-clock support, we are your trusted partner for reliable warehousing services.",
    bottomPoints: [
      "Optimized Storage for Maximum Efficiency",
      "Seamless Inventory Management & Distribution",
      "Flexible and Scalable Solutions for Businesses",
      "Advanced Security and 24/7 Monitoring",
    ],

    bottomImg1:
      warehouse5,

    bottomImg2:
      warehouse6,

    faqTitle:
      "Helping You Understand General Services",

    faqs: [
      {
        q: "What is general warehousing?",
        a: "General warehousing provides businesses with secure storage facilities for managing inventory efficiently. It helps reduce storage costs, streamline logistics, and enhance supply chain operations.",
      },
      {
        q:"What types of goods can be stored in general warehouses?",
        a:"General warehouses accommodate various goods, including consumer products, industrial equipment, perishables (with temperature control), and bulk inventory, ensuring flexibility for diverse industries.",
      },
      {
        q:"How dose SSS sai Shipping Services ensure inventory security",
        a:"We implement 24/7 monitoring, access control systems, and advanced tracking technologies to safeguard stored goods, ensuring complete protection and real-time visibility."
      },
      {
        q:"Can businesses scale their storage needs based on demand?",
        a:"Yes, our warehousing solutions are designed for flexibility, allowing businesses to expand or reduce storage capacity based on seasonal demands and operational requirements."
      }
    ],
  },

  FTWZ: {
    heroTitle:
      "FTWZ Services – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      warehouse7,

    heroText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide specialized Free Trade Warehousing Zone (FTWZ) solutions to streamline global trade operations efficiently, securely, and on time. With our strategic locations and logistics expertise, we manage every aspect of your supply chain, from customs clearance to inventory management.FTWZs are more than just storage facilities—they optimize trade, reduce costs, and improve supply chain efficiency. Our team of experts handles everything from duty-free storage to value-added services, offering customized solutions for businesses across industries. Whether you need warehousing, re-export, or inventory consolidation, we have the right solution for your needs.",
    midTitle: "",

    midGroups: [],

    bottomTitle:
      "A Strategic Trade Hub",

    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are committed to providing seamless FTWZ services for hassle-free international trade. From the moment your goods arrive, our team ensures smooth operations with real-time tracking and compliance management. Our state-of-the-art infrastructure and advanced technology minimize delays, enhance efficiency, and optimize trade benefits. We understand the importance of flexible trade solutions, which is why we offer personalized warehousing, tax benefits, and 24/7 support. Whether it's bulk storage or distribution, we ensure your cargo moves seamlessly across borders. Your trade, our expertise—delivering beyond expectations.",

    bottomPoints: [
      "Global Trade, Simplified",
      "Duty-Free Storage & Value-Added Services",
      "Optimized Supply Chain Solutions",
      "Dedicated Support for Seamless Operations",
    ],

    bottomImg1:
      warehouse8,

    bottomImg2:
      warehouse9,

    faqTitle:
      "Helping You Understand FTWZ Services",

    faqs: [
      {
        q: "What is a Free Trade Warehousing Zone (FTWZ)?",
        a: "FTWZ is a designated area within a country that provides infrastructure and facilities for storing, handling, and distributing goods with ease of customs clearance. It aims to promote international trade and facilitate export-import operations.",
      },
      {
        q:"What is the genesis of FTWZ in India?",
        a:"The concept of FTWZ in India was introduced as part of the Foreign Trade Policy (FTP) to enhance trade competitiveness and attract foreign investment. It is a strategic initiative to boost export-oriented industries and improve India’s position in the global supply chain."
      },
      {
        q:"What is the primary concept behind FTWZ?",
        a:"The main concept behind FTWZ is to create an integrated facility that offers value-added services, efficient logistics, and customs-related benefits to businesses engaged in international trade. It aims to provide a one-stop solution for trading activities, thereby reducing transaction costs and improving supply chain efficiencies."
      },
      {
        q:"What are the objectives of establishing FTWZ in India?",
        a:"The key objectives of FTWZ in India include:Promoting and facilitating global tradeAttracting foreign direct investment (FDI)Simplifying customs procedures and reducing bureaucratic hurdlesEnhancing the ease of doing businessEncouraging export-oriented industries and manufacturing activities"
      },
      {
        q:"What are the envisaged benefits of FTWZ for trade in India?",
        a:"FTWZ offers several benefits, including:Duty deferment and exemption on re-exported goods, promoting export-led growthConsolidation and deconsolidation of cargo, optimizing logistics and reducing costsEfficient customs clearance and reduced documentation requirementsCentralized storage and distribution facilities, improving inventory managementIntegration with global supply chains, increasing India’s competitivenessAttracting foreign investment and boosting economic growth"
      },
      {
        q:"Are there any eligibility criteria for businesses to operate within FTWZ?",
        a:"Yes, businesses must meet certain criteria to operate within FTWZ. These may include being engaged in export-import activities, complying with customs regulations, and adhering to the guidelines specified by the relevant authorities."
      },
      {
        q:"How does FTWZ contribute to India’s economic growth?",
        a:"FTWZ plays a crucial role in India’s economic growth by attracting foreign investment, encouraging export-oriented industries, and improving the overall efficiency of international trade. It enhances India’s competitiveness in the global market and strengthens its position in the supply chain."
      },
      {
        q:"Can domestic businesses also benefit from FTWZ facilities?",
        a:"Yes, domestic businesses can also benefit from FTWZ facilities. They can use FTWZ for storing and processing goods meant for export or import, taking advantage of the customs-related benefits and improved logistics services."
      },
      {
        q:"How does FTWZ contribute to the ease of doing business in India?",
        a:"FTWZ simplifies customs procedures, reduces paperwork, and offers a single-window clearance system, making it easier for businesses to engage in international trade. This streamlined process contributes to the ease of doing business in India."
      },
      {
        q:"Are there any specific industries that benefit the most from FTWZ?",
        a:"Various industries can benefit from FTWZ, including manufacturing, pharmaceuticals, textiles, automotive, electronics, and consumer goods. Export-oriented industries that require efficient logistics and customs facilitation can particularly benefit from FTWZ services."
      },
      {
        q:"What role does FTWZ play in promoting India’s exports?",
        a:"FTWZ plays a significant role in promoting India’s exports by offering duty deferment and exemption on re-exported goods. It enables businesses to optimize their supply chain, reduce costs, and access international markets more effectively."
      },
      {
        q:"How does FTWZ contribute to foreign investment in India?",
        a:"FTWZ attracts foreign investment by providing a favorable business environment, efficient logistics, and customs facilitation. The seamless integration with global supply chains makes India an attractive destination for foreign companies looking to expand their operations in the region."
      },

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
        height: { xs: "300px", sm: "420px", md: "520px" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f7f7f7",
      }}
    >
      <Box
        component="img"
        src={aboutBanner}
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
          Warehouses
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
          stress-free Warehouses.
          Let us handle your
          logistics with expertise
          and efficiency. Contact
          us now!
        </Typography>

        <Box
          component={Link}
          to="/contact"
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

export default function Warehouses() {
  const [activeTab, setActiveTab] =
    useState("Bonded");

  const data =
    warehouseData[activeTab];

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
            {/* SIDEBAR */}

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

            {/* RIGHT CONTENT */}

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