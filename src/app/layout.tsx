import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ChildrenProps } from "@/types/components";
import Providers from "@/components/providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nofil | Portfolio",
  description: "Portfolio of 9fil",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["portfolio", "developer", "React", "Next.js", "Nofil", "9fil"],
  authors: [{ name: "Nofil" }],
  creator: "Nofil",
  publisher: "Nofil",
};

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
