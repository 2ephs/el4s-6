import { Theme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  theme: Theme;
  children: ReactNode;
};
export const ThemeProvider = ({ theme, children }: Props) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
