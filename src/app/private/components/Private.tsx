'use client';
import { Box } from '@mui/material';
import { Picst } from './Picst';

export const Private = () => {
  return (
    <Box>
      <Picst
        src={'/profile1.webp'}
        text="ネットの掲示板で見つけた不思議なウェブサイトにハマってる。表には出てこない情報や考えがそこにはある。"
      />
      <Picst
        src={'/profile2.webp'}
        text="市内のストリートアートを巡ってきた。街角のアートは、言葉では表せないほどのメッセージを持っている。"
      />
      <Picst
        src={'/profile3.webp'}
        text="深夜に行われた地下音楽イベントが最高だった。メインストリームから離れた生のサウンドは本物の芸術だよ。"
      />
    </Box>
  );
};
