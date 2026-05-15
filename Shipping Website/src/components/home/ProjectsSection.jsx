import { useState } from 'react';
import { Box, Container, Typography, Stack, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import BoltIcon from '@mui/icons-material/Bolt';

// ── Real project images from saishipping.com ──
const allProjects = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: `https://saishipping.com/images/project${i + 1}.jpg`,
  desc: [
    'Heavy-duty transformer secured for transit.',
    'Safe transport of large mining/construction vehicles.',
    'Properly lashed for damage-free delivery.',
    'Secure transit of industrial screening equipment.',
    'Oversized cargo loaded for international shipping.',
    'Specialized Equipment Handling.',
    'Project cargo secured with precision rigging.',
    'Heavy machinery transport across borders.',
    'Port-to-destination reliable freight solutions.',
    'Industrial equipment ready for dispatch.',
  ][i % 10],
}));

const VISIBLE = 4;

export default function ProjectsSection() {
  const [startIdx, setStartIdx] = useState(0);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const prev = () =>
    setStartIdx((i) => (i - 1 + allProjects.length) % allProjects.length);
  const next = () =>
    setStartIdx((i) => (i + 1) % allProjects.length);

  const visible = Array.from(
    { length: VISIBLE },
    (_, i) => allProjects[(startIdx + i) % allProjects.length]
  );

  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#fdf8f3',
        py: { xs: 8, md: 10 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>

        {/* ── HEADER ROW ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            mb: { xs: 5, md: 6 },
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {/* Left — title */}
          <Box sx={{ maxWidth: 520 }}>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1.5 }}>
              <BoltIcon sx={{ color: '#f47b14', fontSize: 18 }} />
              <Typography
                sx={{
                  color: '#f47b14',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  fontFamily: 'Georgia, serif',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Trusted Transport Projects
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#0d1e35',
                lineHeight: 1.2,
              }}
            >
              From Ports To Destinations:
              <br />
              Reliable Transport
              <br />
              Solutions
            </Typography>
          </Box>

          {/* Right — prev/next arrows */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mt: { xs: 0, md: 1 }, alignSelf: 'flex-start' }}
          >
            <IconButton
              onClick={prev}
              sx={{
                width: 52,
                height: 52,
                border: '1.5px solid #ccc',
                borderRadius: '50%',
                color: '#333',
                bgcolor: '#fff',
                '&:hover': { bgcolor: '#f47b14', borderColor: '#f47b14', color: '#fff' },
                transition: 'all 0.25s',
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              onClick={next}
              sx={{
                width: 52,
                height: 52,
                border: '1.5px solid #ccc',
                borderRadius: '50%',
                color: '#333',
                bgcolor: '#fff',
                '&:hover': { bgcolor: '#f47b14', borderColor: '#f47b14', color: '#fff' },
                transition: 'all 0.25s',
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* ── 4 IMAGE CARDS ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 3, md: 2 },
            mb: 5,
          }}
        >
          {visible.map((proj) => (
            <Box
              key={proj.id}
              onMouseEnter={() => setHovered(proj.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/projects')}
            >
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 260, md: 380 },
                  overflow: 'hidden',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={proj.src}
                  alt={proj.desc}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 0.45s ease',
                    transform: hovered === proj.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                />

                {/* Hover overlay card */}
                {hovered === proj.id && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: 'rgba(255,255,255,0.92)',
                      px: 3,
                      py: 1.5,
                      minWidth: 180,
                      textAlign: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        color: '#333',
                        fontFamily: 'Georgia, serif',
                        fontWeight: 500,
                      }}
                    >
                      {proj.desc}
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Description + plus button */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 1,
                  px: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '0.92rem', md: '0.97rem' },
                    color: '#444',
                    fontFamily: 'Georgia, serif',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {proj.desc}
                </Typography>

                <Box
                  onClick={(e) => { e.stopPropagation(); navigate('/projects'); }}
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '1.5px solid #bbb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    '&:hover': { bgcolor: '#f47b14', borderColor: '#f47b14', color: '#fff' },
                    color: '#555',
                  }}
                >
                  <AddIcon sx={{ fontSize: 18 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* ── ALL PROJECTS BUTTON ── */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/projects')}
            sx={{
              bgcolor: '#f47b14',
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: '0.9rem', md: '1rem' },
              px: { xs: 6, md: 10 },
              py: 2,
              borderRadius: 0,
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontFamily: 'Georgia, serif',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#d86d10',
                boxShadow: 'none',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s',
            }}
          >
            All Projects
          </Button>
        </Box>

      </Container>
    </Box>
  );
}