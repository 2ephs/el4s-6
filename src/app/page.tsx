'use client';
import { Box, Typography, Link, styled } from '@mui/material';
import { AccessCounter } from '@/components/features/AccessCounter';
import Image from 'next/image';

const Scroll = styled(Box)({
  animation: 'scroll 4s linear infinite',
  overflow: 'hidden',

  '@keyframes scroll': {
    '0%': { transform: 'translate(110%, 0)' },
    '100%': { transform: 'translate(-100%, 0)' },
  },
});

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Image
        src="/header.png"
        alt="header"
        width={500}
        height={100}
        style={{ marginTop: 50 }}
      />
      <AccessCounter />
      <Scroll>ゆっくりしていってね</Scroll>
      <Typography>ここはEL4Sが作る趣味のページです。</Typography>
      <Typography>日記などを投稿していきます！</Typography>
      <Typography>
        同好の方は<a href="/private">此方</a>へ…キリ番踏み逃げ禁止!
      </Typography>

      <p style={{ display: 'none' }}>秘密の言葉は「password」</p>
    </Box>
  );
}
