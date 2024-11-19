import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
        alignItems: 'center',
      }}
      px="20px"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          FitFusion
        </Typography>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>
        <a
          href="#bmi"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          BMI
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
