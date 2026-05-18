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

const tabs = ["Bonded", "General", "FTWZ"];

/* =========================================================
   DATA
========================================================= */

const warehouseData = {
  Bonded: {
    heroTitle:
      "Bonded Warehouses – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      "https://saishipping.com/images/bonded-1.jpg",

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
          "No Customs Duty On Export",
          "Refund Of IGST Payable",
        ],
      },
    ],

    bottomTitle:
      "Efficient and Compliant Storage Solutions",

    bottomText:
      "At SSS Sai Shipping Services Pvt Ltd., we are committed to simplifying bonded warehousing for businesses across industries.",

    bottomPoints: [
      "Defer Duty Payments",
      "Inventory Tracking",
      "Customs Compliance",
      "Scalable Warehousing",
    ],

    bottomImg1:
      "https://saishipping.com/images/bonded-2.jpg",

    bottomImg2:
      "https://saishipping.com/images/bonded-3.jpg",

    faqTitle:
      "Helping You Understand Bonded Warehouses Services",

    faqs: [
      {
        q: "What is a bonded warehouse and how does it work?",
        a: "A bonded warehouse is a secure facility where imported goods can be stored without paying customs duty immediately.",
      },

      {
        q: "What are the benefits of using a bonded warehouse?",
        a: "Duty deferment, safe storage, compliance support, and flexible logistics operations.",
      },

      {
        q: "Can I store all types of goods in a bonded warehouse?",
        a: "Most imported goods can be stored subject to customs regulations.",
      },
    ],
  },

  General: {
    heroTitle:
      "General Warehousing – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      "https://saishipping.com/images/general-1.jpg",

    heroText:
      "Reliable and efficient general warehousing solutions for inventory management.",

    midTitle: "",

    midGroups: [],

    bottomTitle:
      "A Reliable Storage Solution",

    bottomText:
      "We provide seamless warehousing solutions with advanced infrastructure.",

    bottomPoints: [
      "Optimized Storage",
      "Inventory Management",
      "Flexible Solutions",
      "24/7 Monitoring",
    ],

    bottomImg1:
      "https://saishipping.com/images/general-2.jpg",

    bottomImg2:
      "https://saishipping.com/images/general-3.jpg",

    faqTitle:
      "Helping You Understand General Services",

    faqs: [
      {
        q: "What is general warehousing?",
        a: "General warehousing provides secure storage facilities.",
      },
    ],
  },

  FTWZ: {
    heroTitle:
      "FTWZ Services – SSS Sai Shipping Services Pvt Ltd.",

    heroImg:
      "https://saishipping.com/images/FTWZ-1.jpg",

    heroText:
      "Specialized Free Trade Warehousing Zone solutions for global trade.",

    midTitle: "",

    midGroups: [],

    bottomTitle:
      "A Strategic Trade Hub",

    bottomText:
      "Seamless FTWZ services for hassle-free international trade.",

    bottomPoints: [
      "Duty-Free Storage",
      "Global Trade",
      "Optimized Supply Chain",
      "Dedicated Support",
    ],

    bottomImg1:
      "https://saishipping.com/images/FTWZ-2.jpg",

    bottomImg2:
      "https://saishipping.com/images/FTWZ-3.jpg",

    faqTitle:
      "Helping You Understand FTWZ Services",

    faqs: [
      {
        q: "What is FTWZ?",
        a: "FTWZ is a designated area providing infrastructure for trade.",
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