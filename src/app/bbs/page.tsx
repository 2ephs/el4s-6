import { firebaseApp } from '@/firebase/firebaseApp';
import { Box } from '@mui/material';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { ChangeEventHandler, useState } from 'react';
import { PostList } from './PostList';
import { PostForm } from './PostForm';

export default async function Home() {
  return (
    <Box>
      <PostForm />
    </Box>
  );
}
