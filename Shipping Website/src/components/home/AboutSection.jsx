import { Box, Container, Grid, Typography, Button, Stack, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

// DELETE:
// import about1 from '../../assets/images/about/home02-about-01.png';
// import about2 from '../../assets/images/about/home02-about-02.png';

// ADD:
const about1 = 'https://placehold.co/480x380/f8f6f2/333?text=SAI+Operations';
const about2 = 'https://placehold.co/210x210/f8f6f2/333?text=Our+Team';

const highlights = [
  'ISO Certified Operations',
  'Pan-India Branch Network',
  'End-to-End Logistics Management',
  '24/7 Customer Support',
];

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

          {/* Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', pl: { md: 3 } }}>
              {/* BG square */}
              <Box sx={{ position: 'absolute', top: -20, left: 0, width: 220, height: 220, bgcolor: '#fdf3e3', zIndex: 0 }} />

              {/* Main image */}
              <Box
                component="img" src={about1} alt="SAI Shipping operations"
                sx={{
                  position: 'relative', zIndex: 1,
                  width: '100%', maxWidth: 480,
                  height: { xs: 280, md: 380 }, objectFit: 'cover',
                  display: 'block', boxShadow: '8px 8px 0 #e8a020',
                }}
              />

              {/* Secondary image */}
              <Box
                component="img" src={about2} alt="SAI Shipping team"
                sx={{
                  position: 'absolute',
                  bottom: { xs: -40, md: -50 }, right: { xs: 0, md: -30 },
                  width: { xs: 160, md: 210 }, height: { xs: 160, md: 210 },
                  objectFit: 'cover', border: '6px solid #fff',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)', zIndex: 2,
                }}
              />

              {/* Experience badge */}
              <Box sx={{
                position: 'absolute', top: { xs: 20, md: 40 }, right: { xs: 0, md: -20 },
                bgcolor: '#c5351b', color: '#fff', p: 2.5, zIndex: 3,
                textAlign: 'center', minWidth: 110,
              }}>
                <Typography sx={{ fontWeight: 900, fontSize: '2.4rem', lineHeight: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>
                  20+
                </Typography>
                <Typography sx={{ fontSize: '0.7rem', letterSpacing: 1, opacity: 0.9 }}>
                  YEARS<br />EXPERIENCE
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6} sx={{ pt: { xs: 8, md: 0 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <Box sx={{ width: 36, height: 2, bgcolor: '#e8a020' }} />
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#e8a020' }}>
                Who We Are
              </Typography>
            </Stack>

            <Typography variant="h2" sx={{
              fontWeight: 800, fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: '2.2rem', md: '2.9rem' }, lineHeight: 1.15, color: '#111', mb: 3,
            }}>
              India's Trusted{' '}
              <Box component="span" sx={{ color: '#c5351b' }}>Shipping & Logistics</Box>{' '}
              Partner
            </Typography>

            <Typography sx={{ color: '#555', lineHeight: 1.9, mb: 2, fontSize: '0.97rem' }}>
              SAI Shipping is a comprehensive freight forwarding and customs clearance company with
              over two decades of industry expertise. We specialize in import/export documentation,
              sea freight, air freight, and door-to-door logistics solutions across India and globally.
            </Typography>

            <Typography sx={{ color: '#555', lineHeight: 1.9, mb: 4, fontSize: '0.97rem' }}>
              With a strong network of branches and a dedicated team of professionals, we ensure your
              cargo reaches its destination safely, on time, and at competitive rates.
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 4 }}>
              {highlights.map((item) => (
                <Grid item xs={12} sm={6} key={item}>
                  <Stack direction="row" alignItems="center" spacing={1.2}>
                    <CheckCircleOutlineIcon sx={{ color: '#e8a020', fontSize: 20 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: '#333', fontWeight: 500 }}>{item}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ mb: 4, borderColor: '#f0ece4' }} />

            <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
              <Box>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                  <EmojiEventsOutlinedIcon sx={{ color: '#e8a020', fontSize: 22 }} />
                  <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', fontFamily: '"Barlow Condensed", sans-serif', color: '#111' }}>
                    30+
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: '0.8rem', color: '#888', letterSpacing: 0.5 }}>Awards & Recognitions</Typography>
              </Box>
              <Box>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                  <HandshakeOutlinedIcon sx={{ color: '#e8a020', fontSize: 22 }} />
                  <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', fontFamily: '"Barlow Condensed", sans-serif', color: '#111' }}>
                    200+
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: '0.8rem', color: '#888', letterSpacing: 0.5 }}>Happy Clients</Typography>
              </Box>
            </Stack>

            <Button
              variant="contained" size="large" endIcon={<ArrowForwardIcon />} href="/about-us"
              sx={{
                bgcolor: '#c5351b', color: '#fff', fontWeight: 700,
                px: 4, py: 1.6, borderRadius: 0, textTransform: 'uppercase',
                letterSpacing: 1, fontSize: '0.85rem',
                '&:hover': { bgcolor: '#a82a14' },
              }}
            >
              Discover Our Story
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}