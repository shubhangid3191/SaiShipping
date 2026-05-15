import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// DELETE this entire logos array:
// const logos = Array.from({ length: 25 }, (_, i) => ({...}));

// ADD:
const logos = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  src: `https://placehold.co/120x44/f8f6f2/999?text=Client+${i + 1}`,
  alt: `Client ${i + 1}`,
}));

const marquee = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

export default function ClientLogos() {
  const doubled = [...logos, ...logos];

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 6 }, bgcolor: '#f8f6f2', borderBottom: '1px solid #ece9e2' }}>
      <Container maxWidth="lg">
        <Typography sx={{
          textAlign: 'center', fontSize: '0.72rem', fontWeight: 700,
          letterSpacing: 3, textTransform: 'uppercase', color: '#999', mb: 4,
        }}>
          Trusted by leading companies across industries
        </Typography>
      </Container>

      <Box sx={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <Box sx={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to right, #f8f6f2, transparent)', zIndex: 2, pointerEvents: 'none',
        }} />
        <Box sx={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to left, #f8f6f2, transparent)', zIndex: 2, pointerEvents: 'none',
        }} />

        <Box sx={{
          display: 'flex', gap: 6,
          animation: `${marquee} 40s linear infinite`,
          width: 'max-content',
          '&:hover': { animationPlayState: 'paused' },
        }}>
          {doubled.map((logo, idx) => (
            <Box
              key={idx} component="img" src={logo.src} alt={logo.alt}
              sx={{
                height: 44, width: 'auto', objectFit: 'contain',
                filter: 'grayscale(100%)', opacity: 0.55, flexShrink: 0,
                transition: 'all 0.3s',
                '&:hover': { filter: 'grayscale(0%)', opacity: 1 },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}