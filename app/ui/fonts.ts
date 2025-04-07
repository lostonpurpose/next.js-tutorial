import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], preload: false, });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
});

// added preload: false which fixed weird issue with server not running