import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    text: `Climb the mountain not to plant your flag but to embrace the ways challenge,
    enjoy the air, and behold the. Climb it see the world, not so the world can see you.
    This is due to their excellent service competitive pricing`,
    image:
      'https://saishipping.com/images/3.jpg',
    name: 'Robert G. Haver',
    role: 'Freight Manager',
  },

  {
    text: `SAI Shipping provided outstanding logistics support and timely delivery.
    Their professional team made our transport process smooth and stress free.`,
    image:
      'https://saishipping.com/images/4.jpg',
    name: 'David Wilson',
    role: 'Transport Head',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const next = () => {
    setActive(
      (prev) =>
        (prev + 1) %
        testimonials.length
    );
  };

  const t = testimonials[active];

  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: 8,
          md: 12,
        },

        /* FIX OVERLAP ISSUE */
        mt: {
          xs: '140px',
          md: '220px',
        },

        position: 'relative',
        zIndex: 1,

        bgcolor: '#f4f4f4',

        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* LEFT IMAGE */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                width: {
                  xs: 280,
                  md: 360,
                },

                height: {
                  xs: 280,
                  md: 360,
                },

                mx: 'auto',
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={t.image}
                alt={t.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />

              {/* QUOTE ICON */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 20,

                  width: 90,
                  height: 90,

                  borderRadius: '50%',
                  bgcolor: '#ff7a2f',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    color: '#fff',
                    fontSize: 42,
                  }}
                />
              </Box>
            </Box>

            {/* STARS */}
            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              {Array.from({
                length: 5,
              }).map((_, i) => (
                <StarIcon
                  key={i}
                  sx={{
                    color: '#ff7a2f',
                    fontSize: 24,
                  }}
                />
              ))}
            </Stack>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                color: '#ff7a2f',
                fontWeight: 700,
                textTransform:
                  'uppercase',
                letterSpacing: 2,
                fontSize: '0.9rem',
                mb: 2,
              }}
            >
              ⚡ Trusted Transport Testimonials
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: '2.4rem',
                  md: '4rem',
                },

                fontWeight: 800,
                lineHeight: 1.1,
                color: '#071c2c',

                mb: 4,

                fontFamily:
                  '"Playfair Display", serif',
              }}
            >
              What Our Client’s Says
            </Typography>

            <Typography
              sx={{
                color: '#333',

                fontSize: {
                  xs: '1rem',
                  md: '1.2rem',
                },

                lineHeight: 2,

                maxWidth: 700,
              }}
            >
              {t.text}
            </Typography>

            {/* AUTHOR */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              flexWrap="wrap"
              sx={{ mt: 6 }}
            >
              <Typography
                sx={{
                  fontFamily: 'cursive',
                  fontSize: {
                    xs: '1.6rem',
                    md: '2rem',
                  },

                  color: '#000',
                }}
              >
                {t.name}
              </Typography>

              <Typography
                sx={{
                  color: '#ff7a2f',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  mt: '4px !important',
                }}
              >
                {t.role}
              </Typography>
            </Stack>

            {/* BUTTONS */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 6 }}
            >
              <IconButton
                onClick={prev}
                sx={{
                  width: 56,
                  height: 56,

                  bgcolor: '#0b3a53',
                  color: '#fff',

                  transition: '0.3s',

                  '&:hover': {
                    bgcolor: '#ff7a2f',
                  },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{
                  width: 56,
                  height: 56,

                  bgcolor: '#0b3a53',
                  color: '#fff',

                  transition: '0.3s',

                  '&:hover': {
                    bgcolor: '#ff7a2f',
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}