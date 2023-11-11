'use client';
import { Guard } from '@/components/features/Guard';
import { Private } from './components/Private';
import { Box } from '@mui/material';
import Image from 'next/image';

const Page = () => {
  return (
    <Box textAlign="center">
      {/* <h2>秘密のページ</h2> */}
      <Image
        src={'/secret_720.png'}
        alt="秘密の部屋"
        width={500}
        height={100}
        style={{ margin: '0 auto' }}
      />
      <Guard>
        <Box alignItems={'center'} justifyContent={'center'}>
          <Private />
        </Box>
      </Guard>
    </Box>
  );
};
export default Page;
