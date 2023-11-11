'use client';

import { Box } from '@mui/material';
import { ReactNode, useCallback, useState } from 'react';
import { PasswordInput } from './internal';
import { useForm } from 'react-hook-form';
import { Schema, schema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  children: ReactNode;
};
export const Guard = ({ children }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const [authorized, setAuthorized] = useState(false);
  const onSubmit = useCallback((_: Schema) => {
    setAuthorized(true);
  }, []);
  return (
    <Box>
      {authorized ? (
        <>{children}</>
      ) : (
        <Box flexDirection={'row'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
              {...register('password')}
              error={errors.password?.message}
            />
            <input type="submit" />
          </form>
        </Box>
      )}
    </Box>
  );
};
