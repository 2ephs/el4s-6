import './reset.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/lib/mui/ThemeProvider';
import { theme } from '@/components/lib/mui/theme';
import { Nav } from '@/components/features/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Nav>{children}</Nav>
        </ThemeProvider>
      </body>
    </html>
  );
}
