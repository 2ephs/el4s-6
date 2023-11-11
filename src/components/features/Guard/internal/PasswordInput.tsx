import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: string };
export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  function PasswordInput({ error, ...props }: Props, ref) {
    return (
      <>
        <input {...props} ref={ref} />
        {error && <p style={{ color: '#e00000' }}>{error}</p>}
      </>
    );
  },
);
