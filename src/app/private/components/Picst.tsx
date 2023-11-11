import { Box, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {
  src: string;
  text: string;
};
export const Picst = ({ src, text }: Props) => {
  return (
    <Box flexDirection="row">
      <Image
        src={src}
        alt="秘密の部屋"
        width={500}
        height={500}
        style={{ margin: '0 auto' }}
      />

      <Typography>{text}</Typography>
    </Box>
  );
};
