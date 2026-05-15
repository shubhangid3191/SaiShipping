import { useState } from 'react';
import { Box, Container, Grid, Typography, Stack, IconButton, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

// DELETE:
// import authorImg from '../../assets/images/testimonials/author.png';

// ADD:
const authorImg = 'https://placehold.co/100x100/0d1e35/e8a020?text=Author';

const testimonials = [
  {
    name: 'Rajesh Mehta', role: 'Director, Mehta Exports Pvt. Ltd.', rating: 5, company: 'Mumbai',
    text: 'SAI Shipping has been handling our export documentation and sea freight for 8 years. Their expertise in customs clearance has saved us significant costs and time. Truly a reliable partner.',
    avatar: authorImg,
  },
  {
    name: 'Priya Sharma', role: 'Supply Chain Head, TechCorp India', rating: 5, company: 'Bangalore',
    text: 'We needed urgent air freight for our electronics export to the US. SAI arranged everything within 4 hours — documentation, pickup, and dispatch. Exceptional service!',
    avatar: authorImg,
  },
  {
    name: 'Mohammed Farooq', role: 'CEO, Global Trade Solutions', rating: 5, company: 'Chennai',
    text: 'Their project cargo division handled our oversized industrial equipment shipment flawlessly. The team\'s attention to detail and proactive communication made the whole process stress-free.',
    avatar: authorImg,
  },
  {
    name: 'Anita Reddy', role: 'Operations Manager, PharmaTech', rating: 5, company: 'Hyderabad',
    text: 'SAI Shipping managed our cold chain pharmaceutical exports to Europe with perfect temperature compliance throughout. We have zero complaints — just pure satisfaction.',
    avatar: authorImg,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const getVisible = () => [
    testimonials[active % total],
    testimonials[(active + 1) % total],
    testimonials[(active + 2) % total],
  ];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0d1e35', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'flex-end' }} sx={{ mb: 7 }}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <Box sx={{ width: 36, height: 2, bgcolor: '#e8a020' }} />
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#e8a020' }}>
                Client Testimonials
              </Typography>
            </Stack>
            <Typography variant="h2" sx={{
              fontWeight: 800, fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: '2.2rem', md: '2.9rem' }, color: '#fff', lineHeight: 1.15,
            }}>
              What Our <Box component="span" sx={{ color: '#e8a020' }}>Clients Say</Box>
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} sx={{ mt: { xs: 3, md: 0 } }}>
            <IconButton onClick={prev} sx={{ width: 48, height: 48, borderRadius: 0, border: '1px solid rgba(255,255,255,0.2)', color: '#fff', '&:hover': { bgcolor: '#e8a020', borderColor: '#e8a020' } }}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={next} sx={{ width: 48, height: 48, borderRadius: 0, border: '1px solid rgba(255,255,255,0.2)', color: '#fff', '&:hover': { bgcolor: '#e8a020', borderColor: '#e8a020' } }}>
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Grid container spacing={3}>
          {getVisible().map((t, idx) => (
            <Grid item xs={12} md={4} key={`${t.name}-${idx}`} sx={{ display: { xs: idx === 0 ? 'block' : 'none', md: 'block' } }}>
              <Box sx={{
                bgcolor: idx === 0 ? 'rgba(232,160,32,0.12)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${idx === 0 ? 'rgba(232,160,32,0.4)' : 'rgba(255,255,255,0.08)'}`,
                p: 4, height: '100%', position: 'relative',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: 'rgba(232,160,32,0.1)', borderColor: 'rgba(232,160,32,0.3)' },
              }}>
                <FormatQuoteIcon sx={{ position: 'absolute', top: 20, right: 20, fontSize: 48, color: 'rgba(232,160,32,0.2)' }} />

                <Stack direction="row" spacing={0.3} sx={{ mb: 3 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: 16, color: '#e8a020' }} />
                  ))}
                </Stack>

                <Typography sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontSize: '0.92rem', mb: 3.5, fontStyle: 'italic' }}>
                  "{t.text}"
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar src={t.avatar} alt={t.name} sx={{ width: 50, height: 50, border: '2px solid rgba(232,160,32,0.5)' }} />
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>{t.role}</Typography>
                    <Typography sx={{ color: '#e8a020', fontSize: '0.72rem', mt: 0.3 }}>{t.company}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Dots */}
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 5 }}>
          {testimonials.map((_, i) => (
            <Box
              key={i} onClick={() => setActive(i)}
              sx={{
                width: i === active ? 28 : 8, height: 4, borderRadius: 2,
                bgcolor: i === active ? '#e8a020' : 'rgba(255,255,255,0.25)',
                cursor: 'pointer', transition: 'all 0.3s',
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}