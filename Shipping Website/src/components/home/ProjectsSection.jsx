import { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Chip, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// DELETE:
// import pro1 from '../../assets/images/projects/pro-1.jpg';
// import pro2 from '../../assets/images/projects/pro-2.jpg';
// import pro3 from '../../assets/images/projects/pro-3.jpg';
// import pro4 from '../../assets/images/projects/pro-4.jpg';
// import pro5 from '../../assets/images/projects/pro-5.jpg';

// ADD:
const pro1 = 'https://placehold.co/800x500/111/e8a020?text=Project+1';
const pro2 = 'https://placehold.co/600x400/111/e8a020?text=Project+2';
const pro3 = 'https://placehold.co/600x400/111/e8a020?text=Project+3';
const pro4 = 'https://placehold.co/600x400/111/e8a020?text=Project+4';
const pro5 = 'https://placehold.co/600x400/111/e8a020?text=Project+5';

const categories = ['All', 'Sea Freight', 'Air Freight', 'Project Cargo', 'Warehousing'];

const projects = [
  { img: pro1, cat: 'Sea Freight',    title: 'Bulk Machinery Export to UAE',     desc: 'End-to-end FCL shipment of heavy industrial machinery from Mumbai to Dubai Port.', year: '2024' },
  { img: pro2, cat: 'Air Freight',    title: 'Pharma Cold Chain to Germany',      desc: 'Temperature-controlled air freight for pharmaceutical exports maintaining 2-8°C throughout.', year: '2024' },
  { img: pro3, cat: 'Project Cargo',  title: 'Wind Turbine Components',           desc: 'Oversized cargo logistics for wind turbine blades across 3 continents.', year: '2023' },
  { img: pro4, cat: 'Warehousing',    title: 'E-commerce Fulfillment Hub',        desc: 'Multi-client warehousing and last-mile distribution for a leading online retailer.', year: '2023' },
  { img: pro5, cat: 'Sea Freight',    title: 'Chemical Tanker Operations',        desc: 'ISO tank container management for liquid chemical exports with full hazmat compliance.', year: '2023' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.cat === activeFilter);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-end" sx={{ mb: 5 }}>
          <Grid item xs={12} md={7}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <Box sx={{ width: 36, height: 2, bgcolor: '#e8a020' }} />
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#e8a020' }}>
                Our Work
              </Typography>
            </Stack>
            <Typography variant="h2" sx={{
              fontWeight: 800, fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: '2.2rem', md: '2.9rem' }, color: '#111', lineHeight: 1.15,
            }}>
              Featured <Box component="span" sx={{ color: '#c5351b' }}>Projects</Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: { md: 'right' } }}>
            <Button variant="text" endIcon={<ArrowForwardIcon />} href="/projects"
              sx={{ color: '#c5351b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
              View All Projects
            </Button>
          </Grid>
        </Grid>

        {/* Filter chips */}
        <Stack direction="row" spacing={1.5} sx={{ mb: 5, flexWrap: 'wrap', gap: 1 }}>
          {categories.map((cat) => (
            <Chip
              key={cat} label={cat} onClick={() => setActiveFilter(cat)}
              sx={{
                borderRadius: 0, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 0.5, px: 0.5,
                bgcolor: activeFilter === cat ? '#c5351b' : 'transparent',
                color: activeFilter === cat ? '#fff' : '#555',
                border: `1px solid ${activeFilter === cat ? '#c5351b' : '#ddd'}`,
                '&:hover': { bgcolor: activeFilter === cat ? '#a82a14' : '#f5f5f5' },
                transition: 'all 0.25s',
              }}
            />
          ))}
        </Stack>

        <Grid container spacing={3}>
          {filtered.map((proj, idx) => (
            <Grid item xs={12} sm={idx === 0 ? 12 : 6} md={idx === 0 ? 6 : 3} key={proj.title}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 0, border: '1px solid #ece9e2', height: '100%',
                  overflow: 'hidden', position: 'relative',
                  '&:hover .proj-img': { transform: 'scale(1.06)' },
                  '&:hover .proj-overlay': { opacity: 1 },
                  '&:hover': { boxShadow: '0 12px 40px rgba(0,0,0,0.12)' },
                  transition: 'box-shadow 0.3s',
                }}
              >
                <Box sx={{ height: idx === 0 ? { xs: 240, md: 320 } : 200, overflow: 'hidden', position: 'relative' }}>
                  <CardMedia
                    className="proj-img" component="img" image={proj.img} alt={proj.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease' }}
                  />
                  <Box
                    className="proj-overlay"
                    sx={{
                      position: 'absolute', inset: 0, bgcolor: 'rgba(197,53,27,0.8)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      opacity: 0, transition: 'opacity 0.35s',
                    }}
                  >
                    <IconButton href="/projects" sx={{ bgcolor: '#fff', '&:hover': { bgcolor: '#e8a020' }, color: '#c5351b' }}>
                      <OpenInNewIcon />
                    </IconButton>
                  </Box>
                </Box>

                <CardContent sx={{ p: 2.5 }}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Chip label={proj.cat} size="small" sx={{ bgcolor: '#fdf3e3', color: '#e8a020', fontWeight: 600, fontSize: '0.7rem', borderRadius: 0, height: 24 }} />
                    <Typography sx={{ fontSize: '0.75rem', color: '#aaa' }}>{proj.year}</Typography>
                  </Stack>
                  <Typography sx={{
                    fontWeight: 700, fontSize: idx === 0 ? '1.2rem' : '0.95rem',
                    color: '#111', mb: 1, fontFamily: '"Barlow Condensed", sans-serif',
                  }}>
                    {proj.title}
                  </Typography>
                  {idx === 0 && (
                    <Typography sx={{ fontSize: '0.87rem', color: '#666', lineHeight: 1.7 }}>{proj.desc}</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}