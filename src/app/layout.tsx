import type { Metadata } from 'next';
import { Fira_Code, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { ChildrenProps } from '@/types/components';
import Providers from '@/components/providers';
import { ABOUT } from '@/constants/profile';

const firaCode = Fira_Code({
  variable: '--font-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nofil | Portfolio',
  description: ABOUT.summary[0],
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Nofil Zahid',
    'full stack developer',
    'backend developer',
    'portfolio',
    'React',
    'Next.js',
    'Node.js',
    'API design',
    'scalable systems',
    'product development',
    '9fil',
  ],
  authors: [{ name: 'Nofil Zahid' }],
  creator: 'Nofil Zahid',
  publisher: 'Nofil Zahid',
};

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${firaCode.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
