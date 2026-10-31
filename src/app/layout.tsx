import type { Metadata } from 'next';
import { Fira_Code, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { ChildrenProps } from '@/types/components';
import Providers from '@/components/providers';
import { rootMetadata } from '@/constants/seo-metadata';
import { jsonLd } from '@/constants/json-ld';

const firaCode = Fira_Code({
  variable: '--font-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <html lang="en" className="no-scrollbar">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${firaCode.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
