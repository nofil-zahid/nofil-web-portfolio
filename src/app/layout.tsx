import type { Metadata } from 'next';
import { Fira_Code, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { ChildrenProps } from '@/types/components';
import Providers from '@/components/providers';

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
  description:
    'Portfolio of Nofil Zahid — Full Stack Developer and solution-oriented engineer, building scalable web and mobile products, MVPs, and SaaS applications. Experienced in crafting intuitive interfaces and implementing robust backend systems to deliver real-world, high-impact solutions.',
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
