'use client';
import { firebaseApp } from '@/firebase/firebaseApp';
import { Box } from '@mui/material';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { ChangeEventHandler, useState } from 'react';
import { PostList } from './PostList';

export const PostForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target?.files?.[0];
    setSelectedFile(file);
  };

  const firebaseUploadFile = async (file: File): Promise<string> => {
    const ext = file.name.split('.').pop();
    const hashName = Math.random().toString(36).slice(-8);
    const fullPath = '/' + hashName + '.' + ext;

    const storageRef = ref(getStorage(firebaseApp));
    const uploadRef = ref(storageRef, fullPath);

    const result = await uploadBytes(uploadRef, file);
    console.log(result);

    return await getDownloadURL(uploadRef);
  };

  const handleSubmitButtonClick = async () => {
    if (selectedFile == null) return;
    const url = await firebaseUploadFile(selectedFile);
    console.log(url);

    const post: Post = {
      message: 'a',
      imageUrl: url,
    };
  };

  return (
    <Box>
      <input type="text" />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        className="btn btn-primary"
        type="submit"
        onClick={handleSubmitButtonClick}
      >
        投稿
      </button>
    </Box>
  );
};
