'use client';

import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Contents } from './Contents';

type Props = {
  children: ReactNode;
};

const Rainbow = styled(Box)({
  animation: 'gaming 2s linear infinite',
  minHeight: '100vh',
  height: '100%',
  '@keyframes gaming': {
    '0%': { backgroundColor: 'Magenta' },
    '33%': { backgroundColor: 'yellow' },
    '66%': { backgroundColor: 'Cyan' },
    '100%': { backgroundColor: 'Magenta' },
  },
});
export const Nav = ({ children }: Props) => {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundImage: "url('414_360.jpg')",
        backgroundRepeat: 'repeat',
      }}
    >
      <Grid container>
        <Grid
          item
          xs={2}
          alignContent="center"
          textAlign="center"
          alignItems="center"
          sx={{
            backgroundColor: '#fff9ab',
          }}
        >
          <Rainbow>
            <Image
              src={'/home02.png'}
              alt="HOME"
              height={100}
              width={100}
              style={{ margin: '0 auto' }}
            />
            <Typography>CONTENTS</Typography>
            <Contents />
          </Rainbow>
        </Grid>
        <Grid
          item
          xs={10}
          textAlign="center"
          alignContent="center"
          alignItems="center"
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
