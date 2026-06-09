import { useState } from 'react';
import { Box, Container, Typography, Stack, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import BoltIcon from '@mui/icons-material/Bolt';

// ── Import your project images ──
import img1 from "../../assets/images/project1.jpg";
import img2 from "../../assets/images/project2.jpg";
import img3 from "../../assets/images/project3.jpg";
import img4 from "../../assets/images/project4.jpg";
import img5 from "../../assets/images/project5.jpg";
import img6 from "../../assets/images/project6.jpg";
import img7 from "../../assets/images/project7.jpg";
import img8 from "../../assets/images/project8.jpg";
import img9 from "../../assets/images/project9.jpg";
import img10 from "../../assets/images/project10.jpg";
import img11 from "../../assets/images/project11.jpg";
import img12 from "../../assets/images/project12.jpg";
import img13 from "../../assets/images/project13.jpg";
import img14 from "../../assets/images/project14.jpg";
import img15 from "../../assets/images/project15.jpg";
import img16 from "../../assets/images/project16.jpg";
import img17 from "../../assets/images/project17.jpg";
import img18 from "../../assets/images/project18.jpg";
import img19 from "../../assets/images/project19.jpg";
import img20 from "../../assets/images/project20.jpg";
import img21 from "../../assets/images/project21.jpg";
import img22 from "../../assets/images/project22.jpg";
import img23 from "../../assets/images/project23.jpg";
import img24 from "../../assets/images/project24.jpg";
import img25 from "../../assets/images/project25.jpg";
import img26 from "../../assets/images/project26.jpg";
import img27 from "../../assets/images/project27.jpg";
import img28 from "../../assets/images/project28.jpg";
import img29 from "../../assets/images/project29.jpg";
import img30 from "../../assets/images/project30.jpg";
import img31 from "../../assets/images/project31.jpg";
import img32 from "../../assets/images/project32.jpg";
import img33 from "../../assets/images/project33.jpg";
import img34 from "../../assets/images/project34.jpg";
import img35 from "../../assets/images/project35.jpg";
import img36 from "../../assets/images/project36.jpg";
import img37 from "../../assets/images/project37.jpg";
import img38 from "../../assets/images/project38.jpg";
import img39 from "../../assets/images/project39.jpg";
import img40 from "../../assets/images/project40.jpg";
import img41 from "../../assets/images/project41.jpg";
import img42 from "../../assets/images/project42.jpg";
// ... add more as needed

// ── Project data — update desc per image as needed ──
const allProjects = [
  { id: 1, src: img1, desc: 'Heavy-duty transformer secured for transit.' },
  { id: 2, src: img2, desc: 'Safe transport of large mining/construction vehicles.' },
  { id: 3, src: img3, desc: 'Properly lashed for damage-free delivery.' },
  { id: 4, src: img4, desc: 'Secure transit of industrial screening equipment.' },
  { id: 5, src: img5, desc: 'Oversized cargo loaded for international shipping.' },
  { id: 6, src: img6, desc: 'Specialized Equipment Handling.' },
  { id: 7, src: img7, desc: 'Project cargo secured with precision rigging.' },
  { id: 8, src: img8, desc: 'Heavy machinery transport across borders.' },
  { id: 9, src: img9, desc: 'Your description here.' },
    { id: 10, src: img10, desc: 'Port-to-destination reliable freight solutions.'},
    { id: 11, src: img11 ,desc:'Industrial equipment ready for dispatch.' },
    { id: 12, src: img12, desc :'Heavy-duty transformer secured for transit.' },
    { id: 13, src: img13, desc: 'Safe transport of large mining/construction vehicles.'},
    { id: 14, src: img14, desc :"Properly lashed for damage-free delivery." },
    { id: 15, src: img15 ,desc :'Secure transit of industrial screening equipment.'},
    { id: 16, src: img16 ,desc:'Oversized cargo loaded for international shipping.' },
    { id: 17, src: img17 , desc :'Specialized Equipment Handling.'},
    { id: 18, src: img18 , desc:'Project cargo secured with precision rigging.'},
    { id: 19, src: img19 ,desc :'Heavy machinery transport across borders.'},
    { id: 20, src: img20 ,desc:'Port-to-destination reliable freight solutions.'},
    { id: 21, src: img21 , desc:'Industrial equipment ready for dispatch.'},
    { id: 22, src: img22 , desc :'Heavy-duty transformer secured for transit' },
    { id: 23, src: img23, desc :'Safe transport of large mining/construction vehicles.' },
    { id: 24, src: img24 , desc:'Properly lashed for damage-free delivery.'},
    { id: 25, src: img25 , desc :'Secure transit of industrial screening equipment.' },
    { id: 26, src: img26 , desc :'Oversized cargo loaded for international shipping.'},
    { id: 27, src: img27 , desc:'Specialized Equipment Handling.'},
    { id: 28, src: img28 , desc :"Project cargo secured with precision rigging."},
    { id: 29, src: img29 , desc :'Heavy machinery transport across borders.'},
    { id: 30, src: img30 , desc :'Port-to-destination reliable freight solutions.'},
    { id: 31, src: img31 , desc :'Industrial equipment ready for dispatch.'},
    { id: 32, src: img32 , desc :'Heavy-duty transformer secured for transit.'},
    { id: 33, src: img33 , desc : 'Safe transport of large mining/construction vehicles.'},
    { id: 34, src: img34 ,desc :'Properly lashed for damage-free delivery.'},
    { id: 35, src: img35 , desc:'Secure transit of industrial screening equipment.'},
    { id: 36, src: img36 , desc:'Oversized cargo loaded for international shipping.'},
    { id: 37, src: img37 , desc :'Specialized Equipment Handling.'},
    { id: 38, src: img38 , desc :'Project cargo secured with precision rigging.'},
    { id: 39, src: img39 ,desc:'Heavy machinery transport across borders.'},
    { id: 40, src: img40 , desc :'Port-to-destination reliable freight solutions.'},
    { id: 41, src: img41 , desc:"Industrial equipment ready for dispatch."},
    { id: 42, src: img42 , desc :'Heavy-duty transformer secured for transit.'},
];

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
          <Box sx={{ maxWidth: 520 }}>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1.5 }}>
              <BoltIcon sx={{ color: '#f47b14', fontSize: 18 }} />
              <Typography
                sx={{
                  color: '#f47b14',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  fontFamily: `"Georgia", "Times New Roman", serif`,
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
                fontFamily: `"Georgia", "Times New Roman", serif`,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2rem' },
                fontWeight: 800,
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
                        fontFamily: `"Georgia", "Times New Roman", serif`,
                        fontWeight: 500,
                      }}
                    >
                      {proj.desc}
                    </Typography>
                  </Box>
                )}
              </Box>

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
                    fontFamily: `"Georgia", "Times New Roman", serif`,
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
              fontFamily: `"Georgia", "Times New Roman", serif`,
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