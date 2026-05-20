import { Box, Container, Grid, Typography } from "@mui/material";

const steps = [
  {
    image: "https://saishipping.com/images/serv-step-1.png",
    tag: "Request A Quote",
    title: "Get A Customized Shipping Quote",
    desc: "Provide us with your shipment details, and we’ll offer you a competitive, tailored quote within minutes. Our team ensures transparency and affordability for all your shipping needs.",
  },
  {
    image: "https://saishipping.com/images/serv-step-2.png",
    tag: "Schedule Your Shipment",
    title: "Plan Your Logistics With Ease",
    desc: "Choose a convenient pickup date and time. Our reliable team will handle the rest, ensuring your goods are collected and transported safely and on time.",
  },
  {
    image: "https://saishipping.com/images/serv-step-3.png",
    tag: "Track Your Cargo",
    title: "Real-Time Shipment Updates",
    desc: "Stay updated on your shipment’s progress with our advanced tracking system. Monitor your cargo’s journey from pickup to delivery, anytime, anywhere.",
  },
  {
    image: "https://saishipping.com/images/serv-step-4.jpg",
    tag: "Delivery & Support",
    title: "On-Time Delivery & Dedicated Support",
    desc: "Experience seamless delivery with our professional team. We provide end-to-end support to ensure your goods reach their destination safely and efficiently.",
  },
];

export default function HowItWorks() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(to right, #efd6c5 28%, #f8f4f1 28%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 7, md: 10 },
          }}
        >
          <Typography
            sx={{
              color: "#ef7f1a",
              fontSize: {
                xs: "13px",
                md: "18px",
              },

              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              mb: 2,

              fontFamily: `"Times New Roman", serif`,
            }}
          >
            ⚡ TRUSTED TRANSPORT SERVICE
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "36px",
                sm: "52px",
                md: "70px",
              },

              fontWeight: 700,
              color: "#082532",

              lineHeight: 1.12,

              maxWidth: "1200px",
              mx: "auto",

              fontFamily: `"Playfair Display", serif`,
            }}
          >
            We Provide Quick & Safe Transportation All Over The World
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid
          container
          spacing={{ xs: 6, md: 2 }}
          justifyContent="center"
        >
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",

                  "&:hover .circle-ring": {
                    borderColor: "#ef7f1a",
                  },

                  "&:hover .circle-ring-2": {
                    borderColor: "#ef7f1a",
                  },
                }}
              >
                {/* IMAGE CIRCLE */}
                <Box
                  sx={{
                    position: "relative",
                    width: {
                      xs: 210,
                      md: 220,
                    },

                    height: {
                      xs: 210,
                      md: 220,
                    },

                    mx: "auto",
                    mb: 5,
                  }}
                >
                  {/* OUTER RING */}
                  <Box
                    className="circle-ring"
                    sx={{
                      position: "absolute",
                      inset: 0,

                      borderRadius: "50%",
                      border: "4px solid #f1e4da",

                      transition: "0.4s ease",
                    }}
                  />

                  {/* ORANGE ACTIVE RING */}
                  {index === 2 && (
                    <Box
                      className="circle-ring-2"
                      sx={{
                        position: "absolute",
                        inset: -3,

                        borderRadius: "50%",
                        border: "4px dashed #ef7f1a",

                        transition: "0.4s ease",
                      }}
                    />
                  )}

                  {/* IMAGE */}
                  <Box
                    component="img"
                    src={step.image}
                    alt={step.title}
                    sx={{
                      width: "100%",
                      height: "100%",

                      borderRadius: "50%",
                      objectFit: "cover",

                      p: 1.2,
                    }}
                  />

                  {/* ORANGE LABEL */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      bottom: 12,

                      transform: "translateX(-50%) skewX(-10deg)",

                      backgroundColor: "#ef7f1a",

                      px: 3,
                      py: 1.6,

                      minWidth: 170,

                      boxShadow: "0 12px 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",

                        fontSize: {
                          xs: "12px",
                          md: "14px",
                        },

                        fontWeight: 700,

                        transform: "skewX(10deg)",

                        fontFamily: `"Times New Roman", serif`,
                      }}
                    >
                      {step.tag}
                    </Typography>
                  </Box>
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "30px",
                      md: "24px",
                    },

                    fontWeight: 700,

                    lineHeight: 1.35,

                    color: "#111",

                    mb: 2,

                    minHeight: {
                      md: 75,
                    },

                    fontFamily: `"Playfair Display", serif`,
                  }}
                >
                  {step.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "#667085",

                    fontSize: {
                      xs: "16px",
                      md: "20px",
                    },

                    lineHeight: 1.9,

                    maxWidth: 280,
                    mx: "auto",

                    fontFamily: `"Times New Roman", serif`,
                  }}
                >
                  {step.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}